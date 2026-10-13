import { Text } from "./Text";

export function Now() {
  return (
    <section className="now" aria-labelledby="now-h">
      <h2>
        <span id="now-h">Now</span>
      </h2>
      <Text>
        <p>
          At the Registers of Scotland I architect and implement the technical direction that enables multiple teams to
          easily develop and deploy to AWS without too much divergence or friction. Day to day that means architecting
          and creating the CDK Constructs and Tools that teams use to write their IaC, shepherding the automated tooling
          to keep those projects up-to-date and running training to help those teams utilise the new technologies
          brought in.
        </p>
      </Text>
    </section>
  );
}
