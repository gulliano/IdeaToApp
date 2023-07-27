import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Navbar from '../common/Navbar';
import Hero from '../common/Hero';
import Footer from '../common/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      // Add your configuration options here, if needed
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
