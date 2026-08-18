import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

export default function Hero({ onBook }) {
  const { t } = useLanguage()
  const slides = [
    { src: '/images/hero-highlands.webp', alt: 'Loleza Ridge Lodge overlooking the Southern Highlands' },
    { src: '/images/lodge-view.webp', alt: 'Loleza Ridge Lodge terrace and highland view' },
    { src: '/images/gallery-sunset.webp', alt: 'Sunset over the Southern Highlands near Loleza Ridge' },
  ]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section id="top" className="relative min-h-[760px] md:min-h-[820px] overflow-hidden bg-[#17130f]">
      <div className="absolute inset-0" aria-label="Loleza Ridge Lodge photography slideshow">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`hero-img absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#080906]/75 via-[#080906]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-36 md:pt-44 pb-44 min-h-[760px] md:min-h-[820px] flex items-center">
        <div className="max-w-[720px]">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="text-[#e0b84f] font-mono text-[10px] md:text-xs tracking-[.34em] uppercase mb-5">Southern Highlands · Mbeya, Tanzania</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="font-display text-white text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.2rem] leading-[.9] tracking-[-.035em] drop-shadow-[0_4px_20px_rgba(0,0,0,.55)]">
            {t('Find your perfect stay,')}<br /><span className="italic font-normal">{t('in the highlands.')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }} className="hero-description mt-7 max-w-[600px] text-white text-[15px] md:text-[17px] leading-[1.7] font-medium">
            A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya escarpment. Warm rooms, direct hospitality and quiet mornings above the city.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .28 }} className="flex flex-wrap gap-3 mt-8">
            <a href="#rooms" onClick={(e) => { e.preventDefault(); scrollToSection('rooms') }} className="inline-flex items-center gap-2 rounded-full bg-[#c99b31] hover:bg-[#ddb75c] text-[#21180f] px-6 py-3.5 font-semibold shadow-[0_14px_35px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5">{t('Explore rooms')} <ArrowRight className="w-4"/></a>
            <button onClick={onBook} className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 backdrop-blur-md text-white px-6 py-3.5 font-semibold hover:bg-white/15 transition"><PlayCircle className="w-4"/> {t('Book direct')}</button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 left-6 sm:left-10 lg:left-14 z-20 flex items-center gap-3 text-white/60 text-[10px] uppercase tracking-[.24em]"><span className="w-9 h-px bg-[#d6ad4b]"/> Slow stays · Big views</div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2" aria-label="Hero slideshow controls">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" onClick={() => setActiveSlide(index)} className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-[#d6ad4b]' : 'w-1.5 bg-white/45 hover:bg-white/80'}`} aria-label={`Show hero image ${index + 1}`} aria-current={index === activeSlide ? 'true' : undefined} />
        ))}
      </div>
      <button onClick={() => scrollToSection('booking')} className="absolute bottom-7 right-6 sm:right-10 lg:right-14 z-20 w-12 h-12 rounded-full border border-white/25 bg-black/15 backdrop-blur flex items-center justify-center text-white/85 hover:border-[#d6ad4b] hover:text-[#d6ad4b] transition" aria-label="Scroll to booking">↓</button>
    </section>
  )
}
