import type { ReactNode } from "react";
import { abbreviations } from "../data/abbreviations";

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
// Longest first, so a longer abbreviation wins over one it contains.
const terms = Object.keys(abbreviations).sort((a, b) => b.length - a.length);
const pattern = new RegExp(`(?<!\\w)(?:${terms.map(escapeRegExp).join("|")})(?!\\w)`, "g");

// Renders a string from profile.ts, marking up every known abbreviation with <abbr>.
export function Text({ children }: { children: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of children.matchAll(pattern)) {
    parts.push(children.slice(last, match.index));
    parts.push(
      <abbr key={match.index} title={abbreviations[match[0]]}>
        {match[0]}
      </abbr>,
    );
    last = match.index + match[0].length;
  }
  parts.push(children.slice(last));
  return parts;
}
