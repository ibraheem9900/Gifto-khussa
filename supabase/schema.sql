create extension if not exists pgcrypto;

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  price integer not null check (price >= 0),
  compare_at integer check (compare_at is null or compare_at >= price),
  category_id uuid references categories(id) on delete set null,
  color text,
  sizes text[] not null default '{}',
  stock integer not null default 0,
  featured boolean not null default false,
  new_arrival boolean not null default false,
  best_seller boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order integer not null default 0
);

create table if not exists outlets (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text not null,
  note text,
  phone text,
  timings text,
  map_link text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  address text,
  city text,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  customer_id uuid references customers(id) on delete set null,
  status text not null default 'pending' check (status in ('pending','confirmed','shipped','delivered','cancelled')),
  subtotal integer not null default 0,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  size text,
  color text,
  quantity integer not null check (quantity > 0),
  unit_price integer not null check (unit_price >= 0)
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  customer_name text not null,
  rating integer not null check (rating between 1 and 5),
  body text not null,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists site_settings (
  id text primary key default 'default',
  payload jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists admins (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists products_category_idx on products(category_id);
create index if not exists products_active_idx on products(active);
create index if not exists orders_status_idx on orders(status);
create index if not exists product_images_product_idx on product_images(product_id, sort_order);
