import fs from 'node:fs'
import path from 'node:path'

const siteUrl = (process.env.SITE_URL || process.env.CF_PAGES_URL || '').replace(/\/$/, '')
const publicDir = path.resolve('public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')
fs.mkdirSync(publicDir, { recursive: true })

// Cloudflare can build without a custom domain configured yet. In that case,
// keep the checked-in sitemap instead of writing an invalid placeholder URL.
if (!siteUrl) {
  if (fs.existsSync(sitemapPath)) {
    console.log('SITE_URL/CF_PAGES_URL not set; keeping existing public/sitemap.xml')
  } else {
    console.log('SITE_URL/CF_PAGES_URL not set; skipping sitemap generation')
  }
  process.exit(0)
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n  </url>\n</urlset>\n`
fs.writeFileSync(sitemapPath, xml)
console.log(`Generated sitemap for ${siteUrl}`)
