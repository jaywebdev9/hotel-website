import { amenities, faqs, offers, rooms, siteConfig, testimonials } from '../config'

export function validateSiteConfig() {
  const issues = []
  if (!siteConfig.name?.trim()) issues.push('siteConfig.name is missing')
  if (!Array.isArray(rooms) || rooms.length === 0) issues.push('At least one room is required')
  rooms.forEach((room) => {
    if (!room.id || !room.name || !room.img) issues.push(`Room is missing id, name or image: ${room.id || 'unknown'}`)
    if (!Number.isFinite(room.price) || room.price < 0) issues.push(`Invalid price for room: ${room.name || room.id}`)
    if (!Number.isInteger(room.guests) || room.guests < 1) issues.push(`Invalid guest capacity for room: ${room.name || room.id}`)
  })
  if (!Array.isArray(amenities) || !Array.isArray(offers) || !Array.isArray(faqs) || !Array.isArray(testimonials)) {
    issues.push('Content collections must remain arrays')
  }
  return issues
}
