import { useState } from 'react'
import { useLanguage } from '../i18n'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { gallery, gallerySection } from '../config'

export default function Gallery(){
  const { t } = useLanguage()
 const [active,setActive]=useState(null)
 const prev=()=>setActive(v=>(v-1+gallery.length)%gallery.length), next=()=>setActive(v=>(v+1)%gallery.length)
 return <section id="gallery" className="scroll-mt-24 py-24 md:py-32 bg-parchment">
  <div className="max-w-7xl mx-auto px-5 md:px-10">
   <div className="flex items-end justify-between gap-6 mb-12"><div><p className="eyebrow text-clay">{t(gallerySection.eyebrow)}</p><h2 className="font-display text-4xl md:text-6xl leading-[.98]">{t(gallerySection.title)}<br/><span className="italic">{t(gallerySection.titleAccent)}</span></h2></div><p className="hidden md:block max-w-xs text-sm text-ink/55 leading-relaxed">{t(gallerySection.description)}</p></div>
   <motion.div initial="hidden" whileInView="show" viewport={{once:true,amount:.08}} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[170px] md:auto-rows-[230px]">
    {gallery.map((img,i)=><motion.button key={img.src} onClick={()=>setActive(i)} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className={`gal-item group relative rounded-[1.25rem] ${img.span} text-left`} aria-label={`Open ${t(img.label)} image`}><img src={img.src} className="w-full h-full object-cover" alt={t(img.alt)}/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/><span className="absolute left-4 bottom-4 text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">{t(img.label)}</span><span className="absolute right-4 top-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><Maximize2 className="w-4"/></span></motion.button>)}
   </motion.div>
  </div>
  <AnimatePresence>{active!==null&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm p-4 md:p-10 flex items-center justify-center" onMouseDown={e=>e.target===e.currentTarget&&setActive(null)}><button onClick={()=>setActive(null)} className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center"><X/></button><button onClick={prev} className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center"><ChevronLeft/></button><motion.img key={gallery[active].src} initial={{scale:.96}} animate={{scale:1}} src={gallery[active].src} alt={gallery[active].alt} className="max-h-[88vh] max-w-[90vw] rounded-xl object-contain"/><button onClick={next} className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center"><ChevronRight/></button><p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[.25em] uppercase">{active+1} / {gallery.length} · {gallery[active].label}</p></motion.div>}</AnimatePresence>
 </section>
}
