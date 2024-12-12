import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Headphones, Camera, Star, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

// Banner data
const banners = [
  {
    id: 1,
    title: "Buy Now Pay Later",
    subtitle: "How to Get it now",
    image: "https://images.unsplash.com/photo-1678469816711-11d75dd4c1c1?auto=format&fit=crop&q=80",
    buttonText: "Learn More",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    id: 2,
    title: "Sale Spring",
    subtitle: "GALAXY S23 Up to 50%",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80",
    buttonText: "Shop Now",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  }
];

// Today's best deals
const bestDeals = [
  {
    id: 1,
    name: 'AirPods Max',
    price: 549.99,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?auto=format&fit=crop&q=80',
    category: 'Áudio',
    discount: 15,
    features: ['Noise Cancelling', 'Bluetooth 5.0', 'Hi-Fi Audio', '20h Battery']
  },
  {
    id: 2,
    name: 'MacBook Pro M3',
    price: 1999.99,
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80',
    category: 'Notebooks',
    discount: 10,
    features: ['M3 Chip', '16GB RAM', '512GB SSD', 'Retina Display']
  }
];

// Top product categories
const categories = [
  {
    title: 'Computadores & Laptops',
    items: ['Desktop PCs', 'Notebooks', 'Monitores', 'Componentes', 'Acessórios'],
    icon: <Monitor className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80'
  },
  {
    title: 'Áudio & Headphones',
    items: ['Fones Bluetooth', 'Fones com Fio', 'Speakers', 'Microfones', 'Acessórios'],
    icon: <Headphones className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Foto & Vídeo',
    items: ['Câmeras DSLR', 'Lentes', 'Tripés', 'Iluminação', 'Acessórios'],
    icon: <Camera className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80'
  }
];

// Selling products data
const sellingProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1678469816711-11d75dd4c1c1?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 120,
    discount: 10,
    tag: "New",
    stock: 15
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 95,
    discount: 15,
    tag: "Hot",
    stock: 8
  },
  {
    id: 3,
    name: "Apple Watch Series 8",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 78,
    discount: 20,
    tag: "Sale",
    stock: 20
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 156,
    discount: 12,
    tag: "New",
    stock: 12
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 89,
    discount: 8,
    tag: "Hot",
    stock: 5
  }
];

// Additional products data
const newSeasonProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1678469816711-11d75dd4c1c1?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 120,
    discount: 15,
    tag: "New"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 1399.99,
    image: "https://images.unsplash.com/photo-1678469816711-11d75dd4c1c1?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 95,
    discount: 10,
    tag: "Hot"
  }
];

const recommendedProducts = [
  {
    id: 1,
    name: "Smart Home Camera",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 89,
    discount: 5
  },
  {
    id: 2,
    name: "4K Gaming Monitor",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 156,
    discount: 20
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 78,
    discount: 0
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907664c?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 92,
    discount: 10
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 67,
    discount: 0
  }
];

// Featured Collections Products
const featuredCollections = [
  {
    id: 1,
    title: "Home Office Essentials",
    description: "Tudo que você precisa para um workspace produtivo",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80",
    items: 42,
    category: "Workspace",
    accent: "indigo",
    featured: true
  },
  {
    id: 2,
    title: "Setup Gamer",
    description: "Equipamentos premium para gamers",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80",
    items: 28,
    category: "Gaming",
    accent: "purple",
    featured: false
  },
  {
    id: 3,
    title: "Audio Premium",
    description: "Som cristalino para os mais exigentes",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
    items: 35,
    category: "Audio",
    accent: "rose",
    featured: false
  }
];

// Trending Tech Products
const trendingTechProducts = [
  {
    id: 1,
    name: "Drone DJI Mini 3 Pro",
    price: 759.99,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
    category: "Drones",
    trending: "#1 em Drones",
    discount: 15
  },
  {
    id: 2,
    name: "GoPro Hero 11 Black",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1526317899940-7453c3f14151?auto=format&fit=crop&q=80",
    category: "Câmeras",
    trending: "Mais Vendido",
    discount: 20
  },
  {
    id: 3,
    name: "Samsung 49\" Ultrawide",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
    category: "Monitores",
    trending: "Tendência",
    discount: 10
  },
  {
    id: 4,
    name: "Steam Deck",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
    category: "Gaming",
    trending: "Novo Lançamento",
    discount: 5
  }
];

export function TopCategories() {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price * (1 - discount / 100);
  };

  return (
    <section className="py-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotional Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`${banner.bgColor} rounded-2xl p-6 flex items-center justify-between overflow-hidden relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {banner.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {banner.subtitle}
                </p>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:translate-x-1">
                  {banner.buttonText}
                </button>
              </div>
              <div className="w-48 h-48 relative transform transition-transform duration-300 group-hover:scale-110">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent dark:from-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Today's Best Deals */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ofertas do Dia
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Não perca essas ofertas exclusivas
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 flex gap-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{deal.discount}%
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-2">
                      {deal.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {deal.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(deal.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({deal.reviews})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {deal.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(calculateDiscountedPrice(deal.price, deal.discount))}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(deal.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Product Categories */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Principais Categorias
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Explore nossas categorias mais populares
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {category.items.length} produtos
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Produtos Mais Vendidos
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Os produtos favoritos dos nossos clientes
              </p>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 group">
              <span>Ver Todos</span>
              <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sellingProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.tag && (
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${product.tag === 'New' ? 'bg-green-500 text-white' :
                          product.tag === 'Hot' ? 'bg-red-500 text-white' :
                          'bg-indigo-500 text-white'}`}>
                        {product.tag}
                      </span>
                    )}
                  </div>
                  {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                  {product.stock <= 10 && (
                    <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs py-1 px-2 rounded-full text-center">
                      Apenas {product.stock} unidades em estoque
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Season Smartphones Banner */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="flex justify-between items-center p-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Nova Temporada de Smartphones
                </h2>
                <p className="text-lg text-white/90 mb-6 max-w-xl">
                  Descubra os últimos lançamentos com até 40% de desconto
                </p>
                <div className="flex gap-4">
                  {newSeasonProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex gap-4 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-white/30'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-white/70">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-white">
                            {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                          </span>
                          <span className="text-sm text-white/70 line-through">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2">
                <div className="w-80 h-80 relative">
                  {/* Add phone illustration or image here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Produtos Recomendados
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Baseado nas suas preferências
              </p>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 group">
              <span>Ver Todos</span>
              <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Collections Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Coleções em Destaque
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Explore nossas seleções especiais
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <div
                key={collection.id}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl ${
                  collection.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background Image with Overlay */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  {/* Category Badge */}
                  <div className={`inline-flex items-center self-start px-3 py-1.5 mb-4 rounded-full 
                    bg-${collection.accent}-100 dark:bg-${collection.accent}-900/30 
                    text-${collection.accent}-600 dark:text-${collection.accent}-400 text-sm font-medium`}>
                    {collection.category}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-${collection.accent}-400 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {collection.description}
                  </p>

                  {/* Items Count and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      {collection.items} produtos
                    </span>
                    <div className={`flex items-center gap-2 text-${collection.accent}-400 
                      group-hover:text-${collection.accent}-300 transition-colors`}>
                      <span className="font-medium">Explorar Coleção</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Tech Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tecnologia em Alta
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Produtos mais buscados da semana
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingTechProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative p-6">
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                      {product.trending}
                    </span>
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-700/50">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
