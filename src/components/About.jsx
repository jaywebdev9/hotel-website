import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

const facts = [
  { value: 'Mbeya', label: 'Southern Highlands' },
  { value: 'Local', label: 'Sense of place' },
  { value: 'Direct', label: 'Guest connection' },
]

export default function About() {
 const { t } = useLanguage()
 return <section id="about" className="scroll-mt-24 bg-[#f8f5ee] py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
   <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-14 lg:gap-20 items-center">
    <motion.div initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.25}} transition={{duration:.7}}>
      <p className="eyebrow text-[#b18431]">{t('The Loleza difference')}</p>
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-[#241c15]">{t('Built into the terraces,')} <span className="italic">{t('not on top of them.')}</span></h2>
      <p className="text-ink/60 leading-relaxed mt-6 max-w-xl">{t('Loleza Ridge was raised stone by stone along the old coffee terraces that farmers have worked for three generations. Every room steps down the hillside rather than standing over it — so the view is never blocked, and neither is the mountain air.')}</p>
      <p className="text-ink/60 leading-relaxed mt-4 max-w-xl">{t('We work with neighbouring smallholder families for our house arabica, our vegetables come from the valley floor, and our fires are cut from windfall, not forest.')}</p>
      <div className="grid grid-cols-3 gap-5 mt-9 pt-7 border-t border-ink/10">
       {facts.map(f=><div key={f.label}><p className="font-display text-2xl md:text-3xl text-[#b18431]">{f.value}</p><p className="text-[10px] uppercase tracking-[.16em] text-ink/45 mt-1">{t(f.label)}</p></div>)}
      </div>
      <button onClick={()=>scrollToSection('experiences')} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#b18431]/40 px-5 py-3 text-sm text-[#8e681f] hover:bg-[#f0e5cf] transition">{t('Discover the experience')} <ArrowRight className="w-4"/></button>
    </motion.div>
    <motion.div initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.25}} transition={{duration:.7,delay:.1}} className="relative min-h-[500px]">
      <img src="/images/lodge-view.webp" alt={t('Loleza Ridge lodge and highland view')} loading="lazy" decoding="async" className="feature-image absolute left-0 top-0 w-[76%] h-[430px] md:h-[520px] rounded-[1.6rem] object-cover object-[center_25%]"/>
      <img src="/images/room-suite.webp" alt={t('Loleza Ridge guest room')} loading="lazy" decoding="async" className="feature-image absolute right-0 bottom-0 w-[48%] h-[220px] md:h-[270px] rounded-[1.4rem] object-cover object-[center_30%] border-[10px] border-[#f8f5ee]"/>
    </motion.div>
   </div>
  </div>
 </section>
}
