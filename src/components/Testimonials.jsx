import { MessageCircle, Star } from 'lucide-react'
import { testimonials } from '../config'
import { useLanguage } from '../i18n'

export default function Testimonials() {
  const { t } = useLanguage()

  if (!testimonials.length) {
    return (
      <section className="bg-forest-950 text-parchment py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase mb-5">{t('Guest Reviews')}</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{t('Let your guests tell the story.')}</h2>
          <p className="text-parchment/55 max-w-xl mx-auto mt-5 leading-relaxed">
            {t('Add verified reviews from Google, TripAdvisor, Booking.com or direct guest feedback here. Keeping reviews genuine makes the booking experience more trustworthy.')}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-8 rounded-full border border-gold-400/40 px-6 py-3 text-sm text-gold-400 hover:bg-gold-400 hover:text-forest-950 transition">
            <MessageCircle className="w-4 h-4" /> {t('Contact the lodge')}
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="scroll-mt-24 bg-forest-950 text-parchment py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase mb-5">{t('Guest Reviews')}</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{t('What guests say.')}</h2>
        </div>
        <div className={`grid gap-6 ${testimonials.length === 1 ? 'max-w-2xl mx-auto' : testimonials.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.map((review, i) => {
            const quote = typeof review === 'string' ? review : review.quote || review.text || ''
            const name = typeof review === 'string' ? '' : review.name || review.author || ''
            const source = typeof review === 'string' ? '' : review.source || ''
            const rating = typeof review === 'string' ? 5 : Number(review.rating || 5)

            return (
              <article key={`${name}-${i}`} className="rounded-[1.5rem] border border-parchment/10 bg-parchment/[0.04] p-7 md:p-8">
                <div className="flex gap-1 text-gold-400 mb-5" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, star) => <Star key={star} className={`w-4 h-4 ${star < rating ? 'fill-current' : 'opacity-25'}`} />)}
                </div>
                <blockquote className="font-display text-xl md:text-2xl leading-relaxed">“{t(quote)}”</blockquote>
                {(name || source) && (
                  <footer className="mt-7 pt-5 border-t border-parchment/10 text-sm text-parchment/55">
                    {name && <strong className="text-parchment/85 font-medium">{name}</strong>}
                    {name && source && <span className="mx-2">·</span>}
                    {source && <span>{source}</span>}
                  </footer>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
