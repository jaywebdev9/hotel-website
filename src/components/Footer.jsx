import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle, Map, Youtube } from 'lucide-react'
import { siteConfig } from '../config'
import { useLanguage } from '../i18n'
import { scrollToSection } from '../utils/navigation'

const socialItems = [
  { key: 'instagram', label: 'Instagram', icon: Instagram, fallback: 'https://www.instagram.com/' },
  { key: 'facebook', label: 'Facebook', icon: Facebook, fallback: 'https://www.facebook.com/' },
  { key: 'youtube', label: 'YouTube', icon: Youtube, fallback: 'https://www.youtube.com/' },
]

export default function Footer() {
  const { t } = useLanguage()
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Mbeya%2C%20Tanzania'

  return <>
    <footer id="contact" className="scroll-mt-24 bg-[#211a13] text-[#f8f3e8] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl">Loleza <span className="text-[#dabb55]">Ridge</span></p>
            <p className="text-[#f8f3e8]/55 text-sm leading-relaxed mt-4 max-w-xs">
              {t('A quiet lodge above the Mbeya escarpment, surrounded by coffee terraces and Southern Highlands skies.')}
            </p>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 rounded-full border border-[#dabb55]/30 bg-[#dabb55]/10 px-4 py-2.5 text-sm text-[#dabb55] hover:bg-[#dabb55] hover:text-[#211a13] transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp concierge
            </a>
          </div>

          <div>
            <p className="footer-title">{t('Explore')}</p>
            <div className="grid grid-cols-2 gap-y-3 text-sm text-[#f8f3e8]/55">
              {[['rooms','Rooms'],['about','About'],['amenities','Amenities'],['experiences','Experiences'],['gallery','Gallery'],['offers','Offers'],['faq','FAQ'],['location','Location']].map(([id,label]) => (
                <a key={id} href={`#${id}`} onClick={(e)=>{e.preventDefault();scrollToSection(id)}} className="hover:text-[#dabb55] transition-colors">{t(label)}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">{t('Contact')}</p>
            <div className="space-y-4 text-sm text-[#f8f3e8]/60">
              {siteConfig.phone && <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 hover:text-[#dabb55] transition"><Phone className="w-4 h-4 shrink-0" />{siteConfig.phone}</a>}
              {siteConfig.email && <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-[#dabb55] transition"><Mail className="w-4 h-4 shrink-0" />{siteConfig.email}</a>}
              <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#dabb55] transition"><MapPin className="w-4 h-4 shrink-0" />{siteConfig.location}</a>
            </div>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[.16em] text-[#dabb55] hover:text-[#f0d77c] transition">
              <Map className="w-4 h-4" /> Get directions
            </a>
          </div>

          <div>
            <p className="footer-title">{t('Follow')}</p>
            <div className="flex flex-wrap gap-3">
              {socialItems.map(({key,label,icon:Icon,fallback}) => {
                const href = siteConfig.social?.[key] || fallback
                const isConfigured = Boolean(siteConfig.social?.[key])
                return <a key={key} href={href} target="_blank" rel="noreferrer" className="social" aria-label={label} title={isConfigured ? label : `${label} — profile URL to be configured`}>
                  <Icon className="w-[17px] h-[17px]" />
                </a>
              })}
            </div>
            <p className="text-xs text-[#f8f3e8]/35 mt-4 leading-relaxed">Instagram · Facebook · YouTube<br/>Official profile links can be updated in <code className="text-[#dabb55]/70">src/config.js</code>.</p>
            {siteConfig.whatsapp && <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm text-[#dabb55] hover:text-[#f0d77c]"><MessageCircle className="w-4"/> {t('WhatsApp the lodge')}</a>}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5 pt-6 text-xs text-[#f8f3e8]/35">
          <span>{t('© 2026 Loleza Ridge Lodge. All rights reserved.')}</span>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#/terms" className="hover:text-[#dabb55]">{t('Terms & Conditions')}</a>
            <a href="#/privacy" className="hover:text-[#dabb55]">{t('Privacy Policy')}</a>
            <a href="#/cookies" className="hover:text-[#dabb55]">{t('Cookie Policy')}</a>
            <a href="#/accessibility" className="hover:text-[#dabb55]">{t('Accessibility')}</a>
          </nav>
        </div>
      </div>
    </footer>

    {siteConfig.whatsapp && <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="float-wa fixed bottom-5 right-5 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl" aria-label="Chat on WhatsApp"><MessageCircle className="w-6 h-6" /></a>}
  </>
}
