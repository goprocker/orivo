import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = (name) => readFileSync(`dist/${name}`, "utf8");
const routes = ["index", "services", "work", "about", "contact", "privacy", "terms"];

test("every route has canonical, og and twitter metadata", () => {
  for (const route of routes) {
    const html = page(route === "index" ? "index.html" : `${route}/index.html`);
    assert.match(html, /<link rel="canonical" href="https?:\/\/[^"]+"/, route);
    assert.match(html, /property="og:image" content="https?:\/\/[^"]+og-image\.png"/, route);
    assert.match(html, /name="twitter:card"/, route);
  }
});

test("sitemap and robots are generated and linked", () => {
  assert.ok(existsSync("dist/sitemap-index.xml"));
  assert.match(page("robots.txt"), /^Sitemap: https?:\/\/.+\/sitemap-index\.xml$/m);
});

test("current page is marked in navigation", () => {
  assert.match(page("services/index.html"), /href="\/services"[^>]*aria-current="page"/);
});

test("mobile menu summary keeps its visible label as accessible name", () => {
  assert.doesNotMatch(page("index.html"), /<summary[^>]*aria-label/);
});

test("contact page shows a status when no email is configured", () => {
  assert.match(page("contact/index.html"), /contact details coming soon|mailto:/);
});
