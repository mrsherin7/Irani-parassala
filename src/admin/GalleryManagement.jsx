import { useState } from 'react'
import { Upload, Trash2, Star } from 'lucide-react'
import { GALLERY_ITEMS } from '../data/fallbackData'

export default function GalleryManagement() {
  const [items, setItems] = useState(GALLERY_ITEMS)

  const toggleFeatured = (id) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, is_featured: !i.is_featured } : i))
  }
  const deleteItem = (id) => {
    if (!confirm('Delete this gallery image?')) return
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display text-cream-50 font-light">Gallery Management</h1>
          <p className="text-sm text-charcoal-400 mt-1">{items.length} images</p>
        </div>
        <button
          className="flex items-center gap-2 bg-gold-400 text-charcoal-900 text-xs font-medium px-4 py-2.5 hover:bg-gold-500 transition-colors opacity-60 cursor-not-allowed"
          disabled
          title="Connect Supabase Storage to upload images"
          style={{ letterSpacing: '0.08em' }}
        >
          <Upload size={14} />
          UPLOAD IMAGE
        </button>
      </div>

      <div className="bg-charcoal-800 border border-charcoal-700 p-4 mb-6">
        <p className="text-xs text-gold-300 leading-relaxed">
          <strong>Supabase Storage required:</strong> Image upload will be enabled once Supabase is configured. Add your environment variables to unlock full gallery management.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(item => (
          <div key={item.id} className="group relative bg-charcoal-800 border border-charcoal-700 overflow-hidden">
            {/* Image placeholder */}
            <div className="aspect-square bg-charcoal-700 flex items-center justify-center">
              {item.image_url ? (
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-3">
                  <p className="text-xs text-charcoal-400">{item.title}</p>
                  <p className="text-[10px] text-charcoal-500 mt-1 uppercase tracking-wider">{item.category}</p>
                </div>
              )}
            </div>

            {/* Overlay actions */}
            <div className="absolute inset-0 bg-charcoal-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button
                onClick={() => toggleFeatured(item.id)}
                className={`p-2 transition-colors ${item.is_featured ? 'text-gold-400' : 'text-white/60 hover:text-gold-400'}`}
                aria-label="Toggle featured"
              >
                <Star size={16} fill={item.is_featured ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="p-2 text-white/60 hover:text-red-400 transition-colors"
                aria-label="Delete image"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="p-2">
              <p className="text-xs text-cream-200 truncate">{item.title || 'Untitled'}</p>
              <p className="text-[10px] text-charcoal-400 uppercase tracking-wider">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
