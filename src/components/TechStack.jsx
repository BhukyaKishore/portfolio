import { useEffect, useRef } from 'react'

const categories = [
  {
    title: 'Languages',
    color: 'accent-cyan',
    items: ['Python', 'SQL', 'C'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'Data Tools',
    color: 'accent-blue',
    items: ['PySpark', 'Pandas', 'Snowflake', 'MySQL'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: 'AI / ML',
    color: 'accent-purple',
    items: ['RAG', 'LLMs', 'LangChain', 'Qdrant'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Cloud (AWS)',
    color: 'accent-cyan',
    items: ['Lambda', 'S3', 'Step Functions', 'API Gateway'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
]

export default function TechStack() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="techstack" className="py-20 md:py-32" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-20 reveal">
          <span className="text-sm font-mono text-accent-cyan tracking-widest uppercase">Competencies</span>
          <h2 className="section-title mt-3"><span className="gradient-text">Mastered Tech</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <div 
              key={cat.title} 
              className="reveal glass-card p-10 border border-white/5 hover:border-accent-cyan/20 group relative"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-${cat.color}/10 text-${cat.color} group-hover:scale-110 transition-transform duration-500`}>
                  {cat.icon}
                </div>
                <h3 className={`text-xl font-bold tracking-tight dark:text-white`}>{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 hover:text-dark-900 dark:hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-transparent to-accent-cyan/5 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
