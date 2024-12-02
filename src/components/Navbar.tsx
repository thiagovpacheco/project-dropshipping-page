import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { 
  Menu, X, ChevronDown, ShoppingCart, User, Search, Laptop,
  Smartphone, Headphones, Camera, Gamepad, Tv, LogOut, 
  Settings, ShoppingBag, HeartIcon, UserCircle,
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
    <div 
      className="relative group"
      ref={userMenuRef}
    >
      {!isAuthenticated ? (
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="px-5 py-3 rounded-lg transition-colors duration-200 flex items-center gap-3 group"
        >
          <User className="h-7 w-7 text-slate-600 dark:text-gray-300 transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          <span className="hidden 2xl:block text-slate-600 dark:text-gray-300 font-medium text-base transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            Entrar
          </span>
        </button>
      ) : (
        <>
          <HeadlessMenu as="div" className="relative group">
            <HeadlessMenu.Button className="px-5 py-3 rounded-lg transition-colors duration-200 flex items-center gap-3">
              <User className="h-7 w-7 text-slate-600 dark:text-gray-300" />
              <span className="hidden 2xl:block text-slate-600 dark:text-gray-300 font-medium text-base">
                <span className="flex items-center gap-1">
                  Olá, <span className="text-indigo-600 dark:text-indigo-400">{getFirstName(user?.name)}</span>
                </span>
              </span>
              <ChevronDown className="hidden lg:block h-6 w-6 text-slate-600 dark:text-gray-300 transition-transform duration-200 group-hover:rotate-180" />
            </HeadlessMenu.Button>

            {/* Menu para Desktop (hover) */}
            <div className="hidden lg:block">
              <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="p-3">
                  <button
                    className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                    onClick={() => navigate('/account')}
                  >
                    <User className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                    Dados da conta
                  </button>
                  <button
                    className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                    onClick={() => navigate('/orders')}
                  >
                    <Package className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                    Meus pedidos
                  </button>
                  <button
                    className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                    onClick={() => navigate('/returns')}
                  >
                    <RefreshCw className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                    Trocas e devoluções
                  </button>
                  <button
                    className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                    onClick={() => navigate('/support')}
                  >
                    <HelpCircle className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                    Atendimento
                  </button>
                </div>
                <div className="p-3">
                  <button
                    className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                  >
                    <LogOut className="mr-4 h-6 w-6 text-red-500 group-hover:text-red-600" />
                    Sair da conta
                  </button>
                </div>
              </div>
            </div>

            {/* Menu para Mobile/Tablet (clique) */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              className="lg:hidden"
            >
              <HeadlessMenu.Items className="absolute right-0 mt-2 w-72 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none">
                <div className="p-3">
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                        onClick={() => navigate('/account')}
                      >
                        <User className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                        Dados da conta
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                        onClick={() => navigate('/orders')}
                      >
                        <Package className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                        Meus pedidos
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                        onClick={() => navigate('/returns')}
                      >
                        <RefreshCw className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                        Trocas e devoluções
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                        onClick={() => navigate('/support')}
                      >
                        <HelpCircle className="mr-4 h-6 w-6 text-gray-500 group-hover:text-indigo-600" />
                        Atendimento
                      </button>
                    )}
                  </HeadlessMenu.Item>
                </div>
                <div className="p-3">
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className="w-full flex items-center rounded-lg px-5 py-3.5 text-base font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-150 ease-in-out hover:scale-[1.02]"
                        onClick={() => {
                          logout();
                          navigate('/');
                        }}
                      >
                        <LogOut className="mr-4 h-6 w-6 text-red-500 group-hover:text-red-600" />
                        Sair da conta
                      </button>
                    )}
                  </HeadlessMenu.Item>
                </div>
              </HeadlessMenu.Items>
            </Transition>
          </HeadlessMenu>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <nav className="bg-white dark:bg-slate-950 shadow-lg relative z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gray-200 dark:after:via-gray-800 after:to-transparent">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6">
            <div className="flex h-16 sm:h-20 items-center">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 whitespace-nowrap">
                  NEXUS
                </span>
              </Link>

              {/* Categories - Desktop */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-12 xl:ml-16">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative group flex-shrink-0"
                    onMouseEnter={() => setOpenDropdown(category.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={category.route + '?categoria=todos'}
                      className="flex items-center space-x-3 text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-3 whitespace-nowrap"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(category.route + '?categoria=todos');
                      }}
                    >
                      <span className="text-gray-400">{category.icon}</span>
                      <span className="text-lg">{category.name}</span>
                      <ChevronDown className="w-5 h-5 transform group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    <div className={`absolute left-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 shadow-lg
                                  ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none
                                  transition-all duration-200 transform origin-top-left
                                  ${openDropdown === category.name 
                                    ? 'opacity-100 visible translate-y-0' 
                                    : 'opacity-0 invisible -translate-y-2'}
                                  z-[60]`}>
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
              </nav>

              {/* Right Section */}
              <div className="flex items-center ml-auto">
                {/* Search, Account and Cart Section */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Search - Desktop */}
                  <div className="hidden 2xl:block w-[480px] mr-2">
                    {renderSearchBar()}
                  </div>

                  {/* Search - Mobile */}
                  <button
                    onClick={() => {
                      if (isMenuOpen) {
                        setIsMenuOpen(false);
                      } else {
                        setIsMenuOpen(true);
                      }
                    }}
                    className="2xl:hidden p-2 rounded-lg transition-colors duration-200"
                  >
                    <Search className="h-6 w-6 text-slate-600 dark:text-gray-300" />
                  </button>

                  {/* User Menu */}
                  <div className="relative group">
                    {renderUserMenu()}
                  </div>

                  {/* Cart */}
                  <div className="flex items-center gap-2">
                    <Link
                      to="/cart"
                      className="relative p-3 transition-colors duration-200"
                    >
                      <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
                      {items.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                          {items.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                      )}
                    </Link>
                  </div>

                  {/* Menu Hamburguer - Mobile */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-lg transition-colors duration-200"
                  >
                    {isMenuOpen ? (
                      <X className="h-6 w-6 text-slate-600 dark:text-gray-300" />
                    ) : (
                      <Menu className="h-6 w-6 text-slate-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
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
              {/* Search Bar Mobile */}
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

              {/* Categories Mobile */}
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
        </nav>
      </div>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;