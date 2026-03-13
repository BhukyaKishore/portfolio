export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 dark:border-white/5">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-xl font-black tracking-tighter gradient-text">BK.</span>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            © {new Date().getFullYear()} Bhavani Kishore. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="https://github.com/BhukyaKishore" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-500 hover:text-accent-cyan dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/kishore-bhukya/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-500 hover:text-accent-cyan dark:hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="text-xs font-mono text-gray-600">
          Built with precision.
        </div>
      </div>
    </footer>
  )
}
