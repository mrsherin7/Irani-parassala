import { BarChart3, UtensilsCrossed, Image, Settings, LogOut, Menu as MenuIcon, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/admin',          label: 'Dashboard',    icon: BarChart3 },
  { to: '/admin/menu',     label: 'Menu',         icon: UtensilsCrossed },
  { to: '/admin/gallery',  label: 'Gallery',      icon: Image },
  { to: '/admin/settings', label: 'Settings',     icon: Settings },
]

export default function AdminLayout({ children, user, onLogout }) {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const Sidebar = ({ className = '' }) => (
    <nav className={`flex flex-col gap-1 ${className}`} aria-label="Admin navigation">
      <div className="px-4 pb-6 mb-4 border-b border-charcoal-700">
        <p className="font-display text-lg text-cream-50 font-light" style={{ letterSpacing: '0.2em' }}>IRANI</p>
        <p className="text-[9px] text-charcoal-400 tracking-widest" style={{ letterSpacing: '0.18em' }}>ADMIN PANEL</p>
      </div>
      {NAV_ITEMS.map(item => {
        const Icon = item.icon
        const isActive = location.pathname === item.to
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors rounded-sm ${
              isActive
                ? 'bg-charcoal-700 text-cream-50'
                : 'text-charcoal-400 hover:text-cream-100 hover:bg-charcoal-800'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={16} />
            {item.label}
          </Link>
        )
      })}
      <div className="mt-auto pt-6 border-t border-charcoal-700">
        <div className="px-4 mb-3">
          <p className="text-xs text-charcoal-400 truncate">{user?.email || 'Admin'}</p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 text-sm text-charcoal-400 hover:text-red-400 transition-colors w-full"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </nav>
  )

  return (
    <div className="min-h-screen bg-charcoal-900 flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-charcoal-900 border-r border-charcoal-700 pt-8 pb-6 px-2 flex-shrink-0 fixed inset-y-0">
        <Sidebar />
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-charcoal-900 border-b border-charcoal-700 flex items-center justify-between px-4 h-14">
        <p className="font-display text-base text-cream-50 font-light" style={{ letterSpacing: '0.2em' }}>IRANI ADMIN</p>
        <button onClick={() => setSidebarOpen(v => !v)} className="text-charcoal-300 hover:text-cream-50">
          {sidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-charcoal-900/90">
          <div className="w-64 h-full bg-charcoal-900 border-r border-charcoal-700 pt-16 pb-6 px-2">
            <Sidebar />
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-56 pt-14 md:pt-0 min-h-screen bg-[#0f0d0b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
