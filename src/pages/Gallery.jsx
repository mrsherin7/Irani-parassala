import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import GalleryGrid from '../components/GalleryGrid'
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/fallbackData'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  return (
    <main className="pt-16 md:pt-20">
      {/* Header */}
      <section className="section-padding py-14 md:py-20 bg-charcoal-900">
        <div className="section-container">
          <span className="label-caps text-gold-400 mb-3 block">A Taste of Irani</span>
          <h1 className="font-display text-4xl md:text-5xl text-cream-50 font-light">Gallery</h1>
          <div className="divider-gold" />
          <p className="text-cream-300 text-sm max-w-md mt-1">
            A look at our food, our space and the moments that make Irani Restaurant special.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <div className="bg-cream-50 border-b border-brown-100 sticky top-16 md:top-20 z-20">
        <div className="section-container">
          <div className="flex gap-6 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {GALLERY_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`menu-tab whitespace-nowrap ${cat === activeCategory ? 'active' : ''}`}
                aria-current={cat === activeCategory ? 'true' : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section-padding">
        <div className="section-container">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-charcoal-400">
              <p>No images in this category yet.</p>
            </div>
          ) : (
            <GalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
    </main>
  )
}
