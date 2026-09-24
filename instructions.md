# Irani Restaurant Parassala --- Website Project Specification

## 1. Project Overview

Build a modern, premium, responsive restaurant website for **Irani
Restaurant, Parassala, Kerala**.

The restaurant currently has a Google Business presence but does not
have a dedicated official website. The goal is to create a professional
website that helps customers:

-   Discover the restaurant
-   Explore the menu
-   View signature dishes
-   See food and restaurant photos
-   Find the restaurant easily
-   Call the restaurant
-   Contact/order through WhatsApp
-   Understand opening hours and services

The website should also be structured so it can later be connected to a
lightweight admin dashboard for restaurant staff.

### Current Business Information

-   **Business:** Irani Restaurant
-   **Location:** 85V3+62W, Parassala, Kerala 695502
-   **Phone:** 073060 48162
-   **Approximate price range:** ₹200--₹400 per person
-   **Services:** Dine-in, drive-through, no-contact delivery
-   **Google rating shown in research:** 3.9/5 from approximately 1,565
    reviews
-   **Current Google-listed status:** Open, closes around 11:30 PM
-   **Popular dishes shown:** Chicken Kuzhimandhi, Kuzhi Mandhi, Kerala
    Parotta, Chicken Alfaham Quarter, Chicken 65, Chicken Biriyani,
    Falooda, Beef Roast, Porotta Chicken Fry, Chilly Chicken Curry,
    Mutton Kuzhimandhi, Plate Shawarma

> Important: Do not present unverified claims as facts. Before
> production launch, confirm the restaurant's exact menu, prices,
> opening hours, WhatsApp number, story, photos, and business
> information with the owner.

------------------------------------------------------------------------

# 2. Main Goal

Create a website that feels like a **premium modern restaurant brand**,
not a generic restaurant template.

The design should communicate:

-   Authentic food
-   Warm hospitality
-   Arabian + Kerala food identity
-   Premium but approachable dining
-   Strong food photography
-   Easy navigation
-   Mobile-first usability

The website should be visually impressive enough to use as a real
freelance client project.

------------------------------------------------------------------------

# 3. Design Direction

## Visual Style

Use a combination of:

-   Premium restaurant aesthetics
-   Warm Arabian/Indian visual language
-   Modern editorial layouts
-   Elegant typography
-   Large food photography
-   Spacious layouts
-   Subtle motion
-   Strong visual hierarchy

### Suggested visual language

-   Warm cream / ivory base
-   Deep charcoal / espresso text
-   Muted brown tones
-   Subtle gold/brass accent
-   Natural food photography
-   Soft shadows
-   Rounded corners used sparingly
-   Thin borders
-   Large typography

Do NOT make the interface overly colorful.

Do NOT use excessive gradients.

Do NOT use excessive glassmorphism.

Do NOT make every section a card.

Do NOT use generic stock-template layouts.

The final result should feel closer to a premium hospitality brand
website.

------------------------------------------------------------------------

# 4. Recommended Tech Stack

Use a modern production-ready stack.

### Frontend

-   React
-   Vite
-   JavaScript or TypeScript
-   Tailwind CSS
-   Lucide React icons
-   Framer Motion or another lightweight animation solution

### Backend / Database

For the first version, keep the architecture simple.

Preferred:

-   Supabase
-   Supabase PostgreSQL
-   Supabase Storage
-   Supabase Auth for admin authentication

The architecture should make it possible to replace static content with
database-driven content later.

### Deployment

Prepare the project for deployment on:

-   Vercel

The application must work correctly on desktop, tablet and mobile.

------------------------------------------------------------------------

# 5. Pages

Create these main pages/routes.

## `/`

Homepage

## `/menu`

Full digital menu

## `/about`

Restaurant story/about page

## `/gallery`

Food and restaurant gallery

## `/contact`

Contact, location, opening hours and directions

## `/admin`

Admin dashboard

Protect `/admin` using authentication.

------------------------------------------------------------------------

# 6. Homepage

The homepage should have the following structure.

## Navbar

Include:

-   Restaurant logo/name
-   Home
-   Menu
-   About
-   Gallery
-   Contact
-   CTA button: "View Menu"

On mobile:

-   Hamburger menu
-   Smooth mobile navigation

Navbar should become sticky after scrolling.

------------------------------------------------------------------------

## Hero Section

Large, high-quality food/restaurant image.

