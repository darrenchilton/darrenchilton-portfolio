import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-stone-800">DC</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button className="text-stone-600 hover:text-stone-900 px-3 py-2">Home</button>
            <button className="text-stone-600 hover:text-stone-900 px-3 py-2">About</button>
            <button className="text-stone-600 hover:text-stone-900 px-3 py-2">Experience</button>
            <button className="bg-stone-800 text-white px-4 py-2 rounded-lg">Contact</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <button className="block w-full text-left px-4 py-2 text-stone-600 hover:bg-stone-200">Home</button>
            <button className="block w-full text-left px-4 py-2 text-stone-600 hover:bg-stone-200">About</button>
            <button className="block w-full text-left px-4 py-2 text-stone-600 hover:bg-stone-200">Experience</button>
            <button className="block w-full text-left px-4 py-2 bg-stone-800 text-white">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

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

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
};

export default App;