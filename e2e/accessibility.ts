import AxeBuilder from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import { expect, test } from "./fixtures";

// False flags that we've run across so far
const abbreviationExceptions = new Set(["AA", "GOV", "JUnit", "NUnit", "macOS"]);

// All capitals ("AWS", "ES6"), or short and mixed case with at least two
// capitals ("IaC", "RoS"). Longer mixed-case words are names like "TypeScript".
const looksLikeAbbreviation = (word: string) =>
  /^[A-Z]{2,}[0-9]*$/.test(word) || (word.length <= 5 && (word.match(/[A-Z]/g) ?? []).length >= 2);

export async function expectAccessible(page: Page) {
  await page.evaluate(() => document.fonts.ready);

  await test.step("passes axe", async () => {
    const { violations } = await new AxeBuilder({ page })
      .withTags([
        "wcag2a",
        "wcag2aa",
        "wcag2aaa",
        "wcag21a",
        "wcag21aa",
        "wcag21aaa",
        "wcag22aa",
        "wcag22aaa",
        "best-practice",
      ])
      .analyze();
    expect.soft(violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length} found)`)).toEqual([]);
  });

  await test.step("doesn't scroll sideways", async () => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect.soft(overflow, "pixels of sideways scroll").toBe(0);
  });

  await test.step("targets are at least 44px", async () => {
    const small = await page.evaluate(() => {
      // Links inside a sentence are exempt: ones in a paragraph, or with words
      // of their own beside them.
      const inSentence = (el: Element) =>
        el.closest("p") ||
        [...(el.parentElement?.childNodes ?? [])].some(
          (n) => n.nodeType === Node.TEXT_NODE && /\p{L}{2,}/u.test(n.textContent ?? ""),
        );
      return [...document.querySelectorAll("a, button")]
        .filter((el) => !inSentence(el))
        .filter((el) => {
          const { width, height } = el.getBoundingClientRect();
          return width > 0 && (width < 44 || height < 44);
        })
        .map((el) => el.textContent?.trim());
    });
    expect.soft(small, "targets smaller than 44px").toEqual([]);
  });

  await test.step("lines are at most 80 characters", async () => {
    // WCAG 1.4.8 asks for 80. The allowance covers font rendering: the longest
    // line is 79 characters in Chrome on Windows but 83 in CI's Chromium on Ubuntu.
    const limit = 80 + 5;
    const long = await page.evaluate((limit) => {
      // Counts the characters on each rendered line of every paragraph.
      // Whitespace the browser collapses (such as the formatter's newlines and
      // indentation) has no width, so it isn't counted.
      const found: string[] = [];
      const range = document.createRange();
      for (const p of document.querySelectorAll("p")) {
        const perLine = new Map<number, number>();
        const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
          for (let i = 0; i < node.length; i++) {
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rect = range.getClientRects()[0];
            if (rect && rect.width > 0) perLine.set(Math.round(rect.top), (perLine.get(Math.round(rect.top)) ?? 0) + 1);
          }
        }
        const longest = Math.max(0, ...perLine.values());
        if (longest > limit) found.push(`${longest} characters: "${p.textContent?.trim().slice(0, 40)}…"`);
      }
      return found;
    }, limit);
    expect.soft(long, `paragraphs with lines over ${limit} characters`).toEqual([]);
  });

  await test.step("line spacing is at least 1.5", async () => {
    // Headings are exempt.
    const tight = await page.evaluate(() =>
      [...document.querySelectorAll("p, li, dd, dt, .when, .meta, footer")]
        .filter((el) => {
          const { lineHeight, fontSize } = getComputedStyle(el);
          return lineHeight === "normal" || parseFloat(lineHeight) / parseFloat(fontSize) < 1.5;
        })
        .map((el) => el.textContent?.trim().slice(0, 40)),
    );
    expect.soft(tight, "text with line spacing under 1.5").toEqual([]);
  });

  await test.step("abbreviations are explained", async () => {
    const untitled = await page.locator("abbr:not([title])").allTextContents();
    expect.soft(untitled, "abbreviations without a title").toEqual([]);

    const glossaryHtml = await (await page.request.get("/abbreviations/")).text();
    const glossary = new Set([...glossaryHtml.matchAll(/<dt>(.*?)<\/dt>/g)].map((m) => m[1]));
    const text = await page.locator("body").innerText();
    const words = text.match(/(?<![\w/])[A-Za-z][A-Za-z0-9]*(?:\/[A-Za-z][A-Za-z0-9]*)?(?![\w/])/g) ?? [];
    const found = new Set(words.filter((w) => w.split("/").every(looksLikeAbbreviation)));
    const missing = [...found]
      // A pair like "SNS/SQS" is fine as a single entry or as two.
      .filter((c) => !glossary.has(c) && !c.split("/").every((part) => glossary.has(part)))
      .filter((c) => !abbreviationExceptions.has(c));
    expect.soft(missing, "abbreviations missing from the abbreviations page").toEqual([]);
  });
}
