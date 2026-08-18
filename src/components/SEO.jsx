import { useEffect } from 'react'
import { siteConfig } from '../config'

export default function SEO() {
  useEffect(() => {
    const origin = window.location.origin
    const title = 'Loleza Ridge Lodge | Accommodation in Mbeya, Tanzania'
    const description = 'Discover Loleza Ridge Lodge in Mbeya, Tanzania. Explore accommodation, local experiences, offers and direct WhatsApp booking.'
    document.title = title

    const upsert = (selector, attrs) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        document.head.appendChild(el)
      }
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
    }

    upsert('meta[name="description"]', { name: 'description', content: description })
    upsert('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large' })
    upsert('meta[name="theme-color"]', { name: 'theme-color', content: '#142019' })
    upsert('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsert('meta[property="og:title"]', { property: 'og:title', content: title })
    upsert('meta[property="og:description"]', { property: 'og:description', content: description })
    upsert('meta[property="og:url"]', { property: 'og:url', content: origin })
    upsert('meta[property="og:image"]', { property: 'og:image', content: origin + '/images/og-image.png' })
    upsert('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = origin + '/'

    const sameAs = Object.values(siteConfig.social || {}).filter(Boolean)
    const graph = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: siteConfig.name,
      description,
      url: origin + '/',
      telephone: siteConfig.phone || undefined,
      email: siteConfig.email || undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city || 'Mbeya',
        addressCountry: 'TZ',
        addressRegion: 'Mbeya',
      },
      sameAs,
    }
    const clean = JSON.parse(JSON.stringify(graph))
    let script = document.getElementById('lodging-business-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'lodging-business-schema'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(clean)
  }, [])

  return null
}
