function Footer() {
  return (
    <footer id="about" className="py-12 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif font-bold text-neutral-900">Touchline Atelier</h4>
            <p className="text-sm text-neutral-600 mt-2">Vintage and retro rugby polos, custom made with heavyweight cotton and heritage details.</p>
          </div>
          <div>
            <h5 className="font-semibold text-neutral-900">Help</h5>
            <ul className="mt-2 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-[#8D6E63]">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#8D6E63]">Sizing Guide</a></li>
              <li><a href="#" className="hover:text-[#8D6E63]">Care Instructions</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-neutral-900">Follow</h5>
            <ul className="mt-2 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-[#8D6E63]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#8D6E63]">TikTok</a></li>
              <li><a href="#" className="hover:text-[#8D6E63]">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Touchline Atelier. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
