import { test as base, expect } from "@playwright/test";

export interface Options {
  theme: "dark" | "light";
  comfort: "on" | "off";
}

// Each project sets the visitor's saved theme and reading comfort choice. Any
// script error on a page fails the test.
export const test = base.extend<Options>({
  theme: ["dark", { option: true }],
  comfort: ["off", { option: true }],
  page: async ({ page, theme, comfort }, use) => {
    await page.addInitScript(
      ([t, c]) => {
        if (localStorage.getItem("theme") === null) localStorage.setItem("theme", t);
        if (localStorage.getItem("comfort") === null) localStorage.setItem("comfort", c);
      },
      [theme, comfort],
    );
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await use(page);
    expect(errors, "script errors").toEqual([]);
  },
});

export { expect };
