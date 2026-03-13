import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    setStatus('sending')
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="section-container relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-sm font-mono text-accent-cyan tracking-widest uppercase">Connectivity</span>
          <h2 className="section-title mt-3 font-black tracking-tighter"><span className="gradient-text text-6xl">GET IN TOUCH</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Info Side with Logos */}
          <div className="reveal">
            <h3 className="text-3xl font-black mb-8 tracking-tight">Let's build something scalable.</h3>
            
            <div className="space-y-10">
              {/* Email */}
              <div className="group p-6 rounded-3xl glass-card border-white/5 hover:border-accent-cyan/20 transition-all flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest block mb-1 font-bold">Email</span>
                  <a href="mailto:bhukyakishore3921@gmail.com" className="text-xl font-bold hover:text-accent-cyan transition-colors">bhukyakishore3921@gmail.com</a>
                </div>
              </div>

              {/* Socials with Logos */}
              <div className="grid sm:grid-cols-2 gap-6">
                <a href="https://github.com/BhukyaKishore" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-3xl glass-card border-white/5 hover:border-accent-purple/20 transition-all flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest block mb-1 font-bold">GitHub</span>
                    <span className="font-bold group-hover:text-accent-cyan transition-all">@BhukyaKishore</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/kishore-bhukya/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-3xl glass-card border-white/5 hover:border-accent-blue/20 transition-all flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-accent-blue uppercase tracking-widest block mb-1 font-bold">LinkedIn</span>
                    <span className="font-bold group-hover:text-accent-blue transition-all">/kishore-bhukya</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side with Email Integration */}
          <div className="reveal">
            <form 
              action="https://formsubmit.co/bhukyakishore3921@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
              className="glass-card p-10 space-y-6 border-white/5 shadow-2xl relative"
            >
              {/* Hidden inputs for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] ml-2 mb-2 block">Full Name</label>
                  <input 
                    required 
                    name="name"
                    type="text" 
                    placeholder="E.g. John Doe" 
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-all text-lg font-medium" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] ml-2 mb-2 block">Email Address</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    placeholder="E.g. john@example.com" 
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-all text-lg font-medium" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] ml-2 mb-2 block">Message</label>
                  <textarea 
                    required 
                    name="message"
                    rows={4} 
                    placeholder="How can I help you?" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent-cyan transition-all resize-none text-lg font-medium" 
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center py-6 text-xl tracking-widest font-black"
              >
                {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>
              
              <p className="text-[10px] text-center text-gray-600 font-mono tracking-widest italic pt-4">© {new Date().getFullYear()} KISHORE BHUKYA • POWERED BY FORMSUBMIT</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
