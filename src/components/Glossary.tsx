import { abbreviations } from "../data/abbreviations";
import { glossary } from "../data/profile";
import { Controls } from "./Controls";
import { Footer } from "./Footer";
import { Text } from "./Text";

const entries = Object.entries(abbreviations).sort(([a], [b]) => a.localeCompare(b, "en-GB", { sensitivity: "base" }));

export function Glossary() {
  return (
    <div className="page">
      <Controls />
      <main id="main" className="stack">
        <header>
          <h1>{glossary.title}</h1>
          <p className="pitch">{glossary.intro}</p>
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
      <Footer current={glossary.href} />
    </div>
  );
}
