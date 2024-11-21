import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Navbar } from "./components/Navbar";

// Componente temporário para páginas em construção
const UnderConstruction = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl font-bold">Página em construção</h1>
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/reviews" element={<UnderConstruction />} />
        <Route path="/contact" element={<UnderConstruction />} />
      </Routes>
    </div>
  );
}

export default App;