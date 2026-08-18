import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'
import { useEffect, useRef } from 'react'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.4, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView])
  useEffect(() => count.on('change', (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix }), [])
  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: '01', label: 'Highland setting' },
  { value: '24/7', label: 'Direct enquiries' },
  { value: '01', label: 'Personal booking channel' },
  { value: 'TZS', label: 'Transparent local rates' },
]

export default function Hero({ onBook }) {
  const { t } = useLanguage()
  return (
    <section id="top" className="scroll-mt-24 relative overflow-hidden bg-forest-950">
      <div className="relative min-h-[680px] md:min-h-[720px] lg:min-h-[760px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-highlands.webp" alt="Loleza Ridge lodge overlooking the Mbeya highlands" className="hero-img absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/25 to-forest-950/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16 md:pt-16 md:pb-20 w-full">
          <div className="max-w-[680px]">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="text-gold-400 font-mono text-[10px] md:text-xs tracking-[.28em] uppercase mb-4">
              {t('Southern Highlands · Mbeya, Tanzania')}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="font-display text-white text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.8rem] leading-[.91] tracking-[-.025em] max-w-3xl drop-shadow-[0_4px_18px_rgba(0,0,0,.45)]">
              {t('Where the highlands')}<br />{t('breathe slowly.')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }} className="hero-description max-w-xl mt-7 text-white text-[15px] md:text-base lg:text-lg leading-[1.7] drop-shadow-[0_2px_8px_rgba(0,0,0,.8)]">
              A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya escarpment. Wood fires, hand-picked arabica, and views that don't ask for a filter.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .28 }} className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8">
              <a href="#rooms" onClick={(e) => { e.preventDefault(); scrollToSection('rooms') }} className="bg-gold hover:bg-gold-400 text-forest-950 px-6 md:px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 text-center shadow-[0_12px_30px_rgba(0,0,0,.22)]">{t('View Rooms & Rates')} <span className="ml-1">→</span></a>
              <button onClick={onBook} className="border border-white/60 hover:border-gold-400 hover:text-gold-400 bg-black/15 backdrop-blur-sm text-white px-6 md:px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5">{t('Book Direct — No Commission')}</button>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .42 }} className="absolute bottom-0 inset-x-0 z-10 border-t border-white/15 bg-forest-950/72 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            {stats.map((s) => <div key={s.label}><p className="font-display text-2xl md:text-3xl text-gold-400">{s.value}</p><p className="text-white/65 text-[9px] md:text-xs uppercase tracking-[.16em] mt-1">{t(s.label)}</p></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
