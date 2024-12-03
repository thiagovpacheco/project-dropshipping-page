import React, { useState, useEffect, useRef, Fragment } from 'react';
import { MinimalSearchButton } from './Search/FinalMinimalButton';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { 
  Menu, X, ChevronDown, ShoppingCart, User, Search, Laptop,
  Smartphone, Headphones, Camera, Gamepad, Tv, LogOut, 
  Settings, ShoppingBag, HeartIcon, UserCircle, UserCircle2,
  RefreshCw, MessageSquareMore, Package, HelpCircle,
  Plus, Minus
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import { useMenu } from '../contexts/MenuContext';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './Auth/AuthModal';

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
    icon: <Laptop className="w-6 h-6" />,
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
    icon: <Smartphone className="w-6 h-6" />,
    route: '/smartphones',
    subcategories: [
      { name: 'iPhones', route: '/smartphones?categoria=iphone' },
      { name: 'Android', route: '/smartphones?categoria=android' },
      { name: 'Básicos', route: '/smartphones?categoria=basicos' },
      { name: 'Acessórios', route: '/smartphones?categoria=acessorios' }
    ]
  },
  {
    name: 'Áudio',
    icon: <Headphones className="w-6 h-6" />,
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
    icon: <Camera className="w-6 h-6" />,
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
    icon: <Gamepad className="w-6 h-6" />,
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
    icon: <Tv className="w-6 h-6" />,
    route: '/tv-home',
    subcategories: [
      { name: 'Smart TVs', route: '/tv-home?categoria=smart-tvs' },
      { name: 'Projetores', route: '/tv-home?categoria=projetores' },
      { name: 'Soundbars', route: '/tv-home?categoria=soundbars' },
      { name: 'Streaming', route: '/tv-home?categoria=streaming' }
    ]
  }
];

const Navbar: React.FC = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { items } } = useCart();
  const { theme } = useTheme();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const getFirstName = (fullName: string | undefined) => {
    if (!fullName) return '';
    return fullName.split(' ')[0];
  };

  const handleAuthenticatedAction = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
    } else {
      window.location.href = path;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?busca=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleNavigation = (route: string) => {
    navigate(route);
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  const renderSearchBar = () => (
    <div className="flex items-center pl-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Encontre produtos..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button
        type="submit"
        className="text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ml-2"
      >
        <Search className="h-7 w-7" />
      </button>
    </div>
  );

  const renderUserMenu = () => (
    <div className="relative group">
      {isAuthenticated ? (
        <>
          <div className="flex items-center">
            <button className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-2">
              <UserCircle2 className="h-7 w-7" />
              <span className="hidden lg:block font-medium">
                Olá, {getFirstName(user?.name) || 'Usuário'}
              </span>
              <ChevronDown className="h-5 w-5 transform transition-transform duration-200 lg:group-hover:rotate-180" />
            </button>
          </div>

          <div className="hidden lg:group-hover:block absolute right-0 w-64 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-2 z-50">
            <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent"></div>
            <Link
              to="/conta"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-700 dark:text-gray-200">
                Dados da conta
              </span>
            </Link>

            <Link
              to="/orders"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <Package className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-700 dark:text-gray-200">
                Meus pedidos
              </span>
            </Link>

            <Link
              to="/returns"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <RefreshCw className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-700 dark:text-gray-200">
                Trocas e devoluções
              </span>
            </Link>

            <Link
              to="/support"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-700 dark:text-gray-200">
                Atendimento
              </span>
            </Link>

            <div className="border-t border-gray-100 dark:border-gray-700 mt-1"></div>

            <button
              onClick={logout}
              className="flex items-center gap-3 px-4 py-3 w-full hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 text-red-600 dark:text-red-400"
            >
              <LogOut className="h-5 w-5" />
              <span>Sair da conta</span>
            </button>
          </div>
        </>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          <UserCircle2 className="h-7 w-7" />
          <span className="hidden lg:block font-medium">Entrar</span>
        </Link>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <nav className="relative">
        <div className="container mx-auto px-4 min-w-[320px] max-w-[1920px]">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left Section */}
            <div className="flex items-center flex-shrink-0">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap">
                  NEXUS
                </span>
              </Link>
            </div>

            {/* Center Section */}
            <div className="flex-1 flex items-center justify-center max-w-4xl mx-4">
              {/* Search Bar */}
              <form
                onSubmit={handleSearch}
                className="hidden lg:flex flex-1 max-w-3xl relative"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Encontre produtos..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 
                          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                          focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                          placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-200"
              >
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600 dark:text-gray-300" />
              </button>

              <div className="relative z-[999]">
                {renderUserMenu()}
              </div>

              <Link
                to="/cart"
                className="relative p-2 sm:p-3 transition-colors duration-200"
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {items.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-200"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Categories Desktop */}
          <div className="hidden lg:block border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4">
              <nav className="flex items-center justify-between py-4">
                <div className="flex items-center justify-between w-full gap-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(category.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        to={category.route + '?categoria=todos'}
                        className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-2 px-2 rounded-lg whitespace-nowrap"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(category.route + '?categoria=todos');
                        }}
                      >
                        <span className="text-gray-400 transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          {category.icon}
                        </span>
                        <span className="font-medium text-base">{category.name}</span>
                        <ChevronDown className="w-5 h-5 transform transition-transform duration-200 group-hover:rotate-180" />
                      </Link>

                      {/* Category Dropdown */}
                      <div 
                        className={`absolute left-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 shadow-lg
                                  ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none
                                  transition-all duration-200 transform origin-top-left
                                  ${openDropdown === category.name 
                                    ? 'opacity-100 scale-100 visible' 
                                    : 'opacity-0 scale-95 invisible'}
                                  z-[60]`}
                      >
                        <div className="py-1">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.route}
                              className="group/item relative flex items-center px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-gray-700"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(sub.route);
                              }}
                            >
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-top"></div>
                              <p className="flex-1 text-base font-medium text-slate-700 dark:text-gray-300 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors duration-200">
                                {sub.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Categories Mobile */}
          <Transition
            show={isMenuOpen}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="absolute inset-x-0 top-full mt-2 transform origin-top 2xl:hidden"
          >
            <div className="bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
              <div className="p-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar produtos..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                          focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                          placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <Search className="h-5 w-5 text-gray-400" />
                  </button>
                </form>
              </div>

              <div className="py-2">
                {categories.map((category) => (
                  <HeadlessMenu key={category.name} as="div" className="relative">
                    {({ open }) => (
                      <>
                        <HeadlessMenu.Button className="w-full flex items-center justify-between px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-400">{category.icon}</span>
                            <span className="text-base font-medium">{category.name}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                        </HeadlessMenu.Button>

                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-in"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <HeadlessMenu.Items className="bg-gray-50 dark:bg-gray-800/50">
                            {category.subcategories.map((sub) => (
                              <HeadlessMenu.Item key={sub.name}>
                                {({ active }) => (
                                  <Link
                                    to={sub.route}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleNavigation(sub.route);
                                      setIsMenuOpen(false);
                                    }}
                                    className={`block px-8 py-3 text-sm ${
                                      active
                                        ? 'bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400'
                                        : 'text-gray-700 dark:text-gray-300'
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                )}
                              </HeadlessMenu.Item>
                            ))}
                          </HeadlessMenu.Items>
                        </Transition>
                      </>
                    )}
                  </HeadlessMenu>
                ))}
              </div>
            </div>
          </Transition>
        </div>

        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      </nav>
    </header>
  );
};

export default Navbar;