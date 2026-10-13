import { Comment } from "./Comment.tsx";
import { Text } from "./Text";

export function About() {
  return (
    <section className="about" aria-labelledby="about-h">
      <h2 id="about-h">About this site</h2>
      <Text>
        <p>
          I had some fun putting this site together and there's a lot of small details I've paid attention to that few
          people might notice. Since I spent a lot of attention and time on them, I decided to pick out a few to
          highlight, although there may be more tidbits of information scattered around if you go looking.
        </p>
        <ul>
          <Comment>
            Wait, you can output HTML comments in React? Well, not really. But an Astro middleware can replace a custom
            `astro-comment` HTML tag with a real HTML comment.
          </Comment>
          <li>
            I decided to build this site with TypeScript and React, it's just rendered down into static HTML because I
            like simple, fast sites.
          </li>
          <li>
            Despite being rendered from JSX, I made sure to keep the HTML formatting nice and pretty before deployment.
          </li>
          <li>
            The comfort reading and dark mode buttons don't appear in browsers without JavaScript since they don't work,
            but I made sure to show them before first paint.
          </li>
          <Comment>
            Did you know that AAA accessibility requires lines of text to have no more than 80 characters per line
            (Well, glyphs per line to be exact)? I didn't, not until I built this site and took a look at what I'd need
            to do to make it AAA compliant. Did you also know that because of font widths, this can be a bit annoying to
            test in CI?
          </Comment>
          <li>
            Accessibility is close to my heart, so I aimed for AAA accessibility. While I couldn't achieve the simple
            English language it requests, from a technical aspect it's compliant.
          </li>
          <li>
            Accessibility isn't just about WCAG though. The fonts were picked specifically to help people who have
            trouble telling certain letters apart, the colour palette is friendly for the colour-blind and reading
            comfort mode is designed to help people with dyslexia or visual impairments.
          </li>
          <Comment>
            I mean, I wrote an IDE plugin to make mutation testing easier to run and re-run. Because the only thing
            better than a code-base with a high number of strong, meaningful tests is a test suite that can withstand
            mutation testing while still keeping your tests meaningful. We don't chase meaningless coverage numbers
            here.
          </Comment>
          <li>
            I like automated tests, perhaps a bit too much. So naturally this site goes through a set of end-to-end
            tests before deployment. Obviously I run axe as part of those, but there's also a small set of accessibility
            tests for items that axe can't catch automatically.
          </li>
        </ul>
      </Text>
    </section>
  );
}
