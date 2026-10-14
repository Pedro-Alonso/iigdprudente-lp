# iigdprudente-lp

Landing page oficial da Igreja Internacional da Graça de Deus — Presidente Prudente/SP, publicada em <https://iigdprudente.com.br>.

Feita com Next.js (App Router, exportação estática), TypeScript estrito e Tailwind CSS. Não tem servidor, formulário, cookies, analytics nem recursos de terceiros.

## Como rodar

Requer Node.js 20.9 ou superior.

```bash
npm ci
npm run dev        # desenvolvimento em http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run format     # Prettier
npm run build      # gera out/ e injeta a CSP
```

Para conferir o resultado final, sirva a pasta `out/` com qualquer servidor estático, por exemplo `npx serve out`.

## Estrutura

```
src/app/          layout, página, 404, robots.txt, sitemap.xml, favicon (icon.svg) e estilos globais
src/components/   uma seção por componente e primitivos em ui/
src/content/      site.ts: única fonte de textos, links, horários e dados
src/lib/          formatação de horários e JSON-LD (schema.org Church)
scripts/          inject-csp.mjs, executado depois do build
public/brand/     logo.png
```

Para alterar textos, horários ou links, edite só `src/content/site.ts`.

## Como trocar a logo

1. Substitua `public/brand/logo.png` mantendo o mesmo nome. Use PNG com fundo transparente e no máximo 1000px de largura.
2. Atualize `logo.width` e `logo.height` em `src/content/site.ts` com as dimensões reais do novo arquivo.

## Deploy

O workflow `.github/workflows/deploy.yml` roda em todo push para `main`, e também pode ser disparado manualmente. Ele instala as dependências (`npm ci --ignore-scripts`), audita as dependências de produção e roda lint, typecheck e build com a CSP. Em seguida, publica `out/` no GitHub Pages. As actions são fixadas por SHA, e o Dependabot propõe as atualizações toda semana.

Configuração manual, feita uma única vez pelo dono do repositório:

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. **Settings → Pages → Custom domain:** `iigdprudente.com.br`. Com deploy por Actions, o domínio fica configurado aqui, e um arquivo `CNAME` seria ignorado.
3. **DNS** (no provedor do domínio):
   - registros `A` do apex para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`;
   - opcionalmente, registros `AAAA` para `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`;
   - `CNAME` de `www` para `pedro-alonso.github.io`.
4. Depois que o DNS propagar, marque **Enforce HTTPS**.
5. Recomendado: verificar o domínio em **Settings da conta → Pages → Verified domains**, para impedir que outro repositório o reivindique.

## Segurança e limitações

O GitHub Pages não permite definir cabeçalhos HTTP. Por isso:

- `frame-ancestors`, `X-Frame-Options`, `Strict-Transport-Security`, `Permissions-Policy` e `X-Content-Type-Options` **não podem ser definidos**. A diretiva `frame-ancestors` também não funciona em CSP por `<meta>`. Na prática, o site pode ser incorporado em iframe por terceiros. Como ele não tem login, formulário nem ações sensíveis, o risco de clickjacking é baixo.
- A política de referrer vai por `<meta name="referrer" content="strict-origin-when-cross-origin">`.
- Todos os links externos abrem em nova aba com `rel="noopener noreferrer"`.

### Decisões de CSP

A CSP é aplicada por `<meta http-equiv="Content-Security-Policy">`, inserida logo após `<meta charset>` em cada HTML de `out/` por `scripts/inject-csp.mjs`:

```
default-src 'self'; script-src 'self' <hashes>; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none';
form-action 'none'
```

- **Hashes, não `'unsafe-inline'`.** O Next.js gera scripts inline (o payload do React Server Components e o JSON-LD). O script calcula o SHA-256 de cada um, página por página, e coloca os hashes em `script-src`. Não foi preciso usar `'unsafe-inline'`.
- **Nonce não é possível**, porque o site é estático e não existe servidor para gerar um valor novo a cada requisição.
- **Estilos:** o build não gera `<style>` inline. Se gerar no futuro, os hashes vão automaticamente para `style-src`. Atributos `style="..."` não podem ser autorizados por hash sem `'unsafe-hashes'`, então o script **interrompe o build** se encontrar algum. Para manter a política estrita, não use `style={...}` nos componentes.
- O script também interrompe o build se não encontrar HTML, se a meta de charset faltar ou se a página já tiver uma CSP.
- **Sem `upgrade-insecure-requests`.** A diretiva quebrava o carregamento dos recursos enquanto o site era servido por HTTP, antes de o HTTPS ser liberado no Pages. Com o "Enforce HTTPS" ativo, o próprio GitHub Pages redireciona HTTP para HTTPS.
- As fontes são baixadas pelo `next/font` durante o build e servidas do próprio domínio.

## Observações

- O ano do rodapé é calculado no build. Um novo deploy atualiza o ano.
- O repositório é público: não versione documentos, PDFs nem dados pessoais.
