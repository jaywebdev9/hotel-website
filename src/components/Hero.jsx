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

  useEffect(() => {
    return count.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: '01', suffix: '', label: 'Highland setting' },
  { value: '24/7', suffix: '', label: 'Direct enquiries' },
  { value: '01', suffix: '', label: 'Personal booking channel' },
  { value: 'TZS', suffix: '', label: 'Transparent local rates' },
]

export default function Hero({ onBook }) {
  const { t } = useLanguage()
  return (
    <section id="top" className="scroll-mt-24 relative min-h-[700px] lg:min-h-[760px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-highlands.webp"
          alt="Loleza Ridge lodge overlooking the Mbeya highlands"
          className="hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/92 via-forest-950/62 to-forest-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/88 via-transparent to-forest-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-10 md:pb-14 w-full">
        <div className="max-w-2xl lg:max-w-[620px]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-gold-400 font-mono text-[10px] md:text-xs tracking-[0.32em] uppercase mb-4"
          >
            {t('Southern Highlands · Mbeya, Tanzania')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="font-display text-parchment text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] leading-[0.94] tracking-[-0.025em] max-w-3xl"
          >
            {t('Where the highlands')}
            <br /> {t('breathe slowly.')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="text-parchment/82 max-w-xl mt-6 text-sm md:text-base lg:text-lg leading-relaxed"
          >
            A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya
            escarpment. Wood fires, hand-picked arabica, and views that don't ask for a filter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex flex-wrap gap-3 md:gap-4 mt-7"
          >
            <a
              href="#rooms"
              onClick={(e) => { e.preventDefault(); scrollToSection('rooms') }}
              className="bg-clay hover:bg-clay-600 text-parchment px-6 md:px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              {t('View Rooms & Rates')}
            </a>
            <button
              onClick={onBook}
              className="border border-parchment/40 hover:border-gold-400 hover:text-gold-400 text-parchment px-6 md:px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              {t('Book Direct — No Commission')}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 border-t border-parchment/15 bg-forest-950/72 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
          {stats.map((s) => (
            <div key={t(s.label)}>
              <p className="font-display text-2xl md:text-3xl text-gold-400">{s.value}{s.suffix}</p>
              <p className="text-parchment/60 text-[10px] md:text-xs uppercase tracking-widest mt-1">{t(s.label)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
