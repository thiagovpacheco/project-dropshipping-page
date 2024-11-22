import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User, ChevronDown, Laptop, Smartphone, Headphones, Camera, Gamepad, Tv } from 'lucide-react';

interface Category {
  name: string;
  icon: React.ReactNode;
  route: string;
  subcategories: Array<{
    name: string;
    route: string;
  }>;
}

const categories: Category[] = [
  {
    name: 'Eletrônicos',
    icon: <Laptop className="w-5 h-5" />,
    route: '/eletronicos',
    subcategories: [
      { name: 'Notebooks', route: '/eletronicos?categoria=notebooks' },
      { name: 'Tablets', route: '/eletronicos?categoria=tablets' },
      { name: 'Acessórios para PC', route: '/eletronicos?categoria=acessorios' },
      { name: 'Componentes', route: '/eletronicos?categoria=componentes' }
    ]
  },
  {
    name: 'Smartphones',
    icon: <Smartphone className="w-5 h-5" />,
    route: '/smartphones',
    subcategories: [
      { name: 'Apple', route: '/smartphones?marca=apple' },
      { name: 'Samsung', route: '/smartphones?marca=samsung' },
      { name: 'Xiaomi', route: '/smartphones?marca=xiaomi' },
      { name: 'Acessórios', route: '/smartphones?categoria=acessorios' }
    ]
  },
  {
    name: 'Áudio',
    icon: <Headphones className="w-5 h-5" />,
    route: '/audio',
    subcategories: [
      { name: 'Fones', route: '/audio?categoria=fones' },
      { name: 'Caixas de Som', route: '/audio?categoria=caixas' },
      { name: 'Microfones', route: '/audio?categoria=microfones' },
      { name: 'Home Theater', route: '/audio?categoria=home-theater' }
    ]
  },
  {
    name: 'Fotografia',
    icon: <Camera className="w-5 h-5" />,
    route: '/fotografia',
    subcategories: [
      { name: 'Câmeras', route: '/fotografia?categoria=cameras' },
      { name: 'Lentes', route: '/fotografia?categoria=lentes' },
      { name: 'Tripés', route: '/fotografia?categoria=tripes' },
      { name: 'Iluminação', route: '/fotografia?categoria=iluminacao' }
    ]
  },
  {
    name: 'Games',
    icon: <Gamepad className="w-5 h-5" />,
    route: '/games',
    subcategories: [
      { name: 'Consoles', route: '/games?categoria=consoles' },
      { name: 'Jogos', route: '/games?categoria=jogos' },
      { name: 'Acessórios', route: '/games?categoria=acessorios' },
      { name: 'Cadeiras Gamer', route: '/games?categoria=cadeiras' }
    ]
  },
  {
    name: 'TV & Home',
    icon: <Tv className="w-5 h-5" />,
    route: '/tv-home',
    subcategories: [
      { name: 'Smart TVs', route: '/tv-home?categoria=smart-tvs' },
      { name: 'Projetores', route: '/tv-home?categoria=projetores' },
      { name: 'Soundbars', route: '/tv-home?categoria=soundbars' },
      { name: 'Streaming', route: '/tv-home?categoria=streaming' }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [justClicked, setJustClicked] = useState(false);
  const cartItemCount = 3;

  const handleMouseEnter = (categoryName: string) => {
    setJustClicked(false);
  };

  const handleMouseLeave = () => {
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800/50 transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-20 items-center gap-8">
          <Link 
            to="/"
            className="text-2xl sm:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-400 dark:hover:to-violet-400 transition-all duration-300 min-w-[120px]"
          >
            NEXUS
          </Link>

          <div className="hidden lg:flex items-center justify-center space-x-10 flex-1 px-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={category.route}
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-2"
                  onClick={() => {
                    setJustClicked(true);
                  }}
                >
                  <span className="text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {category.icon}
                  </span>
                  <span className="text-base">{category.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <div className={`absolute left-0 mt-2 w-56 rounded-lg bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700/50 ring-1 ring-black ring-opacity-5 dark:ring-slate-700 focus:outline-none z-50
                              transition-all duration-200 transform origin-top-left
                              ${justClicked ? 'opacity-0 invisible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}
                >
                  <div className="py-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.route}
                        className="group/item flex items-center px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      >
                        <p className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400">
                          {sub.name}
                        </p>
                        <div className="ml-4 w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 opacity-0 transform scale-y-0 group-hover/item:opacity-100 group-hover/item:scale-y-100 transition-all duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full px-6 py-3 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-700
                         bg-white dark:bg-slate-800 
                         text-slate-900 dark:text-slate-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50
                         dark:focus:ring-indigo-400/50 dark:focus:border-indigo-400/50
                         placeholder:text-slate-400 dark:placeholder:text-slate-500 
                         transition-all duration-300 text-base"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5" />
            </div>

            <button className="p-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <User className="w-6 h-6" />
            </button>

            <div className="relative">
              <button className="p-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white dark:border-slate-900">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full px-5 py-3 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-700
                           bg-white dark:bg-slate-800 
                           text-slate-900 dark:text-slate-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50
                           dark:focus:ring-indigo-400/50 dark:focus:border-indigo-400/50
                           placeholder:text-slate-400 dark:placeholder:text-slate-500 
                           transition-all duration-300 text-base"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5" />
              </div>
            </div>

            <div className="px-2 pt-2 pb-3 space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="py-1">
                  <Link
                    to={category.route}
                    className="block px-4 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-slate-400 dark:text-slate-500">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                  </Link>
                  <div className="pl-12 space-y-2 mt-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.route}
                        className="block px-4 py-2 rounded-md text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-around">
                <button className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2">
                  <User className="w-5 h-5" />
                  <span className="text-base font-medium">Minha Conta</span>
                </button>
                <button className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2">
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                  <span className="text-base font-medium">Carrinho ({cartItemCount})</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;