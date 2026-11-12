export const imageHost = 'https://selective-crimson-40h6x592.edgeone.dev';

export const suppliedImages = [
  `${imageHost}/2a129bcb3b339c6cc95f394a50d5132e.jpg`,
  `${imageHost}/4510aedc52499775baed61f45e02c5c7.jpg`,
  `${imageHost}/70341f008e71c9aa79d869dd14b5bde4.jpg`,
  `${imageHost}/854e2f8f413dae3333d81f0d4d86b97d.jpg`,
  `${imageHost}/8716ceaaa31d203d149cc9b02f79e2d0.jpg`,
  `${imageHost}/IMG-20261112-WA0082.jpg`,
  `${imageHost}/IMG-20261112-WA0084.jpg`,
  `${imageHost}/b22dd2fc59a1028ff500d18615ee823e.jpg`
];

export const assets = {
  hero: suppliedImages[5],
  heroMobile: suppliedImages[6],
  floatingProduct: suppliedImages[0],
  about: suppliedImages[2],
  shopBanner: suppliedImages[3],
  contact: suppliedImages[4],
  collections: [suppliedImages[1], suppliedImages[7], suppliedImages[5], suppliedImages[6]],
  process: [suppliedImages[0], suppliedImages[2], suppliedImages[4], suppliedImages[7]],
  gallery: suppliedImages,
  logo: '/favicon.svg'
};

export const categories = ['All', 'Peshawari', 'Embroidered', 'Formal', 'Bridal'];

const productNames = [
  'Noor Gold', 'Gul-e-Rang', 'Mitti Ivory', 'Mehr Maroon', 'Sunehri Jaal', 'Dastkaar Black',
  'Rani Rose', 'Safa Pearl', 'Bazaar Brown', 'Aangan Olive', 'Chaand Silver', 'Lahore Classic'
];
const productDescriptions = [
  'Hand-finished leather khussa with a softly burnished toe and heirloom-inspired stitchwork.',
  'A fine everyday silhouette lifted by delicate threadwork and a comfortable leather sole.',
  'Quiet ivory, considered texture and a softly structured shape for long, easy days.',
  'A rich crimson pair with tonal embroidery for dinner, daawat and everything after.',
  'Fine metallic detail meets a clean almond toe in this occasion-ready pair.',
  'A charcoal classic with subtle handwork for a modern wardrobe.',
  'Warm rose tones and a floral motif bring a little ceremony to every step.',
  'Pearl-like highlights, ivory leather and a graceful profile for celebrations.',
  'A warm brown everyday pair designed to soften beautifully with wear.',
  'A muted olive take on the classic khussa, finished with a hand-stitched edge.',
  'A cool silver accent pair that catches light without asking for attention.',
  'Our most versatile Lahore silhouette: balanced, polished and easy to wear.'
];

export const products = productNames.map((name, index) => ({
  id: `p-${index + 1}`,
  slug: name.toLowerCase().replaceAll(' ', '-'),
  name,
  category: categories[(index % 4) + 1],
  price: 3200 + ((index * 475) % 3800),
  compareAt: index % 3 === 0 ? 5400 + index * 120 : null,
  color: ['Gold', 'Rose', 'Ivory', 'Maroon', 'Black', 'Pearl'][index % 6],
  sizes: ['36', '37', '38', '39', '40', '41', '42'],
  stock: 4 + ((index * 3) % 8),
  featured: index < 6,
  newArrival: index < 4,
  bestSeller: index === 0 || index === 3 || index === 8,
  description: productDescriptions[index],
  image: suppliedImages[index % suppliedImages.length],
  gallery: [0, 1, 2].map(offset => suppliedImages[(index + offset) % suppliedImages.length]),
  details: ['Hand-finished leather upper', 'Cushioned inner sole', 'Made in Lahore', 'Delivery confirmed on WhatsApp']
}));

export const initialSettings = {
  storeName: 'Gifto Khussa',
  tagline: 'Made slowly. Worn everywhere.',
  whatsapp: '923094148870',
  phone: '03094148870',
  email: 'info@giftokhussa.com',
  currency: 'PKR',
  shippingText: 'Delivery charges will be confirmed on WhatsApp.',
  announcement: 'Complimentary size guidance over WhatsApp · Lahore craft, delivered nationwide',
  address: 'Gifto Chappal & Khussa, 23 Commercial Zone, Liberty Market Rd, Liberty Market, Gulberg 3, Lahore, Punjab, Pakistan',
  outletNote: 'Located in Bareeze - Liberty Market',
  timings: 'Daily, 10:00 am – 10:00 pm',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Gifto+Chappal+%26+Khussa+Liberty+Market+Lahore',
  instagram: '',
  facebook: '',
  tiktok: '',
  returnPolicy: 'We offer exchanges for size issues within 7 days of delivery. Items must be unused, unworn and returned in their original condition and packaging. Please contact us on WhatsApp before sending anything back.',
  newsletterBlurb: 'Join the private edit for new drops, craft notes and quiet little invitations.'
};

export const outlets = [{
  id: 'outlet-liberty',
  name: 'Gifto Chappal & Khussa — Liberty Market',
  address: initialSettings.address,
  note: initialSettings.outletNote,
  timings: initialSettings.timings,
  phone: initialSettings.phone,
  mapLink: initialSettings.mapLink
}];

export const testimonials = [
  { quote: 'The finish is beautiful and the fit guidance on WhatsApp made ordering effortless.', name: 'Ayesha R.', city: 'Lahore' },
  { quote: 'A pair that feels special without waiting for a special occasion.', name: 'Maha K.', city: 'Islamabad' },
  { quote: 'The maroon pair has become my signature. Soft, polished and unmistakably ours.', name: 'Zara F.', city: 'Karachi' }
];

export const imageSlots = [
  ['hero-main-desktop', 'Home hero', '2400 × 1400 px', 'Desktop'],
  ['hero-main-mobile', 'Home hero', '1200 × 1600 px', 'Mobile'],
  ['hero-floating-product', 'Hero parallax product', 'Transparent 1200 × 1200 px', 'All'],
  ['collection-men', 'Featured collections', '1400 × 1800 px', 'All'],
  ['collection-women', 'Featured collections', '1400 × 1800 px', 'All'],
  ['collection-formal', 'Featured collections', '1400 × 1800 px', 'All'],
  ['collection-wedding', 'Featured collections', '1400 × 1800 px', 'All'],
  ['process-step-1 to 4', 'Handcrafted process', '1600 × 1200 px each', 'All'],
  ['about-home-banner', 'Home story', '2000 × 1300 px', 'All'],
  ['instagram-gallery-1 to 6', 'Social gallery', '1000 × 1000 px each', 'All'],
  ['shop-banner-desktop/mobile', 'Shop masthead', '2400 × 700 / 1200 × 900 px', 'Responsive'],
  ['product-{slug}-main/gallery-1…4', 'Product image gallery', '1600 × 2000 px each', 'All'],
  ['about-banner / artisan-1…3 / workshop', 'About page', '2400 × 1200 / 1000 × 1250 / 1800 × 1200 px', 'All'],
  ['contact-banner / storefront', 'Contact page', '2400 × 900 / 1800 × 1200 px', 'All'],
  ['outlet-main-banner', 'Outlet locator', '2400 × 900 px', 'All'],
  ['logo-primary / logo-white / favicon', 'Global brand', 'SVG preferred', 'All']
];
