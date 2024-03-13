import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
