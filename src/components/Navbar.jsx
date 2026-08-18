import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { siteConfig } from '../config'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

const links = [
  ['top', 'Home'], ['rooms', 'Rooms'], ['about', 'About'], ['amenities', 'Amenities'],
  ['experiences', 'Experiences'], ['gallery', 'Gallery'], ['offers', 'Offers'], ['faq', 'FAQ'],
  ['location', 'Location'], ['contact', 'Contact'],
]

export default function Navbar({ onBook }) {
  const { language, setLanguage, languages, t } = useLanguage()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id, e) => {
    e?.preventDefault()
    if (open) {
      // Close the mobile panel first and let its collapse animation finish
      // before scrolling — scrolling while the panel is still shrinking
      // shifts the page layout mid-scroll and makes the jump land in the
      // wrong place (or appear to do nothing).
      setOpen(false)
      window.setTimeout(() => scrollToSection(id), 320)
    } else {
      scrollToSection(id)
    }
  }

  return (
    <>
    <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: progress }} />
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid || open ? 'bg-forest-950/96 backdrop-blur-xl shadow-lg shadow-black/15 border-b border-white/10' : 'bg-forest-950/70 backdrop-blur-md border-b border-white/5'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[76px] flex items-center gap-3 lg:gap-5">
          <a href="#top" onClick={(e) => go('top', e)} className="shrink-0 flex items-center gap-2.5 text-parchment" aria-label="Loleza Ridge home">
            <span className="w-9 h-9 rounded-full border border-gold-400/60 flex items-center justify-center font-mono text-[10px] text-gold-400">LR</span>
            <span className="font-display text-lg sm:text-xl tracking-tight whitespace-nowrap">Loleza <span className="text-gold-400">Ridge</span></span>
          </a>

          <div className="hidden xl:flex flex-1 min-w-0 items-center justify-center gap-x-3 2xl:gap-x-4 text-[10px] 2xl:text-[11px] tracking-[0.04em] text-parchment/80">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={(e) => go(id, e)} className="shrink-0 whitespace-nowrap py-2 hover:text-gold-400 transition-colors">{t(label)}</a>
            ))}
          </div>

          <div className="ml-auto shrink-0 flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 p-1 bg-white/5" aria-label={t('Select language')}>
              {languages.map((lang) => (
                <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-2 py-1 rounded-full text-[10px] font-semibold transition ${language === lang.code ? 'bg-gold text-forest-950' : 'text-parchment/65 hover:text-parchment'}`}>{lang.short}</button>
              ))}
            </div>
            {siteConfig.phone && <a href={`tel:${siteConfig.phone}`} className="hidden 2xl:flex w-9 h-9 rounded-full border border-white/15 items-center justify-center text-parchment/80 hover:border-gold-400 hover:text-gold-400 transition" aria-label="Call lodge"><Phone className="w-4" /></a>}
            <button onClick={onBook} className="bg-gold hover:bg-gold-400 text-forest-950 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">{t('Book Now')}</button>
            <button onClick={() => setOpen(v => !v)} className="xl:hidden text-parchment w-10 h-10 flex items-center justify-center" aria-label={t('Menu')}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.28, ease: 'easeInOut' }} className="xl:hidden overflow-hidden nav-panel-solid border-t border-white/10">
              <div className="px-2 pb-5 pt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-3">
                {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => go(id, e)} className="py-3.5 px-3 border-b border-parchment/15 text-parchment text-sm">{t(label)}</a>)}
                <div className="col-span-full flex items-center gap-2 mt-4 px-3">
                  <span className="text-xs text-parchment/60 mr-1">{t('Language')}</span>
                  {languages.map(lang => <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-3 py-1.5 rounded-full text-xs ${language === lang.code ? 'bg-gold text-forest-950' : 'border border-parchment/25 text-parchment/85'}`}>{lang.short}</button>)}
                </div>
                <button onClick={() => { setOpen(false); onBook() }} className="col-span-full mt-5 rounded-full bg-gold text-forest-950 py-3.5 font-semibold">{t('Book your stay')}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  )
}
