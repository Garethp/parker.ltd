import type { ReactNode } from "react";
import { Comment } from "./Comment.tsx";
import { Text } from "./Text";

function SkillGroup({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h3>{heading}</h3>
      <ul>
        <Text>{children}</Text>
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section aria-labelledby="skills-h">
      <h2 id="skills-h">Skills</h2>
      <div className="skills">
        <SkillGroup heading="Cloud and delivery">
          <li>Serverless on AWS</li>
          <li>Lambda, Cognito and RDS</li>
          <li>AWS CDK</li>
          <Comment>
            With my experience in AWS, and my mention of CodePipeline before you might expect CodePipeline to be here.
            And you'd be right in assuming that, I have a lot of experience with CodePipeline. Enough to know that it
            sucks enough that I managed to move an entire Government organisation off of it.
          </Comment>
          <Comment>
            Yes, yes Amazon. I know your v2 pipelines brought in branch builds. But why did that take so long?! Why was
            your first version of a deployment pipeline tool basically little more than a PoC?
          </Comment>
          <li>GitLab CI, GitHub Actions</li>
          <li>Docker, LocalStack</li>
          <li>Renovate</li>
        </SkillGroup>
        <SkillGroup heading="Testing">
          <li>Test-driven development</li>
          <li>Mutation testing</li>
          <li>StrykerJS plugin author</li>
          <Comment>Take a look at this very site as an example.</Comment>
          <li>Axe accessibility testing</li>
          <li>CDK and LocalStack integration tests</li>
          <li>Jest, NUnit, JUnit</li>
        </SkillGroup>
        <SkillGroup heading="Practice">
          <li>Domain-Driven Design</li>
          <li>Hexagonal architecture</li>
          <Comment>
            Event sourced systems are my favourite architecture pattern that I would recommend to almost no-one. They're
            so amazing, cool and fun but rarely worth it. If we speak, feel free to ask me about them and I'll happily
            delve into a half hour discussion about what makes them so amazing!
          </Comment>
          <li>Event sourcing and CQRS</li>
          <li>Event-driven design</li>
          <li>Pair and mob programming</li>
          <li>Mentoring and teaching</li>
          <li>Accessible, responsive web</li>
        </SkillGroup>
        <SkillGroup heading="Languages">
          <li>JavaScript, TypeScript</li>
          <li>Node</li>
          <li>C#, Kotlin, Java</li>
          <li>Python, PHP</li>
          <li>Postgres</li>
        </SkillGroup>
      </div>
    </section>
  );
}
