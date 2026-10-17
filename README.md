# OVIRO

OVIRO is a social media agency. This repository contains its public marketing site, built with Astro and TypeScript.

## Development commands

- `npm install` — install dependencies.
- `npm run dev` — start the local development server.
- `npm run build` — type-check and create the production build.
- `npm test` — run the project checks.
- `npm run lint` — run static checks.

Application code lives in `src/`, static assets live in `public/`, and generated output is written to ignored `dist/` and `.astro/` directories.

## Development workflow

- Keep `main` stable; changes enter through pull requests only.
- Use `preprod` for review-ready integration work.
- Create a focused branch and pull request for each task.
- Record meaningful implementation choices in `decisions.md` as changes are made.

See `AGENTS.md` for contributor conventions and `decisions.md` for project rationale.
