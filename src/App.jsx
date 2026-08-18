import { useEffect, useState } from 'react'
import { LanguageProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Experiences from './components/Experiences'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Offers from './components/Offers'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Booking from './components/Booking'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import { LegalPage } from './components/Legal'
import SEO from './components/SEO'
import BackToTop from './components/BackToTop'

export default function App() {
 const [booking,setBooking]=useState(null)
 const [route,setRoute]=useState(() => window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')

 useEffect(() => {
   const onHashChange = () => setRoute(window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')
   window.addEventListener('hashchange', onHashChange)
   return () => window.removeEventListener('hashchange', onHashChange)
 }, [])

 const legalRoutes = ['terms','privacy','cookies','accessibility']
 if (legalRoutes.includes(route)) {
   return <LanguageProvider><SEO/><LegalPage type={route}/></LanguageProvider>
 }

 return <LanguageProvider><SEO/><div className="bg-parchment text-ink font-body"><Navbar onBook={()=>setBooking({})}/><Hero onBook={()=>setBooking({})}/><Booking onBook={setBooking}/><Amenities/><About/><Rooms onBook={setBooking}/><Experiences/><Offers onBook={()=>setBooking({})}/><Testimonials/><Gallery/><FAQ/><Location/><Footer/>{booking&&<BookingModal initialBooking={booking} onClose={()=>setBooking(null)}/>}<BackToTop/></div></LanguageProvider>
}
