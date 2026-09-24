import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/fallbackData'

const FOOTER_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/menu',    label: 'Menu' },
  { to: '/about',   label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-display text-2xl text-cream-50 font-light" style={{ letterSpacing: '0.2em' }}>
                IRANI
              </p>
              <p className="font-sans text-[9px] tracking-widest text-cream-300" style={{ letterSpacing: '0.22em' }}>
                RESTAURANT · PARASSALA
              </p>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed max-w-xs mt-4">
              Arabian favourites, Kerala classics and popular Indian dishes served in the heart of Parassala, Kerala.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="label-caps text-cream-50 mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300 hover:text-cream-50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-caps text-cream-50 mb-5">Find Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-300 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-300">{RESTAURANT_INFO.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} Irani Restaurant, Parassala. All rights reserved.</p>
          <p>Built with care for a local favourite.</p>
        </div>
      </div>
    </footer>
  )
}
