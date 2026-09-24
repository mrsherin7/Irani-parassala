import { motion } from 'framer-motion'

/**
 * Reusable section heading with optional label and divider
 *
 * @param {string} label   - Small caps label above heading (optional)
 * @param {string} heading - Main heading text
 * @param {string} sub     - Subheading/description (optional)
 * @param {string} align   - 'left' | 'center' (default: 'left')
 */
export default function SectionHeading({ label, heading, sub, align = 'left' }) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center' : ''}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className="heading-display text-4xl md:text-5xl text-charcoal-900">
        {heading}
      </h2>
      <div className={`divider-gold ${centered ? 'mx-auto' : ''}`} />
      {sub && (
        <p className="text-charcoal-500 text-base md:text-lg leading-relaxed max-w-xl mt-2">
          {sub}
        </p>
      )}
    </motion.div>
  )
}
