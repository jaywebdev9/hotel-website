import { motion } from 'framer-motion'
import { Coffee, Mountain, Flame, BookOpen, Plane, Users } from 'lucide-react'
import { useLanguage } from '../i18n'
const experiences = [
  { image: '/images/coffee-estate.webp', icon: Coffee, title: 'Coffee & Local Flavours', desc: 'Ask about local coffee, food and ways to experience Mbeya’s highland character.' },
  { image: '/images/mbeya-landscape.webp', icon: Mountain, title: 'Highland Walks', desc: 'Explore nearby viewpoints, mountain landscapes and walking routes with local guidance.' },
  { image: '/images/dining-view.webp', icon: Flame, title: 'Slow Evenings', desc: 'Make space for a quiet evening, a warm drink and the views after a day outdoors.' },
  { image: '/images/room-luxury.webp', icon: BookOpen, title: 'A Place to Unwind', desc: 'Bring a book, settle into a comfortable corner and let the pace of the highlands take over.' },
  { image: '/images/lodge-exterior.webp', icon: Plane, title: 'Airport Transfers', desc: 'Ask the lodge about arranging transport to or from Songwe Airport.' },
  { image: '/images/breakfast.webp', icon: Users, title: 'Small Gatherings', desc: 'Ask about options for private gatherings, retreats and intimate celebrations.' },
]
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
export default function Experiences() {
  const { t } = useLanguage()
  return <section id="experiences" className="scroll-mt-24 py-24 md:py-32 bg-forest-800 text-parchment"><div className="max-w-7xl mx-auto px-6 md:px-10"><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{duration:.6}} className="mb-14 max-w-xl"><p className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">{t('On the Estate')}</p><h2 className="font-display text-4xl md:text-5xl leading-tight">{t('Things to do')}<br/>{t("when the fire's already lit.")}</h2></motion.div><motion.div variants={container} initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{experiences.map((e)=><motion.div key={e.title} variants={item} whileHover={{ y: -8 }} className="exp-card group overflow-hidden rounded-2xl border border-parchment/10 bg-forest-950/40"><div className="relative h-40 overflow-hidden"><img src={e.image} alt={t(e.title)} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/15 to-transparent"/><div className="absolute left-6 bottom-5 w-11 h-11 rounded-full border border-gold-400/50 bg-forest-950/70 backdrop-blur flex items-center justify-center"><e.icon className="w-5 h-5 text-gold-400" strokeWidth={1.5}/></div></div><div className="p-7"><h3 className="font-display text-xl mb-2">{t(e.title)}</h3><p className="text-parchment/65 text-sm leading-relaxed">{t(e.desc)}</p></div></motion.div>)}</motion.div></div></section>
}
