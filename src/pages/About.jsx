import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ChefHat, Coffee, UtensilsCrossed } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { RESTAURANT_INFO } from '../data/fallbackData'

function StorySection() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="Our Story"
              heading="A Place for Every Gathering"
            />
            <p className="text-charcoal-500 text-base leading-relaxed mt-6">
              Irani Restaurant has been a familiar name in Parassala, Kerala — a place where the warmth of Arabian hospitality meets the richness of Kerala's culinary tradition.
            </p>
            <p className="text-charcoal-500 text-base leading-relaxed mt-4">
              Located in the heart of Parassala, we have brought together mandi, alfaham, biriyani, Kerala classics and popular Indian and Chinese dishes under one roof. Our goal is simple: serve honest, flavourful food that brings people together.
            </p>
            <p className="text-charcoal-400 text-sm italic mt-4 border-l-2 border-gold-400 pl-4">
              Every dish is prepared with care — using quality ingredients and time-tested recipes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[3/4] bg-brown-100 img-placeholder relative"
          >
            <div className="text-center px-8">
              <div className="w-8 h-px bg-gold-400 mx-auto mb-3" />
              <p className="text-charcoal-400 text-xs uppercase tracking-widest">Restaurant Photo</p>
              <p className="text-charcoal-500 text-xs mt-1">Coming soon</p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-400/25 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatWeServeSection() {
  const cuisines = [
    {
      icon: <ChefHat size={28} className="text-gold-400" />,
      title: 'Arabian Specialities',
      desc: 'Slow-cooked mandi, charcoal-grilled alfaham and shawarma — inspired by Arabian culinary traditions.'
    },
    {
      icon: <UtensilsCrossed size={28} className="text-gold-400" />,
      title: 'Kerala Classics',
      desc: 'Flaky parotta, aromatic biriyani, beef roast and the flavours that Kerala is known for.'
    },
    {
      icon: <ChefHat size={28} className="text-gold-400" />,
      title: 'Indian & Chinese',
      desc: 'Popular Indian starters and Indo-Chinese dishes to satisfy every palate.'
    },
    {
      icon: <Coffee size={28} className="text-gold-400" />,
      title: 'Beverages & Desserts',
      desc: 'Refreshing drinks and sweet treats including the beloved Falooda to end your meal.'
    },
  ]

  return (
    <section className="section-padding bg-charcoal-900">
      <div className="section-container">
        <SectionHeading
          label="Our Menu"
          heading="What We Serve"
          sub="A curated selection spanning cuisines — all served fresh."
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-charcoal-700">
          {cuisines.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal-900 p-10"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl text-cream-100 mb-3 font-medium">{item.title}</h3>
              <p className="text-cream-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/menu" className="btn px-8 py-4 border border-cream-300 text-cream-50 text-xs hover:bg-cream-50 hover:text-charcoal-900 transition-all" style={{ letterSpacing: '0.1em' }}>
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  )
}

function DiningExperienceSection() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="section-container max-w-3xl mx-auto text-center">
        <SectionHeading
          label="Dining Experience"
          heading="Come in and Stay a While"
          align="center"
        />
        <p className="text-charcoal-500 text-base leading-relaxed mt-6">
          Whether you're dropping in for a quick meal or sitting down for a long family dinner, Irani Restaurant offers a comfortable and welcoming atmosphere. We offer dine-in, drive-through and no-contact delivery options to suit every occasion.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {RESTAURANT_INFO.services.map(s => (
            <span key={s} className="px-4 py-2 border border-brown-200 text-sm text-charcoal-600 bg-cream-50">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function VisitUsSection() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading label="Find Us" heading="Visit Us" />
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-charcoal-900 text-sm">Address</p>
                  <p className="text-charcoal-500 text-sm">{RESTAURANT_INFO.address}</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-charcoal-900 text-sm">Hours</p>
                  <p className="text-charcoal-500 text-sm">{RESTAURANT_INFO.openingHours}</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
                style={{ letterSpacing: '0.08em' }}
              >
                GET DIRECTIONS
              </a>
              <Link to="/contact" className="btn-outline text-xs" style={{ letterSpacing: '0.08em' }}>
                CONTACT US
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="aspect-video bg-brown-100 img-placeholder"
          >
            <p className="text-charcoal-400 text-xs uppercase tracking-widest">Map placeholder</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      <StorySection />
      <WhatWeServeSection />
      <DiningExperienceSection />
      <VisitUsSection />
    </main>
  )
}
