import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/whatsapp'
import { RESTAURANT_INFO } from '../data/fallbackData'

/**
 * Floating WhatsApp button — always visible
 * When cart is provided, includes item count badge
 */
export default function WhatsAppButton({ cart = [] }) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || RESTAURANT_INFO.whatsapp
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleClick = () => {
    if (!whatsappNumber) {
      // If not configured, just open WhatsApp
      window.open('https://wa.me/', '_blank')
      return
    }
    const url = buildWhatsAppUrl(cart.length > 0 ? cart : [], whatsappNumber)
    if (url) window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
      {totalItems > 0 && (
        <span className="bg-charcoal-900 text-cream-50 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}
