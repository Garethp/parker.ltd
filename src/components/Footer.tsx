import { footer, pages, profile } from "../data/profile";
import { Text } from "./Text";

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
      <p>
        © {new Date().getFullYear()} {profile.name}.{" "}
        {footer.source && (
          <>
            <a href={footer.source}>GitHub repo for this site</a>.{" "}
          </>
        )}
        <Text>{footer.accessibility}</Text>
      </p>
    </footer>
  );
}
