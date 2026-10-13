import { now } from "../data/profile";
import { Text } from "./Text";

export function Now() {
  return (
    <section className="now" aria-labelledby="now-h">
      <h2>
        <span id="now-h">Now</span> <small>{now.asOf}</small>
      </h2>
      <p>
        <Text>{now.text}</Text>
      </p>
    </section>
  );
}
