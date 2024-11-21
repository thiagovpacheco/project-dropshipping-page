import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";
import { NavigationProvider } from "./contexts/NavigationContext";

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
    <NavigationProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;