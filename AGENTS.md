# Repository Guidelines

## Project Structure & Module Organization

This repository is currently an empty project scaffold. Keep the root limited to project-wide configuration and documentation. Place application code in `src/`, automated tests in `tests/` (or beside source files when the chosen framework favors co-location), and static files in `public/` or `assets/`. Group code by feature rather than by file type when the application grows. Document any new top-level directory in `README.md`.

## Build, Test, and Development Commands

No package manifest, build system, or test runner is configured yet. When adding a toolchain, expose a small, consistent command set and update this section. For a Node.js project, prefer scripts such as:

- `npm run dev` — start the local development server.
- `npm run build` — create a production build.
- `npm test` — run the complete automated test suite.
- `npm run lint` — check formatting and static-analysis rules.

Do not commit generated output such as `dist/`, coverage reports, or dependency directories.

## Coding Style & Naming Conventions

Follow formatter and linter settings committed with the selected stack. Until then, use 2-space indentation for JSON, YAML, JavaScript, and TypeScript. Use `PascalCase` for components and classes, `camelCase` for functions and variables, and `kebab-case` for directory and general file names. Keep modules focused and prefer descriptive names over abbreviations.

## Testing Guidelines

Add tests with every behavior change. Name tests after the unit under test, for example `user-service.test.ts`, and cover success, failure, and boundary cases. Keep tests deterministic; mock external services and avoid shared mutable state. Run the full suite before opening a pull request.

## Commit & Pull Request Guidelines

Use concise Conventional Commit subjects, such as `feat: add account creation`, with a short body explaining what changed and why. Complete each task on its own branch and publish it as a separate pull request into `main`. Use `preprod` for review-ready integration work. Pull requests must include a detailed summary of additions, verification commands and results, linked issues when applicable, and screenshots for visible UI changes. Keep each pull request focused and call out configuration, migration, or security impact.

## Security & Configuration

Never commit secrets or local environment files. Provide safe placeholders in `.env.example`, validate untrusted input at trust boundaries, and document required environment variables without including real credentials.
