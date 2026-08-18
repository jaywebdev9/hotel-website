# Client Data Control Center

For a new hotel/lodge client, **start with `src/config.js`**.

You normally do not need to edit Navbar, Hero, About, Rooms, Amenities, Experiences, Gallery, Offers, FAQ, Location, Footer or SEO manually.

## 1. Brand & business details

Edit `siteConfig`:

- `name`
- `shortName`
- `tagline`
- `description`
- `location`
- `address`
- `city`
- `region`
- `airport`
- `phone`
- `whatsapp`
- `email`
- `mapsQuery`

Phone and WhatsApp must be digits in the WhatsApp field (country code, no `+`).

## 2. Social accounts

Inside `siteConfig.social`, add the real URLs:

- `facebook`
- `instagram`
- `tripadvisor`
- `booking`
- `tiktok`

Leave unused accounts as `''`. The UI hides empty social links.

## 3. SEO

Inside `siteConfig.seo`, edit:

- `title`
- `description`
- `keywords`
- `ogImage`

Keep the OG image at `public/og-image.png` unless you change the path.

## 4. Logo / brand mark

Inside `siteConfig.brand` edit:

- `mark`
- `primaryName`
- `accentName`

## 5. Hero

Edit `hero` and `heroStats`:

- headline
- description
- hero image
- CTA labels
- statistics

## 6. About

Edit `about`:

- heading
- paragraphs
- facts
- images

## 7. Rooms

Edit `rooms`:

- room name
- price
- size
- bed type
- guests
- description
- image
- amenities

Prices are displayed as TZS.

## 8. Amenities, experiences, gallery, offers and FAQs

All are in this same file:

- `amenities`
- `experiences`
- `gallery`
- `offers`
- `faqs`

The section headings are also configurable through:

- `amenitiesSection`
- `experiencesSection`
- `gallerySection`
- `offersSection`
- `faqSection`
- `locationSection`
- `bookingSection`

## 9. Testimonials

Add verified reviews to `testimonials`.

Example:

```js
export const testimonials = [
  {
    name: 'Jane Doe',
    quote: 'A wonderful stay and beautiful views.',
    source: 'Google',
    rating: 5,
  },
]
```

If the array is empty, the site shows a clean placeholder asking the owner to add genuine reviews.

## 10. Images

Put client images inside `public/images/`.

Then reference them like:

```js
img: '/images/deluxe-room.jpg'
```

or:

```js
image: '/images/hero.jpg'
```

Do not use Unsplash placeholders for a client delivery unless the license and usage are appropriate.

## 11. Before client delivery

Search the project for the old client's name and replace any remaining client-specific content.

Run:

```bash
npm install
npm run build
```

If the build passes, deploy.

### Important

`src/config.js` is the intended **single client-data control center** for this template. Keep the component structure unchanged when possible. This makes the template reusable for many hotels/lodges.
