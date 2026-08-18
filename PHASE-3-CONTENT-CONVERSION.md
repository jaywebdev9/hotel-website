# Phase 3 — Content & Conversion Polish

## What changed

- Removed invented property facts and unattributed guest reviews.
- Made phone, WhatsApp, email and social profiles configurable and empty by default.
- Reworked hero copy and stats to avoid unsupported numeric claims.
- Reworked About copy to be premium without presenting unverified history as fact.
- Reworked Experiences, Offers and FAQ copy around enquiry/confirmation language.
- Added a clean verified-review placeholder state instead of fabricated testimonials.
- Fixed homepage booking widget → modal handoff so dates and guest count are preserved.
- Added booking-form validation for missing WhatsApp configuration and invalid dates/details.
- Added safer location wording and a generic Mbeya Google Maps query until the exact property pin is verified.
- Kept the architecture React + Vite + Tailwind and the existing component boundaries.

## Before production

Update `src/config.js` with the real lodge:
- phone
- WhatsApp number
- email
- exact address
- Google Maps URL
- social profile URLs
- verified room rates
- verified amenities
- verified distances
- verified guest reviews

Replace the demo/stock image URLs with licensed Loleza Ridge Lodge photography.
