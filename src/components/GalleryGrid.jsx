import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, UtensilsCrossed } from 'lucide-react'

/**
 * Gallery masonry grid with lightbox
 */
export default function GalleryGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i - 1 + items.length) % items.length)
  const next = () => setLightboxIndex(i => (i + 1) % items.length)

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  if (!items.length) {
    return (
      <div className="text-center py-20 text-charcoal-400">
        <UtensilsCrossed size={40} className="mx-auto mb-4 text-brown-200" />
        <p>No gallery images available.</p>
      </div>
    )
  }

  return (
    <>
      {/* Masonry grid */}
      <div className="gallery-masonry">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            onClick={() => openLightbox(i)}
            className="block w-full text-left overflow-hidden group cursor-zoom-in"
            aria-label={`View ${item.title}`}
          >
            {item.image_url ? (
              <img
                src={item.image_url}
                alt={item.title || 'Gallery image'}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="img-placeholder aspect-[4/3] w-full">
                <UtensilsCrossed size={24} className="text-brown-300" />
              </div>
            )}
            {item.title && (
              <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-xs text-charcoal-500 truncate">{item.title}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-4 text-white/70 hover:text-white transition-colors p-3"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[85vh] relative"
            >
              {items[lightboxIndex].image_url ? (
                <img
                  src={items[lightboxIndex].image_url}
                  alt={items[lightboxIndex].title || 'Gallery image'}
                  className="max-h-[85vh] max-w-full object-contain"
                />
              ) : (
                <div className="img-placeholder w-80 h-60 text-brown-300">
                  <UtensilsCrossed size={32} />
                </div>
              )}
              {items[lightboxIndex].title && (
                <p className="text-center text-white/60 text-sm mt-3">
                  {items[lightboxIndex].title}
                </p>
              )}
            </motion.div>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-4 text-white/70 hover:text-white transition-colors p-3"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-0 right-0 text-center text-white/40 text-xs">
              {lightboxIndex + 1} / {items.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
