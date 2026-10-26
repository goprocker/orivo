import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Netlify exposes the deployed site origin as URL at build time.
const site = process.env.SITE_URL ?? process.env.URL ?? "http://localhost:4321";

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap()],
});
