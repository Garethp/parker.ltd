import { pages, skipLink } from "../src/data/profile";
import { expect, test } from "./fixtures";

for (const path of [...pages.map((p) => p.href), "/no-such-page/"]) {
  test(`skip link is the first stop and jumps to the main content on ${path}`, async ({ page }) => {
    await page.goto(path);
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: skipLink.label });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(new RegExp(`${skipLink.href}$`));
    await expect(page.getByRole("main")).toBeInViewport();

    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => {
        const main = document.querySelector("main");
        const active = document.activeElement;
        return !!main && !!active && !!(main.compareDocumentPosition(active) & Node.DOCUMENT_POSITION_FOLLOWING);
      }),
      "next focus is after the start of <main>",
    ).toBe(true);
  });
}

test("on the home page the skip link leads to the contact links", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "GitHub", exact: true })).toBeFocused();
});
