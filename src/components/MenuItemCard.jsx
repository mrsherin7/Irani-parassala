import { UtensilsCrossed } from 'lucide-react'

/**
 * Menu item row for the full menu page — browse only
 */
export default function MenuItemCard({ item }) {
  const hasImage = Boolean(item.image_url)

  return (
    <article className="flex gap-4 py-5 border-b border-brown-100 group last:border-0">
      {/* Image */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-sm">
        {hasImage ? (
          <img
            src={item.image_url}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="img-placeholder w-full h-full rounded-sm">
            <UtensilsCrossed size={20} className="text-brown-300" />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-base sm:text-lg text-charcoal-900 font-medium leading-snug">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-sm text-charcoal-400 mt-1 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-3">
          {item.price ? (
            <span className="font-serif text-base text-charcoal-900">₹{item.price}</span>
          ) : (
            <span className="text-xs text-charcoal-400 italic">Price on request</span>
          )}
        </div>
      </div>
    </article>
  )
}
