import { motion } from 'framer-motion'
import { Wifi, Car, Coffee, Utensils, Plane, Clock3, Droplets, Shirt } from 'lucide-react'
import { amenities } from '../config'
import { useLanguage } from '../i18n'
const icons=[Wifi,Car,Coffee,Utensils,Plane,Clock3,Droplets,Shirt]
export default function Amenities(){
 const {t}=useLanguage()
 return <section id="amenities" className="scroll-mt-24 editorial-section py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
   <div className="text-center max-w-2xl mx-auto mb-14">
    <p className="eyebrow text-[#b18431]">{t('Services we provide')}</p>
    <h2 className="font-display text-4xl md:text-5xl leading-tight text-[#251c14]">{t('Comfort, thoughtfully delivered.')}</h2>
    <p className="text-ink/55 mt-4 leading-relaxed">{t('Everything you need for a calm highland stay, with the personal touch of a small lodge.')}</p>
   </div>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {amenities.slice(0,8).map(([title,desc],i)=>{const Icon=icons[i];return <motion.article key={title} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:22}} viewport={{once:true,amount:.2}} transition={{delay:i*.05}} className="service-card rounded-2xl p-6">
      <span className="gold-icon w-11 h-11 rounded-full flex items-center justify-center"><Icon className="w-5 h-5" strokeWidth={1.5}/></span>
      <h3 className="font-display text-xl mt-5 text-[#2a2119]">{t(title)}</h3>
      <p className="text-ink/55 text-sm leading-relaxed mt-2">{t(desc)}</p>
      <span className="block mt-5 text-[10px] uppercase tracking-[.18em] text-[#b18431]">{t('Learn more')} →</span>
    </motion.article>})}
   </div>
  </div>
 </section>
}
