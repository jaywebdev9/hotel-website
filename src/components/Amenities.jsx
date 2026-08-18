import { motion } from 'framer-motion'
import { Wifi, Car, Coffee, Utensils, Plane, Clock3, Droplets, Shirt } from 'lucide-react'
import { amenities } from '../config'
import { useLanguage } from '../i18n'
const icons=[Wifi,Car,Coffee,Utensils,Plane,Clock3,Droplets,Shirt]
export default function Amenities(){
  const {t}=useLanguage()
  return <section id="amenities" className="scroll-mt-24 py-24 md:py-32 bg-parchment"><div className="max-w-7xl mx-auto px-6 md:px-10"><div className="max-w-xl mb-12"><p className="eyebrow text-clay">{t('Made easy')}</p><h2 className="font-display text-4xl md:text-5xl">{t('Everything you need,')}<br/>{t("nothing you don't.")}</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{amenities.map(([title,desc],i)=>{const Icon=icons[i];return <motion.div key={title} whileHover={{y:-4}} className="p-6 rounded-2xl border border-ink/10 bg-white/30"><Icon className="text-clay w-6 h-6 mb-5" strokeWidth={1.5}/><h3 className="font-display text-xl">{t(title)}</h3><p className="text-ink/55 text-sm mt-2 leading-relaxed">{t(desc)}</p></motion.div>})}</div></div></section>
}
