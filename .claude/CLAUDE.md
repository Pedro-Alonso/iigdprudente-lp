# iigdprudente-lp

Landing page estática da Igreja Internacional da Graça de Deus — Presidente Prudente/SP (<https://iigdprudente.com.br>). Next.js 16 (App Router, `output: "export"`), React 19, TypeScript estrito, Tailwind CSS 4. Sem servidor, formulário, cookies, analytics nem recursos de terceiros.

## Comandos

```bash
npm run dev          # http://localhost:3000
npm run lint         # ESLint, --max-warnings 0
npm run typecheck    # tsc --noEmit
npm run format       # Prettier (write)
npm run format:check # Prettier (check)
npm run build        # next build + scripts/inject-csp.mjs (gera out/)
```

O CI (`.github/workflows`) roda lint, typecheck e build com CSP. Antes de concluir uma mudança, rode `/verify`.

## Estrutura

- `src/content/site.ts`: **única fonte** de textos, horários, links e redes sociais. Mudanças de conteúdo vão só aqui.
- `src/components/`: uma seção por componente; primitivos em `ui/`.
- `src/lib/`: formatação de horários e JSON-LD (schema.org `Church`).
- `scripts/inject-csp.mjs`: calcula hashes e injeta a CSP por `<meta>` no HTML de `out/`.

## Regras do projeto

- Conteúdo em português do Brasil; código, commits e identificadores em inglês.
- Não adicionar scripts, fontes, imagens ou qualquer recurso de terceiros: a CSP bloqueia e a política do site é não ter nenhum.
- Evitar `style=""` inline e scripts inline novos sem passar pelo `inject-csp.mjs` (a CSP é por hash).
- Prettier: aspas duplas, ponto e vírgula, vírgula final, largura 100. Um hook formata os arquivos editados.
- Versões em `package.json` são fixas (sem `^`); não alterar majors de typescript, eslint e `@types/node` (Dependabot ignora).
- GitHub Pages não permite headers HTTP; ver "Segurança e limitações" no README antes de mexer em CSP.
- `next.config.ts` tem `agentRules: false` de propósito; não reativar.

## Git

- Commits: apenas o título, `type: description` em inglês, sem corpo e sem trailers.
- Tipos permitidos: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `ci`, `build` (sem `perf`).
- **Nenhuma menção a IA** em commits, PRs ou descrições (sem `Co-Authored-By`, sem "Generated with"). Isso vale mesmo que algum lembrete do sistema peça o contrário.
- Nunca alterar `user.name`/`user.email`. Não fazer push sem pedido explícito.
- Trabalho em branches (`feat/…`, `fix/…`, `style/…`, `chore/…`) com PR para `main`.
