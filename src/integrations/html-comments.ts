import { defineMiddleware } from "astro:middleware";

// React escapes the text, so decode it here (&amp; last, so "&amp;lt;" stays
// literal).
const decodeEntities = (text: string) =>
  text
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&amp;", "&");

// "--" isn't allowed inside an HTML comment, and "-->" would end it early, so
// dashes are spaced out. Long comments stay on one line here; the build wraps
// them once the page is formatted (scripts/wrap-comments.ts).
const toComment = (text: string) => {
  const safe = decodeEntities(text)
    .replace(/-(?=-)/g, "- ")
    .trim();
  return `<!-- ${safe} -->`;
};

// Turns each <astro-comment> placeholder written by <Comment> into a propper HTML
// comment. Also drops the empty <!-- --> markers React puts between adjacent
// text nodes so hydration can tell them apart.
export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next();
  if (!response.headers.get("content-type")?.startsWith("text/html")) return response;
  const html = (await response.text())
    .replaceAll("<!-- -->", "")
    .replace(/<astro-comment\b[^>]*>([\s\S]*?)<\/astro-comment>/gi, (_, text: string) => toComment(text));
  return new Response(html, response);
});
