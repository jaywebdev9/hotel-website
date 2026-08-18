# Loleza Ridge Lodge — Website Template

Landing page ya kigezo (template) kwa hoteli/lodge, iliyotengenezwa na **React + Vite + Tailwind CSS + Framer Motion**.

## Jinsi ya kuiendesha (VS Code)

1. **Fungua folder hii kwenye VS Code.**

2. **Sakinisha Node.js** kama huna (toka [nodejs.org](https://nodejs.org) — chagua LTS version).

3. Fungua terminal ndani ya VS Code (`Ctrl + \`` au `Terminal > New Terminal`) kisha andika:

   ```bash
   npm install
   ```

   Hii itapakua maktaba zote (react, tailwind, framer-motion, lucide-react n.k.)

4. Anzisha local server:

   ```bash
   npm run dev
   ```

5. Fungua link itakayoonekana kwenye terminal (kawaida `http://localhost:5173`) kwenye browser yako — utaona website ikiwa live na animations zote zinafanya kazi.

6. Ukimaliza kuhariri na uko tayari kuituma kwa mteja/hosting, tengeneza production build:

   ```bash
   npm run build
   ```

   Hii itatengeneza folder `dist/` — hii ndiyo unayopakia (upload) kwenye Netlify, Vercel, au hosting nyingine yoyote.

## Kubadilisha content kwa mteja mwingine (kutumia template hii tena)

Kila sehemu ya website ipo kwenye faili yake tofauti ndani ya `src/components/`:

| Faili | Sehemu |
|---|---|
| `Hero.jsx` | Sehemu ya juu — headline, stats (rooms, elevation n.k.) |
| `About.jsx` | Maelezo ya kampuni/lodge |
| `Rooms.jsx` | Vyumba na bei — badilisha `rooms` array na majina, bei, picha |
| `Experiences.jsx` | Huduma/shughuli — badilisha `experiences` array |
| `Gallery.jsx` | Picha za gallery — badilisha `images` array |
| `Testimonials.jsx` | Maoni ya wateja — badilisha `testimonials` array |
| `Booking.jsx` | Namba za WhatsApp/simu |
| `Footer.jsx` | Anwani na namba za mawasiliano |

**Rangi na fonti** zipo kwenye `tailwind.config.js` (chini ya `theme.extend.colors` na `fontFamily`) — badilisha hapo tu na rangi zinabadilika sehemu zote za website mara moja.

**Picha** kwa sasa zinatoka Unsplash (placeholder) — badilisha `src="..."` na link ya picha halisi ya mteja, au weka picha zako kwenye folder `src/assets/` na uzi-import.

## Tech Stack

- **React 18** — muundo wa UI (components)
- **Vite** — build tool ya haraka
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll animations, page transitions, count-up stats
- **Lucide React** — icons


## Phase 4 — Multilingual

The site now includes a persistent language switcher for **Kiswahili (SW), English (EN), and French (FR)**. The selected language is stored in localStorage and the document `lang` attribute updates automatically. Booking form labels and the generated WhatsApp booking message follow the selected language.

Edit translations in `src/i18n.jsx`.


## Navbar correction
The primary navigation now includes an explicit **Rooms** link (`#rooms`) instead of the generic Accommodation label.
