insert into categories (name, slug) values
  ('Peshawari','peshawari'),('Embroidered','embroidered'),('Formal','formal'),('Bridal','bridal')
on conflict (slug) do nothing;

insert into outlets (name, address, note, phone, timings, map_link)
values ('Gifto Chappal & Khussa — Liberty Market','Gifto Chappal & Khussa, 23 Commercial Zone, Liberty Market Rd, Liberty Market, Gulberg 3, Lahore, Punjab, Pakistan','Located in Bareeze - Liberty Market','03094148870','Daily, 10:00 am – 10:00 pm','https://www.google.com/maps/search/?api=1&query=Gifto+Chappal+%26+Khussa+Liberty+Market+Lahore');

insert into site_settings (id, payload) values ('default', '{"storeName":"Gifto Khussa","whatsapp":"923094148870","phone":"03094148870","email":"info@giftokhussa.com","currency":"PKR","shippingText":"Delivery charges will be confirmed on WhatsApp."}') on conflict (id) do update set payload = excluded.payload;

-- The browser preview ships with the complete 12-product seed in src/data.js; copy that data into products/product_images after connecting Supabase.