Content:

### IRANI RESTAURANT

**Parassala, Kerala**

Headline example:

> Authentic flavours. Made to be shared.

Supporting text:

> Arabian favourites, Kerala classics and delicious dishes served in the
> heart of Parassala.

Buttons:

-   View Menu
-   Get Directions

Add a subtle scroll indicator.

Hero should be visually dominant.

Do not overcrowd it with text.

------------------------------------------------------------------------

# 7. Signature Dishes Section

Create a premium food showcase.

Heading:

**Signature Favourites**

Show approximately 4--6 dishes.

Initial content can use:

-   Chicken Kuzhimandhi
-   Chicken Alfaham
-   Chicken Biriyani
-   Mutton Kuzhimandhi
-   Kerala Parotta
-   Plate Shawarma

Each item:

-   Image
-   Name
-   Short description
-   Price placeholder if not confirmed
-   View Menu link

Do not invent prices.

If a price is unknown, use no price or a placeholder that is clearly
marked for admin editing.

------------------------------------------------------------------------

# 8. Restaurant Introduction

Create an editorial-style section.

Heading:

**Good Food. Good Moments.**

Use a short, natural description:

> Irani Restaurant, Parassala brings together Arabian-inspired
> favourites, Kerala classics and popular Indian dishes in a comfortable
> dining atmosphere.

Include:

-   Restaurant image
-   Short text
-   "Discover Our Story" button

Do not invent founding dates, awards, history or claims.

------------------------------------------------------------------------

# 9. Menu Preview

Create a section that introduces the full menu.

Categories:

-   Mandi
-   Alfaham
-   Biriyani
-   Kerala Specials
-   Chinese
-   Starters
-   Shawarma
-   Beverages
-   Desserts

CTA:

**Explore Full Menu**

The menu should eventually be database-driven.

------------------------------------------------------------------------

# 10. Menu Page

The menu page is one of the most important parts of the website.

Create a clean digital menu.

### Category navigation

Use a sticky horizontal category selector on desktop/mobile.

Example:

``` text
Mandi
Alfaham
Biriyani
Kerala
Chinese
Starters
Shawarma
Drinks
Desserts
```

Each menu item should contain:

-   Food image
-   Food name
-   Description
-   Price
-   Category
-   Vegetarian/non-vegetarian indicator if confirmed
-   Availability status

Example data structure:

``` js
{
  id: "1",
  name: "Chicken Kuzhimandhi",
  category: "Mandi",
  description: "Aromatic mandi rice served with grilled chicken.",
  price: 0,
  image: "",
  available: true,
  featured: true
}
```

Do not hard-code unverified prices.

------------------------------------------------------------------------

# 11. WhatsApp Ordering / Enquiry

Implement a simple WhatsApp order/enquiry workflow.

This is NOT a full delivery platform.

The user should be able to:

1.  Browse menu
2.  Select items
3.  Add items to an enquiry/order list
4.  Review selected items
5.  Click "Order via WhatsApp"
6.  WhatsApp opens with a pre-filled message

Example:

``` text
Hello Irani Restaurant,

I would like to enquire/order:

Chicken Kuzhimandhi x 1
Chicken Alfaham x 2
Kerala Parotta x 4

Please confirm availability and total amount.

Thank you.
```

The WhatsApp number must be configurable through the admin settings.

Do not hard-code a fake WhatsApp number.

------------------------------------------------------------------------

# 12. Gallery

Create a premium masonry/editorial gallery.

Categories:

-   Food
-   Restaurant
-   Interior
-   Exterior
-   Ambience

Use responsive image layouts.

Images should open in a lightbox.

Support:

-   Next/previous
-   Close
-   Mobile swipe if practical

Images should have lazy loading.

Do not use low-quality images in the final production version.

Create image placeholders during development if actual restaurant photos
are not available.

------------------------------------------------------------------------

# 13. About Page

Create a clean restaurant story page.

Sections:

### Our Story

Short restaurant introduction.

### What We Serve

Explain the combination of:

-   Arabian dishes
-   Kerala favourites
-   Indian dishes
-   Chinese dishes
-   Beverages and desserts

### Dining Experience

Talk about the atmosphere without making unsupported claims.

### Visit Us

Location + map + directions CTA.

Keep copy concise and premium.

------------------------------------------------------------------------

# 14. Contact Page

Include:

### Restaurant

Irani Restaurant

