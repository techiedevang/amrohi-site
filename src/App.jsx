import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Journal from './pages/Journal'
import Contact from './pages/Contact'
import Seo from './components/Seo'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amrohi Site",
  "image": "https://amrohi.example.com/logo.png",
  "url": "https://amrohi.example.com",
  "telephone": "+1234567890",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Anytown",
    "postalCode": "12345",
    "addressCountry": "US"
  }
};

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <Seo 
        title="Home"
        description="Welcome to Amrohi Site."
        url="https://amrohi.example.com"
        schema={localBusinessSchema}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </BrowserRouter>
  )
}
