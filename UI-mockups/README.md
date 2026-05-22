# CityPulse — Vercel-Theme Redesign Mockups

Static HTML mockups for reviewing the proposed UI/UX redesign **before** any
changes are made to the real Next.js app.

## How to view

Open `UI-mockups/index.html` directly in a browser:

```bash
open UI-mockups/index.html
```

The mockup uses the **real screenshots** from `public/screenshots/` via relative
paths (`../public/screenshots/...`), so all images appear exactly as they will
in production. It is fully interactive — carousels, modals, scroll animations,
sticky nav.

> This is a **design mockup only**. No production code (`app/`, `components/`)
> has been changed. Once you approve the direction, the redesign will be ported
> into the real React components.

---

## What changed — UI/UX (Vercel theme)

The same content and images, restyled into Vercel's design language:

| Area | Before | After (Vercel theme) |
|------|--------|----------------------|
| **Navigation** | None | Sticky translucent nav bar with blur, logo + links + CTA |
| **Background** | Flat black, glass-morphism cards | Pure black `#000`, hairline borders, subtle grid + radial glow |
| **Typography** | Bold/heavy headings | Geist font, tight letter-spacing, white→gray gradient headings |
| **Hero** | Full-bleed image with dark overlay | Centered text + framed product shot, grid backdrop, soft glow |
| **Cards** | Frosted glass, heavy shadows | Flat `#0c0c0c` cards, 1px hairline borders, quiet hover states |
| **Buttons** | Large rounded, heavy red glow | Compact, refined, subtle elevation |
| **Sections** | Uniform | Alternating feature rows + bento grids, mono "eyebrow" labels |
| **Carousels** | Always-visible chrome | Minimal — arrows on hover, slim animated dots |
| **Accent color** | Red used heavily | **Red kept but refined** — primary CTA, pulse dot, hover states only |

The **CityPulse red (`#FF1744`)** is preserved as the brand accent — it ties to
the "Pulse" identity (the animated heartbeat dot in the nav/badge) — but it is
applied with Vercel-style restraint instead of saturating the page.

---

## What changed — Copy (NYC → general "CityPulse")

All NYC-specific wording was generalized so the product reads as a city-agnostic
app. **Contrivance Inc. remains based in New York.**

| Location | Before | After |
|----------|--------|-------|
| Brand name | "CityPulse NYC" / "CityPulseNYC" | "CityPulse" |
| Hero headline | "CityPulseNYC" | "Experience your city through video." |
| Intro | "...platform for New York City" | "...platform for the city around you" |
| Intro | "Choose your borough — Manhattan, Brooklyn, Queens, Bronx, Staten Island" | "Choose your neighborhood and dive into area-specific content" |
| Intro | "iconic NYC landmarks ... tourist attractions" | "iconic city landmarks ... attractions" |
| Pulse Feed | "citywide collection of NYC video moments" | "citywide collection of local video moments" |
| Pulse Feed | "Borough Filtering — Manhattan to Staten Island" | "Neighborhood Filtering — From downtown to the suburbs" |
| Pulse Feed | "Browse by borough" | "Browse by neighborhood" |
| Friends Feed | "Found a funny NYC sighting?" | "Found a funny city sighting?" |
| Ask section | "Ask NYC Feature" / "Ask NYC Anything" | "Ask the City" / "Ask your city anything" |
| Ask section | "best brunch in Brooklyn" | "best brunch nearby" |
| Ask section | "vibes in specific boroughs" | "vibes in specific neighborhoods" |
| Ask section | "Williamsburg, SoHo, or the Lower East Side" | "trendy neighborhoods and creative districts" |
| How It Works | "Share NYC moments" / "Search via Ask NYC" | "Share local moments" / "Search via Ask the City" |
| Technology | "Multimodal AI That Understands NYC" | "...that understands your city" |
| About | "Most apps treat NYC like a database" | "Most apps treat your city like a database" |
| About | "chat about NYC discovery" | "chat about city discovery" |
| Footer | "hyperlocal NYC content" | "hyperlocal city content" |

**Kept intentionally** (Contrivance's location):
- About → "Contrivance Inc. • Based in New York"
- Footer → "Built with ❤️ in New York"

---

## Known caveat

Several screenshots still show **"Ask NYC"** and borough names *inside the app
UI itself* (e.g. `ask-nyc/*.png`, `vibe-manhattan.png`). Since you asked to keep
the same pictures, those images are unchanged — only the website copy around
them was generalized. Re-exporting those app screenshots later would fully
remove the remaining NYC references.

---

## Sections in the mockup

1. Sticky nav
2. Hero — framed product shot + grid/glow
3. What is CityPulse? — interactive carousel
4. The Pulse Feed — carousel + feature bento
5. Friends Feed & Stories — carousel + feature list
6. Ask the City — carousel + fashion-intelligence panel
7. How It Works — 3-step cards
8. Technology — AI-stack bento grid + stats row
9. About — story, company, contact CTA
10. Footer — multi-column
11. Modals — Waitlist, Contact, Demo video
