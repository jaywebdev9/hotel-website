# Loleza Ridge Lodge — V9 Final Polish

## Changes
- Hero description now has a dedicated high-contrast dark glass treatment, white text, text shadow and responsive spacing so it remains readable over the lodge photography.
- Footer redesigned with premium contact actions, Google Maps directions, WhatsApp concierge CTA and visible social icons.
- Social URLs remain configuration-driven in `src/config.js`; when an official profile URL is not yet supplied, the icon falls back to the platform homepage rather than inventing a hotel profile.
- Removed the unfinished “Add email address” placeholder when no email is configured.
- Improved footer spacing, hover/focus states and accessibility labels.
- Existing separate Terms, Privacy, Cookie and Accessibility routes remain unchanged.

## Important production configuration
Update `siteConfig.social` in `src/config.js` with the lodge's verified Instagram, Facebook and YouTube profile URLs before publishing.
