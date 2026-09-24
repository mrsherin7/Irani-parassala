-- ============================================================
-- Irani Restaurant Parassala — Supabase Database Schema
-- Apply via Supabase SQL editor or migration tool
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- MENU CATEGORIES
-- ============================================================
CREATE TABLE menu_categories (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL,
  slug          TEXT NOT NULL UNIQUE,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active     BOOLEAN NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- MENU ITEMS
-- ============================================================
CREATE TABLE menu_items (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id   UUID NOT NULL REFERENCES menu_categories(id) ON DELETE SET NULL,
  name          TEXT NOT NULL,
  slug          TEXT NOT NULL UNIQUE,
  description   TEXT,
  price         NUMERIC(10,2),
  image_url     TEXT,
  is_available  BOOLEAN NOT NULL DEFAULT TRUE,
  is_featured   BOOLEAN NOT NULL DEFAULT FALSE,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- GALLERY ITEMS
-- ============================================================
CREATE TABLE gallery_items (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title         TEXT,
  image_url     TEXT NOT NULL,
  category      TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_featured   BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- RESTAURANT SETTINGS (single row)
-- ============================================================
CREATE TABLE restaurant_settings (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_name TEXT NOT NULL DEFAULT 'Irani Restaurant',
  address         TEXT,
  phone           TEXT,
  whatsapp        TEXT,
  opening_hours   TEXT,
  maps_url        TEXT,
  instagram_url   TEXT,
  facebook_url    TEXT,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ADMIN PROFILES
-- ============================================================
CREATE TABLE admin_profiles (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name       TEXT,
  role       TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- menu_categories: public read, admin write
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read active categories"
  ON menu_categories FOR SELECT
  USING (is_active = TRUE);
CREATE POLICY "Admins can manage categories"
  ON menu_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- menu_items: public read available, admin write
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read available items"
  ON menu_items FOR SELECT
  USING (is_available = TRUE);
CREATE POLICY "Admins can manage menu items"
  ON menu_items FOR ALL
  USING (auth.role() = 'authenticated');

-- gallery_items: public read all
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read gallery"
  ON gallery_items FOR SELECT
  USING (TRUE);
CREATE POLICY "Admins can manage gallery"
  ON gallery_items FOR ALL
  USING (auth.role() = 'authenticated');

-- restaurant_settings: public read, admin write
ALTER TABLE restaurant_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read settings"
  ON restaurant_settings FOR SELECT
  USING (TRUE);
CREATE POLICY "Admins can update settings"
  ON restaurant_settings FOR ALL
  USING (auth.role() = 'authenticated');

-- admin_profiles: authenticated only
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage profiles"
  ON admin_profiles FOR ALL
  USING (auth.role() = 'authenticated');

-- ============================================================
-- SEED DATA — Menu Categories
-- ============================================================
INSERT INTO menu_categories (name, slug, display_order) VALUES
  ('Mandi',           'mandi',    1),
  ('Alfaham',         'alfaham',  2),
  ('Biriyani',        'biriyani', 3),
  ('Kerala Specials', 'kerala',   4),
  ('Chinese',         'chinese',  5),
  ('Starters',        'starters', 6),
  ('Shawarma',        'shawarma', 7),
  ('Beverages',       'beverages',8),
  ('Desserts',        'desserts', 9);

-- ============================================================
-- SEED — Default Restaurant Settings
-- ============================================================
INSERT INTO restaurant_settings (restaurant_name, address, phone, opening_hours)
VALUES (
  'Irani Restaurant',
  '85V3+62W, Parassala, Kerala 695502',
  '073060 48162',
  'Open daily · Closes around 11:30 PM'
);
