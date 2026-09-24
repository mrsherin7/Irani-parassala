/**
 * WhatsApp enquiry / order message generator
 *
 * Usage:
 *   const url = buildWhatsAppUrl(cartItems, whatsappNumber)
 *   window.open(url, '_blank')
 */

export function buildWhatsAppMessage(cartItems) {
  if (!cartItems || cartItems.length === 0) return ''

  const lines = cartItems.map(
    (item) => `${item.name} x ${item.quantity}`
  ).join('\n')

  return (
    `Hello Irani Restaurant,\n\n` +
    `I would like to enquire/order:\n\n` +
    `${lines}\n\n` +
    `Please confirm availability and total amount.\n\n` +
    `Thank you.`
  )
}

export function buildWhatsAppUrl(cartItems, whatsappNumber) {
  const number = whatsappNumber?.replace(/\D/g, '') || ''
  if (!number) {
    console.warn('WhatsApp number is not configured. Set VITE_WHATSAPP_NUMBER in .env')
    return null
  }
  const message = encodeURIComponent(buildWhatsAppMessage(cartItems))
  return `https://wa.me/${number}?text=${message}`
}
