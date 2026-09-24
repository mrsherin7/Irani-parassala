import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, UtensilsCrossed } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/menu',    label: 'Menu' },
  { to: '/about',   label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Sticky on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-cream-50/95 backdrop-blur-md border-b border-brown-100 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Irani Restaurant Home">
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-xl font-light tracking-ultra transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-charcoal-900' : 'text-cream-50'
                }`}
                style={{ letterSpacing: '0.2em' }}
              >
                IRANI
              </span>
              <span
                className={`font-sans text-[9px] tracking-widest font-medium transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-charcoal-500' : 'text-cream-200'
                }`}
                style={{ letterSpacing: '0.22em' }}
              >
                RESTAURANT · PARASSALA
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link text-[10px] ${
                    scrolled || !isHome
                      ? isActive ? 'text-charcoal-900' : 'text-charcoal-600'
                      : isActive ? 'text-cream-50' : 'text-cream-200'
                  } ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/menu"
              className={`btn text-xs px-5 py-2.5 transition-all duration-200 ${
                scrolled || !isHome
                  ? 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800'
                  : 'bg-cream-50 text-charcoal-900 hover:bg-cream-100'
              }`}
              style={{ letterSpacing: '0.08em' }}
            >
              VIEW MENU
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled || !isHome ? 'text-charcoal-900' : 'text-cream-50'
            }`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-30 bg-cream-50 flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col gap-1 mt-4" aria-label="Mobile navigation">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-display text-3xl font-light py-4 border-b border-brown-100 transition-colors ${
                      isActive ? 'text-charcoal-900' : 'text-charcoal-500 hover:text-charcoal-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link to="/menu" className="btn-primary text-center">
                VIEW MENU
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
