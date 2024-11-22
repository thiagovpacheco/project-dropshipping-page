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
        <div className="flex flex-col min-h-screen bg-white">
          <FreeShippingBanner />
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
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;