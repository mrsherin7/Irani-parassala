import { useState } from 'react'
import { Save, Check } from 'lucide-react'
import { RESTAURANT_INFO } from '../data/fallbackData'

function SettingsField({ id, label, type = 'text', value, onChange, placeholder, note }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs text-charcoal-400 uppercase tracking-widest block mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={3}
          placeholder={placeholder}
          className="w-full bg-charcoal-900 border border-charcoal-600 text-cream-100 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-charcoal-900 border border-charcoal-600 text-cream-100 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
        />
      )}
      {note && <p className="text-xs text-charcoal-500 mt-1.5">{note}</p>}
    </div>
  )
}

export default function Settings() {
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    name:         RESTAURANT_INFO.name,
    address:      RESTAURANT_INFO.address,
    phone:        RESTAURANT_INFO.phone,
    whatsapp:     RESTAURANT_INFO.whatsapp || '',
    opening_hours: RESTAURANT_INFO.openingHours,
    maps_url:     RESTAURANT_INFO.mapsUrl || '',
    instagram_url:'',
    facebook_url: '',
  })

  const update = (key) => (val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSave = async (e) => {
    e.preventDefault()
    // TODO: save to Supabase restaurant_settings table
    console.log('Settings to save:', form)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-display text-cream-50 font-light">Restaurant Settings</h1>
        <p className="text-sm text-charcoal-400 mt-1">Update your restaurant information</p>
      </div>

      <div className="bg-charcoal-800 border border-charcoal-700 p-4 mb-6">
        <p className="text-xs text-gold-300">
          <strong>Note:</strong> Settings are stored in memory only until Supabase is connected. Add environment variables and apply the database schema to persist changes.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-charcoal-800 border border-charcoal-700 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SettingsField id="s-name" label="Restaurant Name" value={form.name} onChange={update('name')} />
          <SettingsField id="s-phone" label="Phone Number" value={form.phone} onChange={update('phone')} placeholder="073060 48162" />
          <SettingsField
            id="s-address"
            label="Address"
            type="textarea"
            value={form.address}
            onChange={update('address')}
            placeholder="85V3+62W, Parassala, Kerala 695502"
          />
          <SettingsField
            id="s-hours"
            label="Opening Hours"
            type="textarea"
            value={form.opening_hours}
            onChange={update('opening_hours')}
            placeholder="Open daily · Closes around 11:30 PM"
          />
          <SettingsField
            id="s-whatsapp"
            label="WhatsApp Number"
            value={form.whatsapp}
            onChange={update('whatsapp')}
            placeholder="917306048162 (country code, no +)"
            note="Without spaces or special characters. e.g. 917306048162"
          />
          <SettingsField
            id="s-maps"
            label="Google Maps URL"
            value={form.maps_url}
            onChange={update('maps_url')}
            placeholder="https://maps.google.com/?q=..."
          />
          <SettingsField
            id="s-instagram"
            label="Instagram URL"
            value={form.instagram_url}
            onChange={update('instagram_url')}
            placeholder="https://instagram.com/yourpage"
          />
          <SettingsField
            id="s-facebook"
            label="Facebook URL"
            value={form.facebook_url}
            onChange={update('facebook_url')}
            placeholder="https://facebook.com/yourpage"
          />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gold-400 text-charcoal-900 text-xs font-medium px-6 py-3 hover:bg-gold-500 transition-colors"
            style={{ letterSpacing: '0.08em' }}
          >
            {saved ? <Check size={14} /> : <Save size={14} />}
            {saved ? 'SAVED' : 'SAVE CHANGES'}
          </button>
          {saved && <p className="text-xs text-green-400">Settings saved (in memory)</p>}
        </div>
      </form>
    </div>
  )
}
