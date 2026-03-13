import { useState, useEffect } from 'react'

const titles = ['Data Engineer', 'AI Developer', 'Python Developer']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        if (charIndex + 1 === currentTitle.length) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        setDisplayText(currentTitle.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="hero-glow bg-accent-cyan orb-float" style={{ top: '10%', left: '15%' }} />
      <div className="hero-glow bg-accent-purple orb-float" style={{ bottom: '10%', right: '10%', animationDelay: '-5s' }} />
      <div className="hero-glow bg-accent-blue orb-float" style={{ top: '50%', left: '60%', width: '400px', height: '400px', animationDelay: '-10s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 animate-slide-up">
          <span className="gradient-text">Kishore</span>{' '}
          <span className="dark:text-white">Bhukya</span>
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-xl md:text-2xl font-mono text-accent-cyan font-bold">
            {'> '}{displayText}
          </span>
          <span className="typewriter-cursor" />
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Building <span className="text-dark-900 dark:text-white font-bold tracking-tight">scalable data pipelines</span> &{' '}
          <span className="text-dark-900 dark:text-white font-bold tracking-tight">agentic AI systems</span> with absolute efficiency.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
          <a
            href="/Kishore_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      </div>

    </section>
  )
}
