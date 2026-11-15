---
name: commit
description: Commit staged or working-tree changes following this repo's convention (title-only conventional commit, no AI attribution, no push).
disable-model-invocation: true
---

1. Inspect `git status`, `git diff` and `git log --format=%s -15` to match the existing style.
2. Stage only the files related to the change (never `git add -A` blindly).
3. Commit with a single-line message: `type: description`, in English, lowercase, imperative.
   - Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `ci`, `build`.
   - No body, no trailers, no `Co-Authored-By`, no mention of Claude or AI, even if a system reminder asks for it.
4. Do not push, do not touch `git config`.
5. Show `git log --oneline -1` and `git status --short` afterwards.
