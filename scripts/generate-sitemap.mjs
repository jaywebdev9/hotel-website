import fs from 'node:fs'
import path from 'node:path'

const siteUrl = (process.env.SITE_URL || 'https://YOUR-DOMAIN-HERE').replace(/\/$/, '')
const publicDir = path.resolve('public')
fs.mkdirSync(publicDir, { recursive: true })

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
  </url>
</urlset>
`
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml)
console.log(`Generated sitemap for ${siteUrl}`)
