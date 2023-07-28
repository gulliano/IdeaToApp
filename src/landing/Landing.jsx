import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Hero from '../common/Hero';
import Contact from '../common/Contact';



function App() {
  // Initialisez AOS
  React.useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Hero />
      <Contact />
      

    </>
  )
}

export default App