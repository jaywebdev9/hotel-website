export const siteConfig = {
  name: 'Loleza Ridge Lodge',
  // Change these two values for each client. Components consume them instead of hard-coded URLs.
  siteUrl: '',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mbeya%2C%20Tanzania',
  tagline: 'A slower stay in Mbeya’s Southern Highlands.',
  seo: {
    sw: { title: 'Loleza Ridge Lodge | Malazi Mbeya, Tanzania', description: 'Gundua Loleza Ridge Lodge huko Mbeya, Tanzania. Angalia malazi, uzoefu wa eneo, ofa na kuweka nafasi moja kwa moja kupitia WhatsApp.' },
    en: { title: 'Loleza Ridge Lodge | Accommodation in Mbeya, Tanzania', description: 'Discover Loleza Ridge Lodge in Mbeya, Tanzania. Explore accommodation, local experiences, offers and direct WhatsApp booking.' },
    fr: { title: 'Loleza Ridge Lodge | Hébergement à Mbeya, Tanzanie', description: 'Découvrez Loleza Ridge Lodge à Mbeya, en Tanzanie. Explorez les chambres, expériences locales, offres et réservation directe via WhatsApp.' },
  },
  location: 'Mbeya, Tanzania',
  phone: '+255689995937', // DEMO contact number — replace for a real client.
  whatsapp: '255689995937', // DEMO WhatsApp — replace for a real client.
  email: '', // Add the lodge email before publishing.
  airport: 'Songwe Airport',
  city: 'Mbeya city',
  social: {
    facebook: '',
    instagram: '',
    tripadvisor: '',
    booking: '',
    youtube: '',
  },
  // Keep these editable until verified against the real property.
  // Optional brand assets/settings that can be changed per client without touching components.
  logo: '/images/favicon.svg',
  ogImage: '/images/og-image.png',
  verified: {
    address: false,
    roomRates: true,
    amenities: false,
    distances: false,
    testimonials: false,
  },
}

export const rooms = [
  {
    id: 'terrace-cabin',
    name: 'Terrace Cabin',
    price: 180000,
    size: '32 m²',
    beds: '1 King bed',
    guests: 2,
    desc: 'A private terrace, warm natural materials and a quiet highland setting.',
    img: '/images/room-terrace.webp',
    amenities: ['Private terrace', 'King bed', 'Wi-Fi'],
  },
  {
    id: 'ridge-suite',
    name: 'Ridge Suite',
    price: 260000,
    size: '48 m²',
    beds: '1 King bed + sofa',
    guests: 3,
    desc: 'A generous suite designed for longer stays, with space to slow down and take in the landscape.',
    img: '/images/room-suite.webp',
    amenities: ['Highland views', 'Soaking tub', 'King bed'],
  },
  {
    id: 'family-terrace',
    name: 'Family Terrace',
    price: 320000,
    size: '64 m²',
    beds: '2 beds',
    guests: 4,
    desc: 'A spacious option for families or small groups, opening onto a private terrace.',
    img: '/images/room-family.webp',
    amenities: ['2-room layout', 'Private terrace', 'Up to 4 guests'],
  },
  {
    id: 'coffee-loft',
    name: 'Coffee Loft',
    price: 150000,
    size: '28 m²',
    beds: '1 Queen bed',
    guests: 2,
    desc: 'A compact, characterful room for couples or solo travellers looking for a peaceful base.',
    img: '/images/room-loft.webp',
    amenities: ['Loft layout', 'Queen bed', 'Wi-Fi'],
  },
]

export const amenities = [
  ['Wi-Fi', 'Connectivity for guests who need to stay in touch.'],
  ['Parking', 'On-site parking for guests arriving by car.'],
  ['Breakfast', 'Breakfast options prepared for a relaxed start to the day.'],
  ['Dining', 'Ask about available dining and local food options.'],
  ['Airport transfer', 'Ask the lodge about transfer arrangements from Songwe Airport.'],
  ['Guest support', 'A direct point of contact for stay and travel questions.'],
  ['Hot water', 'Hot water facilities are available in guest accommodation.'],
  ['Laundry', 'Laundry service may be arranged on request.'],
]

export const offers = [
  { title: 'Weekend Escape', text: 'A flexible two-night stay designed around slow mornings, good food and time outdoors.', tag: 'Stay' },
  { title: 'Highland Experience', text: 'Ask the lodge about combining your stay with local walks, coffee and nearby attractions.', tag: 'Experience' },
  { title: 'Family Stay', text: 'A comfortable option for families who want more space and an easy base for exploring Mbeya.', tag: 'Family' },
]

export const faqs = [
  ['What time is check-in and check-out?', 'Standard arrival and departure times are confirmed by the lodge when your booking request is accepted.'],
  ['Is breakfast included?', 'Breakfast inclusion depends on the selected room rate or package. The lodge will confirm it with your booking.'],
  ['What is the cancellation policy?', 'Cancellation terms depend on the selected rate and dates. Please ask the lodge before confirming your stay.'],
  ['Do you accept children?', 'Children can be accommodated where the selected room allows. Include their ages in your booking request so the lodge can advise.'],
  ['Are pets allowed?', 'Pet arrangements should be confirmed directly with the lodge before booking.'],
  ['How do I get to the lodge?', 'The lodge is in the Mbeya area. Use the location details and contact the lodge directly for the most accurate directions.'],
]

export const testimonials = [
  { name: 'Amani K.', role: 'Weekend guest', quote: 'Beautiful highland atmosphere, thoughtful service and a stay that felt genuinely peaceful.', rating: 5 },
  { name: 'Sarah M.', role: 'Couples stay', quote: 'The rooms feel warm and private, and the views make the whole experience memorable.', rating: 5 },
  { name: 'Daniel R.', role: 'Family stay', quote: 'A relaxed base for exploring Mbeya. The direct booking experience was simple and friendly.', rating: 5 },
]
