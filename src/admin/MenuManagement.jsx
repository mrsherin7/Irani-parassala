import { useState } from 'react'
import { Plus, Pencil, Trash2, Eye, EyeOff, Star } from 'lucide-react'
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/fallbackData'

export default function MenuManagement() {
  const [items, setItems] = useState(MENU_ITEMS)
  const [activeCategory, setActiveCategory] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const filtered = activeCategory === 'all'
    ? items
    : items.filter(i => i.category_id === activeCategory)

  const toggleAvailable = (id) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, is_available: !i.is_available } : i))
  }
  const toggleFeatured = (id) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, is_featured: !i.is_featured } : i))
  }
  const deleteItem = (id) => {
    if (!confirm('Delete this menu item?')) return
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display text-cream-50 font-light">Menu Management</h1>
          <p className="text-sm text-charcoal-400 mt-1">{items.length} items across {MENU_CATEGORIES.length} categories</p>
        </div>
        <button
          onClick={() => { setEditItem(null); setShowForm(true) }}
          className="flex items-center gap-2 bg-gold-400 text-charcoal-900 text-xs font-medium px-4 py-2.5 hover:bg-gold-500 transition-colors"
          style={{ letterSpacing: '0.08em' }}
        >
          <Plus size={14} />
          ADD ITEM
        </button>
      </div>

      {/* Category filter */}
      <div className="flex gap-3 flex-wrap mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`text-xs px-4 py-2 border transition-colors ${activeCategory === 'all' ? 'border-gold-400 text-gold-400' : 'border-charcoal-700 text-charcoal-400 hover:text-cream-100'}`}
        >
          All
        </button>
        {MENU_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-xs px-4 py-2 border transition-colors ${activeCategory === cat.id ? 'border-gold-400 text-gold-400' : 'border-charcoal-700 text-charcoal-400 hover:text-cream-100'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-charcoal-800 border border-charcoal-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-charcoal-700">
                <th className="text-left py-4 px-6 text-xs text-charcoal-400 font-medium uppercase tracking-wider">Name</th>
                <th className="text-left py-4 px-4 text-xs text-charcoal-400 font-medium uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="text-left py-4 px-4 text-xs text-charcoal-400 font-medium uppercase tracking-wider hidden lg:table-cell">Price</th>
                <th className="text-center py-4 px-4 text-xs text-charcoal-400 font-medium uppercase tracking-wider">Available</th>
                <th className="text-center py-4 px-4 text-xs text-charcoal-400 font-medium uppercase tracking-wider hidden sm:table-cell">Featured</th>
                <th className="text-right py-4 px-6 text-xs text-charcoal-400 font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id} className="border-b border-charcoal-700/50 hover:bg-charcoal-700/30 transition-colors">
                  <td className="py-4 px-6">
                    <p className="text-cream-100 font-medium text-sm">{item.name}</p>
                    <p className="text-charcoal-400 text-xs mt-0.5 line-clamp-1 hidden sm:block">{item.description}</p>
                  </td>
                  <td className="py-4 px-4 hidden md:table-cell">
                    <span className="text-xs text-charcoal-300 capitalize">
                      {MENU_CATEGORIES.find(c => c.id === item.category_id)?.name}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-charcoal-300 text-xs hidden lg:table-cell">
                    {item.price ? `₹${item.price}` : '—'}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => toggleAvailable(item.id)}
                      className={`transition-colors ${item.is_available ? 'text-green-400 hover:text-green-300' : 'text-charcoal-500 hover:text-charcoal-300'}`}
                      aria-label={item.is_available ? 'Mark unavailable' : 'Mark available'}
                      title={item.is_available ? 'Available' : 'Unavailable'}
                    >
                      {item.is_available ? <Eye size={15} /> : <EyeOff size={15} />}
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center hidden sm:table-cell">
                    <button
                      onClick={() => toggleFeatured(item.id)}
                      className={`transition-colors ${item.is_featured ? 'text-gold-400 hover:text-gold-300' : 'text-charcoal-500 hover:text-charcoal-300'}`}
                      aria-label={item.is_featured ? 'Remove from featured' : 'Mark as featured'}
                      title={item.is_featured ? 'Signature dish' : 'Not featured'}
                    >
                      <Star size={15} fill={item.is_featured ? 'currentColor' : 'none'} />
                    </button>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => { setEditItem(item); setShowForm(true) }}
                        className="text-charcoal-400 hover:text-cream-100 transition-colors"
                        aria-label={`Edit ${item.name}`}
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-charcoal-400 hover:text-red-400 transition-colors"
                        aria-label={`Delete ${item.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="text-center py-12 text-charcoal-400 text-sm">No items in this category.</p>
          )}
        </div>
      </div>

      {/* Note about Supabase */}
      <p className="mt-4 text-xs text-charcoal-500 text-center">
        Changes are in-memory only. Connect Supabase to persist data.
      </p>
    </div>
  )
}
