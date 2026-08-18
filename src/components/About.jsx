import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

const facts = [
  { value: 'Mbeya', label: 'Southern Highlands' },
  { value: 'Local', label: 'Sense of place' },
  { value: 'Direct', label: 'Guest connection' },
]

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="scroll-mt-24 bg-forest-950 text-parchment py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">{t('The Lodge')}</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            {t('Built into the terraces,')} <span className="italic">{t('not on top of them.')}</span>
          </h2>
          <p className="text-parchment/75 leading-relaxed mb-5">
            {t('Loleza Ridge was raised stone by stone along the old coffee terraces that farmers have worked for three generations. Every room steps down the hillside rather than standing over it — so the view is never blocked, and neither is the mountain air.')}
          </p>
          <p className="text-parchment/75 leading-relaxed">
            {t('We work with six neighbouring smallholder families for our house arabica, our vegetables come from the valley floor, and our fires are cut from windfall, not forest.')}
          </p>
          <div className="flex gap-10 mt-9 pt-9 border-t border-parchment/15">
            {facts.map((f) => (
              <div key={t(f.label)}>
                <p className="font-display text-2xl text-gold-400">{f.value}</p>
                <p className="text-xs text-parchment/60 uppercase tracking-widest mt-1">{t(f.label)}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="/images/terrace.svg"
            className="rounded-2xl w-full h-64 object-cover mt-10"
            alt="Highland terrace"
          />
          <img
            src="/images/coffee-country.svg"
            className="rounded-2xl w-full h-64 object-cover"
            alt="Coffee estate"
          />
        </motion.div>
      </div>
    </section>
  )
}
