function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-12 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Custom Designed Vintage & Retro Rugby Polo Shirts
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Built for the touchline and beyond. Heavyweight cotton. Heritage details. Your colours. Your crest.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-md bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors">Shop Bestsellers</a>
              <a href="#custom" className="px-5 py-3 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">Design Your Own</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
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
              <p className="text-xs text-gray-500">Crafted for durability and comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
