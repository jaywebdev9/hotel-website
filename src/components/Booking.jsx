import { useState } from 'react'
import { useLanguage } from '../i18n'
import { siteConfig } from '../config'
import { CalendarDays, Users, ArrowRight, MapPin } from 'lucide-react'

export default function Booking({ onBook }) {
  const { t } = useLanguage()
  const [checkIn,setCheckIn]=useState(''); const [checkOut,setCheckOut]=useState(''); const [guests,setGuests]=useState('2')
  const today = new Date().toISOString().split('T')[0]
  return <section id="booking" className="relative z-30 -mt-20 md:-mt-24 scroll-mt-24 px-5 sm:px-8 lg:px-10">
    <div className="max-w-[1240px] mx-auto rounded-[1.5rem] bg-[#fffdf8] border border-[#2a2118]/10 shadow-[0_28px_80px_rgba(31,22,14,.18)] p-4 md:p-5">
      <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] gap-3 items-end">
        <div className="hidden lg:block px-3 pb-2"><p className="text-[#b18431] font-mono text-[9px] uppercase tracking-[.25em]">{t('Book direct')}</p><p className="font-display text-2xl text-[#251c14] mt-1">{t('Find your stay')}</p></div>
        <label className="booking-field"><span><MapPin/> {t('Location')}</span><strong>{siteConfig.location}</strong></label>
        <label className="booking-field"><span><CalendarDays/> {t('Check-in')}</span><input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} min={today}/></label>
        <label className="booking-field"><span><CalendarDays/> {t('Check-out')}</span><input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} min={checkIn || today}/></label>
        <label className="booking-field"><span><Users/> {t('Guests')}</span><select value={guests} onChange={e=>setGuests(e.target.value)}><option value="1">1 {t('guest')}</option><option value="2">2 {t('guests')}</option><option value="3">3 {t('guests')}</option><option value="4">4 {t('guests')}</option><option value="5">5+ {t('guests')}</option></select></label>
        <button onClick={()=>onBook({checkIn,checkOut,adults:Number(guests)})} className="h-[58px] rounded-xl bg-[#c99b31] hover:bg-[#ddb75c] text-[#21180f] px-6 font-semibold flex items-center justify-center gap-2 transition hover:-translate-y-0.5">{t('Check availability')} <ArrowRight className="w-4"/></button>
      </div>
    </div>
  </section>
}
