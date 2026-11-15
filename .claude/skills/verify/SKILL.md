---
name: verify
description: Run the same checks as CI (format, lint, typecheck, build with CSP) and report results. Use before finishing a change or opening a PR.
---

Run these in order from the repo root, stopping to fix problems as they appear:

1. `npm run format:check`. If it fails, run `npm run format` and re-check.
2. `npm run lint` (zero warnings allowed).
3. `npm run typecheck`.
4. `npm run build` (runs `next build` and then `scripts/inject-csp.mjs`; confirm `out/` is generated and the CSP step succeeds).

Report each step as pass/fail with the relevant error output. Do not commit or push; only report.
