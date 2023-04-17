import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import { markdown } from "@astropub/md";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    drafts: true,
    remarkPlugins: [markdown]
  },
  integrations: [mdx(), sitemap(), tailwind(), image(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});