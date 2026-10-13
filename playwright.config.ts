import { defineConfig } from "@playwright/test";
import type { Options } from "./e2e/fixtures";

// Every test runs in each theme, with reading comfort off and on, at desktop
// width and at 320px (the width of a 1280px window at 400% zoom).
const themes = ["dark", "light"] as const;
const comforts = ["off", "on"] as const;
const widths = [1280, 320];

export default defineConfig<Options>({
  testDir: "e2e",
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? [["list"], ["github"]] : "list",
  use: {
    baseURL: "http://localhost:4321",
    // Uses Playwright's own Chromium (install once with `yarn playwright install chromium`).
    // Set CHROMIUM_PATH to use a different Chromium or Chrome build instead.
    launchOptions: process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
  },
  projects: themes.flatMap((theme) =>
    comforts.flatMap((comfort) =>
      widths.map((width) => ({
        name: `${theme}${comfort === "on" ? " +comfort" : ""} @${width}px`,
        use: { browserName: "chromium" as const, theme, comfort, viewport: { width, height: 900 } },
      })),
    ),
  ),
  // Serves the built site, so run `yarn build` first.
  webServer: {
    command: "yarn preview --port 4321",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
  },
});
