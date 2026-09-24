import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UtensilsCrossed, Plus } from 'lucide-react'

/**
 * Premium dish card for signature dishes showcase
 */
export default function DishCard({ item, onAddToCart, delay = 0 }) {
  const hasImage = Boolean(item.image_url)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      className="dish-card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {hasImage ? (
          <img
            src={item.image_url}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="img-placeholder w-full h-full flex-col gap-2">
            <UtensilsCrossed size={32} className="text-brown-300" />
            <span className="text-xs text-brown-300 font-medium uppercase tracking-wider">Photo coming soon</span>
          </div>
        )}
        {item.is_featured && (
          <div className="absolute top-3 left-3">
            <span className="badge-featured text-[9px] tracking-widest uppercase">Signature</span>
          </div>
        )}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(item)}
            className="absolute bottom-3 right-3 bg-charcoal-900 text-cream-50 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-gold-500"
            aria-label={`Add ${item.name} to order`}
          >
            <Plus size={16} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="label-caps text-gold-500 text-[9px] mb-1.5">{item.category_id?.toUpperCase()}</p>
        <h3 className="font-serif text-lg text-charcoal-900 font-medium leading-snug mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-charcoal-500 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-brown-100">
          {item.price ? (
            <span className="font-serif text-lg text-charcoal-900">₹{item.price}</span>
          ) : (
            <span className="text-xs text-charcoal-400 italic">Price on request</span>
          )}
          <Link
            to="/menu"
            className="text-xs text-charcoal-600 hover:text-charcoal-900 font-medium uppercase tracking-wider transition-colors"
          >
            View Menu →
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
