import Navigation from './Navigation';
import Hero from './Hero';

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