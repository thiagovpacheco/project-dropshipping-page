import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, ChevronDown, Laptop, Smartphone, Headphones, Camera, Watch, Gamepad, Tv, Speaker, Shirt, Dumbbell, Book } from 'lucide-react';
import { Link } from './Link';
import { useNavigation } from '../hooks/useNavigation';

interface Category {
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
}

interface NavigationItem {
  id: string;
  label: string;
  route: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', route: 'home' },
  { id: 'categories', label: 'Categorias', route: 'categories' },
  { id: 'about', label: 'Sobre', route: 'about' },
  { id: 'contact', label: 'Contato', route: 'contact' },
];

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
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center text-sm font-medium">
            <p className="animate-pulse">Frete grátis para todas as compras!</p>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <button 
                onClick={() => navigateTo('home')} 
                className="text-xl sm:text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300"
              >
                NEXUS
              </button>
            </div>

            {/* Search bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-xl border border-slate-200 
                           focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50
                           placeholder:text-slate-400 transition-all duration-300"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-slate-700 hover:text-indigo-600 transition-colors">
                <User className="w-5 h-5" />
                <span>Conta</span>
              </button>
              <button className="flex items-center space-x-1 text-slate-700 hover:text-indigo-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Carrinho</span>
                <span className="bg-indigo-600 text-white text-xs rounded-full px-2 py-0.5">0</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Categories bar - Hidden on mobile */}
          <div className="hidden md:flex py-2 -mb-px space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
              >
                <button className="flex items-center space-x-2 text-slate-700 group-hover:text-indigo-600 font-medium transition-colors duration-200 py-2">
                  <span className="text-indigo-600 group-hover:text-indigo-700">{category.icon}</span>
                  <span className="tracking-wide">{category.name}</span>
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Added invisible bridge to prevent flickering */}
                <div className="absolute h-2 w-full -bottom-2"></div>
                
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 top-full w-48 rounded-xl shadow-xl bg-white border border-slate-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                  <div className="py-1.5">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-slate-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white hover:text-indigo-700 hover:border-l-2 hover:border-indigo-600 transition-all duration-150 group/item"
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
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            {/* Mobile search */}
            <div className="p-4 border-b border-slate-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-slate-200 
                           focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50
                           placeholder:text-slate-400 transition-all duration-300 text-base"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Mobile categories */}
            <div className="py-2">
              {categories.map((category) => (
                <div key={category.name} className="relative">
                  <button
                    onClick={() => {
                      const categoryElement = document.getElementById(`category-${category.name}`);
                      categoryElement?.classList.toggle('hidden');
                    }}
                    className="flex items-center w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  >
                    <span className="text-indigo-600 mr-3">{category.icon}</span>
                    <span>{category.name}</span>
                    <ChevronDown className="w-5 h-5 ml-auto transition-transform duration-200" />
                  </button>
                  <div id={`category-${category.name}`} className="hidden bg-slate-50">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-11 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile account and cart */}
            <div className="border-t border-slate-200">
              <div className="p-2">
                <button className="flex items-center w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">
                  <User className="w-5 h-5 mr-3" />
                  <span>Minha Conta</span>
                </button>
                <button className="flex items-center w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  <span>Carrinho</span>
                  <span className="ml-auto bg-indigo-600 text-white text-xs rounded-full px-2 py-1">0</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateTo(item.route)}
            className="text-slate-700 hover:text-indigo-600 transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigateTo(item.route);
                  setIsOpen(false);
                }}
                className="w-full text-left text-slate-700 hover:text-indigo-600 hover:bg-slate-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}