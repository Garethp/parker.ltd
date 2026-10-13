// Everything the site says lives here, so wording changes never need a component edit.

export interface Link {
  label: string;
  href: string;
}

export interface Fact {
  term: string;
  detail: string;
}

export interface Job {
  when: string;
  title: string;
  where: string;
  /** A list when the entry needs more than one paragraph. */
  summary: string | string[];
}

export interface SkillGroup {
  heading: string;
  items: string[];
}

export interface Project {
  name: string;
  href: string;
  summary: string;
  meta: Array<string | Link>;
}

export const profile = {
  name: "Gareth Parker",
  role: "Principal Engineer",
  // Describes public/og.png for screen readers. Keep it in step with the props in scripts/make-og.ts.
  shareCardAlt: "Gareth Parker, Principal Engineer, since 2010, test driven, written as a JSX element. parker.ltd",
  email: "gareth@parker.ltd",
  domain: "parker.ltd",
  description: "TypeScript, AWS and developer coaching.",
  links: [
    { label: "GitHub", href: "https://github.com/garethp" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gareth-parker-11795823/" },
  ] satisfies Link[],
};

export const factsTitle = "At a glance";

export const facts: Fact[] = [
  { term: "Experience", detail: "16 years, the last 7 in UK public sector" },
  { term: "Core stack", detail: "TypeScript, AWS CDK, serverless AWS" },
  { term: "Known for", detail: "A shared CDK library used across RoS, and a CI/CD template eight teams adopted" },
  { term: "Open source", detail: "11 years of projects with over a million installs and downloads" },
];

export const now = {
  asOf: "October 2026",
  text:
    "At the Registers of Scotland I architect and implement the technical direction that enables multiple teams to " +
    "easily develop and deploy to AWS without too much divergence or friction. Day to day that means architecting and " +
    "creating the CDK Constructs and Tools that teams use to write their IaC, shepherding the automated tooling to keep " +
    "those projects up-to-date and running training to help those teams utilise the new technologies brought in.",
};

export const work = {
  span: "16 years",
  jobs: [
    {
      when: "2023 to now",
      title: "Principal Engineer,",
      where: "contracted as Developer Coach at the Registers of Scotland",
      summary: [
        "I turned the patterns from replatforming the Chancery and Judicial Registers into a shared CDK constructs library, now used by teams across RoS to develop on AWS.",
        "I chose to bring self-hosted GitLab runners, Renovate and LocalStack into the organisation, and steered them through government governance and got stakeholders on board. I then built a GitLab template repository as the standard starting point for CI/CD, and helped eight teams adopt it along with the runners, Renovate and LocalStack.",
        "I also write and run workshops and training wherever a team has a gap, such as taking new graduates to the point of working on production code or teaching CDK to developers from junior to senior. Right now I'm building workshops on accessibility aimed at developers and project managers separately.",
      ],
    },
    {
      when: "2019 to 2023",
      title: "Senior Software Engineer",
      where: "at the Registers of Scotland",
      summary: [
        "I was part of the first team to move Scottish Registers onto AWS, replatforming the Register of Judgments and the Register of Inhibitions from a Delphi application on Windows to serverless AWS. Being first meant spiking and setting the patterns that later teams would follow. We settled on using CDK for the infrastructure, deployed through a multistage, cross-account pipeline in CodePipeline. The application followed serverless designs around Lambda, RDS, Cognito and events, scaling down to zero for the quieter registers.",
        "I brought in the practices for developing with Node and TypeScript, as the team I joined were Java developers new to the Node ecosystem. Given that we were replacing a government system that had lasted 30 years, we needed to build with long-term project health in mind as well as governmental requirements around GDS design, accessibility, security and observability. To achieve this we leaned heavily on DDD and Extreme Programming techniques, almost exclusively following TDD, pair programming and mobbing. Both registers cut over cleanly and are still in production today.",
      ],
    },
    {
      when: "2019",
      title: "Senior TypeScript Developer",
      where: "at Brainnwave",
      summary:
        "While at Brainnwave, my responsibilities centred around updating and improving the development process of the key application, beginning a migration to TypeScript and mentoring Junior Developers. As part of that, I managed to halve the loading time of their front-end application for the main audience, overhauled the workflow to reduce inefficiencies by a large amount and develop key new features to help them distinguish their application in the market.",
    },
    {
      when: "2018 to 2019",
      title: "Senior JavaScript Developer",
      where: "at Halo Insurance",
      summary:
        "During my time at Halo Insurance, I architected and developed a new renewals system built with ReactJS and Redux. Additionally, I laid the groundwork for a transition of their main administration app from Backbone to ReactJS while training their devs on how to use webpack, ES6 and ReactJS.",
    },
    {
      when: "2018",
      title: "Lead Engineer",
      where: "at Harness Property",
      summary:
        "My responsibilities as the Lead Engineer for Harness Property was mostly centred around coordinating the development around the a property portal, helping to train our more junior members on ReactJS and Microservices in PHP. Using Domain-Driven Design and Microservice Architecture, alongside Server Side Rendering, we were able to achieve a much higher load capacity than was originally anticipated.",
    },
    {
      when: "2016 to 2018",
      title: "Backend Team Leader",
      where: "at LifeWorks",
      summary:
        "As the Backend Team Leader at LifeWorks, my responsibilities centred around working to push the technologies that we were building on forward. Ranging from directing a refactor of a monolithic application to microservice-like architecture with Domain-Driven Design to moving some of the more lengthy processes that could be done asynchronously into an SNS or SQS queue that would be picked up either by a long-running PHP Process or a Node Lambda Function.",
    },
    {
      when: "2010 to 2016",
      title: "Earlier roles",
      where: "in Sydney, the Netherlands and London",
      summary:
        "Software engineer roles at eintellego, Indesign, Fujitsu Australia, Gruden, Serole Technologies (contracted to Optus), Hobsons, True and Perkbox. I built software to manage networking devices for eintellego, a front-end framework for use across Fujitsu's brands worldwide, replaced a decade-old tool for network engineers with a simple web service for Optus, built an analytics tool for teachers to help their students at Hobsons and server management tools for True's cloud platform and introduced Hexagonal Architecture and DDD at Perkbox.",
    },
  ] satisfies Job[],
};

export const skills: SkillGroup[] = [
  {
    heading: "Cloud and delivery",
    items: [
      "Serverless on AWS",
      "Lambda, Cognito and RDS",
      "AWS CDK",
      "GitLab CI, GitHub Actions",
      "Docker, LocalStack",
      "Renovate",
    ],
  },
  {
    heading: "Testing",
    items: [
      "Test-driven development",
      "Mutation testing",
      "StrykerJS plugin author",
      "Axe accessibility testing",
      "CDK and LocalStack integration tests",
      "Jest, NUnit, JUnit",
    ],
  },
  {
    heading: "Practice",
    items: [
      "Domain-Driven Design",
      "Hexagonal architecture",
      "Event sourcing and CQRS",
      "Event-driven design",
      "Pair and mob programming",
      "Mentoring and teaching",
      "Accessible, responsive web",
    ],
  },
  {
    heading: "Languages",
    items: ["JavaScript, TypeScript", "Node", "C#, Kotlin, Java", "Python, PHP", "Postgres"],
  },
];

export const projectsIntro =
  "Outside of work I build tools for my interests and the communities I'm a part of. These are a few of my favourite open source projects.";

export const projects: Project[] = [
  {
    name: "Mods of Mistria Installer",
    href: "https://github.com/Garethp/Mods-of-Mistria-Installer",
    summary:
      "I built the GUI installer that Fields of Mistria players install mods with, and the format modders write them in. It's translated into five languages, and I ship native builds for Windows, Linux and macOS from a single codebase.",
    meta: [
      "C#",
      "108 stars",
      { label: "365,000 downloads on Nexus Mods", href: "https://www.nexusmods.com/fieldsofmistria/mods/78" },
    ],
  },
  {
    name: "php-ews",
    href: "https://github.com/garethp/php-ews",
    summary:
      "I rewrote a dormant PHP library for talking to Microsoft Exchange, handling the NTLM authentication its SOAP services need. Rather than hand-write hundreds of types, I generated typed PHP classes by parsing Exchange's WSDL. This is my longest-running open source project. I've maintained it since 2015, and the generator has had to evolve with PHP from 5.5 to 8.5, moving from docblock types to union-typed setters and keeping up with deprecations like dynamic properties in 8.2.",
    meta: [
      "PHP",
      "116 stars",
      { label: "714,000 installs on Packagist", href: "https://packagist.org/packages/garethp/php-ews" },
    ],
  },
  {
    name: "RimWorld Development for Rider",
    href: "https://github.com/garethp/Rider-RimworldDevelopment",
    summary:
      "My Rider plugin links RimWorld's XML Defs to the C# classes behind them, with autocomplete, go-to-definition and find usages in both directions, then adds debug launching, validation, code generation and plenty more. It's my proudest project, because Rider's own developers have been surprised that linking the two languages together was possible.",
    meta: [
      "C#",
      "20 stars",
      {
        label: "1,300 downloads on JetBrains Marketplace",
        href: "https://plugins.jetbrains.com/plugin/21583-rimworld-development-environment",
      },
    ],
  },
  {
    name: "Rikai Rebuilt",
    href: "https://github.com/garethp/RikaiRebuilt",
    summary:
      "When Firefox dropped its old add-on format, the Rikaisama Japanese reading add-on stopped working. I rebuilt it as a modern WebExtension for Firefox and Chrome, and I still use it to read Japanese.",
    meta: [
      "TypeScript",
      "14 stars",
      {
        label: "560 users on Chrome",
        href: "https://chromewebstore.google.com/detail/rikairebuilt/bhcfpccmjdpjejaahbblpnikkejnkfcj",
      },
      { label: "370 daily users on Firefox", href: "https://addons.mozilla.org/en-US/firefox/addon/rikairebuilt/" },
    ],
  },
];

export const footer = {
  // This site's repository (not the GitHub profile in links). Set it once the repo
  // is public; until then the footer leaves the link out.
  source: "https://github.com/Garethp/parker.ltd",
  accessibility: "WCAG 2.2 AA accessible.",
};

// The first stop on every page. Each page's <main> carries the matching id.
export const skipLink: Link = { label: "Skip to main content", href: "#main" };

// The site's pages, listed in the footer of every page.
export const pages: Link[] = [
  { label: "Home", href: "/" },
  { label: "Abbreviations", href: "/abbreviations/" },
];

export const glossary = {
  title: "Abbreviations",
  href: "/abbreviations/",
  description: "The abbreviations used on parker.ltd, written out in full.",
  intro: "The abbreviations used on this site, written out in full.",
};
