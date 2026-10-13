import { Controls } from "./Controls";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Now } from "./Now";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Work } from "./Work";

export function Home() {
  return (
    <div className="page">
      <Controls />
      <main id="main" className="stack">
        <Intro />
        <Now />
        <Work />
        <Skills />
        <Projects />
      </main>
      <Footer current="/" />
    </div>
  );
}
