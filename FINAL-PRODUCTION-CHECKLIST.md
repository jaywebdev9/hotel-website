# Loleza Ridge Lodge — Final Production Checklist

## 1. Property content — client must verify
- [ ] Official lodge name and logo
- [ ] Exact address and Google Maps pin
- [ ] Phone number
- [ ] WhatsApp number (digits only, country code)
- [ ] Official email
- [ ] Instagram, Facebook, TripAdvisor and Booking.com URLs
- [ ] Real room names, photos, sizes, beds, guest limits and rates
- [ ] Real amenities only
- [ ] Real offers/packages only
- [ ] Verified guest reviews only
- [ ] Check-in and check-out times
- [ ] Cancellation, deposit, refund and no-show rules
- [ ] Children and pet policies
- [ ] Payment methods
- [ ] Airport transfer policy and pricing, if offered

## 2. Legal
- [ ] Client reviews and approves Terms & Conditions
- [ ] Client reviews and approves Privacy Policy
- [ ] Client reviews and approves Cookie Policy
- [ ] Client reviews and approves Accessibility Statement
- [ ] Replace template wording where the lodge has specific policies
- [ ] Add the lodge's legal/business contact details

## 3. Booking
- [ ] Book Now opens correctly
- [ ] Room is pre-selected when booking from a room card
- [ ] Check-in cannot be before today
- [ ] Check-out must be after check-in
- [ ] Nights and estimated total calculate correctly
- [ ] Guest details validate
- [ ] Terms + Privacy consent is required
- [ ] WhatsApp number is configured
- [ ] WhatsApp message is tested on Android and desktop
- [ ] Lodge confirms that this is a request, not instant availability

## 4. SEO
- [ ] Final domain is configured in production
- [ ] `SITE_URL` is set during build
- [ ] `robots.txt` is accessible
- [ ] `sitemap.xml` is generated with the real domain
- [ ] Title and meta description are verified
- [ ] Canonical URL is correct
- [ ] Open Graph image is added
- [ ] LodgingBusiness structured data is validated
- [ ] Real business address/phone are present where appropriate
- [ ] Image alt text is reviewed

## 5. Google
- [ ] Google Search Console property verified
- [ ] Sitemap submitted
- [ ] Homepage inspected and indexing requested
- [ ] Important URLs inspected
- [ ] Google Business Profile claimed/verified by the client
- [ ] Website URL added to the Business Profile
- [ ] Google Maps location is correct
- [ ] Business name, address and phone are consistent

## 6. Quality assurance
- [ ] Production build succeeds with `npm run build`
- [ ] Preview build tested
- [ ] Desktop QA: 1280px+
- [ ] Tablet QA
- [ ] Mobile QA: 320px–430px
- [ ] Navbar links work
- [ ] Rooms section works
- [ ] Gallery/lightbox works
- [ ] FAQ works
- [ ] Language switch works: SW / EN / FR
- [ ] Legal links work
- [ ] Keyboard navigation works
- [ ] Reduced-motion preference works
- [ ] No console errors
- [ ] No broken images
- [ ] HTTPS works
- [ ] 404 handling is tested
- [ ] WhatsApp, phone, email and Maps links are tested

## 7. Build and deploy

For a final production build:

```bash
SITE_URL=https://your-real-domain.co.tz npm run build
```

On Cloudflare Pages, set `SITE_URL` as an environment variable so the build generates the correct sitemap.

## 8. Client handover
- [ ] Domain ownership remains with the client
- [ ] Client has access to the domain registrar
- [ ] Client has access to Google Business Profile
- [ ] Client has access to Google Search Console
- [ ] Client receives website/admin credentials if any are added
- [ ] Client receives a backup/source repository copy
- [ ] Maintenance/support terms are documented
