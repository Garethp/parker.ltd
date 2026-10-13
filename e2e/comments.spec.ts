import { expect, test } from "./fixtures";

// <Comment> writes <astro-comment> placeholders that the build turns into HTML
// comments. Any left over mean src/integrations/html-comments.ts has broken.
for (const path of ["/", "/abbreviations/", "/no-such-page/"]) {
  test(`no comment placeholders are left in ${path}`, async ({ request }) => {
    const html = await (await request.get(path)).text();
    expect(html).not.toMatch(/<astro-comment/i);
    // React's empty text separators are dropped by the same middleware.
    expect(html).not.toContain("<!-- -->");
  });
}
