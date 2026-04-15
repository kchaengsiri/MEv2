# KChaengsiri Agent Directives

You are working on **KChaengsiri**, a personal project/portfolio website.

## Tech Stack

- **Package Manager:** Bun
- **Framework:** Next.js + React (App Router)
- **Language:** Strict TypeScript
- **Styling:** Tailwind CSS
- **Infrastructure:** Vercel
- **State:** Zustand
- **Validation:** Zod
- **Linter & Formatter:** Biome.js
- **Testing:** Vitest

## Available Skills

You have access to the Google Stitch MCP, Remotion MCP and the following installed skills. Leverage them for UI/UX design, component generation, and styling:

- `design-md`
- `enhance-prompt`
- `react-components`
- `remotion`
- `shadcn-ui`
- `stitch-design`
- `stitch-loop`
- `taste-design`

## Project State & Documentation

- To understand the current state of the application and recent implementations, you **must** read `docs/CHANGELOG.md`.

## Critical Directives for the Agent

1. **Next.js, React & Data Fetching:**
   - Build frontends as standard Single Page Applications (SPAs) using Next.js and React.

2. **Terminal Commands & Package Installation:**
   - You **must** use `bun` for all package management.
   - When running interactive commands (like initializing shadcn components), use flags to bypass interactive prompts to avoid timeouts (e.g., `-d` and `-y`).

3. **Linting, Formatting & Testing (Biome + Vitest):**
   - We use `biome` as our all-in-one linter and formatter.
   - After implementing a new feature, you **must run Biome** (e.g., `bunx biome check --write ./`).
   - If Biome passes, you **must run the tests** (e.g., `bun test`).
   - If either step fails, you must halt, fix the issues, and re-run both checks until they pass before proceeding to the next step or committing.

4. **Design Implementation (Stitch MCP & Remotion MCP):**
   - You have access to UI generation capabilities via the Stitch MCP, Remotion MCP and its associated skills (`stitch-design`, `react-components`, `remotion`, etc.).
   - Use these skills to autonomously scaffold, iterate, and refine UI components.
   - Ensure all generated designs are implemented using standard **Tailwind CSS** utility classes.

5. **Changelog Maintenance:**
   - When a new feature is implemented successfully (and strictly passes the formatting/testing requirements), you must document the update in `docs/CHANGELOG.md`. Follow this exact formatting structure:

   ```markdown
   # CHANGELOG

   ## YYYY-MM-DD

   - **HH:MM** [<feat|fix|style|docs|refactor|test|chore>] <Brief Description>
   - **HH:MM** [<feat|fix|style|docs|refactor|test|chore>] <Brief Description>

   ---

   ## YYYY-MM-DD

   - **HH:MM** [<feat|fix|style|docs|refactor|test|chore>] <Brief Description>
   ```

7. **Git Workflow (Conventional Commits):**
   - You must adhere to a strict branching strategy to protect the production codebase.
   - **Branching:** Before writing any code, check the current git branch. If you are on the `main` branch, you **must** create and switch to a new branch using the format `git checkout -b <type>/<brief-description>` (e.g., `feat/add-pos-cash-drawer`, `fix/kds-socket-disconnect`). Never write code directly on `main`.
   - **Committing:** After successfully implementing a feature, passing Biome, passing all tests, and updating the changelog, you must commit your changes using the Conventional Commits format. Verify you are not on the `main` branch, then run `git add .` and `git commit -m "<feat|fix|style|docs|refactor|test|chore>: <Brief Description>"`.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
