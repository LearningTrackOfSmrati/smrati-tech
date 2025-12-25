import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Games from './components/Games'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Blogs />
        <Games />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

