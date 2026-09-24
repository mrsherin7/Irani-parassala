import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MenuPage from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Admin from './admin/Admin'

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50 pt-20">
      <div className="text-center px-6">
        <p className="font-display text-8xl text-brown-200 font-light">404</p>
        <h1 className="font-serif text-2xl text-charcoal-800 mt-4 mb-2">Page not found</h1>
        <p className="text-charcoal-400 text-sm mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary text-xs" style={{ letterSpacing: '0.08em' }}>BACK TO HOME</a>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with Navbar + Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="about" element={<About />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          }
        />
        {/* Admin routes — no public navbar/footer */}
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
