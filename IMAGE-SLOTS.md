# Gifto Khussa image slots

All current visuals point to the owner-supplied host `https://selective-crimson-40h6x592.edgeone.dev/` as temporary source material. Replace the URL in `src/data/assets.js` or through future Admin > Store Settings media controls.

| Slot | Placement | Recommended size | Mobile variant |
|---|---|---:|---|
| `logo-primary` | Header/footer wordmark | SVG or transparent PNG, 1200×400 | No |
| `logo-white` | Dark background wordmark | SVG or transparent PNG, 1200×400 | No |
| `favicon` | Browser tab | SVG or PNG, 512×512 | No |
| `hero-main-desktop` | Home hero | 2400×1400, 12:7 | Yes: `hero-main-mobile` 1200×1600 |
| `hero-floating-product` | Hero cutout/parallax | Transparent 1200×1200 | No |
| `collection-men` | Collection rail | 1400×1800, 7:9 | No |
| `collection-women` | Collection rail | 1400×1800, 7:9 | No |
| `collection-formal` | Collection rail | 1400×1800, 7:9 | No |
| `collection-wedding` | Collection rail | 1400×1800, 7:9 | No |
| `process-step-1`…`process-step-4` | Craftsmanship story | 1600×1200, 4:3 | No |
| `about-home-banner` | Home story | 2000×1300 | No |
| `instagram-gallery-1`…`instagram-gallery-6` | Social gallery | 1000×1000 | No |
| `shop-banner-desktop` | Shop masthead | 2400×700 | Yes: 1200×900 |
| `product-{slug}-main` | Product primary | 1600×2000, 4:5 | No |
| `product-{slug}-gallery-1`…`gallery-4` | Product gallery | 1600×2000, 4:5 | No |
| `about-banner` | About masthead | 2400×1200 | Yes: 1200×1500 |
| `about-artisan-1`…`artisan-3` | Artisan profiles | 1000×1250 | No |
| `about-workshop` | Workshop story | 1800×1200 | No |
| `contact-banner` | Contact masthead | 2400×900 | No |
| `contact-storefront` | Contact page | 1800×1200 | No |
| `outlet-main-banner` | Outlet locator | 2400×900 | No |
| `announcement-banner` | Promotions | 2400×500 | No |

Each seeded product supports multiple image URLs. When final images arrive, keep the `product-{slug}-...` convention so the admin uploader and database records stay predictable.
