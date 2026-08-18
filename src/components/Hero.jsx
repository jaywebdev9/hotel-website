import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useLanguage } from '../i18n'
import { useEffect, useRef } from 'react'
import { hero, heroStats, siteConfig } from '../config'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  useEffect(() => {
    if (inView && typeof to === 'number') {
      const controls = animate(count, to, { duration: 1.4, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, to])
  useEffect(() => count.on('change', v => { if (ref.current) ref.current.textContent = Math.round(v) + suffix }), [count, suffix])
  return <span ref={ref}>{typeof to === 'number' ? `0${suffix}` : to}</span>
}

export default function Hero({ onBook }) {
  const { t } = useLanguage()
  return <section id="top" className="scroll-mt-24 relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={hero.image} alt={hero.imageAlt} className="hero-img absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/45 via-forest-950/40 to-forest-950/90" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}} className="text-gold-400 font-mono text-xs md:text-sm tracking-[.35em] uppercase mb-5">{t(hero.eyebrow)}</motion.p>
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}} className="font-display text-parchment text-5xl sm:text-6xl md:text-8xl leading-[.95] max-w-4xl">{t(hero.title)}<br/> {t(hero.titleAccent)}</motion.h1>
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.35}} className="text-parchment/80 max-w-xl mt-7 text-base md:text-lg leading-relaxed">{t(hero.description)}</motion.p>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.5}} className="flex flex-wrap gap-4 mt-9">
        <a href="#rooms" className="bg-clay hover:bg-clay-600 text-parchment px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">{t(hero.primaryCta)}</a>
        <button onClick={onBook} className="border border-parchment/40 hover:border-gold-400 hover:text-gold-400 text-parchment px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">{t(hero.secondaryCta)}</button>
      </motion.div>
    </div>
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.65}} className="relative z-10 border-t border-parchment/15 bg-forest-950/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {heroStats.map(s=><div key={s.label}><p className="font-display text-2xl md:text-3xl text-gold-400">{s.value}</p><p className="text-parchment/60 text-xs uppercase tracking-widest mt-1">{t(s.label)}</p></div>)}
      </div>
    </motion.div>
  </section>
}
