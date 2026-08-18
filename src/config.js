// ============================================================
// CLIENT DATA CONTROL CENTER
// Edit this file when reusing this template for a new hotel/lodge.
// Replace text, contact details, links and image paths here.
// ============================================================

export const siteConfig = {
  name: 'Loleza Ridge Lodge',
  shortName: 'Loleza Ridge',
  tagline: 'A slower stay in Mbeya’s Southern Highlands.',
  description: 'Discover Loleza Ridge Lodge in Mbeya, Tanzania. Explore accommodation, local experiences, offers and direct booking.',
  location: 'Mbeya, Tanzania',
  address: 'Mbeya, Tanzania',
  city: 'Mbeya',
  region: 'Mbeya',
  country: 'Tanzania',
  countryCode: 'TZ',
  airport: 'Songwe Airport',
  phone: '+255689995937',
  whatsapp: '255689995937',
  email: '',
  mapsQuery: 'Loleza Ridge Lodge, Mbeya, Tanzania',
  social: {
    facebook: '',
    instagram: '',
    tripadvisor: '',
    booking: '',
    tiktok: '',
  },
  seo: {
    title: 'Loleza Ridge Lodge | Accommodation in Mbeya, Tanzania',
    description: 'Discover Loleza Ridge Lodge in Mbeya, Tanzania. Explore accommodation, local experiences, offers and direct booking.',
    keywords: 'hotel, lodge, accommodation, Mbeya, Tanzania, Southern Highlands',
    ogImage: '/og-image.png',
  },
  brand: {
    mark: 'LR',
    primaryName: 'Loleza',
    accentName: 'Ridge',
  },
}

export const navigation = [
  ['top', 'Home'],
  ['rooms', 'Rooms'],
  ['about', 'About'],
  ['amenities', 'Amenities'],
  ['experiences', 'Experiences'],
  ['gallery', 'Gallery'],
  ['offers', 'Offers'],
  ['faq', 'FAQ'],
  ['location', 'Location'],
  ['contact', 'Contact'],
]

export const hero = {
  eyebrow: 'Southern Highlands · Mbeya, Tanzania',
  title: 'Where the highlands',
  titleAccent: 'breathe slowly.',
  description: "A ten-room lodge folded into Mount Loleza's coffee terraces, overlooking the Mbeya escarpment. Wood fires, hand-picked arabica, and views that don't ask for a filter.",
  image: '/images/highlands.svg',
  imageAlt: 'Southern Highlands landscape',
  primaryCta: 'View Rooms & Rates',
  secondaryCta: 'Book Direct — No Commission',
}

export const heroStats = [
  { value: '01', label: 'Highland setting' },
  { value: '24/7', label: 'Direct enquiries' },
  { value: '01', label: 'Personal booking channel' },
  { value: 'TZS', label: 'Transparent local rates' },
]

export const about = {
  eyebrow: 'The Lodge',
  title: 'Built into the terraces,',
  titleAccent: 'not on top of them.',
  paragraphs: [
    'Loleza Ridge was raised stone by stone along the old coffee terraces that farmers have worked for three generations. Every room steps down the hillside rather than standing over it — so the view is never blocked, and neither is the mountain air.',
    'We work with six neighbouring smallholder families for our house arabica, our vegetables come from the valley floor, and our fires are cut from windfall, not forest.',
  ],
  facts: [
    { value: 'Mbeya', label: 'Southern Highlands' },
    { value: 'Local', label: 'Sense of place' },
    { value: 'Direct', label: 'Guest connection' },
  ],
  images: [
    { src: '/images/terrace.svg', alt: 'Highland terrace' },
    { src: '/images/coffee-country.svg', alt: 'Coffee estate' },
  ],
}

export const roomsIntro = {
  eyebrow: 'Accommodation',
  title: 'Sleep closer',
  titleAccent: 'to the mountain.',
  description: 'Four distinct spaces designed around the same idea: warm materials, generous views and mornings that do not need an alarm.',
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
    img: '/images/room-terrace.svg',
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
    img: '/images/room-suite.svg',
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
    img: '/images/room-family.svg',
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
    img: '/images/room-loft.svg',
    amenities: ['Loft layout', 'Queen bed', 'Wi-Fi'],
  },
]

