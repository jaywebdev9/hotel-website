import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig, navigation } from '../config'
import { useLanguage } from '../i18n'

export default function Navbar({ onBook }) {
  const { language, setLanguage, languages, t } = useLanguage()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const navigateTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
    window.history.replaceState(null, '', `#${id}`)
  }
  return <>
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid || open ? 'bg-forest-950/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/10' : 'bg-gradient-to-b from-black/30 to-transparent'}`}>
      <div className={`max-w-7xl mx-auto px-5 md:px-10 transition-all duration-500 flex items-center justify-between ${solid ? 'h-[68px]' : 'h-[82px]'}`}>
        <a href="#top" onClick={(e)=>{e.preventDefault();navigateTo('top')}} className="group flex items-center gap-3 text-parchment">
          <span className="w-9 h-9 rounded-full border border-gold-400/60 flex items-center justify-center font-mono text-[10px] text-gold-400">{siteConfig.brand.mark}</span>
          <span className="font-display text-xl md:text-2xl tracking-tight">{siteConfig.brand.primaryName} <span className="text-gold-400">{siteConfig.brand.accentName}</span></span>
        </a>
        <div className="hidden xl:flex items-center gap-5 text-[12px] tracking-wide text-parchment/75">
          {navigation.map(([h,l])=><a key={h} href={`#${h}`} onClick={(e)=>{e.preventDefault();navigateTo(h)}} className="relative py-2 hover:text-gold-400 transition-colors after:absolute after:left-0 after:right-full after:-bottom-0.5 after:h-px after:bg-gold-400 after:transition-all hover:after:right-0">{t(l)}</a>)}
        </div>
        <div className="flex items-center gap-2">
          {siteConfig.phone && <a href={`tel:${siteConfig.phone}`} className="hidden lg:flex w-10 h-10 rounded-full border border-white/15 items-center justify-center text-parchment/80 hover:border-gold-400 hover:text-gold-400 transition" aria-label="Call lodge"><Phone className="w-4"/></a>}
          <div className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-black/10 p-1" aria-label={t('Select language')}>
            {languages.map(lang => (
              <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-2.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wide transition ${language===lang.code ? 'bg-gold text-forest-950' : 'text-parchment/60 hover:text-parchment'}`} aria-pressed={language===lang.code}>
                {lang.short}
              </button>
            ))}
          </div>
          <button onClick={onBook} className="bg-gold hover:bg-gold-400 text-forest-950 rounded-full px-5 md:px-6 py-2.5 text-sm font-semibold shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5">{t('Book Now')}</button>
          <button onClick={()=>setOpen(v=>!v)} className="xl:hidden text-parchment w-10 h-10 flex items-center justify-center" aria-label="Menu">{open?<X/>:<Menu/>}</button>
        </div>
      </div>
      <AnimatePresence>{open&&<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="xl:hidden overflow-hidden bg-forest-950/98"><div className="px-6 pb-5 pt-2 grid grid-cols-2 gap-x-5">{navigation.map(([h,l])=><a key={h} href={`#${h}`} onClick={(e)=>{e.preventDefault();navigateTo(h)}} className="py-3.5 border-b border-parchment/10 text-parchment/85 text-sm">{t(l)}</a>)}<div className="col-span-2 flex items-center gap-2 mt-4"><span className="text-xs text-parchment/50 mr-1">{t('Language')}</span>{languages.map(lang=><button key={lang.code} type="button" onClick={()=>setLanguage(lang.code)} className={`px-3 py-1.5 rounded-full text-xs ${language===lang.code?'bg-gold text-forest-950':'border border-parchment/15 text-parchment/70'}`}>{lang.short}</button>)}</div><button onClick={()=>{setOpen(false);onBook()}} className="col-span-2 mt-5 rounded-full bg-gold text-forest-950 py-3.5 font-semibold">{t('Book your stay')}</button></div></motion.div>}</AnimatePresence>
    </nav>
  </>
}
