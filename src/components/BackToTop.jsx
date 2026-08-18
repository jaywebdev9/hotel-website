import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToSection } from '../utils/navigation'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => scrollToSection('top')}
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full bg-forest-950 text-gold-400 border border-gold-400/40 flex items-center justify-center shadow-xl hover:bg-forest-900 hover:-translate-y-0.5 transition-all"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
