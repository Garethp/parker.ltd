import type { ReactNode } from "react";
import { Comment } from "./Comment.tsx";
import { Text } from "./Text";

function Project({ name, href, meta, children }: { name: string; href: string; meta: ReactNode; children: ReactNode }) {
  return (
    <li className="project">
      <h3>
        <a href={href}>{name}</a>
      </h3>
      <Text>
        <p>{children}</p>
      </Text>
      <div className="meta">
        <Text>{meta}</Text>
      </div>
    </li>
  );
}

export function Projects() {
  return (
    <section aria-labelledby="proj-h">
      <h2>
        <span id="proj-h">Side projects</span> <small>open source</small>
      </h2>
      <Text>
        <p className="projects-intro">
          Outside of work I build tools for my interests and the communities I'm a part of. These are a few of my
          favourite open source projects.
        </p>
      </Text>
      <ul className="projects">
        <Comment>
          I started this because I saw in the game files that their in-game events looked an awful lot like AST, if AST
          was compiled into JSON. It turns out it was! So I built a tool that transformed into JS and from JS back into
          the game's AST to investigate if the events could be modified. They could, and after I thought about how to
          make it possible for other people to install changes, a modding tool was born.
        </Comment>
        <Comment>
          This is my only copy-left project. Originally for replacing sprites in the game I needed to integrate a tool
          that was copy-left and while the team who built it was happy to say that just consuming the DLL they published
          didn't force me to adopt a copy-left license, it felt like it was in the spirit of things to do so anyway.
        </Comment>
        <Project
          name="Mods of Mistria Installer"
          href="https://github.com/Garethp/Mods-of-Mistria-Installer"
          meta={
            <>
              <span>C#</span>
              <span>108 stars</span>
              <span>
                <a href="https://www.nexusmods.com/fieldsofmistria/mods/78">365,000 downloads on Nexus Mods</a>
              </span>
            </>
          }
        >
          I built the GUI installer that Fields of Mistria players install mods with, and the format modders write them
          in. It's translated into five languages, and I ship native builds for Windows, Linux and macOS from a single
          codebase.
        </Project>
        <Comment>
          I can't prove it, since wayback never captured it, but for a brief couple of years Microsoft was linking to my
          project from their official documentation as the recommended way to talk to Exchange from PHP. That remains my
          proudest memory of open source.
        </Comment>
        <Project
          name="php-ews"
          href="https://github.com/garethp/php-ews"
          meta={
            <>
              <span>PHP</span>
              <span>116 stars</span>
              <span>
                <a href="https://packagist.org/packages/garethp/php-ews">714,000 installs on Packagist</a>
              </span>
            </>
          }
        >
          I rewrote a dormant PHP library for talking to Microsoft Exchange, handling the NTLM authentication its SOAP
          services need. Rather than hand-write hundreds of types, I generated typed PHP classes by parsing Exchange's
          WSDL. This is my longest-running open source project. I've maintained it since 2015, and the generator has had
          to evolve with PHP from 5.5 to 8.5, moving from docblock types to union-typed setters and keeping up with
          deprecations like dynamic properties in 8.2.
        </Project>
        <Comment>
          When I go into the slack channel for support about their changing API's, it's still a 50/50 whether I'll have
          to explain to whichever Rider dev response that yes, this is something that can be done and yes, it HAS been
          working for the last several years.
        </Comment>
        <Project
          name="RimWorld Development for Rider"
          href="https://github.com/garethp/Rider-RimworldDevelopment"
          meta={
            <>
              <span>C#</span>
              <span>20 stars</span>
              <span>
                <a href="https://plugins.jetbrains.com/plugin/21583-rimworld-development-environment">
                  1,300 downloads on JetBrains Marketplace
                </a>
              </span>
            </>
          }
        >
          My Rider plugin links RimWorld's XML Defs to the C# classes behind them, with autocomplete, go-to-definition
          and find usages in both directions, then adds debug launching, validation, code generation and plenty more.
          It's my proudest project, because Rider's own developers have been surprised that linking the two languages
          together was possible.
        </Project>
        <Comment>
          This involved a lot of under-the-hood work to update. The original communicated with Anki through UDP (for
          some unknown reason), it included a binary that it executed to read a Japanese dictionary that isn't used
          outside of Japan (if you ever wondered why Firefox just abandoned their XPI platform, consider that it could
          arbitrarily execute binaries on your system without your knowledge) and there was no documentation. Replacing
          all of that was a lot of fun. Including finding the code for the binary that read the dictionary and updating
          it to accept JSON requests.
        </Comment>
        <Project
          name="Rikai Rebuilt"
          href="https://github.com/garethp/RikaiRebuilt"
          meta={
            <>
              <span>TypeScript</span>
              <span>14 stars</span>
              <span>
                <a href="https://chromewebstore.google.com/detail/rikairebuilt/bhcfpccmjdpjejaahbblpnikkejnkfcj">
                  560 users on Chrome
                </a>
              </span>
              <span>
                <a href="https://addons.mozilla.org/en-US/firefox/addon/rikairebuilt/">370 daily users on Firefox</a>
              </span>
            </>
          }
        >
          When Firefox dropped its old add-on format, the Rikaisama Japanese reading add-on stopped working. I rebuilt
          it as a modern WebExtension for Firefox and Chrome, and I still use it to read Japanese.
        </Project>
      </ul>
    </section>
  );
}
