# Cloudflare Pages deployment

This project is intentionally packaged with `package.json` at the project root so Cloudflare Pages can detect it without setting a nested root directory.

## Cloudflare Pages → Git deployment

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js: `20`

The project also contains `.nvmrc` and a Node engine constraint for consistent builds.

## Optional environment variable

Set `SITE_URL` to the final public URL if you want the build to generate a sitemap for that URL. Cloudflare's `CF_PAGES_URL` is used automatically when available.

## Direct upload

Run:

```bash
npm install
npm run build
```

Then upload the generated `dist` directory to Cloudflare Pages. Do not upload the source ZIP as a Pages Direct Upload deployment.
