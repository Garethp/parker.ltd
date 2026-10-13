import { projects, projectsIntro } from "../data/profile";
import { Text } from "./Text";

export function Projects() {
  return (
    <section aria-labelledby="proj-h">
      <h2>
        <span id="proj-h">Side projects</span> <small>open source</small>
      </h2>
      <p className="projects-intro">
        <Text>{projectsIntro}</Text>
      </p>
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.href} className="project">
            <h3>
              <a href={project.href}>{project.name}</a>
            </h3>
            <p>
              <Text>{project.summary}</Text>
            </p>
            <div className="meta">
              {project.meta.map((item) =>
                typeof item === "string" ? (
                  <span key={item}>
                    <Text>{item}</Text>
                  </span>
                ) : (
                  <span key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </span>
                ),
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
