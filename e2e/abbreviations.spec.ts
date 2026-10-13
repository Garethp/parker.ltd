import { abbreviations } from "../src/data/abbreviations";
import { glossary } from "../src/data/profile";
import { expectAccessible } from "./accessibility";
import { expect, test } from "./fixtures";

test("abbreviations page is accessible", async ({ page }) => {
  await page.goto(glossary.href);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(glossary.title);
  await expectAccessible(page);
});

test("abbreviations page lists every abbreviation", async ({ page }) => {
  await page.goto(glossary.href);
  const terms = await page.locator("dl.glossary dt").allTextContents();
  expect(terms.toSorted()).toEqual(Object.keys(abbreviations).toSorted());
});

test("home page links to the abbreviations page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Pages" }).getByRole("link", { name: "Abbreviations" }).click();
  await expect(page).toHaveURL(glossary.href);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(glossary.title);
});
