import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MenuCategoryTabs from '../components/MenuCategoryTabs'
import MenuItemCard from '../components/MenuItemCard'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/fallbackData'

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || MENU_CATEGORIES[0].slug
  const [activeCategory, setActiveCategory] = useState(
    MENU_CATEGORIES.find(c => c.slug === initialCategory)?.id || MENU_CATEGORIES[0].id
  )

  const filteredItems = MENU_ITEMS.filter(
    item => item.category_id === activeCategory && item.is_available
  )

  const handleCategorySelect = (id) => {
    setActiveCategory(id)
    const cat = MENU_CATEGORIES.find(c => c.id === id)
    if (cat) setSearchParams({ category: cat.slug })
  }

  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-cream-50">
      {/* Page header */}
      <section className="bg-charcoal-900 py-14 md:py-20">
        <div className="section-container">
          <span className="label-caps text-gold-400 mb-3 block">Irani Restaurant</span>
          <h1 className="font-display text-4xl md:text-5xl text-cream-50 font-light">Our Menu</h1>
          <div className="divider-gold" />
          <p className="text-cream-300 text-sm max-w-md mt-1">
            Browse our selection of Arabian, Kerala and Indian dishes. Online ordering coming soon.
          </p>
        </div>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-16 md:top-20 z-20 bg-cream-50 shadow-sm">
        <MenuCategoryTabs
          categories={MENU_CATEGORIES}
          activeCategory={activeCategory}
          onSelect={handleCategorySelect}
        />
      </div>

      {/* Menu items */}
      <div className="section-container py-10 md:py-14">
        <div className="mb-6">
          <h2 className="font-serif text-xl text-charcoal-900 font-medium">
            {MENU_CATEGORIES.find(c => c.id === activeCategory)?.name}
          </h2>
          <p className="text-xs text-charcoal-400 mt-0.5">{filteredItems.length} items</p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-charcoal-400">
            <p className="text-base">No dishes available in this category.</p>
            <p className="text-sm mt-2">Please check back later or contact us for enquiries.</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl"
            >
              {filteredItems.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </main>
  )
}
