import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import DishCard from '../components/DishCard'
import { FEATURED_DISHES, MENU_CATEGORIES, RESTAURANT_INFO } from '../data/fallbackData'

/* ==========================================
   HERO
   ========================================== */
function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-800">
        {/* Warm textured background — placeholder until real photo added */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 50%, rgba(184,135,42,0.25) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 80%, rgba(139,90,50,0.2) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/20 via-transparent to-charcoal-900/60" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-gold-400 text-[10px] font-sans uppercase tracking-widest mb-6"
            style={{ letterSpacing: '0.28em' }}
          >
            <MapPin size={11} />
            Parassala, Kerala
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-cream-50 font-light leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.01em' }}
          >
            Authentic flavours.
            <br />
            <span className="italic text-cream-200">Made to be shared.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 text-cream-300 text-base md:text-lg max-w-lg leading-relaxed"
          >
            Arabian favourites, Kerala classics and delicious dishes served in the heart of Parassala.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link to="/menu" className="btn px-8 py-4 bg-cream-50 text-charcoal-900 text-xs hover:bg-cream-100 transition-all" style={{ letterSpacing: '0.1em' }}>
              VIEW MENU
            </Link>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-4 border border-cream-300 text-cream-50 text-xs hover:border-cream-50 transition-all"
              style={{ letterSpacing: '0.1em' }}
            >
              GET DIRECTIONS
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream-300"
      >
        <span className="text-[9px] uppercase tracking-widest" style={{ letterSpacing: '0.2em' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ==========================================
   SIGNATURE DISHES
   ========================================== */
function SignatureDishes() {
  return (
    <section className="section-padding bg-cream-50" aria-labelledby="signature-heading">
      <div className="section-container">
        <SectionHeading
          label="From Our Kitchen"
          heading="Signature Favourites"
          sub="Dishes that keep our guests coming back — made fresh, every day."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_DISHES.map((dish, i) => (
            <DishCard key={dish.id} item={dish} delay={i * 0.08} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/menu" className="btn-outline">
            EXPLORE FULL MENU
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ==========================================
   RESTAURANT INTRO
   ========================================== */
function RestaurantIntro() {
  return (
    <section className="section-padding bg-charcoal-900" aria-labelledby="intro-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="label-caps text-gold-400 mb-4 block">Our Story</span>
            <h2 id="intro-heading" className="font-display text-4xl md:text-5xl text-cream-50 font-light leading-tight">
              Good Food.
              <br />
              <span className="italic text-cream-300">Good Moments.</span>
            </h2>
            <div className="divider-gold" />
            <p className="text-cream-300 text-base leading-relaxed">
              Irani Restaurant, Parassala brings together Arabian-inspired favourites, Kerala classics and popular Indian dishes in a comfortable dining atmosphere.
            </p>
            <p className="text-cream-400 text-sm leading-relaxed mt-4">
              Whether you're coming in for a family meal, a quick bite or a celebratory gathering — you're welcome here.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn px-7 py-3.5 border border-cream-300 text-cream-50 text-xs hover:bg-cream-50 hover:text-charcoal-900 transition-all" style={{ letterSpacing: '0.1em' }}>
                DISCOVER OUR STORY
              </Link>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-charcoal-700 img-placeholder">
              <div className="text-center px-8">
                <div className="w-12 h-px bg-gold-400 mx-auto mb-4" />
                <p className="text-cream-400 text-xs uppercase tracking-widest">Restaurant Photo</p>
                <p className="text-cream-500 text-xs mt-1">Coming soon</p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================
   MENU PREVIEW / CATEGORIES
   ========================================== */
function MenuPreview() {
  return (
    <section className="section-padding bg-cream-100" aria-labelledby="menu-preview-heading">
      <div className="section-container">
        <SectionHeading
          label="What We Serve"
          heading="Explore Our Menu"
          sub="From Arabian mandi to Kerala parotta — something for every taste."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {MENU_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/menu?category=${cat.slug}`}
                className="block text-center py-6 px-4 bg-cream-50 border border-brown-100 hover:border-gold-400 hover:shadow-md transition-all duration-200 group"
              >
                <p className="font-serif text-sm text-charcoal-800 group-hover:text-charcoal-900 transition-colors">
                  {cat.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/menu" className="btn-primary">
            EXPLORE FULL MENU
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ==========================================
   INFO STRIP
   ========================================== */
function InfoStrip() {
  const items = [
    { label: 'Location', value: 'Parassala, Kerala' },
    { label: 'Phone',    value: RESTAURANT_INFO.phone },
    { label: 'Hours',    value: 'Open daily · Closes ~11:30 PM' },
    { label: 'Services', value: 'Dine-in · Drive-through · Delivery' },
  ]
  return (
    <section className="bg-cream-200 py-6 border-y border-brown-200">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-brown-200">
          {items.map(it => (
            <div key={it.label} className="text-center px-4">
              <p className="label-caps text-charcoal-400 text-[9px] mb-1">{it.label}</p>
              <p className="text-sm font-medium text-charcoal-800">{it.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================
   HOME PAGE
   ========================================== */
export default function Home() {
  return (
    <main>
      <Hero />
      <InfoStrip />
      <SignatureDishes />
      <RestaurantIntro />
      <MenuPreview />
    </main>
  )
}
