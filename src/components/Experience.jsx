import { useEffect, useRef } from 'react'

const journey = [
  {
    type: 'work',
    title: 'Data Engineer',
    subtitle: 'MHK-Software Private Limited',
    location: 'Hyderabad',
    period: '09/2025 - Present',
    description: [
      'Designed Medallion Architecture (Bronze, Silver, Gold) ETL pipelines.',
      'Provisioned serverless AWS infrastructure (Lambda, S3, Step Functions).',
      'Engineered agentic RAG Chatbots for automated scheduling.',
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'accent-cyan'
  },
  {
    type: 'study',
    title: 'B.Tech in Computer Science',
    subtitle: 'RGUKT, Nuzvid',
    location: 'Andhra Pradesh',
    period: '2022 - 2026 (Expected)',
    description: [
      'Current CGPA: 8.21',
      'Focusing on Data Engineering and AI Research.',
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: 'accent-purple'
  },
  {
    type: 'study',
    title: 'Pre-University Course (10+2)',
    subtitle: 'RGUKT, Nuzvid',
    location: 'Andhra Pradesh',
    period: '2020 - 2022',
    description: ['CGPA: 9.23', 'MPC Major'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: 'accent-purple'
  }
]

export default function Experience() {
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      <div className="section-container relative">
        <div className="text-center mb-20 reveal">
          <span className="text-sm font-mono text-accent-cyan tracking-widest uppercase italic">My Story</span>
          <h2 className="section-title mt-3 font-black tracking-tighter"><span className="gradient-text text-5xl md:text-6xl uppercase">The Journey</span></h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {journey.map((item, idx) => (
              <div
                key={idx}
                className={`reveal relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-white dark:bg-dark-950 border border-black/10 dark:border-white/10 z-20 flex items-center justify-center text-${item.color} shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.8)] hidden md:flex hover:scale-110 transition-transform duration-300`}>
                  <div className={`absolute inset-0 rounded-2xl bg-${item.color}/10 blur-sm`} />
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`glass-card p-8 border-${item.color}/10 hover:border-${item.color}/30 transition-all group relative group overflow-hidden`}>
                    <div className={`absolute top-0 ${idx % 2 === 1 ? 'left-0' : 'right-0'} p-6 opacity-5 group-hover:opacity-10 transition-opacity`}>
                      <div className="scale-150">{item.icon}</div>
                    </div>
                    
                    <span className={`text-xs font-mono text-${item.color} mb-4 block tracking-widest uppercase font-black bg-${item.color}/5 inline-block px-3 py-1 rounded-full`}>
                      {item.period}
                    </span>
                    
                    <h3 className="text-2xl font-black mb-1 tracking-tight dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-bold mb-6 text-sm flex items-center gap-2">
                       <span className={`w-1 h-1 rounded-full bg-${item.color}`} />
                       {item.subtitle}
                    </p>

                    <ul className="space-y-4">
                      {item.description.map((bullet, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-500 flex gap-4 leading-relaxed font-medium">
                          <span className={`text-${item.color} font-black mt-1 text-xs shrink-0 select-none`}>0{i+1} —</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Date indicator for mobile */}
                <div className="md:hidden absolute left-4 top-0 w-px h-full bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
