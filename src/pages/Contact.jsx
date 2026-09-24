import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { RESTAURANT_INFO } from '../data/fallbackData'

function ContactCard({ icon, label, value, action, actionLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-brown-200 p-8 bg-cream-50 group hover:border-gold-300 transition-colors"
    >
      <div className="text-gold-400 mb-4">{icon}</div>
      <p className="label-caps text-charcoal-400 mb-2">{label}</p>
      <p className="text-base text-charcoal-800 font-medium mb-5 leading-relaxed">{value}</p>
      {action && (
        <a
          href={action}
          target={action.startsWith('http') ? '_blank' : undefined}
          rel={action.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-charcoal-700 border-b border-transparent hover:border-charcoal-700 transition-colors"
          style={{ letterSpacing: '0.1em' }}
        >
          {actionLabel}
          {action.startsWith('http') && <ExternalLink size={11} />}
        </a>
      )}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-charcoal-900 py-14 md:py-20">
        <div className="section-container">
          <span className="label-caps text-gold-400 mb-3 block">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-5xl text-cream-50 font-light">Contact Us</h1>
          <div className="divider-gold" />
          <p className="text-cream-300 text-sm max-w-md mt-1">
            Find us in Parassala, Kerala. We're open daily — drop by or give us a call.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <ContactCard
              icon={<Phone size={24} />}
              label="Phone"
              value={RESTAURANT_INFO.phone}
              action={`tel:${RESTAURANT_INFO.phoneClean}`}
              actionLabel="Call Now"
            />
            <ContactCard
              icon={<MapPin size={24} />}
              label="Address"
              value={RESTAURANT_INFO.address}
              action={RESTAURANT_INFO.mapsUrl}
              actionLabel="Get Directions"
            />
            <ContactCard
              icon={<Clock size={24} />}
              label="Opening Hours"
              value={RESTAURANT_INFO.openingHours}
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="btn-primary"
              style={{ letterSpacing: '0.08em', fontSize: '12px' }}
            >
              <Phone size={15} />
              CALL NOW
            </a>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
              style={{ letterSpacing: '0.08em' }}
            >
              <MapPin size={15} />
              GET DIRECTIONS
            </a>
          </div>

          {/* Map embed */}
          <div>
            <h2 className="font-serif text-2xl text-charcoal-900 mb-6 font-medium">Find Us on the Map</h2>
            <div className="w-full aspect-video bg-brown-100 border border-brown-200">
              {import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ? (
                <iframe
                  src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Irani Restaurant location on Google Maps"
                />
              ) : (
                <div className="img-placeholder w-full h-full flex-col gap-4">
                  <MapPin size={32} className="text-brown-300" />
                  <div className="text-center px-8">
                    <p className="text-charcoal-400 text-sm font-medium">85V3+62W, Parassala, Kerala 695502</p>
                    <a
                      href={RESTAURANT_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold-500 hover:text-gold-600 font-medium"
                    >
                      Open in Google Maps <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
