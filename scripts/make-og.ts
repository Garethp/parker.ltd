// Renders the share card that link previews show (public/og.png, 1000x630).
// If you change its size, update og:image:width and og:image:height in src/layouts/Base.astro.
// Run with `yarn og` after changing the name, role or domain in src/data/profile.ts.
// If you change the props, update shareCardAlt in src/data/profile.ts to match.
// Set CHROMIUM_PATH to use a different Chromium or Chrome build.
import { readFileSync } from "node:fs";
import { chromium } from "@playwright/test";
import { profile } from "../src/data/profile.ts";

// The site's own variable font file, which covers every weight.
const mono = readFileSync("public/fonts/atkinson-hyperlegible-mono.woff2").toString("base64");

const html = `<!doctype html>
<style>
  @font-face { font-family: Mono; font-weight: 200 800; src: url(data:font/woff2;base64,${mono}) format("woff2"); }
  html, body { margin: 0; }
  body { width: 1000px; height: 630px; background: #111318; display: grid; align-content: center; padding: 0 96px; box-sizing: border-box; font-family: Mono, monospace; }
  .big { color: #eef0f4; font-size: 84px; font-weight: 500; letter-spacing: -0.01em; }
  .sub { color: #7cc0ff; font-size: 36px; margin-top: 28px; }
  .domain { color: #b9bfcc; font-size: 28px; position: absolute; left: 96px; bottom: 64px; }
</style>
<div class="big">&lt;${profile.name.replaceAll(" ", "")}</div>
<div class="sub">&nbsp;&nbsp;&nbsp;&nbsp;role="${profile.role}"</div>
<div class="sub">&nbsp;&nbsp;&nbsp;&nbsp;since={2010}</div>
<div class="sub">&nbsp;&nbsp;&nbsp;&nbsp;testDriven</div>
<div class="domain">${profile.domain}</div>
<div class="big">/&gt;</div>`;

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1000, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("Wrote public/og.png");
