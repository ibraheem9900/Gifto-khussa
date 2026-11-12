# Gifto Khussa — implementation and design plan

## Scope

Build a production-ready mobile-first storefront for Gifto Khussa with a customer-facing catalog, product detail, WhatsApp-only ordering, wishlist, informational pages, outlet locator, and a responsive protected admin workspace. The first version uses local seeded data with Supabase-compatible schema/migrations and environment variables so it can be connected to Supabase later without replacing the UI.

## Architecture

- **Frontend:** React + Vite + Tailwind-compatible utility classes in a single responsive application.
- **Motion:** CSS keyframes and lightweight scroll observers for a smooth, GPU-friendly first pass; the animation layer is structured so GSAP/ScrollTrigger/Lenis can be added without changing page contracts.
- **Data:** A typed local data layer with `data/store.json`-style records in code for preview, plus `supabase/schema.sql` and `supabase/seed.sql` for the production database.
- **Admin:** Responsive admin route with demo auth state, product/category/outlet/order/review/settings views, and local persistence for editable settings until Supabase credentials are provided.
- **Assets:** Every visual is referenced by a named slot in `src/data/assets.ts`; the temporary crimson-gold wordmark is replaceable from Store Settings. The supplied image host is the preferred future source, while the first pass uses CSS/image-slot treatments rather than random stock imagery.
- **Delivery:** Vite dev server on port 3000, `.env.example`, README, Dockerfile, and deployment notes for Vercel plus a simple server-capable host.

## Design direction

### Alternatives considered

- **0.07 — Regal atelier:** saturated crimson, brass, cream, editorial product crops, and quiet ornament.
- **0.06 — Museum minimal:** parchment, charcoal, sparse gold rules, and archival typography.
- **0.05 — Night bazaar:** ink-black canvas, neon ruby accents, and more kinetic motion.

### Chosen: Regal atelier

- **Design movement:** Contemporary South Asian luxury editorial with atelier-level restraint.
- **Core principles:** Heritage without heaviness; generous negative space; tactile material cues; motion that feels like a slow reveal.
- **Color philosophy:** Crimson is the ownable signature—warm, celebratory and unmistakable. Brass gold signals craft and value, while ivory gives the product room to breathe and charcoal anchors commerce UI.
- **Layout paradigm:** Offset editorial composition: asymmetrical hero columns, full-bleed image moments, horizontal collection rails, and narrow reading measures rather than centered dashboard blocks.
- **Signature elements:** Fine brass rules, an embroidered rosette glyph, and small uppercase utility labels with wide tracking.
- **Interaction philosophy:** Every tap has a clear state; hover/press feedback is tactile and quiet. Mobile actions stay thumb-reachable with a fixed bottom bar and a non-overlapping WhatsApp action.
- **Animation:** Reveal opacity/transform only; use a 12px–28px travel range, staggered cards, subtle parallax on desktop, simplified motion on mobile, and disable non-essential motion under `prefers-reduced-motion`.
- **Typography:** Cormorant Garamond/Georgia-style serif for display headlines and Inter/system sans for labels, controls and body copy. Oversized editorial headlines pair with compact uppercase microcopy.
- **Brand essence:** Hand-finished khussa for modern South Asian wardrobes—cultured, intimate, assured.
- **Brand voice:** Warm, assured and specific. Example lines: “Made slowly. Worn everywhere.” and “A little ceremony for every step.”
- **Wordmark & logo:** A text-based interim wordmark with a custom rosette separator and small “HANDCRAFTED IN LAHORE” line; built as a component so the owner's final logo can replace it in one setting.
- **Signature brand color:** Gifto Crimson `#7D1F2A`.

## Main project structure

```text
src/
  components/       shared shell, cards, motion wrappers, forms
  data/             seed products, assets, store settings and slot manifest
  pages/            home, shop, product, cart, about, contact, info, admin
  lib/              formatting, local persistence, WhatsApp message builder
  styles/           global tokens and responsive styling
public/
  manus-routes.json
  favicon.svg
supabase/
  schema.sql
  seed.sql
server/
  index.js          local API/static server seam for future persistence
```

## Route set

`/`, `/shop`, `/product/:slug`, `/cart`, `/wishlist`, `/about`, `/contact`, `/faq`, `/shipping-returns`, `/size-guide`, `/privacy`, `/terms`, `/outlets`, `/admin`, `/admin/products`, `/admin/orders`, `/admin/settings`, plus a branded 404.

## Data and behavior notes

The public store has no customer account. Cart and wishlist use localStorage. WhatsApp messages include product lines, total, name, address, city, phone and notes; delivery text explicitly says “Delivery charges will be confirmed on WhatsApp.” Orders are locally recorded as pending and map directly to the Supabase `orders` table. Admin demo credentials are documented and settings changes persist locally until a database connector is configured.
