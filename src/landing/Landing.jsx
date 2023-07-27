import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Hero from '../common/Hero';
import Zigzag from '../landing/Zigzag';
import Testimonials from '../landing/Testimonials';


function App() {
  // Initialisez AOS
  React.useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
    </>
  )
}

export default App