### Address

85V3+62W, Parassala, Kerala 695502

### Phone

073060 48162

### Opening Hours

Use an editable value.

Do not permanently hard-code the current Google opening time because
restaurant hours can change.

### Actions

-   Call Now
-   WhatsApp
-   Get Directions

### Map

Embed a Google Maps location.

Use a configurable Google Maps URL or embed configuration.

------------------------------------------------------------------------

# 15. Get Directions

Create a button that opens Google Maps.

Use the restaurant's exact location.

Do not fabricate coordinates.

Use the verified Google Maps place/location URL supplied during final
configuration.

------------------------------------------------------------------------

# 16. Admin Dashboard

Create `/admin`.

The admin panel should look like a professional SaaS dashboard.

Design inspiration:

-   Linear
-   Vercel
-   Stripe
-   Modern restaurant POS/admin systems

Keep it clean and minimal.

------------------------------------------------------------------------

## Admin Authentication

Use Supabase Auth.

Only authenticated admins can access `/admin`.

Protect admin routes.

Do not expose database credentials in frontend code.

Never put Supabase service-role keys in client-side code.

------------------------------------------------------------------------

# 17. Admin Dashboard Features

## Dashboard Overview

Show:

-   Total menu items
-   Available dishes
-   Featured dishes
-   Gallery images
-   Recent enquiries if implemented

Use simple statistics cards.

------------------------------------------------------------------------

## Menu Management

Admin can:

-   Add item
-   Edit item
-   Delete item
-   Change price
-   Change description
-   Change category
-   Upload image
-   Mark available/unavailable
-   Mark featured/unfeatured

------------------------------------------------------------------------

## Category Management

Admin can:

-   Add category
-   Rename category
-   Reorder category
-   Hide/show category

------------------------------------------------------------------------

## Gallery Management

Admin can:

-   Upload image
-   Add title
-   Add category
-   Delete image
-   Reorder images
-   Mark featured

Use Supabase Storage.

------------------------------------------------------------------------

## Restaurant Settings

Admin can update:

-   Restaurant name
-   Address
-   Phone
-   WhatsApp number
-   Opening hours
-   Google Maps URL
-   Instagram URL
-   Other social links

------------------------------------------------------------------------

# 18. Database Design

Create a clean Supabase schema.

Suggested tables:

## `menu_categories`

``` text
id
name
slug
display_order
is_active
created_at
```

## `menu_items`

``` text
id
category_id
name
slug
description
price
image_url
is_available
is_featured
display_order
created_at
updated_at
```

## `gallery_items`

``` text
id
title
image_url
category
display_order
is_featured
created_at
```

## `restaurant_settings`

``` text
id
restaurant_name
address
phone
whatsapp
opening_hours
maps_url
instagram_url
updated_at
```

## `admin_profiles`

``` text
id
user_id
name
role
created_at
```

------------------------------------------------------------------------

# 19. Security

Implement proper Supabase Row Level Security.

Public users:

-   Can read active menu items
-   Can read active categories
-   Can read gallery
-   Can read public restaurant settings

Authenticated admins:

-   Can create/update/delete menu items
-   Can manage categories
-   Can manage gallery
-   Can update restaurant settings

Never trust frontend-only admin checks.

Use database RLS policies.

------------------------------------------------------------------------

# 20. Responsive Design

The website MUST be mobile-first.

Test layouts at:

-   320px
-   375px
-   390px
-   430px
-   768px
-   1024px
-   1280px
-   1440px
-   1920px

Important mobile requirements:

-   No horizontal overflow
-   Large touch targets
-   Readable typography
-   Sticky mobile navigation where appropriate
-   Menu category navigation should remain usable
-   WhatsApp CTA should be easy to access
-   Images should crop correctly
-   Buttons should not become too small

------------------------------------------------------------------------

# 21. Animations

Use subtle animations.

Examples:

-   Hero text fade/slide
-   Image reveal
-   Section reveal on scroll
-   Menu item hover
-   Button hover
-   Navbar transition
-   Gallery transitions

Animations must be:

-   Smooth
-   Fast
-   Premium
-   Non-distracting

Respect `prefers-reduced-motion`.

Do not use excessive animations.

------------------------------------------------------------------------

# 22. Performance

Optimize for:

-   Fast initial load
-   Lazy-loaded images
-   Responsive images
-   Proper image compression
-   Code splitting where useful
-   Minimal JavaScript
-   Good Lighthouse performance

