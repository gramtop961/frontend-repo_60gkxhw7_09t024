import { useState } from 'react'

function Swatch({ color }) {
  return <span className="w-5 h-5 rounded-full border border-black/10" style={{ backgroundColor: color }} />
}

function CustomDesign() {
  const [primary, setPrimary] = useState('#0f172a')
  const [secondary, setSecondary] = useState('#f8fafc')
  const [crest, setCrest] = useState('None')

  return (
    <section id="custom" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Design Your Own</h2>
            <p className="text-gray-600 mt-1 mb-6">Pick your hoops, collar, and crest. We'll stitch it to order.</p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Primary Colour</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={primary} onChange={e => setPrimary(e.target.value)} className="h-10 w-16 rounded cursor-pointer" />
                  <Swatch color={primary} />
                  <span className="text-sm text-gray-600">{primary}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Secondary Colour</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={secondary} onChange={e => setSecondary(e.target.value)} className="h-10 w-16 rounded cursor-pointer" />
                  <Swatch color={secondary} />
                  <span className="text-sm text-gray-600">{secondary}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Crest</label>
                <select value={crest} onChange={e => setCrest(e.target.value)} className="w-full max-w-xs rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                  <option>None</option>
                  <option>Lion</option>
                  <option>Rose</option>
                  <option>Shamrock</option>
                  <option>Thistle</option>
                </select>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 flex items-center justify-center" style={{ background: `repeating-linear-gradient(0deg, ${primary}, ${primary} 40px, ${secondary} 40px, ${secondary} 80px)` }}>
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded text-xs font-semibold">Preview</div>
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full ring-2 ring-black/10 flex items-center justify-center bg-white/80 text-xs font-bold">{crest === 'None' ? '' : crest[0]}</div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-black/5">
                <p className="text-sm font-semibold">Made to Order</p>
                <p className="text-xs text-gray-500">Ships in 7–10 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomDesign
