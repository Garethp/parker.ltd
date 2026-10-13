import { createElement } from "react";

// JSX can't write HTML comments, so this writes an <astro-comment> placeholder
// that src/integrations/html-comments.ts turns into a real <!-- comment -->.
// `hidden` keeps the text off the page if that ever stops working.
export function Comment({ children }: { children: string }) {
  return createElement("astro-comment", { hidden: true }, children);
}