Avoid unnecessary libraries.

------------------------------------------------------------------------

# 23. SEO

Implement:

-   Proper page titles
-   Meta descriptions
-   Open Graph metadata
-   Semantic HTML
-   Structured headings
-   Image alt text
-   Restaurant LocalBusiness schema where appropriate
-   Canonical URLs

Suggested homepage title:

**Irani Restaurant Parassala \| Mandi, Alfaham & Kerala Cuisine**

Suggested description:

**Discover Irani Restaurant in Parassala, Kerala --- serving mandi,
alfaham, biriyani, Kerala favourites and more. View the menu, find
directions and contact us.**

Do not claim "best" or other unsupported superlatives.

------------------------------------------------------------------------

# 24. Accessibility

Implement:

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   Proper button labels
-   Alt text
-   Sufficient contrast
-   Accessible dialogs/lightboxes
-   ARIA only where necessary
-   Reduced motion support

------------------------------------------------------------------------

# 25. Components

Create reusable components.

Suggested structure:

``` text
src/
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── Hero
│   ├── SectionHeading
│   ├── DishCard
│   ├── MenuCategoryTabs
│   ├── MenuItemCard
│   ├── GalleryGrid
│   ├── GalleryLightbox
│   ├── WhatsAppButton
│   ├── LocationSection
│   ├── OpeningHours
│   └── Button
│
├── pages/
│   ├── Home
│   ├── Menu
│   ├── About
│   ├── Gallery
│   ├── Contact
│   └── Admin
│
├── admin/
│   ├── Dashboard
│   ├── MenuManagement
│   ├── CategoryManagement
│   ├── GalleryManagement
│   └── Settings
│
├── lib/
│   ├── supabase
│   └── whatsapp
│
├── data/
│   └── fallbackData
│
└── styles/
```

Adapt the structure to the chosen framework.

------------------------------------------------------------------------

# 26. Development Strategy

Build the project in phases.

## Phase 1 --- UI

First create:

-   Navbar
-   Homepage
-   Menu page
-   About page
-   Gallery page
-   Contact page
-   Responsive layout
-   Animations

Use realistic placeholder data.

Do not wait for Supabase to begin UI development.

------------------------------------------------------------------------

## Phase 2 --- Supabase

Add:

-   Database
-   Storage
-   Authentication
-   RLS
-   Menu CRUD
-   Gallery CRUD
-   Restaurant settings

------------------------------------------------------------------------

## Phase 3 --- WhatsApp

Add:

-   Cart/enquiry state
-   Selected items
-   Quantity
-   WhatsApp message generator
-   WhatsApp CTA

------------------------------------------------------------------------

## Phase 4 --- Admin

Complete:

-   Authentication
-   Dashboard
-   Menu management
-   Category management
-   Gallery management
-   Settings management

------------------------------------------------------------------------

## Phase 5 --- Production Polish

Perform:

-   Responsive testing
-   Accessibility testing
-   SEO
-   Performance optimization
-   Error states
-   Loading states
-   Empty states
-   Form validation
-   Image optimization
-   Security review

------------------------------------------------------------------------

# 27. UX Requirements

Always show useful states.

For database content:

### Loading

Show elegant skeleton loaders.

### Empty

Example:

> No dishes available in this category.

### Error

Example:

> Something went wrong while loading the menu. Please try again.

### Success

Example:

> Menu item updated successfully.

Do not leave users looking at blank screens.

------------------------------------------------------------------------

# 28. Error Handling

Handle:

-   Failed Supabase requests
-   Image upload failures
-   Authentication failures
-   Invalid forms
-   Missing menu data
-   Broken image URLs
-   WhatsApp configuration missing

Never expose raw database errors to users.

------------------------------------------------------------------------

# 29. Content Rules

Do not invent:

-   Awards
-   Founding year
-   Restaurant history
-   Owner names
-   Certifications
-   Exact prices
-   Exact opening hours
-   Social media accounts
-   WhatsApp number
-   Customer testimonials

unless confirmed.

Use placeholders or configurable values for missing information.

------------------------------------------------------------------------

# 30. Final Homepage Experience

The user journey should be:

``` text
Google / Social Media
        ↓
    Website
        ↓
  Beautiful Hero
        ↓
  Signature Dishes
        ↓
     Menu Preview
        ↓
    Full Menu
        ↓
Choose Food / Explore
        ↓
WhatsApp Enquiry
        ↓
Visit Restaurant
```

