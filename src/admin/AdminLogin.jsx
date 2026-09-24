import { useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!isSupabaseConfigured) {
      setError('Supabase is not configured yet. Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env')
      return
    }

    setLoading(true)
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password })
      if (authError) throw authError
      if (data.session) onLogin(data.session.user)
    } catch (err) {
      setError(err.message || 'Authentication failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-900 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <p className="font-display text-2xl text-cream-50 font-light" style={{ letterSpacing: '0.2em' }}>IRANI</p>
          <p className="text-[9px] font-sans text-charcoal-400 tracking-widest mt-1" style={{ letterSpacing: '0.22em' }}>ADMIN · PARASSALA</p>
        </div>

        <div className="bg-charcoal-800 border border-charcoal-700 p-8">
          <h1 className="text-lg font-medium text-cream-100 mb-1">Sign in</h1>
          <p className="text-xs text-charcoal-400 mb-8">Authorised staff only</p>

          {!isSupabaseConfigured && (
            <div className="mb-6 p-4 border border-gold-500/30 bg-gold-500/10 text-gold-300 text-xs leading-relaxed">
              <strong>Development mode:</strong> Supabase is not configured. Add environment variables to enable authentication.
            </div>
          )}

          {error && (
            <div className="mb-5 p-3 border border-red-300/30 bg-red-900/20 text-red-300 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="admin-email" className="label-caps text-charcoal-400 text-[9px] block mb-2">Email</label>
              <input
                id="admin-email"
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-charcoal-900 border border-charcoal-600 text-cream-100 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="label-caps text-charcoal-400 text-[9px] block mb-2">Password</label>
              <input
                id="admin-password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-charcoal-900 border border-charcoal-600 text-cream-100 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn w-full justify-center bg-gold-400 text-charcoal-900 py-3.5 text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-500 transition-colors mt-2"
              style={{ letterSpacing: '0.08em' }}
            >
              {loading ? 'Signing in…' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
