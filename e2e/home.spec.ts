import { expectAccessible } from "./accessibility";
import { expect, test } from "./fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("home page is accessible", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Gareth Parker");
  await expectAccessible(page);
});

test("theme toggle switches theme and remembers it", async ({ page, theme }) => {
  const other = theme === "dark" ? "light" : "dark";
  const toggle = page.getByRole("button", { name: "Dark mode" });
  await expect(toggle).toHaveAttribute("aria-pressed", String(theme === "dark"));

  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", other);
  await expect(toggle).toHaveAttribute("aria-pressed", String(other === "dark"));
  await expectAccessible(page);

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", other);
});

test("reading comfort toggle changes spacing and remembers it", async ({ page, comfort }) => {
  const on = comfort !== "on";
  const toggle = page.getByRole("button", { name: "Reading comfort" });
  await expect(toggle).toHaveAttribute("aria-pressed", String(!on));

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", String(on));
  const html = page.locator("html");
  if (on) await expect(html).toHaveAttribute("data-comfort", "on");
  else await expect(html).not.toHaveAttribute("data-comfort");
  await expectAccessible(page);

  await page.reload();
  await expect(toggle).toHaveAttribute("aria-pressed", String(on));
});

test("toggles used in another tab update this one", async ({ page, theme, comfort }) => {
  const other = await page.context().newPage();
  await other.goto("/");
  await other.getByRole("button", { name: "Dark mode" }).click();
  await other.getByRole("button", { name: "Reading comfort" }).click();

  const html = page.locator("html");
  const newTheme = theme === "dark" ? "light" : "dark";
  const comfortOn = comfort !== "on";
  await expect(html).toHaveAttribute("data-theme", newTheme);
  await expect(page.getByRole("button", { name: "Dark mode" })).toHaveAttribute(
    "aria-pressed",
    String(newTheme === "dark"),
  );
  if (comfortOn) await expect(html).toHaveAttribute("data-comfort", "on");
  else await expect(html).not.toHaveAttribute("data-comfort");
  await expect(page.getByRole("button", { name: "Reading comfort" })).toHaveAttribute(
    "aria-pressed",
    String(comfortOn),
  );
});

test("footer links to every page", async ({ page }) => {
  const nav = page.getByRole("navigation", { name: "Pages" });
  for (const [label, href] of [
    ["Home", "/"],
    ["Abbreviations", "/abbreviations/"],
  ]) {
    await expect(nav.getByRole("link", { name: label })).toHaveAttribute("href", href);
  }
  await expect(nav.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
});

test("a first visit is dark, whatever the system theme", async ({ browser, baseURL }) => {
  for (const colorScheme of ["light", "dark"] as const) {
    const context = await browser.newContext({ colorScheme, baseURL });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.getByRole("button", { name: "Dark mode" })).toHaveAttribute("aria-pressed", "true");
    await context.close();
  }
});

test("without JavaScript the page is dark and hides the toggles", async ({ browser, baseURL }) => {
  for (const colorScheme of ["light", "dark"] as const) {
    const context = await browser.newContext({ colorScheme, baseURL, javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator("html")).not.toHaveAttribute("data-theme");
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(17, 19, 24)");
    await expect(page.getByRole("button")).toHaveCount(0);
    await context.close();
  }
});

test("a long fragment from the CV's QR code is cleaned from the address", async ({ page, baseURL }) => {
  await page.goto("/abbreviations/");
  await page.goto("/#2700699573108604181880610990935991906470867480027666771310095283698033920045545548690326");
  await expect(page).toHaveURL(`${baseURL}/`);

  await page.goto("/abbreviations/");
  await page.goto("/#main");
  await expect(page).toHaveURL(`${baseURL}/#main`);
});
