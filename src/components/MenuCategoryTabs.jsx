import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Sticky horizontal category tab bar for menu page
 */
export default function MenuCategoryTabs({ categories, activeCategory, onSelect }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 200, behavior: 'smooth' })
    setTimeout(checkScroll, 300)
  }

  // Scroll active tab into view on category change
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const activeEl = el.querySelector('[data-active="true"]')
    if (activeEl) {
      activeEl.scrollIntoView({ inline: 'nearest', behavior: 'smooth', block: 'nearest' })
    }
  }, [activeCategory])

  return (
    <div className="relative flex items-center bg-cream-50 border-b border-brown-100">
      {canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 z-10 p-2 bg-cream-50 text-charcoal-600 hover:text-charcoal-900 shadow-r"
          aria-label="Scroll categories left"
        >
          <ChevronLeft size={16} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none px-5 sm:px-8 lg:px-12 py-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={checkScroll}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            data-active={cat.id === activeCategory}
            onClick={() => onSelect(cat.id)}
            className={`menu-tab ${cat.id === activeCategory ? 'active' : ''}`}
            aria-current={cat.id === activeCategory ? 'true' : undefined}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 z-10 p-2 bg-cream-50 text-charcoal-600 hover:text-charcoal-900"
          aria-label="Scroll categories right"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  )
}
