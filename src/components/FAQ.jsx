import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../config'
import { useLanguage } from '../i18n'
export default function FAQ(){
  const {t}=useLanguage(); const [active,setActive]=useState(0)
  return <section id="faq" className="scroll-mt-24 py-24 md:py-32 bg-parchment"><div className="max-w-4xl mx-auto px-6 md:px-10"><div className="text-center mb-12"><p className="eyebrow text-clay">{t('Good to know')}</p><h2 className="font-display text-4xl md:text-5xl">{t('Frequently asked.')}</h2></div><div className="divide-y divide-ink/10">{faqs.map(([q,a],i)=><div key={q}><button onClick={()=>setActive(active===i?-1:i)} className="w-full py-5 flex items-center justify-between text-left font-display text-lg md:text-xl"><span>{t(q)}</span><Plus className={`w-5 transition-transform ${active===i?'rotate-45':''}`}/></button>{active===i&&<p className="pb-6 max-w-3xl text-sm text-ink/60 leading-relaxed">{t(a)}</p>}</div>)}</div></div></section>
}
