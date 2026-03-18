import Hero3DObject from './Hero3DObject';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden flex items-center">
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-pink-500 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/30 pointer-events-none"></div>

      {/* 3D Rotating Shape */}
      <Hero3DObject />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-slide-in-down">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-md hover:bg-blue-500/20 transition-all duration-300 cursor-default">
              👋 Welcome to my Portfolio
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-center mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-black mb-4">
              Hi, I'm <span className="gradient-text">Jainil Vyas</span>
            </span>
            <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              React Intern @ LiveBird Technologies
            </span>
          </h1>

          {/* Description */}
          <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block font-semibold text-white mb-3">
              Computer Engineering student at LJ University
            </span>
            Passionate about building beautiful web applications with React, Next.js, and full-stack development. Currently applying my skills in real-world projects at LiveBird Technologies, creating responsive, user-friendly interfaces with modern technologies.
          </p>

          {/* CTA Buttons - Modern Layout */}
          <div className="flex justify-center items-center mb-12 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
              {/* Primary Button */}
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>🔍</span> View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 overflow-hidden border-2 border-purple-400 hover:border-purple-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-purple-500/10 hover:bg-purple-500/20 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>💬</span> Get In Touch
                </span>
              </a>

              {/* CV Download Button */}
              <a
                href="/Jainil_Vyas_CV.pdf"
                download="Jainil_Vyas_CV.pdf"
                className="group relative px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>📄</span> Download CV
                </span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">9+</div>
              <div className="text-sm text-gray-400 mt-1">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">3</div>
              <div className="text-sm text-gray-400 mt-1">Certifications</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors">5+</div>
              <div className="text-sm text-gray-400 mt-1">Tech Stack</div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex justify-center flex-wrap gap-3 mb-12 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript'].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-slate-800/50 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-md hover:border-blue-400/60 hover:bg-slate-800/70 transition-all duration-300 cursor-default animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 animate-bounce" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <svg className="w-6 h-6 text-blue-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
