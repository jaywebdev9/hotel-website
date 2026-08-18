import { Star, Quote } from 'lucide-react'
import { testimonials } from '../config'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

export default function Testimonials() {
  const { t } = useLanguage()
  if (!testimonials.length) return null

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#241c15] text-[#f8f3e8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-[#d8b24f]">{t('Guest Reviews')}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{t('Let your guests tell the story.')}</h2>
          </div>
          <p className="text-white/55 max-w-md leading-relaxed">{t('A small collection of demo reviews for presentation. Replace these with verified guest feedback before client launch.')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <article key={`${item.name}-${index}`} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7">
              <Quote className="w-7 h-7 text-[#d8b24f] mb-6" strokeWidth={1.5} />
              <div className="flex gap-1 mb-5" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating || 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl leading-relaxed">“{t(item.quote)}”</p>
              <div className="mt-7 pt-5 border-t border-white/10">
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-white/45 mt-1">{t(item.role)}</p>
              </div>
            </article>
          ))}
        </div>
        <button type="button" onClick={() => scrollToSection('contact')} className="mt-9 inline-flex rounded-full border border-gold-400/40 px-6 py-3 text-sm text-[#d8b24f] hover:bg-gold-400 hover:text-forest-950 transition">{t('Contact the lodge')}</button>
      </div>
    </section>
  )
}
