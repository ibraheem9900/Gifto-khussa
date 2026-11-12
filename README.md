# Gifto Khussa

A premium, mobile-first khussa storefront for Gifto Khussa, Lahore. The preview is intentionally usable before the Supabase project is connected: product, cart, wishlist, orders and store settings use localStorage, while `supabase/schema.sql` and `supabase/seed.sql` are ready for the production data layer.

## Run locally

```bash
npm install
npm run dev
```

The app runs on port 3000. For a production-like local run:

```bash
npm run build
npm start
```

## Admin demo

Open `/admin`. The demo login accepts `admin@giftokhussa.com` and any non-empty password. Use **Store settings** to edit contact, WhatsApp, shipping and policy copy. Before production, replace the demo login with a server-side session and hashed password flow, then rotate the admin email and password.

## Supabase connection

1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`, then run `supabase/seed.sql`.
3. Copy `.env.example` to `.env` and add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. Add the service role key only to a server-side environment, never to browser code.
5. Replace the local data adapters in `src/App.jsx` with Supabase reads/writes for products, orders, newsletter and settings. The schema mirrors the browser data contracts.

## Images and logo replacement

The current preview uses the eight image URLs supplied at `selective-crimson-40h6x592.edgeone.dev` and maps them to named slots in `src/data.js`. The complete slot list, placement and recommended sizes live in [IMAGE-SLOTS.md](./IMAGE-SLOTS.md). Replace those entries with the owner's final URLs or connect the Admin image manager to Supabase Storage. The interim crimson-and-gold wordmark is a component; replace `Wordmark` and `public/favicon.svg` when the final logo arrives.

## WhatsApp ordering

The configured number is `+923094148870`. Cart checkout validates name, phone, address and city, saves a local pending order, and opens a structured `wa.me` message. Delivery is never calculated online: the visible text is “Delivery charges will be confirmed on WhatsApp.”

## Deployment

For a frontend-only first deployment, Vercel is the easiest option: import the project, set the `VITE_` variables, and use `npm run build` with `dist` as output. If you want the Express health endpoint and server-side persistence, deploy the included `Dockerfile` to Railway, Render or another Node container host, set `PORT=3000`, and point the frontend/API configuration to the deployed service.

## Notes

The UI is tuned for 360, 390, 414, 768, 1024 and 1440px widths, with a two-column mobile product grid, mobile filter sheet, thumb-friendly bottom navigation and reduced-motion CSS. The next production pass should connect the Supabase client, server-side authentication, image uploads/optimization, transactional order writes and real admin CRUD endpoints.
