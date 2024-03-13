import React from 'react'
import About from "../components/Home/about.js" 
import Hero from "../components/Home/hero_section.js" 
import Services from '../components/Home/service.js'
function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
      
    </div>
  )
}

export default Home
