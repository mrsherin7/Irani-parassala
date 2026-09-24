import { UtensilsCrossed, Star, Image, Tag } from 'lucide-react'
import { MENU_ITEMS, GALLERY_ITEMS, MENU_CATEGORIES } from '../data/fallbackData'

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="bg-charcoal-800 border border-charcoal-700 p-6 rounded-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-charcoal-400 uppercase tracking-widest mb-2">{label}</p>
          <p className="text-3xl font-display text-cream-50 font-light">{value}</p>
          {sub && <p className="text-xs text-charcoal-400 mt-1">{sub}</p>}
        </div>
        <div className="text-gold-400 opacity-60">
          <Icon size={22} />
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const totalItems = MENU_ITEMS.length
  const available = MENU_ITEMS.filter(i => i.is_available).length
  const featured = MENU_ITEMS.filter(i => i.is_featured).length
  const galleryCount = GALLERY_ITEMS.length

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-display text-cream-50 font-light">Dashboard</h1>
        <p className="text-sm text-charcoal-400 mt-1">Overview of your restaurant website</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard icon={UtensilsCrossed} label="Total Menu Items" value={totalItems} />
        <StatCard icon={Tag}            label="Available Dishes"  value={available} sub={`${totalItems - available} unavailable`} />
        <StatCard icon={Star}           label="Signature Dishes"  value={featured} />
        <StatCard icon={Image}          label="Gallery Images"    value={galleryCount} />
      </div>

      {/* Quick actions */}
      <div className="bg-charcoal-800 border border-charcoal-700 p-6">
        <h2 className="text-sm font-medium text-cream-100 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/admin/menu" className="text-xs border border-charcoal-600 text-charcoal-300 hover:text-cream-50 hover:border-charcoal-400 px-4 py-2.5 transition-colors">
            Manage Menu
          </a>
          <a href="/admin/gallery" className="text-xs border border-charcoal-600 text-charcoal-300 hover:text-cream-50 hover:border-charcoal-400 px-4 py-2.5 transition-colors">
            Manage Gallery
          </a>
          <a href="/admin/settings" className="text-xs border border-charcoal-600 text-charcoal-300 hover:text-cream-50 hover:border-charcoal-400 px-4 py-2.5 transition-colors">
            Restaurant Settings
          </a>
          <a href="/" target="_blank" className="text-xs border border-charcoal-600 text-charcoal-300 hover:text-cream-50 hover:border-charcoal-400 px-4 py-2.5 transition-colors">
            View Website ↗
          </a>
        </div>
      </div>

      {/* Notice */}
      <div className="mt-6 border border-gold-500/25 bg-gold-500/5 p-5 text-gold-300 text-sm leading-relaxed">
        <strong className="text-gold-200">Development Mode</strong>
        <p className="mt-1 text-xs text-gold-400">
          Connect Supabase to enable full CRUD operations. Add <code className="bg-charcoal-700 px-1">VITE_SUPABASE_URL</code> and <code className="bg-charcoal-700 px-1">VITE_SUPABASE_ANON_KEY</code> to your <code className="bg-charcoal-700 px-1">.env</code> file.
        </p>
      </div>
    </div>
  )
}
