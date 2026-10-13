import { facts, factsTitle, profile } from "../data/profile";
import { Text } from "./Text";

export function Intro() {
  return (
    <header className="intro">
      <div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <ul className="actions">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>
      </div>
      <section aria-labelledby="facts-h">
        <h2 id="facts-h" className="visually-hidden">
          {factsTitle}
        </h2>
        <dl className="facts">
          {facts.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>
                <Text>{fact.detail}</Text>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </header>
  );
}
