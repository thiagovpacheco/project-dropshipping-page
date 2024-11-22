import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreeShippingBanner from './components/FreeShippingBanner';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { Electronics } from './pages/Electronics';
import { Smartphones } from './pages/Smartphones';
import { Audio } from './pages/Audio';
import { Photography } from './pages/Photography';
import { Gaming } from './pages/Gaming';
import { TVHome } from './pages/TVHome';
import { NavigationProvider } from './contexts/NavigationContext';
import { ThemeToggle } from './components/ThemeToggle';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <FeaturedProducts />
    <InfoSection />
  </>
);

function App() {
  return (
    <Router>
      <NavigationProvider>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="bg-slate-900 dark:bg-[#4F46E5] text-white py-2">
            <p className="text-center text-sm sm:text-base font-medium animate-marquee">
              Frete grátis para todas as compras!
            </p>
          </div>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/eletronicos" element={<Electronics />} />
              <Route path="/smartphones" element={<Smartphones />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/fotografia" element={<Photography />} />
              <Route path="/games" element={<Gaming />} />
              <Route path="/tv-home" element={<TVHome />} />
            </Routes>
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;