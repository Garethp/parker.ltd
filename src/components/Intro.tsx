import type { ReactNode } from "react";
import { Comment } from "./Comment.tsx";
import { Now } from "./Now";
import { Text } from "./Text";

function Fact({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div>
      <dt>{term}</dt>
      <dd>
        <Text>{children}</Text>
      </dd>
    </div>
  );
}

export function Intro() {
  return (
    <div className="intro">
      <header>
        <h1>Gareth Parker</h1>
        <p className="role">Principal Engineer</p>
        <Comment>Insert cringey tagline here</Comment>
        <ul className="actions">
          <li>
            <a href="https://github.com/garethp">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gareth-parker-11795823/">LinkedIn</a>
          </li>
          <Comment>
            I cannot overstate how happy I was when I managed to snag parker.ltd as a domain. Having this as an email
            address fills me with so much joy
          </Comment>
          <li>
            <a href="mailto:gareth@parker.ltd">gareth@parker.ltd</a>
          </li>
        </ul>
      </header>
      <section className="glance" aria-labelledby="facts-h">
        <h2 id="facts-h" className="visually-hidden">
          At a glance
        </h2>
        <dl className="facts">
          <Fact term="Experience">16 years, the last 7 in UK public sector</Fact>
          <Fact term="Core stack">TypeScript, AWS CDK, serverless AWS</Fact>
          <Fact term="Known for">
            A shared CDK library used across RoS, and a CI/CD template library eight teams adopted
          </Fact>
          <Fact term="Open source">11 years of projects with over a million installs and downloads</Fact>
        </dl>
      </section>
      <Now />
    </div>
  );
}
