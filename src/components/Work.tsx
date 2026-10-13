import type { ReactNode } from "react";
import { Comment } from "./Comment.tsx";
import { Text } from "./Text";

function Job({ when, title, where, children }: { when: string; title: string; where: string; children: ReactNode }) {
  return (
    <li className="entry">
      <div className="when">{when}</div>
      <div>
        <h3>
          {title} <span>{where}</span>
        </h3>
        <Text>{children}</Text>
      </div>
    </li>
  );
}

export function Work() {
  return (
    <section aria-labelledby="work-h">
      <h2>
        <span id="work-h">Work</span> <small>16 years</small>
      </h2>
      <ol className="register">
        <Comment>
          Bringing in LocalStack to let us do MR testing on AWS servics taught me more than I ever wanted to know about
          Government procurement processes. I'd hope to never have to go through so much red tape just to get developer
          tooling again but I know better than that.
        </Comment>
        <Job
          when="2023 to now"
          title="Principal Engineer,"
          where="contracted as Developer Coach at the Registers of Scotland"
        >
          <p>
            I turned the patterns from replatforming the Chancery and Judicial Registers into a shared CDK constructs
            library, now used by teams across RoS to develop on AWS.
          </p>
          <p>
            I chose to bring self-hosted GitLab runners, Renovate and LocalStack into the organisation, and steered them
            through government governance and got stakeholders on board. I then built a GitLab template repository as
            the standard starting point for CI/CD, and helped eight teams adopt it along with the runners, Renovate and
            LocalStack.
          </p>
          <p>
            I also write and run workshops and training wherever a team has a gap, such as taking new graduates to the
            point of working on production code or teaching CDK to developers from junior to senior. Right now I'm
            building workshops on accessibility aimed at developers and project managers separately.
          </p>
        </Job>
        <Comment>
          We launched the Register of Inhibitions on a Friday from the pub. You know you're doing something right when
          you can deploy your new system while waiting for a beer.
        </Comment>
        <Job when="2019 to 2023" title="Senior Software Engineer" where="at the Registers of Scotland">
          <p>
            I was part of the first team to move Scottish Registers onto AWS, replatforming the Register of Judgments
            and the Register of Inhibitions from a Delphi application on Windows to serverless AWS. Being first meant
            spiking and setting the patterns that later teams would follow. We settled on using CDK for the
            infrastructure, deployed through a multistage, cross-account pipeline in CodePipeline. The application
            followed serverless designs around Lambda, RDS, Cognito and events, scaling down to zero for the quieter
            registers.
          </p>
          <p>
            I brought in the practices for developing with Node and TypeScript, as the team I joined were Java
            developers new to the Node ecosystem. Given that we were replacing a government system that had lasted 30
            years, we needed to build with long-term project health in mind as well as governmental requirements around
            GDS design, accessibility, security and observability. To achieve this we leaned heavily on DDD and Extreme
            Programming techniques, almost exclusively following TDD, pair programming and mobbing. Both registers cut
            over cleanly and are still in production today.
          </p>
        </Job>
        <Job when="2019" title="Senior TypeScript Developer" where="at Brainnwave">
          <p>
            While at Brainnwave, my responsibilities centred around updating and improving the development process of
            the key application, beginning a migration to TypeScript and mentoring Junior Developers. As part of that, I
            managed to halve the loading time of their front-end application for the main audience, overhauled the
            workflow to reduce inefficiencies by a large amount and develop key new features to help them distinguish
            their application in the market.
          </p>
        </Job>
        <Job when="2018 to 2019" title="Senior JavaScript Developer" where="at Halo Insurance">
          <p>
            During my time at Halo Insurance, I architected and developed a new renewals system built with ReactJS and
            Redux. Additionally, I laid the groundwork for a transition of their main administration app from Backbone
            to ReactJS while training their devs on how to use webpack, ES6 and ReactJS.
          </p>
        </Job>
        <Job when="2018" title="Lead Engineer" where="at Harness Property">
          <p>
            My responsibilities as the Lead Engineer for Harness Property was mostly centred around coordinating the
            development around the a property portal, helping to train our more junior members on ReactJS and
            Microservices in PHP. Using Domain-Driven Design and Microservice Architecture, alongside Server Side
            Rendering, we were able to achieve a much higher load capacity than was originally anticipated.
          </p>
        </Job>
        <Job when="2016 to 2018" title="Backend Team Leader" where="at LifeWorks">
          <p>
            As the Backend Team Leader at LifeWorks, my responsibilities centred around working to push the technologies
            that we were building on forward. Ranging from directing a refactor of a monolithic application to
            microservice-like architecture with Domain-Driven Design to moving some of the more lengthy processes that
            could be done asynchronously into an SNS or SQS queue that would be picked up either by a long-running PHP
            Process or a Node Lambda Function.
          </p>
        </Job>
        <Comment>
          If this didn't give it away, I like to travel a bit. Born in South Africa, raised in Australia, spent some
          time in Malaysia and Singapore, now living in the UK. My Nederlands isn't fluent, but I could get by on it
          when I lived there.
        </Comment>
        <Comment>
          When I go back and order food in Nederland I manage to do it convincingly enough that they respond in
          Nederland. Which makes it a bit embarrassing when I then have to swap back to English.
        </Comment>
        <Job when="2010 to 2016" title="Earlier roles" where="in Sydney, the Netherlands and London">
          <p>
            Software engineer roles at eintellego, Indesign, Fujitsu Australia, Gruden, Serole Technologies (contracted
            to Optus), Hobsons, True and Perkbox. I built software to manage networking devices for eintellego, a
            front-end framework for use across Fujitsu's brands worldwide, replaced a decade-old tool for network
            engineers with a simple web service for Optus, built an analytics tool for teachers to help their students
            at Hobsons and server management tools for True's cloud platform and introduced Hexagonal Architecture and
            DDD at Perkbox.
          </p>
        </Job>
      </ol>
    </section>
  );
}
