# Repository Guidelines

## Project Structure & Module Organization
- Root: `personal-security-checklist.yml` is the single source of truth for content. Do not edit generated Markdown directly.
- Automation: `.github/workflows/*` generates `CHECKLIST.md` and updates `README.md` between the checklist markers.
- Scripts: `lib/` contains Python utilities (e.g., `lib/generate.py`) used to build the Markdown.
- Web App: `web/` is a Qwik + Vite site (Tailwind, ESLint, Prettier) that renders the checklist.

## Build, Test, and Development Commands
- Generate checklist: `python lib/generate.py` — reads YAML and inserts fresh content into `README.md`.
- Web (from `web/`):
  - `yarn dev` — run local dev server (SSR mode).
  - `yarn build` — production build (includes Qwik build pipeline).
  - `yarn preview` — serve the built site.
  - `yarn lint` / `yarn fmt` — lint and format the web codebase.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for YAML, TS/TSX, and JSON.
- TypeScript/TSX: follow ESLint + Prettier config in `web/`.
- File names: components `PascalCase.tsx`; utilities and non-components `kebab-case.ts`.
- YAML content: keep `slug` in `kebab-case`; `priority` must be one of `essential`, `optional`, `advanced`; write concise, neutral descriptions.

## Testing Guidelines
- No formal unit tests. Before opening a PR:
  - Run `python lib/generate.py` (root) and ensure no errors.
  - Run `yarn lint`, `yarn build.types`, and `yarn build` (in `web/`) to type-check and verify a clean build.
  - Manually spot-check links and basic rendering via `yarn preview`.

## Commit & Pull Request Guidelines
- Commits: use clear, imperative messages (e.g., `content: add MFA tips`, `web: fix lint errors`).
- Content changes: only modify `personal-security-checklist.yml` and include credible references in the PR description.
- PRs: follow `.github/PULL_REQUEST_TEMPLATE.md` — state category, overview, linked issues, supporting material, and any affiliations; include screenshots for UI changes; confirm a self-review.

## Security & Configuration Tips
- Do not commit secrets or tracking code. Keep links reputable and non-promotional; disclose affiliations.
- Large or structural content changes: open an issue first to discuss approach.
