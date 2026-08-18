import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { offers } from '../config'
import { useLanguage } from '../i18n'
export default function Offers({onBook}){
  const {t}=useLanguage()
  return <section id="offers" className="scroll-mt-24 py-24 md:py-32 bg-forest-800 text-parchment"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="flex justify-between items-end gap-6 mb-12"><div><p className="eyebrow text-gold-400">{t('Offers & packages')}</p><h2 className="font-display text-4xl md:text-5xl">{t('Stay a little longer.')}</h2></div><button onClick={()=>onBook()} className="hidden sm:flex items-center gap-2 text-gold-400 text-sm">{t('Ask about an offer')} <ArrowUpRight className="w-4"/></button></div><div className="grid md:grid-cols-3 gap-5">{offers.map((o,i)=><motion.article key={o.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="p-7 rounded-2xl border border-parchment/10 bg-forest-950/40"><span className="text-[10px] uppercase tracking-[.25em] text-gold-400">{t(o.tag)}</span><h3 className="font-display text-2xl mt-8">{t(o.title)}</h3><p className="text-parchment/60 text-sm leading-relaxed mt-3">{t(o.text)}</p><button onClick={()=>onBook()} className="mt-7 text-sm font-semibold border-b border-gold-400/50 pb-1">{t('Enquire via WhatsApp')}</button></motion.article>)}</div></div></section>
}
