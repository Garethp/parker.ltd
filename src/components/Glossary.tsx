import { abbreviations } from "../data/abbreviations";
import { Comment } from "./Comment.tsx";
import { Controls } from "./Controls";
import { Footer } from "./Footer";
import { Text } from "./Text";

const entries = Object.entries(abbreviations).sort(([a], [b]) => a.localeCompare(b, "en-GB", { sensitivity: "base" }));

export function Glossary() {
  return (
    <div className="page">
      <Controls />
      <Comment>
        Sorry, I don't actually have any interesting commentary for the Glossary, but I appreciate the vote of
        confidence that I might.
      </Comment>
      <main id="main" className="stack">
        <header>
          <h1>Abbreviations</h1>
          <p className="pitch">The abbreviations used on this site, written out in full.</p>
        </header>
        <dl className="glossary">
          {entries.map(([abbr, expansion]) => (
            <div key={abbr} id={`abbr-${abbr.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              <dt>{abbr}</dt>
              <dd>
                <Text>{expansion}</Text>
              </dd>
            </div>
          ))}
        </dl>
      </main>
      <Footer current="/abbreviations/" />
    </div>
  );
}
