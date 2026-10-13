import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { abbreviations } from "../data/abbreviations";
import { Comment } from "./Comment";

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");

// Longest first, so a longer abbreviation wins over one it contains.
const terms = Object.keys(abbreviations).sort((a, b) => b.length - a.length);
const pattern = new RegExp(`(?<!\\w)(?:${terms.map(escapeRegExp).join("|")})(?!\\w)`, "g");

function mark(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    parts.push(text.slice(last, match.index));
    parts.push(
      <abbr key={match.index} title={abbreviations[match[0]]}>
        {match[0]}
      </abbr>,
    );
    last = match.index + match[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

// Marks up every known abbreviation in its children with <abbr>, including
// text inside nested elements. Components aren't rendered here, so text inside
// another component needs its own <Text>.
export function Text({ children }: { children: ReactNode }): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") return mark(child);
    // A comment's text goes into the page source as written, so leave it alone.
    if (isValidElement(child) && child.type === Comment) return child;
    if (isValidElement<{ children?: ReactNode }>(child) && child.props.children !== undefined) {
      return cloneElement(child as ReactElement<{ children?: ReactNode }>, {}, <Text>{child.props.children}</Text>);
    }
    return child;
  });
}
