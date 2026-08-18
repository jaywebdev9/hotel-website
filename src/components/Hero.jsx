import { motion, useInView, useMotionValue, animate, useScroll, useTransform } from 'framer-motion'
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
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 0.28], ['0%', '16%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.28], [1.06, 1.16])
  return (
    <section id="top" className="scroll-mt-24 relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* img + object-cover always fills the viewport edge-to-edge on any screen size —
          this replaces a CSS background-image, which was tiling on tall mobile screens */}
      <div className="absolute inset-0">
        <img
          src="/images/mbeya-landscape.webp"
          alt="Mbeya highlands at dawn"
          style={{ y: imageY, scale: imageScale }}
          className="hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/45 via-forest-950/40 to-forest-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gold-400 font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-5"
        >
          {t('Southern Highlands · Mbeya, Tanzania')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-parchment text-5xl sm:text-6xl md:text-8xl leading-[0.95] max-w-4xl"
        >
          {t('Where the highlands')}
          <br /> {t('breathe slowly.')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-parchment/80 max-w-xl mt-7 text-base md:text-lg leading-relaxed"
        >
          A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya
          escarpment. Wood fires, hand-picked arabica, and views that don't ask for a filter.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <a
            href="#rooms"
            onClick={(e)=>{e.preventDefault();scrollToSection('rooms')}}
            className="bg-clay hover:bg-clay-600 text-parchment px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
          >
            {t('View Rooms & Rates')}
          </a>
          <button
            onClick={onBook}
            className="border border-parchment/40 hover:border-gold-400 hover:text-gold-400 text-parchment px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
          >
            {t('Book Direct — No Commission')}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="relative z-10 border-t border-parchment/15 bg-forest-950/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={t(s.label)}>
              <p className="font-display text-2xl md:text-3xl text-gold-400">
                {s.value}{s.suffix}
              </p>
              <p className="text-parchment/60 text-xs uppercase tracking-widest mt-1">{t(s.label)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
