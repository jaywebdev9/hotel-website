import { useEffect } from 'react'
import { siteConfig } from '../config'
export default function SEO() {
 useEffect(() => {
  const origin=window.location.origin
  const title=siteConfig.seo.title || siteConfig.name
  const description=siteConfig.seo.description || siteConfig.description
  const image=`${origin}${siteConfig.seo.ogImage || '/og-image.png'}`
  document.title=title
  const upsert=(selector,attrs)=>{let el=document.head.querySelector(selector);if(!el){el=document.createElement('meta');document.head.appendChild(el)}Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v))}
  upsert('meta[name="description"]',{name:'description',content:description})
  upsert('meta[name="keywords"]',{name:'keywords',content:siteConfig.seo.keywords||''})
  upsert('meta[name="robots"]',{name:'robots',content:'index,follow,max-image-preview:large'})
  upsert('meta[name="theme-color"]',{name:'theme-color',content:'#142019'})
  upsert('meta[property="og:type"]',{property:'og:type',content:'website'})
  upsert('meta[property="og:title"]',{property:'og:title',content:title})
  upsert('meta[property="og:description"]',{property:'og:description',content:description})
  upsert('meta[property="og:url"]',{property:'og:url',content:origin+'/'})
  upsert('meta[property="og:image"]',{property:'og:image',content:image})
  upsert('meta[property="og:image:width"]',{property:'og:image:width',content:'1200'})
  upsert('meta[property="og:image:height"]',{property:'og:image:height',content:'630'})
  upsert('meta[property="og:image:alt"]',{property:'og:image:alt',content:`${siteConfig.name} - ${siteConfig.location}`})
  upsert('meta[name="twitter:card"]',{name:'twitter:card',content:'summary_large_image'})
  upsert('meta[name="twitter:title"]',{name:'twitter:title',content:title})
  upsert('meta[name="twitter:description"]',{name:'twitter:description',content:description})
  upsert('meta[name="twitter:image"]',{name:'twitter:image',content:image})
  let canonical=document.head.querySelector('link[rel="canonical"]')
  if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}
  canonical.href=origin+'/'
  const sameAs=Object.values(siteConfig.social||{}).filter(Boolean)
  const graph={'@context':'https://schema.org','@type':'LodgingBusiness',name:siteConfig.name,description,url:origin+'/',telephone:siteConfig.phone||undefined,email:siteConfig.email||undefined,address:{'@type':'PostalAddress',streetAddress:siteConfig.address,addressLocality:siteConfig.city,addressRegion:siteConfig.region,addressCountry:siteConfig.countryCode},sameAs}
  const clean=JSON.parse(JSON.stringify(graph))
  let script=document.getElementById('lodging-business-schema')
  if(!script){script=document.createElement('script');script.id='lodging-business-schema';script.type='application/ld+json';document.head.appendChild(script)}
  script.textContent=JSON.stringify(clean)
 },[])
 return null
}
