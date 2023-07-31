import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Hero from './Hero';
import About from './About';
import Presentation from './Presentation';
import Team from './Team';
import Contact from './Contact';


function App() {
  // Initialisez AOS
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <About/>
      <Presentation />
      <Team />
      <Contact />
    </>
  )
}

export default App