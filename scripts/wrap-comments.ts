// Splits long one-line HTML comments in dist/ over several lines, indented to
// match where they sit. Runs after `yarn format:dist`, because Biome leaves the
// inside of a comment untouched and only then is each comment's indent known.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const width = 120;

function wrap(text: string, room: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && line.length + 1 + word.length > room) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  lines.push(line);
  return lines;
}

for (const file of await readdir("dist", { recursive: true })) {
  if (!file.endsWith(".html")) continue;
  const path = join("dist", file);
  const html = await readFile(path, "utf8");
  // A line holding nothing but comments. Biome puts comments that sit side by
  // side on one line, so each gets a line of its own here.
  const out = html.replace(/^( *)((?:<!-- .*? -->)+)$/gm, (line, indent: string, comments: string) => {
    if (line.length <= width && !comments.includes("--><!--")) return line;
    return [...comments.matchAll(/<!-- (.*?) -->/g)]
      .map(([comment, text]) => {
        if (indent.length + comment.length <= width) return indent + comment;
        const inner = `${indent}  `;
        const body = wrap(text, width - inner.length).map((l) => inner + l);
        return [`${indent}<!--`, ...body, `${indent}-->`].join("\n");
      })
      .join("\n");
  });
  if (out !== html) await writeFile(path, out);
}
