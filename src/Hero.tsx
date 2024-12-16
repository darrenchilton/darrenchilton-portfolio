const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/50 to-stone-900/50" />
      <img
        src="/hero-bg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Darren Chilton
      </h1>
      <h2 className="text-xl md:text-2xl text-stone-200 mb-8">
        Growth-Focused Digital Leader
      </h2>
      <p className="text-lg md:text-xl text-stone-100 mb-12 max-w-2xl mx-auto">
        20+ years of experience driving digital transformation and scaling operations
        across global organizations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-stone-800 px-8 py-3 rounded-lg 
          hover:bg-stone-100 transition-colors duration-200">
          View Experience
        </button>
        <button className="bg-transparent border-2 border-white text-white 
          px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  </section>
);

export default Hero;