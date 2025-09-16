# Repository Guidelines

## Project Structure & Module Organization
- `personal-security-checklist.yml`: Single source of truth for checklist content (PT‑BR). Edit this file for content changes.
- `web/`: Qwik + Vite site that renders the checklist. Uses Tailwind, ESLint, and Prettier.
- `articles/`: Supplemental long‑form content and links.
- `lib/`: Utility scripts (Python) for content generation/validation.
- `.github/`: Contribution docs, issue/PR templates, and policies.

## Build, Test, and Development Commands
- Dev server: `cd web && yarn install && yarn dev` — runs the site with hot reload.
- Build: `cd web && yarn build` — generates production assets (includes prebuild checklist generation).
- Lint: `cd web && yarn lint` — ESLint over `src/**/*.ts*`.
- Format: `cd web && yarn fmt` or check with `yarn fmt.check` — Prettier formatting.
- Type check: `cd web && yarn build.types` — TypeScript no‑emit.
- Optional (Python tools): `pip install -r lib/requirements.txt` then `python lib/generate.py`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces; TypeScript/TSX preferred.
- Filenames: kebab‑case for modules (e.g., `local-checklist-store.ts`); types in `src/types` use clear, descriptive names.
- Lint/format: Fix ESLint and Prettier issues before committing. Tailwind styles live in `src/styles`.
- Content edits: Do not edit generated files (e.g., `web/src/data/checklists.generated.ts`). Update `personal-security-checklist.yml` instead.

## Testing Guidelines
- No unit tests currently. Use: `yarn fmt.check`, `yarn lint`, `yarn build`, and verify the UI locally (`yarn dev`).
- Prefer small, focused changes and manual QA for affected routes/components.

## Commit & Pull Request Guidelines
- Commits: Imperative, concise subjects (e.g., "fix: correct YAML priority mapping"). Group related changes.
- PRs: Use `.github/PULL_REQUEST_TEMPLATE.md`. Include description, scope, screenshots for UI changes, and link issues.
- Checklist changes must cite reputable sources in the PR description. Follow `.github/CONTRIBUTING.md`.

## Security & Content Notes
- Use HTTPS links, verify sources, and avoid promotional content. Do not include secrets in config or logs.
- Large or breaking changes: open an issue first to discuss approach.
