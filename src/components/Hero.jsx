function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-12 bg-gradient-to-b from-[#F7F4EE] to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C0B6A8] rounded-full blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-600">Rugby Heritage Reimagined</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold tracking-tight text-neutral-900 leading-tight">
              Vintage Rugby Polos, Tailored to Your Colours
            </h1>
            <p className="mt-6 text-lg text-neutral-700">
              Heavyweight cotton. Hand-finished details. A modern fit with old-school soul. Designed for the touchline and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-md bg-black text-white font-semibold hover:bg-neutral-900 transition-colors">Shop Bestsellers</a>
              <a href="#custom" className="px-5 py-3 rounded-md border border-neutral-300 text-neutral-900 font-semibold hover:bg-white transition-colors">Design Your Own</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                Made to order in 7–10 days
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                Free UK shipping £75+
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="Rugby Polo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-black/5">
              <p className="text-sm font-semibold">Heavyweight Jersey</p>
              <p className="text-xs text-neutral-500">Crafted for durability and comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
