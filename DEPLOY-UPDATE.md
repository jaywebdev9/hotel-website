# Demo update — fix before re-deploy

This version fixes:

- Local bundled website images (no Unsplash dependency)
- Responsive navbar overlap on desktop
- Desktop language switcher
- Location added to the navbar
- Reliable smooth-scroll navigation for navbar/footer/CTA links
- Testimonials rendering logic and demo testimonials
- Demo phone +255689995937 and WhatsApp 255689995937
- Favicon and Open Graph preview image

## Update the existing GitHub project from Termux

Replace the contents of your existing `hotel website` folder with this ZIP, keeping its `.git` folder. Then run:

```bash
git add .
git commit -m "Fix demo images navigation and responsive navbar"
git push origin main
```

Cloudflare Pages is connected to `main`, so the push will trigger a new deployment automatically.
