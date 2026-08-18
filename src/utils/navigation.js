export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return false
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`)
  return true
}
