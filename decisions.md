# Project Decisions

This file records meaningful code and architecture decisions. Add an entry immediately after each relevant change. Preserve earlier entries so contributors can understand how the project evolved.

## 2026-10-17 — Configure static Netlify deployment

### What changed

Added repository-owned Netlify build settings for the Astro production command and `dist` publish directory. Ignored Netlify's local project state directory.

### Why this approach

Keeping build settings in version control makes local CLI deploys and future Git-connected deploys use the same repeatable static build.

### Why this method over alternatives

A small `netlify.toml` matches the existing static Astro output and avoids relying only on dashboard settings that reviewers cannot inspect in this repository.

## 2026-10-17 — Standardize the ORVIO brand name

### What changed

Changed the public brand name and project package identifier from OVIRO to ORVIO across page copy, metadata, accessibility labels, documentation, and package files.

### Why this approach

ORVIO is the confirmed agency name. One exact spelling prevents inconsistent search metadata, visitor-facing copy, and developer terminology.

### Why this method over alternatives

The existing GitHub repository URL and local checkout folder were not renamed because they are infrastructure identifiers outside the public website and changing them could break remotes or local tooling. They can be migrated separately if requested.

## 2026-10-17 — Add baseline legal and error pages

### What changed

Added a branded 404 page, separate Privacy Policy and Terms of Use routes, footer legal navigation, and permissive crawler rules.

### Why this approach

These pages cover basic navigation failure and launch information needs without introducing integrations. The policies describe the current site accurately: it has no forms, accounts, analytics, advertising cookies, or stored visitor submissions.

### Why this method over alternatives

One shared legal-page component keeps policy presentation consistent. Unavailable legal contact and business details remain explicit prelaunch requirements instead of invented information. A sitemap URL was omitted from `robots.txt` because the production domain is not confirmed.

## 2026-10-17 — Build the marketing site with Astro

### What changed

Added an Astro and TypeScript application with a responsive homepage, shared layout, navigation, footer, custom design system, and static production output.

### Why this approach

ORVIO's first release is a content-led marketing site. Astro renders the experience as fast static HTML while allowing focused interactive components later. Custom CSS keeps the visual identity distinct and avoids shipping a general-purpose component framework.

### Why this method over alternatives

A client-rendered single-page application would add JavaScript without improving the current visitor journey. A CMS and database were deferred because content ownership and editing requirements are not confirmed. The separate pages use only confirmed social-media positioning and mark unavailable contact and portfolio information clearly instead of inventing it.

## 2026-10-17 — Focus ORVIO exclusively on social media

### What changed

Removed website services from the product positioning and separated Home, Services, Work, About, and Contact into dedicated routes. Reworked the home page around a social-first feed concept and a stronger opening statement.

### Why this approach

ORVIO provides social media services only. Dedicated routes give each visitor question enough space while the home page can focus on attention, differentiation, and the project inquiry path.

### Why this method over alternatives

A single long page made the agency offer less precise and mixed navigation with section anchors. Generic agency claims and fabricated work were rejected; unconfirmed portfolio and contact details remain explicit placeholders until approved facts arrive.

## 2026-10-16 — Establish a project decision log

### What changed

Added `decisions.md` as the repository's ongoing record of meaningful implementation decisions.

### Why this approach

A repository-local Markdown log keeps reasoning beside the code, makes changes reviewable, and requires no external service. Each entry records the change, its rationale, and the rejected alternatives at the time the change is made.

### Why this method over alternatives

Markdown was chosen over comments, commit messages alone, or an external tracker. Comments should explain code rather than project history, commit messages can be squashed or unavailable, and external trackers may not be accessible to every contributor. A single chronological file is lightweight and easy to search.

## 2026-10-16 — Use one pull request per task

### What changed

Updated contributor guidance to require a separate branch, commit, push, and pull request for every task. Each pull request must describe additions in detail and include verification evidence.

### Why this approach

Task-scoped pull requests keep reviews focused, make changes easier to trace or revert, and preserve a clear record of what each task delivered.

### Why this method over alternatives

Separate pull requests were chosen over batching unrelated tasks into one branch or pushing directly to the default branch. Batching obscures ownership and complicates rollback; direct pushes bypass review and provide less context.

## 2026-10-16 — Establish `main` and `preprod` branches

### What changed

Connected the project to `goprocker/orivo`, bootstrapped `main` with a minimal README, and created `preprod` for review-ready work. Updated contributor guidance to name both branch roles.

### Why this approach

An initialized `main` branch provides a stable pull request target. `preprod` holds changes for review before they enter the default branch.

### Why this method over alternatives

A persistent `preprod` branch was chosen because the repository owner requested it. Direct work on `main` would bypass review, while creating only short-lived branches would not provide the requested shared pre-production integration branch.

## 2026-10-16 — Protect `main` and align `preprod`

### What changed

Fast-forwarded `preprod` to the merged `main` commit. Added an active GitHub ruleset that blocks deletion and force pushes on `main` and requires changes to enter through pull requests. Expanded the README with the current branch workflow.

### Why this approach

The ruleset enforces the repository's documented review process instead of relying on contributor memory. Keeping `preprod` aligned after a merge prevents later work from starting on an outdated base.

### Why this method over alternatives

A repository ruleset was chosen over informal guidance or legacy branch protection because one policy can enforce pull requests, deletion protection, and non-fast-forward protection together. Required approvals were left at zero while the repository has one active maintainer; mandatory approval would block routine merges without adding an independent reviewer.

## 2026-10-26 — Resolve audit issues #8–#13

### What changed

Pinned TypeScript to 5.9 because `astro check` cannot run on TypeScript 7. Added canonical, Open Graph, Twitter metadata, an OG image, `@astrojs/sitemap`, and a generated `robots.txt` that links the sitemap. Mobile menu now closes on Escape or outside click, and nav links carry `aria-current`. Contact and privacy pages read `PUBLIC_CONTACT_EMAIL` and show a mailto when set. Legal "last updated" date lives in `src/site.ts`. `npm test` now builds and runs smoke tests in `tests/`.

### Why this approach

The site origin comes from Netlify's `URL` variable so canonical URLs are correct per deploy without hardcoding a domain. The contact address is an environment variable because no official address has been supplied and inventing one would be wrong. The repo name `orivo` versus brand `ORVIO` mismatch (#12) is left for the owner, since renaming the repo changes remotes and the Netlify link.
