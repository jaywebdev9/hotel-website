import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

const slides = [
  { src: '/images/hero-lobby.jpg', alt: 'Elegant Loleza Ridge Lodge lobby', position: 'center center' },
  { src: '/images/hero-room.jpg', alt: 'Luxury Loleza Ridge Lodge room', position: 'center center' },
]

export default function Hero({ onBook }) {
  const { t } = useLanguage()
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const controls = (
    <div className="flex items-center gap-2" aria-label={t('Hero slideshow controls')}>
      {slides.map((slide, index) => (
        <button
          key={slide.src}
          type="button"
          onClick={() => setActiveSlide(index)}
          className={`h-1.5 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-[#d6ad4b]' : 'w-1.5 bg-white/45 hover:bg-white/80'}`}
          aria-label={`${t('Show hero image')} ${index + 1}`}
          aria-current={index === activeSlide ? 'true' : undefined}
        />
      ))}
    </div>
  )

  return (
    <section id="top" className="hero-section relative overflow-hidden bg-[#111812] text-white">
      <div className="relative min-h-[760px] md:min-h-[820px]">
        <div className="hero-media absolute inset-0" aria-label={t('Loleza Ridge Lodge photography slideshow')}>
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={t(slide.alt)}
              style={{ objectPosition: slide.position }}
              className={`hero-img absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-bottom-fade absolute inset-x-0 bottom-0" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-end px-6 pb-28 pt-28 md:min-h-[820px] md:items-center md:px-10 md:pb-44 md:pt-44 lg:px-14">
          <HeroCopy onBook={onBook} t={t} />
        </div>

        <div className="absolute bottom-7 left-10 z-20 hidden text-[10px] uppercase tracking-[.24em] text-white/60 md:block">
          <span className="mr-3 inline-block h-px w-9 align-middle bg-[#d6ad4b]" /> {t('Slow stays · Big views')}
        </div>
        <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">{controls}</div>
        <button onClick={() => scrollToSection('booking')} className="absolute bottom-7 right-10 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white/85 backdrop-blur transition hover:border-[#d6ad4b] hover:text-[#d6ad4b] md:flex" aria-label={t('Scroll to booking')}>↓</button>
      </div>
    </section>
  )
}

function HeroCopy({ onBook, t }) {
  return (
    <div className="hero-copy max-w-[720px]">
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="hero-eyebrow text-[#e0b84f] font-mono uppercase">
        {t('Southern Highlands · Mbeya, Tanzania')}
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }} className="font-display text-white drop-shadow-[0_4px_20px_rgba(0,0,0,.55)]">
        {t('Find your perfect stay,')}<br /><span className="italic font-normal">{t('in the highlands.')}</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }} className="hero-description mt-7 max-w-[600px] text-white font-medium">
        {t("A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya escarpment. Warm rooms, direct hospitality and quiet mornings above the city.")}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .28 }} className="mt-8 flex flex-wrap gap-3">
        <a href="#rooms" onClick={(e) => { e.preventDefault(); scrollToSection('rooms') }} className="inline-flex items-center gap-2 rounded-full bg-[#c99b31] px-6 py-3.5 font-semibold text-[#21180f] shadow-[0_14px_35px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5 hover:bg-[#ddb75c]">{t('Explore rooms')} <ArrowRight className="w-4"/></a>
        <button onClick={onBook} className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"><PlayCircle className="w-4"/> {t('Book direct')}</button>
      </motion.div>
    </div>
  )
}
