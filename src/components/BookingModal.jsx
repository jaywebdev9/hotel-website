import { useEffect, useMemo, useState } from 'react'
import { X, CalendarDays, Users, MessageCircle, ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react'
import { rooms, siteConfig } from '../config'
import { useLanguage } from '../i18n'

const today = () => new Date().toISOString().split('T')[0]

export default function BookingModal({ initialBooking = null, onClose }) {
  const { t, language } = useLanguage()
  const money = n => new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : language === 'sw' ? 'sw-TZ' : 'en-TZ').format(n)
  const [roomId, setRoomId] = useState(initialBooking?.id || rooms[0].id)
  const [form, setForm] = useState({
    checkIn: initialBooking?.checkIn || '', checkOut: initialBooking?.checkOut || '',
    adults: initialBooking?.adults || 2, children: 0, name: '', phone: '', email: '', requests: '',
  })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const room = rooms.find(r => r.id === roomId) || rooms[0]
  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0
    const a = new Date(`${form.checkIn}T00:00:00`), b = new Date(`${form.checkOut}T00:00:00`)
    return b > a ? Math.ceil((b - a) / 86400000) : 0
  }, [form.checkIn, form.checkOut])
  const total = nights * room.price

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown) }
  }, [onClose])

  const update = e => { setError(''); setForm(v => ({ ...v, [e.target.name]: e.target.value })) }

  const send = e => {
    e.preventDefault()
    if (!siteConfig.whatsapp) { setError(t('WhatsApp is not configured yet. Add the lodge WhatsApp number in src/config.js before publishing.')); return }
    const guestCount = Number(form.adults || 0) + Number(form.children || 0)
    if (!form.name.trim() || !form.phone.trim() || !form.checkIn || !form.checkOut || nights < 1) { setError(t('Please complete your name, phone number, check-in and check-out dates.')); return }
    if (guestCount > room.guests) { setError(`${t('This room accommodates up to')} ${room.guests} ${t('guests')}.`); return }
    if (!agreed) { setError(t('You must agree to the Terms & Conditions and Privacy Policy before sending your booking request.')); return }
    const text = [
      t('NEW BOOKING REQUEST'), '', siteConfig.name,
      `${t('Room')}: ${room.name}`,
      `${t('Check-in')}: ${form.checkIn}`,
      `${t('Check-out')}: ${form.checkOut}`,
      `${t('Nights')}: ${nights}`,
      `${t('Guests')}: ${form.adults} ${t('Adults')}, ${form.children} ${t('Children')}`,
      `${t('Estimated total')}: TZS ${money(total)}`, '',
      `${t('Guest')}: ${form.name.trim()}`,
      `${t('Phone')}: ${form.phone.trim()}`,
      form.email ? `${t('Email')}: ${form.email.trim()}` : '',
      form.requests ? `${t('Special requests')}: ${form.requests.trim()}` : '', '',
      t('Please confirm availability and booking terms.'),
    ].filter(Boolean).join('\n')
    setSubmitted(true)
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return <div role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="fixed inset-0 z-[100] bg-forest-950/75 backdrop-blur-md p-4 md:p-8 overflow-y-auto" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="max-w-5xl mx-auto bg-parchment rounded-[2rem] shadow-2xl overflow-hidden min-h-[90vh]">
      <div className="flex items-center justify-between px-6 md:px-9 py-5 border-b border-ink/10">
        <div><p className="font-mono text-[10px] tracking-[.28em] uppercase text-clay">{t('Book direct')}</p><h2 id="booking-modal-title" className="font-display text-2xl md:text-3xl">{t('Plan your stay')}</h2></div>
        <button type="button" onClick={onClose} className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-parchment transition" aria-label={t('Close booking form')}><X /></button>
      </div>
      <form onSubmit={send} className="grid lg:grid-cols-[1.35fr_.8fr] gap-0">
        <div className="p-6 md:p-9 space-y-7">
          <div><label className="field-label">{t('Accommodation')}</label><select value={roomId} onChange={e => { setRoomId(e.target.value); setError('') }} className="field">{rooms.map(r => <option key={r.id} value={r.id}>{r.name} — TZS {money(r.price)}{t('/ night')}</option>)}</select></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="field-label"><CalendarDays /> {t('Check-in')}</label><input required type="date" name="checkIn" value={form.checkIn} onChange={update} className="field" min={today()} /></div>
            <div><label className="field-label"><CalendarDays /> {t('Check-out')}</label><input required type="date" name="checkOut" value={form.checkOut} onChange={update} className="field" min={form.checkIn || today()} /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="field-label"><Users /> {t('Adults')}</label><input type="number" min="1" max={room.guests} name="adults" value={form.adults} onChange={update} className="field" /></div>
            <div><label className="field-label">{t('Children')}</label><input type="number" min="0" max={room.guests} name="children" value={form.children} onChange={update} className="field" /></div>
          </div>
          <div className="border-t border-ink/10 pt-7"><p className="font-display text-xl mb-4">{t('Guest details')}</p><div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" value={form.name} onChange={update} placeholder={t('Name')} className="field" aria-label={t('Name')} />
            <input required name="phone" value={form.phone} onChange={update} placeholder={t('Phone')} className="field" aria-label={t('Phone')} />
            <input type="email" name="email" value={form.email} onChange={update} placeholder={`${t('Email')} (${t('optional')})`} className="field sm:col-span-2" aria-label={t('Email')} />
            <textarea name="requests" value={form.requests} onChange={update} placeholder={`${t('Special requests')} (${t('optional')})`} rows="4" className="field sm:col-span-2 resize-none" aria-label={t('Special requests')} />
          </div></div>
          {error && <div role="alert" className="flex items-start gap-2 rounded-xl border border-clay/20 bg-clay/5 px-4 py-3 text-sm text-clay"><AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{error}</div>}
          <label className="flex items-start gap-3 text-xs leading-5 text-ink/60 cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={e => { setAgreed(e.target.checked); setError('') }} className="mt-1 h-4 w-4 accent-[#c9a227]" required />
            <span>{t('I agree to the Terms & Conditions and Privacy Policy.')} <span className="inline-flex gap-2 ml-1">
              <a href="#/terms" onClick={(e) => { e.preventDefault(); onClose(); window.location.hash = '#/terms' }} className="text-forest-800 underline hover:text-gold-700">{t('Terms & Conditions')}</a>
              <a href="#/privacy" onClick={(e) => { e.preventDefault(); onClose(); window.location.hash = '#/privacy' }} className="text-forest-800 underline hover:text-gold-700">{t('Privacy Policy')}</a>
            </span></span>
          </label>
        </div>
        <aside className="bg-forest-950 text-parchment p-6 md:p-9 flex flex-col justify-between">
          <div><p className="text-gold-400 font-mono text-[10px] tracking-[.25em] uppercase mb-5">{t('Booking summary')}</p><img src={room.img} alt={room.name} loading="lazy" decoding="async" className="w-full h-44 object-cover rounded-2xl mb-5"/><h3 className="font-display text-2xl">{room.name}</h3><p className="text-parchment/60 text-sm mt-2">{room.size} · {room.beds} · {t('Up to')} {room.guests} {t('guests')}</p>
            <div className="mt-7 space-y-3 text-sm"><div className="flex justify-between"><span className="text-parchment/60">{t('Rate')}</span><span>TZS {money(room.price)}</span></div><div className="flex justify-between"><span className="text-parchment/60">{t('Nights')}</span><span>{nights || '—'}</span></div><div className="pt-4 border-t border-parchment/10 flex justify-between text-lg"><span>{t('Estimated total')}</span><strong className="text-gold-400">{nights ? `TZS ${money(total)}` : '—'}</strong></div></div>
          </div>
          <div className="mt-8"><button disabled={submitted} className="w-full bg-gold hover:bg-gold-400 disabled:opacity-60 text-forest-950 rounded-full py-4 font-semibold flex items-center justify-center gap-2 transition"><MessageCircle className="w-5 h-5" /> {submitted ? t('WhatsApp opened') : t('Send booking via WhatsApp')}</button><button type="button" onClick={onClose} className="w-full mt-3 py-3 text-sm text-parchment/60 hover:text-parchment flex items-center justify-center gap-2"><ArrowLeft className="w-4 h-4"/> {t('Continue browsing')}</button><div className="flex items-start gap-2 mt-4 text-[11px] text-parchment/45"><ShieldCheck className="w-4 h-4 shrink-0 text-gold-400/70"/><span>{t('This is a booking request, not an instant reservation. The lodge confirms availability and payment terms directly.')}</span></div></div>
        </aside>
      </form>
    </div>
  </div>
}
