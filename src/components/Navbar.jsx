import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-full bg-amber-600"></span>
            <span className="font-extrabold tracking-tight text-xl">Touchline Co.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="hover:text-amber-700 transition-colors">Shop</a>
            <a href="#custom" className="hover:text-amber-700 transition-colors">Custom</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">About</a>
            <a href="#newsletter" className="px-3 py-1.5 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors">Join Newsletter</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10">
            <span className="sr-only">Toggle menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm font-medium">
              <a href="#shop" className="px-3 py-2 rounded hover:bg-black/5">Shop</a>
              <a href="#custom" className="px-3 py-2 rounded hover:bg-black/5">Custom</a>
              <a href="#about" className="px-3 py-2 rounded hover:bg-black/5">About</a>
              <a href="#newsletter" className="px-3 py-2 rounded bg-amber-600 text-white">Join Newsletter</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
