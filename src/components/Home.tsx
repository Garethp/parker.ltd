import { About } from "./About";
import { Controls } from "./Controls";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Work } from "./Work";

export function Home() {
  return (
    <div className="page">
      <Controls />
      <main id="main" className="stack">
        <Intro />
        <Work />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer current="/" />
    </div>
  );
}
