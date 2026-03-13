import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Coder Agent',
    description: 'An autonomous AI agent designed to create, debug, and enhance codebases. It utilizes advanced LLM reasoning to automate complex software development tasks.',
    tags: ['#AI_Agent', '#Python', '#LLM', '#Automation'],
    github: 'https://github.com/BhukyaKishore/coder_agent-create-debug-enhance-',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'GST RAG Chatbot',
    description: 'A specialized RAG-powered assistant for GST inquiries. It processes complex tax regulations to provide precise, context-aware answers to user queries.',
    tags: ['#RAG', '#LangChain', '#GST', '#VectorDB'],
    github: 'https://github.com/BhukyaKishore/GST-RAG_chat_bot-',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Local Data Warehouse & Analytical System',
    description: 'Designed and implemented a scalable data engineering solution using Medallion Architecture (Bronze, Silver, Gold). Deployed a fully serverless architecture on AWS with automated pipelines.',
    tags: ['#AWS', '#Lambda', '#S3', '#StepFunctions', '#ETL'],
    github: 'https://github.com/BhukyaKishore',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Weather Data Analysis — ELT Pipeline',
    description: 'Automated ELT system for real-time weather collection and processing. Includes interactive Tableau dashboards for dynamic climate insights across multiple regions.',
    tags: ['#Python', '#MySQL', '#Tableau', '#ELT', '#DataViz'],
    github: 'https://github.com/BhukyaKishore/ELT-WeatherApp',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Currency Exchange',
    description: 'A dynamic currency conversion tool with real-time rate integration. Features a clean, intuitive interface for fast and accurate financial calculations across global currencies.',
    tags: ['#React', '#API', '#Financial', '#Web'],
    github: 'https://github.com/BhukyaKishore/CurrencyExchange',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-20 md:py-28" ref={sectionRef}>
      <div className="section-container relative">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-mono text-accent-cyan tracking-widest uppercase">My Portfolio</span>
          <h2 className="section-title mt-3"><span className="gradient-text">Projects</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="reveal glass-card p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-accent-cyan/20"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-4 leading-tight">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-accent-cyan transition-all"
              >
                View Repository
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
