import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mountain, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../config'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

const links = [
  ['top', 'Home'], ['rooms', 'Rooms'], ['about', 'About'], ['amenities', 'Services'],
  ['experiences', 'Experiences'], ['gallery', 'Gallery'], ['offers', 'Offers'], ['contact', 'Contact'],
]

export default function Navbar({ onBook }) {
  const { language, setLanguage, languages, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id, e) => {
    e?.preventDefault()
    setOpen(false)
    window.setTimeout(() => scrollToSection(id), open ? 180 : 0)
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${scrolled ? 'bg-[#fbf8f1]/95 text-ink shadow-[0_10px_40px_rgba(38,29,20,.10)] backdrop-blur-xl border-b border-[#261d14]/10' : 'bg-gradient-to-b from-[#11100d]/70 to-transparent text-white'}`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-[82px] flex items-center gap-5">
          <a href="#top" onClick={(e) => go('top', e)} className="shrink-0 flex items-center gap-3" aria-label={siteConfig.name}>
            <span className={`w-11 h-11 rounded-full flex items-center justify-center border transition-colors ${scrolled ? 'border-[#b68b35] text-[#b68b35] bg-white/70' : 'border-white/55 text-[#e0b84f] bg-black/15'}`}>
              <Mountain className="w-5 h-5" strokeWidth={1.5} />
            </span>
            <span className="font-display text-xl tracking-tight whitespace-nowrap">{siteConfig.name.split(' ')[0]} <span className="text-[#d3aa42]">{siteConfig.name.split(' ').slice(1).join(' ')}</span></span>
          </a>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-x-6 xl:gap-x-8 text-[11px] uppercase tracking-[.11em]">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={(e) => go(id, e)} className={`${scrolled ? 'text-ink/65 hover:text-[#9a7124]' : 'text-white/78 hover:text-white'} transition-colors whitespace-nowrap`}>{t(label)}</a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2.5">
            <div className={`hidden xl:flex items-center gap-1 rounded-full p-1 border ${scrolled ? 'border-ink/10 bg-white/60' : 'border-white/15 bg-black/10'}`}>
              {languages.map((lang) => (
                <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-2.5 py-1.5 rounded-full text-[10px] font-semibold transition ${language === lang.code ? 'bg-[#c89b34] text-[#21180f]' : scrolled ? 'text-ink/55' : 'text-white/60'}`}>{lang.short}</button>
              ))}
            </div>
            {siteConfig.phone && <a href={`tel:${siteConfig.phone}`} className={`hidden xl:flex w-10 h-10 rounded-full border items-center justify-center transition ${scrolled ? 'border-ink/10 text-ink/65 hover:border-[#c89b34] hover:text-[#9a7124]' : 'border-white/20 text-white/80 hover:border-white/60'}`} aria-label={t('Call lodge')}><Phone className="w-4" /></a>}
            <button onClick={onBook} className="rounded-full bg-[#c99b31] hover:bg-[#ddb75c] text-[#21180f] px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold shadow-[0_10px_30px_rgba(201,155,49,.28)] transition-all hover:-translate-y-0.5 whitespace-nowrap">{t('Book Now')}</button>
            <button onClick={() => setOpen(v => !v)} className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-full transition ${scrolled ? 'text-ink hover:bg-black/5' : 'text-white hover:bg-white/10'}`} aria-label={t('Menu')} aria-expanded={open}>
              {open ? <X className="w-6 h-6" strokeWidth={1.7} /> : <Menu className="w-6 h-6" strokeWidth={1.7} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden absolute left-4 right-4 top-[74px] rounded-[1.5rem] overflow-hidden bg-[#fbf8f1] text-ink shadow-[0_24px_70px_rgba(20,15,10,.25)] border border-ink/10">
              <div className="p-3 grid grid-cols-2 gap-1">
                {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => go(id, e)} className="py-3.5 px-4 rounded-xl text-sm hover:bg-[#f0e5cf] transition-colors">{t(label)}</a>)}
                <div className="col-span-2 mt-2 pt-3 border-t border-ink/10 flex items-center justify-between px-3">
                  <span className="text-[10px] uppercase tracking-[.18em] text-ink/45">{t('Language')}</span>
                  <div className="flex gap-1">{languages.map(lang => <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-3 py-1.5 rounded-full text-xs ${language === lang.code ? 'bg-[#c99b31] text-[#21180f]' : 'border border-ink/10 text-ink/60'}`}>{lang.short}</button>)}</div>
                </div>
                <button onClick={() => { setOpen(false); onBook() }} className="col-span-2 mt-2 rounded-full bg-[#c99b31] text-[#21180f] py-3.5 font-semibold">{t('Book your stay')} <ChevronDown className="inline w-4 ml-1 rotate-[-90deg]"/></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
