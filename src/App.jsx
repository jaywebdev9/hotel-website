import { useEffect, useState } from 'react'
import { LanguageProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TerraceDivider from './components/TerraceDivider'
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

const legalRoutes = {
  '/terms': 'terms',
  '/privacy': 'privacy',
  '/cookies': 'cookies',
  '/accessibility': 'accessibility',
}

function usePathname() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

function Home() {
  const [booking, setBooking] = useState(null)
  return (
    <>
      <SEO />
      <div className="bg-parchment text-ink font-body">
        <Navbar onBook={() => setBooking({})} />
        <Hero onBook={() => setBooking({})} />
        <Booking onBook={() => setBooking({})} />
        <TerraceDivider fill="#142019" />
        <About />
        <TerraceDivider fill="#F0EAD6" flip />
        <Rooms onBook={setBooking} />
        <Amenities />
        <Experiences />
        <Offers onBook={() => setBooking({})} />
        <Gallery />
        <TerraceDivider fill="#142019" />
        <Testimonials />
        <FAQ />
        <Location />
        <Footer />
        {booking && <BookingModal initialBooking={booking} onClose={() => setBooking(null)} />}
      </div>
    </>
  )
}

export default function App() {
  const path = usePathname()
  const legalType = legalRoutes[path]
  return (
    <LanguageProvider>
      {legalType ? (
        <div className="bg-parchment text-ink font-body min-h-screen">
          <Navbar onBook={() => { window.location.href = '/#booking' }} />
          <LegalPage type={legalType} />
          <Footer />
        </div>
      ) : <Home />}
    </LanguageProvider>
  )
}
