---
name: update-content
description: Change texts, service times, links or social handles on the landing page. Use for any content-only edit.
---

All site content lives in `src/content/site.ts`; edit only that file for content changes.

- Search the whole repo for the old value first (`Grep`), since handles, URLs and names can also appear in `src/lib/structured-data.ts` (JSON-LD) or `README.md`.
- Keep types in `site.ts` intact (`ServiceDay`, `SocialProfile`, etc.); service times are strings consumed by `src/lib/format-service-time.ts`, so keep the existing format.
- Text is in Brazilian Portuguese.
- Logo swap: replace `public/brand/logo.png` and update `logo.width` / `logo.height` in `site.ts`.
- Finish with `/verify`.
