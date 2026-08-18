import { useState } from 'react'
import { Menu, X, Phone, Mountain } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [open, setOpen] = useState(false)

  const go = (id, e) => {
    e?.preventDefault()
    setOpen(false)
    window.setTimeout(() => scrollToSection(id), open ? 220 : 0)
  }

  return (
    <nav className="sticky top-0 inset-x-0 z-50 bg-parchment/96 backdrop-blur-xl border-b border-ink/10 shadow-[0_8px_30px_rgba(20,32,25,.08)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[76px] flex items-center gap-3 lg:gap-5">
          <a href="#top" onClick={(e) => go('top', e)} className="shrink-0 flex items-center gap-2.5 text-ink" aria-label="Loleza Ridge home">
            <span className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold bg-parchment">
              <Mountain className="w-5 h-5" strokeWidth={1.7} />
            </span>
            <span className="font-display text-lg sm:text-xl tracking-tight whitespace-nowrap">Loleza <span className="text-gold">Ridge</span></span>
          </a>

          <div className="hidden xl:flex flex-1 min-w-0 items-center justify-center gap-x-3 2xl:gap-x-4 text-[10px] 2xl:text-[11px] tracking-[0.04em] text-ink/70">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={(e) => go(id, e)} className="shrink-0 whitespace-nowrap py-2 hover:text-gold transition-colors">{t(label)}</a>
            ))}
          </div>

          <div className="ml-auto shrink-0 flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1 rounded-full border border-ink/10 p-1 bg-ink/5" aria-label={t('Select language')}>
              {languages.map((lang) => (
                <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-2 py-1 rounded-full text-[10px] font-semibold transition ${language === lang.code ? 'bg-gold text-forest-950' : 'text-ink/60 hover:text-ink'}`}>{lang.short}</button>
              ))}
            </div>
            {siteConfig.phone && <a href={`tel:${siteConfig.phone}`} className="hidden 2xl:flex w-9 h-9 rounded-full border border-ink/10 items-center justify-center text-ink/70 hover:border-gold hover:text-gold transition" aria-label="Call lodge"><Phone className="w-4" /></a>}
            <button onClick={onBook} className="bg-gold hover:bg-gold-400 text-forest-950 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-[0_8px_22px_rgba(201,162,39,.25)] transition-all hover:-translate-y-0.5 whitespace-nowrap">{t('Book Now')}</button>
            <button onClick={() => setOpen(v => !v)} className="xl:hidden text-ink w-11 h-11 flex items-center justify-center rounded-full hover:bg-ink/5" aria-label={t('Menu')} aria-expanded={open}>
              {open ? <X className="w-6 h-6" strokeWidth={1.8} /> : <Menu className="w-6 h-6" strokeWidth={1.8} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="xl:hidden overflow-hidden bg-parchment border-t border-ink/10">
              <div className="px-2 pb-5 pt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-3">
                {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => go(id, e)} className="py-3.5 px-3 border-b border-ink/10 text-ink text-sm hover:text-gold transition-colors">{t(label)}</a>)}
                <div className="col-span-full flex items-center gap-2 mt-4 px-3">
                  <span className="text-xs text-ink/50 mr-1">{t('Language')}</span>
                  {languages.map(lang => <button key={lang.code} type="button" onClick={() => setLanguage(lang.code)} className={`px-3 py-1.5 rounded-full text-xs ${language === lang.code ? 'bg-gold text-forest-950' : 'border border-ink/15 text-ink/75'}`}>{lang.short}</button>)}
                </div>
                <button onClick={() => { setOpen(false); onBook() }} className="col-span-full mt-5 rounded-full bg-gold text-forest-950 py-3.5 font-semibold">{t('Book your stay')}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
