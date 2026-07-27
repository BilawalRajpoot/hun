# Smart Homes — Property Consultancy Website

An original Next.js real-estate agency website built for the "Smart Homes" brand.

This is **original design and copy**, structured (loosely) like a modern property-consultancy
landing page: hero, trust signals, an enquiry form, a societies/portfolio grid, payment-plan
previews, a "property primer" glossary, a process timeline, leadership cards, testimonials,
a journal/insights preview, office locations, and an FAQ.

All company details are placeholders — society names, team names, phone numbers, testimonials,
and press quotes are fictional and should be replaced with your real details before launch.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
pages/
  _app.js        Global app wrapper, imports global styles
  index.js       Assembles all page sections
components/      One component per section (Hero, Trust, Enquiry, Portfolio, ...)
styles/
  globals.css    Design tokens (colors, type) + all section styles
public/          Static assets (add your own logo/images here)
```

## Design tokens

- Colors: Ink `#12181B`, Mist `#EEF2F1`, Deep Teal `#1F4E4A`, Brass `#C98A3D`, Paper `#FBFAF7`
- Display type: Fraunces (serif) — Body type: Inter — Utility/data type: IBM Plex Mono
- Signature motif: architectural "blueprint dimension lines" (tick marks + measurements) used
  as section dividers and structural devices, echoing how land is measured in marla/kanal.

## Before you launch

- Swap placeholder society names, team members, phone numbers and email
- Replace testimonial and press quotes with real ones
- Add real photography to `/public`
- Update `og:image`, favicon, and metadata in `pages/_app.js` / `index.js`
