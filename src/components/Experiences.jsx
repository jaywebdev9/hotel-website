import { motion } from 'framer-motion'
import { Coffee, Mountain, Flame, BookOpen, Plane, Users, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n'
const experiences = [
  { icon: Coffee, image:'/images/exp-coffee.webp', title: 'Coffee & Local Flavours', desc: 'Ask about local coffee, food and ways to experience Mbeya’s highland character.' },
  { icon: Mountain, image:'/images/exp-mountain.webp', title: 'Highland Walks', desc: 'Explore nearby viewpoints, mountain landscapes and walking routes with local guidance.' },
  { icon: Flame, image:'/images/exp-fire.webp', title: 'Slow Evenings', desc: 'Make space for a quiet evening, a warm drink and the views after a day outdoors.' },
  { icon: BookOpen, image:'/images/exp-nature.webp', title: 'A Place to Unwind', desc: 'Bring a book, settle into a comfortable corner and let the pace of the highlands take over.' },
  { icon: Plane, image:'/images/exp-mountain.webp', title: 'Airport Transfers', desc: 'Ask the lodge about arranging transport to or from Songwe Airport.' },
  { icon: Users, image:'/images/exp-cuisine.webp', title: 'Small Gatherings', desc: 'Ask about options for private gatherings, retreats and intimate celebrations.' },
]
export default function Experiences() {
 const { t } = useLanguage()
 return <section id="experiences" className="scroll-mt-24 bg-[#fbf8f1] py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
   <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
    <div><p className="eyebrow text-[#b18431]">{t('Experiences')}</p><h2 className="font-display text-4xl md:text-5xl leading-tight text-[#241c15]">{t('More than a room.')}<br/><span className="italic">{t('A feeling to remember.')}</span></h2></div>
    <p className="text-ink/55 max-w-md leading-relaxed">{t('Slow mornings, local flavours and the Southern Highlands outside your door. Choose a pace that feels right.')}</p>
   </div>
   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {experiences.map((e,i)=>{const Icon=e.icon;return <motion.article key={e.title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{delay:i*.06}} className="group overflow-hidden rounded-[1.35rem] border border-ink/10 bg-white shadow-[0_14px_40px_rgba(35,27,19,.05)] hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(35,27,19,.10)] transition-all">
      <div className="relative h-48 overflow-hidden"><img src={e.image} alt={t(e.title)} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/><span className="absolute left-5 bottom-5 w-10 h-10 rounded-full bg-[#fffdf8]/90 text-[#9d7428] flex items-center justify-center"><Icon className="w-5" strokeWidth={1.5}/></span></div>
      <div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-xl text-[#2a2119]">{t(e.title)}</h3><ArrowUpRight className="w-4 text-[#b18431] shrink-0"/></div><p className="text-ink/55 text-sm leading-relaxed mt-2">{t(e.desc)}</p><button className="mt-5 text-[10px] uppercase tracking-[.18em] text-[#9d7428]">{t('Explore')} →</button></div>
    </motion.article>})}
   </div>
  </div>
 </section>
}
