// @ts-check

import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// React only renders on the server, but @astrojs/react still registers a
// browser entrypoint, and Astro builds it into an unused bundle. Registering
// the renderer without it keeps the build free of Astro and React JavaScript.
// A `client:*` directive won't hydrate anything with this in place.
function serverOnlyReact() {
  const integration = react();
  const setup = integration.hooks["astro:config:setup"];
  integration.hooks["astro:config:setup"] = (options) =>
    setup?.({
      ...options,
      addRenderer: (renderer) => options.addRenderer({ ...renderer, clientEntrypoint: undefined }),
    });
  return integration;
}

// JSX can't write HTML comments, so the <Comment> component writes an
// <astro-comment> placeholder, and this middleware turns each one into a real
// comment, in `astro dev` as well as the build.
/** @returns {import("astro").AstroIntegration} */
function htmlComments() {
  return {
    name: "html-comments",
    hooks: {
      "astro:config:setup": ({ addMiddleware }) =>
        addMiddleware({ entrypoint: new URL("./src/integrations/html-comments.ts", import.meta.url), order: "post" }),
    },
  };
}

// Every page is rendered to static HTML at build time. React is only used on
// the server, so no component JavaScript is shipped to the browser.
export default defineConfig({
  site: "https://parker.ltd",
  integrations: [serverOnlyReact(), htmlComments()],
  build: { inlineStylesheets: "always" },
  // Under WSL the dev server misses file change events from the mounted
  // folder, so poll for changes instead.
  vite: { server: { watch: { usePolling: true } } },
});
