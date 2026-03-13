import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-gray-900 dark:text-white transition-colors duration-500">
        <AnimatedBackground />
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