export const amenitiesSection = {
  eyebrow: 'Made easy',
  title: 'Everything you need,',
  titleAccent: "nothing you don't.",
}

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

export const experiencesSection = {
  eyebrow: 'On the Estate',
  title: 'Things to do',
  titleAccent: "when the fire's already lit.",
}

export const experiences = [
  { icon: 'Coffee', title: 'Coffee & Local Flavours', desc: 'Ask about local coffee, food and ways to experience Mbeya’s highland character.' },
  { icon: 'Mountain', title: 'Highland Walks', desc: 'Explore nearby viewpoints, mountain landscapes and walking routes with local guidance.' },
  { icon: 'Flame', title: 'Slow Evenings', desc: 'Make space for a quiet evening, a warm drink and the views after a day outdoors.' },
  { icon: 'BookOpen', title: 'A Place to Unwind', desc: 'Bring a book, settle into a comfortable corner and let the pace of the highlands take over.' },
  { icon: 'Plane', title: 'Airport Transfers', desc: 'Ask the lodge about arranging transport to or from Songwe Airport.' },
  { icon: 'Users', title: 'Small Gatherings', desc: 'Ask about options for private gatherings, retreats and intimate celebrations.' },
]

export const gallerySection = {
  eyebrow: 'Gallery',
  title: 'Come for the view.',
  titleAccent: 'Stay for the feeling.',
  description: 'A visual walk through the rooms, terraces and Southern Highlands beyond our front door.',
}

export const gallery = [
  { src: '/images/highlands.svg', alt: 'Mbeya highlands', label: 'The Highlands', span: 'row-span-2' },
  { src: '/images/room-loft.svg', alt: 'Cabin interior', label: 'Interiors' },
  { src: '/images/coffee-country.svg', alt: 'Coffee estate', label: 'Coffee Country' },
  { src: '/images/room-suite.svg', alt: 'Suite interior', label: 'Suites', span: 'row-span-2' },
  { src: '/images/terrace.svg', alt: 'Terrace farms', label: 'Around the lodge', span: 'col-span-2' },
]

export const offersSection = {
  eyebrow: 'Offers & packages',
  title: 'Stay a little longer.',
}

export const offers = [
  { title: 'Weekend Escape', text: 'A flexible two-night stay designed around slow mornings, good food and time outdoors.', tag: 'Stay' },
  { title: 'Highland Experience', text: 'Ask the lodge about combining your stay with local walks, coffee and nearby attractions.', tag: 'Experience' },
  { title: 'Family Stay', text: 'A comfortable option for families who want more space and an easy base for exploring Mbeya.', tag: 'Family' },
]

export const testimonials = []

export const faqSection = {
  eyebrow: 'Good to know',
  title: 'Frequently asked.',
}

export const faqs = [
  ['What time is check-in and check-out?', 'Standard arrival and departure times are confirmed by the lodge when your booking request is accepted.'],
  ['Is breakfast included?', 'Breakfast inclusion depends on the selected room rate or package. The lodge will confirm it with your booking.'],
  ['What is the cancellation policy?', 'Cancellation terms depend on the selected rate and dates. Please ask the lodge before confirming your stay.'],
  ['Do you accept children?', 'Children can be accommodated where the selected room allows. Include their ages in your booking request so the lodge can advise.'],
  ['Are pets allowed?', 'Pet arrangements should be confirmed directly with the lodge before booking.'],
  ['How do I get to the lodge?', 'The lodge is in the Mbeya area. Use the location details and contact the lodge directly for the most accurate directions.'],
]

export const locationSection = {
  eyebrow: 'Find us',
  title: 'Up in the Southern Highlands.',
}

export const bookingSection = {
  eyebrow: 'Book direct',
  title: 'Find your stay',
}

export const footerContent = {
  description: 'A quiet lodge above the Mbeya escarpment, surrounded by coffee terraces and Southern Highlands skies.',
  copyrightYear: '2026',
}

export const verified = {
  address: false,
  roomRates: true,
  amenities: false,
  distances: false,
  testimonials: false,
}
