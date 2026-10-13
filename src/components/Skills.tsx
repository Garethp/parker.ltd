import { skills } from "../data/profile";
import { Text } from "./Text";

export function Skills() {
  return (
    <section aria-labelledby="skills-h">
      <h2 id="skills-h">Skills</h2>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.heading}>
            <h3>{group.heading}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <Text>{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
