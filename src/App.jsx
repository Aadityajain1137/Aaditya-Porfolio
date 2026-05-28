import { useState } from 'react'
import { useEffect } from 'react';
import { initScrollAnimations } from './utils/scrollAnimations';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
useEffect(() => {
    initScrollAnimations();
  }, []);
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
