import { motion } from 'framer-motion'
import { Coffee, Mountain, Flame, BookOpen, Plane, Users } from 'lucide-react'
import { useLanguage } from '../i18n'
import { experiences, experiencesSection } from '../config'
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
export default function Experiences() {
  const { t } = useLanguage()
  const iconMap = { Coffee, Mountain, Flame, BookOpen, Plane, Users }
  return <section id="experiences" className="scroll-mt-24 py-24 md:py-32 bg-forest-800 text-parchment"><div className="max-w-7xl mx-auto px-6 md:px-10"><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{duration:.6}} className="mb-14 max-w-xl"><p className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">{t(experiencesSection.eyebrow)}</p><h2 className="font-display text-4xl md:text-5xl leading-tight">{t(experiencesSection.title)}<br/>{t(experiencesSection.titleAccent)}</h2></motion.div><motion.div variants={container} initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{experiences.map((e)=>{ const Icon = iconMap[e.icon] || Coffee; return <motion.div key={e.title} variants={item} className="exp-card p-8 rounded-2xl border border-parchment/10 bg-forest-950/40"><Icon className="w-8 h-8 text-gold-400 mb-5" strokeWidth={1.5}/><h3 className="font-display text-xl mb-2">{t(e.title)}</h3><p className="text-parchment/65 text-sm leading-relaxed">{t(e.desc)}</p></motion.div>})}</motion.div></div></section>
}
