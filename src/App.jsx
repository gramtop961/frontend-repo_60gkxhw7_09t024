import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CustomDesign from './components/CustomDesign'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-slate-900">
      <Navbar />
      <Hero />
      <ProductGrid />
      <CustomDesign />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
