import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Hero from '../common/Hero';
import Presentation from '../landing/Presentation';
import Zigzag from '../landing/Zigzag';
import About from '../landing/About';
import Testimonials from '../landing/Testimonials';


function App() {
  // Initialisez AOS
  React.useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Hero />
      <About />
      <Presentation />
      <Zigzag />
      <Testimonials />
    </>
  )
}

export default App
