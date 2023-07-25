import { useState } from 'react'
import Navbar from './common/Navbar'
import './App.css'
import Hero from './common/Hero'
import Cta from './common/Cta'
import Content from './common/Content'
import Features from './common/Features'
import Team from './common/Team'
import Footer from './common/Footer'
import Gallery from './common/Gallery'
import Conact from './common/Conact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Cta />
      <Content />
      <Features />
      <Gallery />
      <Team />
      <Conact />
      <Footer />
    </>
  )
}

export default App
