import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

export default function Hero({ onBook }) {
  const { t } = useLanguage()
  return (
    <section id="top" className="relative min-h-[760px] md:min-h-[820px] overflow-hidden bg-[#17130f]">
      <div className="absolute inset-0">
        <img src="/images/hero-highlands.webp" alt="Loleza Ridge Lodge overlooking the Southern Highlands" className="hero-img absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,8,.84)_0%,rgba(14,11,8,.57)_42%,rgba(14,11,8,.16)_78%,rgba(14,11,8,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,11,8,.72)_0%,transparent_38%)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-36 md:pt-44 pb-44 min-h-[760px] md:min-h-[820px] flex items-center">
        <div className="max-w-[720px]">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="text-[#e0b84f] font-mono text-[10px] md:text-xs tracking-[.34em] uppercase mb-5">Southern Highlands · Mbeya, Tanzania</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="font-display text-white text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.2rem] leading-[.9] tracking-[-.035em] drop-shadow-[0_4px_20px_rgba(0,0,0,.55)]">
            {t('Find your perfect stay,')}<br /><span className="italic font-normal">{t('in the highlands.')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }} className="hero-description mt-7 max-w-[600px] text-white text-[15px] md:text-[17px] leading-[1.7] font-medium drop-shadow-[0_3px_12px_rgba(0,0,0,.95)] bg-[#080b09]/55 backdrop-blur-[3px] border border-white/15 rounded-2xl px-4 py-3.5 md:px-5 md:py-4 shadow-[0_14px_40px_rgba(0,0,0,.22)]">
            A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya escarpment. Warm rooms, direct hospitality and quiet mornings above the city.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .28 }} className="flex flex-wrap gap-3 mt-8">
            <a href="#rooms" onClick={(e) => { e.preventDefault(); scrollToSection('rooms') }} className="inline-flex items-center gap-2 rounded-full bg-[#c99b31] hover:bg-[#ddb75c] text-[#21180f] px-6 py-3.5 font-semibold shadow-[0_14px_35px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5">{t('Explore rooms')} <ArrowRight className="w-4"/></a>
            <button onClick={onBook} className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 backdrop-blur-md text-white px-6 py-3.5 font-semibold hover:bg-white/15 transition"><PlayCircle className="w-4"/> {t('Book direct')}</button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 left-6 sm:left-10 lg:left-14 z-20 flex items-center gap-3 text-white/60 text-[10px] uppercase tracking-[.24em]"><span className="w-9 h-px bg-[#d6ad4b]"/> Slow stays · Big views</div>
      <button onClick={() => scrollToSection('booking')} className="absolute bottom-7 right-6 sm:right-10 lg:right-14 z-20 w-12 h-12 rounded-full border border-white/25 bg-black/15 backdrop-blur flex items-center justify-center text-white/85 hover:border-[#d6ad4b] hover:text-[#d6ad4b] transition" aria-label="Scroll to booking">↓</button>
    </section>
  )
}
