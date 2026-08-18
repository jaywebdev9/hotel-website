import { useState } from 'react'
import { useLanguage } from '../i18n'
import { bookingSection } from '../config'
import { CalendarDays, Users, ArrowRight } from 'lucide-react'
export default function Booking({ onBook }) {
  const { t } = useLanguage()
  const [checkIn,setCheckIn]=useState(''); const [checkOut,setCheckOut]=useState(''); const [guests,setGuests]=useState('2')
  return <section id="booking" className="scroll-mt-24 relative z-20 -mt-1 bg-forest-900 text-parchment py-6 md:py-8">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="booking-widget rounded-[1.5rem] border border-parchment/10 bg-forest-950/90 p-4 md:p-5 shadow-[0_24px_70px_rgba(0,0,0,.28)]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="hidden lg:block pr-5 border-r border-parchment/10 min-w-[185px]"><p className="text-gold-400 font-mono text-[10px] uppercase tracking-[.25em]">{t(bookingSection.eyebrow)}</p><p className="font-display text-xl mt-1">{t(bookingSection.title)}</p></div>
          <div className="grid sm:grid-cols-3 gap-3 flex-1">
            <label className="widget-control"><span><CalendarDays/> {t('Check-in')}</span><input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} min={new Date().toISOString().split('T')[0]}/></label>
            <label className="widget-control"><span><CalendarDays/> {t('Check-out')}</span><input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} min={checkIn || new Date().toISOString().split('T')[0]}/></label>
            <label className="widget-control"><span><Users/> {t('Guests')}</span><select value={guests} onChange={e=>setGuests(e.target.value)}><option value="1">1 {t('guest')}</option><option value="2">2 {t('guests')}</option><option value="3">3 {t('guests')}</option><option value="4">4 {t('guests')}</option><option value="5">{t('5+ guests')}</option></select></label>
          </div>
          <button onClick={()=>onBook({checkIn,checkOut,adults:Number(guests)})} className="bg-gold hover:bg-gold-400 text-forest-950 rounded-xl px-7 py-3.5 font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5">{t('Check availability')} <ArrowRight className="w-4"/></button>
        </div>
      </div>
    </div>
  </section>
}
