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

test("scroll reveal script ships on every route and respects reduced motion", () => {
  for (const route of routes) {
    const html = page(route === "index" ? "index.html" : `${route}/index.html`);
    assert.match(html, /<script[^>]*>[\s\S]*IntersectionObserver/, route);
    assert.match(html, /prefers-reduced-motion/, route);
    assert.doesNotMatch(html, /<[a-z][^>]*\sdata-scroll/, `${route} must not hide content in static HTML`);
  }
});

test("every route has a skip link targeting main, manifest and organization schema", () => {
  for (const route of routes) {
    const html = page(route === "index" ? "index.html" : `${route}/index.html`);
    assert.match(html, /class="skip-link" href="#main"/, route);
    assert.match(html, /<main id="main"/, route);
    assert.match(html, /rel="manifest" href="\/site\.webmanifest"/, route);
    assert.match(html, /"@type":"Organization"/, route);
    assert.doesNotMatch(html, /name="robots" content="noindex"/, route);
  }
});

test("404 page is excluded from indexing", () => {
  assert.match(page("404.html"), /name="robots" content="noindex"/);
});

const sampleSlugs = ["kiln-and-co", "tidepool-swim", "halfmoon-records", "brightside-bikes"];

test("work page links to every sample case study and each one builds", () => {
  const work = page("work/index.html");
  for (const slug of sampleSlugs) {
    assert.match(work, new RegExp(`href="/work/${slug}"`), slug);
    const study = page(`work/${slug}/index.html`);
    assert.match(study, /<h1/, slug);
    assert.match(study, /class="sample-tag"/, `${slug} must be labelled as a sample`);
  }
});

test("sample content is visibly labelled on work, about and contact", () => {
  for (const route of ["work", "about", "contact"]) {
    assert.match(page(`${route}/index.html`), /class="sample-tag"/, route);
  }
});
