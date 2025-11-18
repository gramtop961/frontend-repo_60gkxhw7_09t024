import { useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Subscription failed')
      setStatus('success')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-amber-600 text-white p-8 sm:p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Join the Touchline Club</h3>
              <p className="text-amber-50/90 mt-2">Early drops, limited runs, and 10% off your first order.</p>
            </div>
            <form onSubmit={onSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-500"
              />
              <button type="submit" className="px-5 py-3 rounded-md bg-black text-white font-semibold hover:bg-gray-900">
                {status === 'loading' ? 'Joining…' : 'Join'}
              </button>
            </form>
          </div>
          {status === 'success' && (
            <p className="mt-3 text-sm">Welcome aboard! Check your inbox for a hello.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm">Oops, something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
