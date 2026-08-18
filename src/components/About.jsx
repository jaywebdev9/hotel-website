import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'
import { about } from '../config'
export default function About() {
 const {t}=useLanguage()
 return <section id="about" className="scroll-mt-24 bg-forest-950 text-parchment py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
   <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.7}}>
    <p className="text-gold-400 font-mono text-xs tracking-[.3em] uppercase mb-4">{t(about.eyebrow)}</p>
    <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t(about.title)} <span className="italic">{t(about.titleAccent)}</span></h2>
    {about.paragraphs.map(p=><p key={p} className="text-parchment/75 leading-relaxed mb-5">{t(p)}</p>)}
    <div className="flex gap-10 mt-9 pt-9 border-t border-parchment/15">{about.facts.map(f=><div key={f.label}><p className="font-display text-2xl text-gold-400">{f.value}</p><p className="text-xs text-parchment/60 uppercase tracking-widest mt-1">{t(f.label)}</p></div>)}</div>
   </motion.div>
   <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.7,delay:.15}} className="grid grid-cols-2 gap-4">
    {about.images.map((img,i)=><img key={img.src} src={img.src} className={`rounded-2xl w-full h-64 object-cover ${i===0?'mt-10':''}`} alt={t(img.alt)}/>)}
   </motion.div>
  </div>
 </section>
}
