import { Text } from "./Text";

const pages = [
  { label: "Home", href: "/" },
  { label: "Abbreviations", href: "/abbreviations/" },
];

export function Footer({ current }: { current?: string }) {
  return (
    <footer>
      <nav aria-label="Pages">
        <ul>
          {pages.map((page) => (
            <li key={page.href}>
              <a href={page.href} aria-current={current === page.href ? "page" : undefined}>
                {page.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Text>
        <p>
          MIT © {new Date().getFullYear()} Gareth Parker.{" "}
          <a href="https://github.com/Garethp/parker.ltd">GitHub repo for this site</a>. WCAG 2.2 AA accessible.
        </p>
      </Text>
    </footer>
  );
}
