import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ p }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-md transition-all">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{p.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold">£{Number(p.price).toFixed(0)}</span>
          <button className="px-3 py-1.5 rounded-md bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700">View</button>
        </div>
      </div>
    </div>
  )
}

function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${backend}/api/products`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Bestsellers</h2>
            <p className="text-gray-600 mt-1">Vintage-inspired polos with modern quality</p>
          </div>
          <a className="hidden sm:inline text-amber-700 font-semibold hover:underline" href="#custom">Design your own →</a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse h-72 rounded-xl bg-gray-100" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {items.map((p, i) => (
              <ProductCard key={i} p={p} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
