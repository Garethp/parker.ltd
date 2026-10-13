import { work } from "../data/profile";
import { Text } from "./Text";

export function Work() {
  return (
    <section aria-labelledby="work-h">
      <h2>
        <span id="work-h">Work</span> <small>{work.span}</small>
      </h2>
      <ol className="register">
        {work.jobs.map((job) => (
          <li key={`${job.when} ${job.title}`} className="entry">
            <div className="when">{job.when}</div>
            <div>
              <h3>
                {job.title} <span>{job.where}</span>
              </h3>
              {[job.summary].flat().map((paragraph) => (
                <p key={paragraph}>
                  <Text>{paragraph}</Text>
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
