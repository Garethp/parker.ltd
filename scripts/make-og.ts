// Renders src/components/ShareImage.tsx and saves it as public/og.png. Run with `yarn og`.
// Node can't load TSX itself, so Vite (already used by Astro) loads the component.
// Set CHROMIUM_PATH to use a different Chromium or Chrome build.
import { readFileSync } from "node:fs";
import { chromium } from "@playwright/test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { runnerImport } from "vite";
import type * as ShareImageModule from "../src/components/ShareImage.tsx";

const { module } = await runnerImport<typeof ShareImageModule>("./src/components/ShareImage.tsx", {
  configFile: false,
  logLevel: "warn",
});

// The site's own variable font file, which covers every weight.
const font = `data:font/woff2;base64,${readFileSync("public/fonts/atkinson-hyperlegible-mono.woff2").toString("base64")}`;
const html = `<!doctype html>${renderToStaticMarkup(createElement(module.ShareImage, { font }))}`;

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1000, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("Wrote public/og.png");
