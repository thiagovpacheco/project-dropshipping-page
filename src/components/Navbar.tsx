import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, ChevronDown, Laptop, Smartphone, Headphones, Camera, Watch, Gamepad, Tv, Speaker, Shirt, Dumbbell, Book } from 'lucide-react';
import { Link } from './Link';
import { useNavigation } from '../hooks/useNavigation';

interface Category {
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo } = useNavigation();

  const categories: Category[] = [
    {
      name: 'Eletrônicos',
      icon: <Laptop className="w-5 h-5" />,
      subcategories: ['Notebooks', 'Tablets', 'Acessórios para PC', 'Componentes']
    },
    {
      name: 'Smartphones',
      icon: <Smartphone className="w-5 h-5" />,
      subcategories: ['Apple', 'Samsung', 'Xiaomi', 'Acessórios']
    },
    {
      name: 'Áudio',
      icon: <Headphones className="w-5 h-5" />,
      subcategories: ['Fones', 'Caixas de Som', 'Microfones', 'Home Theater']
    },
    {
      name: 'Fotografia',
      icon: <Camera className="w-5 h-5" />,
      subcategories: ['Câmeras', 'Lentes', 'Tripés', 'Iluminação']
    },
    {
      name: 'Games',
      icon: <Gamepad className="w-5 h-5" />,
      subcategories: ['Consoles', 'Jogos', 'Acessórios', 'Cadeiras Gamer']
    },
    {
      name: 'TV & Home',
      icon: <Tv className="w-5 h-5" />,
      subcategories: ['Smart TVs', 'Projetores', 'Soundbars', 'Streaming']
    }
  ];

  const handleNavigation = (page: string) => {
    navigateTo(page);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 bg-white">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center text-sm font-medium">
            <p className="animate-pulse">Frete grátis para todas as compras!</p>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <button 
                onClick={() => handleNavigation('home')} 
                className="text-2xl font-bold tracking-tighter text-blue-600 hover:text-blue-700 transition-colors"
              >
                NEXUS
              </button>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
                <span>Conta</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Carrinho</span>
                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">0</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Categories bar */}
          <div className="hidden md:flex py-2 -mb-px space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
              >
                <button className="flex items-center space-x-2 text-gray-700 group-hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                  <span className="text-blue-600 group-hover:text-blue-700">{category.icon}</span>
                  <span className="tracking-wide">{category.name}</span>
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Added invisible bridge to prevent flickering */}
                <div className="absolute h-2 w-full -bottom-2"></div>
                
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full w-48 rounded-lg shadow-xl bg-white border border-gray-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                  <div className="py-1.5">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white hover:text-blue-700 hover:border-l-2 hover:border-blue-600 transition-all duration-150 group/item"
                      >
                        <span className="relative transition-all duration-200">{sub}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {category.icon}
                  <span className="ml-3">{category.name}</span>
                </button>
              ))}
              <div className="border-t border-gray-200 pt-4">
                <button className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  <User className="w-5 h-5" />
                  <span className="ml-3">Minha Conta</span>
                </button>
                <button className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="ml-3">Carrinho</span>
                  <span className="ml-auto bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">0</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}