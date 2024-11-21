import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { ChevronRight, Smartphone, Laptop, Gamepad, Headphones, Camera, Watch, Tv, Speaker } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  isNew?: boolean;
  description?: string;
}

const products: Product[] = [
  // Smartphones
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 7999.90,
    image: 'https://images.unsplash.com/photo-1678469816711-11d75dd4c1c1?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    isNew: true,
    description: 'O iPhone mais avançado já criado, com câmera de 48MP'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    price: 6999.90,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    discount: 15,
    description: 'Câmera de 200MP e S Pen incluída'
  },
  {
    id: 3,
    name: 'Google Pixel 7 Pro',
    price: 5999.90,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    discount: 10,
    description: 'A melhor câmera em um smartphone'
  },
  {
    id: 4,
    name: 'Xiaomi 13 Pro',
    price: 4999.90,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    isNew: true,
    description: 'Parceria Leica para fotos profissionais'
  },
  
  // Notebooks e Tablets
  {
    id: 5,
    name: 'MacBook Pro M2 Max',
    price: 14999.90,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80',
    category: 'Notebooks e Tablets',
    isNew: true,
    description: 'Poder sem precedentes para profissionais'
  },
  {
    id: 6,
    name: 'iPad Pro 12.9" M2',
    price: 9499.90,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80',
    category: 'Notebooks e Tablets',
    discount: 10,
    description: 'A experiência definitiva em tablet'
  },
  {
    id: 7,
    name: 'Dell XPS 15 OLED',
    price: 11499.90,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80',
    category: 'Notebooks e Tablets',
    discount: 5,
    description: 'Tela OLED 4K para criadores de conteúdo'
  },
  {
    id: 8,
    name: 'Samsung Galaxy Tab S9 Ultra',
    price: 7999.90,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80',
    category: 'Notebooks e Tablets',
    isNew: true,
    description: 'O tablet Android definitivo'
  },

  // Games
  {
    id: 9,
    name: 'PlayStation 5 Digital',
    price: 3999.90,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80',
    category: 'Games',
    discount: 20,
    description: 'Nova geração de jogos em 4K'
  },
  {
    id: 10,
    name: 'Xbox Series X',
    price: 4299.90,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf433fd6eb7?auto=format&fit=crop&q=80',
    category: 'Games',
    isNew: true,
    description: 'O console mais poderoso da Microsoft'
  },
  {
    id: 11,
    name: 'Nintendo Switch OLED',
    price: 2499.90,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80',
    category: 'Games',
    discount: 15,
    description: 'Jogue em qualquer lugar com tela OLED'
  },
  {
    id: 12,
    name: 'Steam Deck 512GB',
    price: 3799.90,
    image: 'https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80',
    category: 'Games',
    isNew: true,
    description: 'PC Gaming portátil com SSD NVMe'
  },

  // Áudio
  {
    id: 13,
    name: 'AirPods Pro 2',
    price: 1899.90,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80',
    category: 'Áudio',
    isNew: true,
    description: 'Cancelamento de ruído adaptativo'
  },
  {
    id: 14,
    name: 'Sony WH-1000XM5',
    price: 2499.90,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80',
    category: 'Áudio',
    discount: 10,
    description: 'O melhor fone Bluetooth premium'
  },
  {
    id: 15,
    name: 'JBL Charge 5',
    price: 899.90,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80',
    category: 'Áudio',
    discount: 20,
    description: 'Caixa de som à prova d\'água'
  },
  {
    id: 16,
    name: 'Marshall Stanmore II',
    price: 2999.90,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80',
    category: 'Áudio',
    isNew: true,
    description: 'Som vintage com tecnologia moderna'
  },

  // Câmeras
  {
    id: 17,
    name: 'Sony A7 IV',
    price: 12999.90,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
    category: 'Câmeras',
    isNew: true,
    description: 'Câmera mirrorless full-frame profissional'
  },
  {
    id: 18,
    name: 'Canon EOS R6',
    price: 14999.90,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80',
    category: 'Câmeras',
    discount: 15,
    description: 'Alta performance para foto e vídeo'
  },
  {
    id: 19,
    name: 'GoPro HERO11 Black',
    price: 2999.90,
    image: 'https://images.unsplash.com/photo-1565548058679-92505f4fad67?auto=format&fit=crop&q=80',
    category: 'Câmeras',
    discount: 10,
    description: 'Câmera de ação à prova d\'água'
  },
  {
    id: 20,
    name: 'DJI Mini 3 Pro',
    price: 4999.90,
    image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80',
    category: 'Câmeras',
    isNew: true,
    description: 'Drone compacto com câmera 4K'
  },
];

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Smartphones': <Smartphone className="w-6 h-6" />,
  'Notebooks e Tablets': <Laptop className="w-6 h-6" />,
  'Games': <Gamepad className="w-6 h-6" />,
  'Áudio': <Headphones className="w-6 h-6" />,
  'Câmeras': <Camera className="w-6 h-6" />,
};

export function FeaturedProducts() {
  const { navigateTo } = useNavigation();

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return price * (1 - discount / 100);
  };

  const categories = Array.from(new Set(products.map(product => product.category)));

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Image Container with fixed aspect ratio */}
      <div className="relative pt-[100%] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Novo
            </span>
          )}
          {product.discount && (
            <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>

      {/* Product Info - Fixed height content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          )}
        </div>
        
        {/* Price Section - Always at bottom */}
        <div className="mt-4">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">
              R$ {product.price.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                R$ {(product.price / (1 - product.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => navigateTo('product')}
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium 
                     hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all
                     focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Ver Produto
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-24 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 relative">
            Produtos em Destaque
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Confira nossa seleção dos produtos mais vendidos em cada categoria
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, index) => {
          const categoryProducts = products
            .filter(product => product.category === category)
            .slice(0, 4);

          return (
            <div key={category} className="relative">
              {/* Improved Category Section Separator */}
              {index > 0 && (
                <div className="my-16 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 text-sm text-gray-500">
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-16 last:mb-0">
                {/* Category Header with improved styling */}
                <div className="relative mb-12">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                      {categoryIcons[category]}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                  </div>
                </div>

                {/* Category Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Ver mais button centered */}
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => navigateTo('shop')}
                    className="group inline-flex items-center gap-2 px-8 py-3 rounded-full
                             text-blue-600 font-medium bg-white shadow-md
                             border border-blue-100 transition-all duration-300
                             hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                             hover:text-white hover:border-transparent hover:shadow-lg
                             transform hover:-translate-y-0.5"
                  >
                    Ver mais {category.toLowerCase()}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}