The website should make the restaurant's important information
accessible within seconds.

------------------------------------------------------------------------

# 31. Future Scope

Keep the architecture ready for future additions:

-   Online ordering
-   Online payment
-   Table reservation
-   Customer accounts
-   Order tracking
-   Delivery integration
-   Coupon system
-   Loyalty program
-   Customer reviews
-   Restaurant analytics
-   QR-code digital menu
-   Table-specific ordering
-   Kitchen order management

Do NOT build these features now unless explicitly requested.

------------------------------------------------------------------------

# 32. QR Menu Future Feature

A future version can support:

``` text
Customer enters restaurant
        ↓
Scans QR code
        ↓
Digital Menu
        ↓
Selects food
        ↓
Sends order to restaurant
```

Design the menu page so it can later work well from a QR code.

------------------------------------------------------------------------

# 33. Branding

Until official branding assets are supplied:

Use a text-based wordmark:

**IRANI**

Small supporting text:

**RESTAURANT · PARASSALA**

Do not create a fake official logo and present it as the restaurant's
real logo.

Create a temporary visual identity only for development.

------------------------------------------------------------------------

# 34. Important Client Handoff

Before launching the website, collect from the restaurant owner:

-   Official logo
-   Official restaurant photos
-   Food photos
-   Final menu
-   Final prices
-   Opening hours
-   WhatsApp number
-   Phone number confirmation
-   Google Maps link
-   Instagram/social links
-   Restaurant description/story
-   Delivery information
-   Any accepted payment methods
-   Any special offers

Replace all placeholder content before production launch.

------------------------------------------------------------------------

# 35. Antigravity Execution Instructions

You are the coding agent for this project.

Do not only generate a landing page.

Build the complete project architecture described in this document.

### Start by:

1.  Inspecting the existing project files.
2.  Determining the current framework and dependencies.
3.  Preserving useful existing code if present.
4.  Creating a clean component architecture.
5.  Building the homepage first.
6.  Building the remaining public pages.
7.  Making the UI fully responsive.
8.  Adding realistic development data.
9.  Preparing Supabase integration.
10. Creating the admin architecture.
11. Adding authentication and RLS.
12. Implementing WhatsApp enquiry flow.
13. Testing all routes.
14. Fixing console errors.
15. Fixing responsive issues.
16. Optimizing performance.
17. Preparing the project for Vercel deployment.

Do not stop after creating the visual homepage.

------------------------------------------------------------------------

# 36. Code Quality Rules

Use:

-   Reusable components
-   Clean naming
-   Modular files
-   Proper error handling
-   Environment variables
-   No exposed secrets
-   No unnecessary dependencies
-   No duplicated UI code
-   No massive single-file components

Use `.env` for configuration.

Example:

``` env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_WHATSAPP_NUMBER=
VITE_GOOGLE_MAPS_URL=
```

Never commit `.env`.

Create `.env.example`.

------------------------------------------------------------------------

# 37. Final Quality Standard

Before considering the project complete, verify:

-   [ ] Homepage works
-   [ ] Menu page works
-   [ ] About page works
-   [ ] Gallery works
-   [ ] Contact page works
-   [ ] Navigation works
-   [ ] Mobile navigation works
-   [ ] WhatsApp workflow works
-   [ ] Google Maps button works
-   [ ] Phone button works
-   [ ] Admin authentication works
-   [ ] Admin dashboard works
-   [ ] Menu CRUD works
-   [ ] Gallery management works
-   [ ] Restaurant settings work
-   [ ] Supabase RLS is configured
-   [ ] No secret keys are exposed
-   [ ] No console errors
-   [ ] No horizontal overflow
-   [ ] Images are optimized
-   [ ] SEO metadata exists
-   [ ] Accessibility basics are implemented
-   [ ] Loading states exist
-   [ ] Error states exist
-   [ ] Empty states exist
-   [ ] Production build succeeds
-   [ ] Vercel deployment configuration is ready

------------------------------------------------------------------------

# 38. Definition of Done

The project is complete when it feels like a real, polished restaurant
website that could be shown directly to the owner of Irani Restaurant.

The final result should be:

**Premium + Fast + Mobile-first + Easy to maintain +
Restaurant-focused + Production-ready.**

Do not make it look like a student project.
