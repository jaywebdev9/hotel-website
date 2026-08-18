import { motion } from 'framer-motion'
import { BedDouble, Ruler, Users, ArrowUpRight } from 'lucide-react'
import { rooms } from '../config'
import { useLanguage } from '../i18n'
const money = n => new Intl.NumberFormat('en-TZ').format(n)
export default function Rooms({ onBook }) {
  const {t}=useLanguage()
  return <section id="rooms" className="scroll-mt-24 py-24 md:py-32 bg-parchment"><div className="max-w-7xl mx-auto px-6 md:px-10">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"><div><p className="eyebrow text-clay">{t('Accommodation')}</p><h2 className="font-display text-4xl md:text-6xl leading-[1.02]">{t('Sleep closer')}<br className="hidden md:block"/> {t('to the mountain.')}</h2></div><p className="text-ink/60 max-w-md leading-relaxed">{t('Four distinct spaces designed around the same idea: warm materials, generous views and mornings that do not need an alarm.')}</p></div>
    <div className="grid md:grid-cols-2 gap-7">{rooms.map((r,i)=><motion.article key={r.id} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{delay:i*.07}} className="room-card group rounded-[1.7rem] overflow-hidden bg-forest-950 text-parchment">
      <div className="relative h-[330px] overflow-hidden"><img src={r.img} alt={r.name} onError={(e)=>{e.currentTarget.src='/images/hero-highlands.svg'}} className="absolute inset-0 w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"/><div className="absolute top-5 right-5 bg-parchment text-ink rounded-full px-4 py-2 text-xs font-semibold">TZS {money(r.price)} <span className="opacity-50">{t('/ night')}</span></div></div>
      <div className="p-7"><div className="flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl">{r.name}</h3><p className="text-parchment/60 text-sm mt-2 max-w-md">{t(r.desc)}</p></div><span className="text-gold-400"><ArrowUpRight/></span></div><div className="flex flex-wrap gap-4 mt-6 text-xs text-parchment/65"><span className="inline-flex items-center gap-1.5"><Ruler className="w-4"/>{r.size}</span><span className="inline-flex items-center gap-1.5"><BedDouble className="w-4"/>{t(r.beds)}</span><span className="inline-flex items-center gap-1.5"><Users className="w-4"/>{t('Up to')} {r.guests} {t('guests')}</span></div><div className="flex flex-wrap gap-2 mt-5">{r.amenities.map(a=><span key={a} className="text-[11px] border border-parchment/10 rounded-full px-3 py-1.5 text-parchment/60">{t(a)}</span>)}</div><button onClick={()=>onBook(r)} className="mt-7 w-full rounded-full bg-gold hover:bg-gold-400 text-forest-950 py-3.5 font-semibold transition">{t('Book this room')}</button></div>
    </motion.article>)}</div>
  </div></section>
}
