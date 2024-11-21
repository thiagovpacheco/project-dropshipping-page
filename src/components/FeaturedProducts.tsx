import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { ChevronRight, Smartphone, Laptop, Gamepad, Headphones, Camera, Watch, Tv, Speaker } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  discount?: number;
  isNew?: boolean;
  description?: string;
}

// Definindo as categorias principais e suas subcategorias
const categories = {
  'Eletrônicos': {
    icon: <Laptop className="w-6 h-6 text-white" />,
    subcategories: ['Notebooks', 'Tablets', 'Acessórios']
  },
  'Smartphones': {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    subcategories: ['Apple', 'Samsung', 'Xiaomi']
  },
  'Áudio': {
    icon: <Headphones className="w-6 h-6 text-white" />,
    subcategories: ['Fones', 'Caixas de Som']
  },
  'Fotografia': {
    icon: <Camera className="w-6 h-6 text-white" />,
    subcategories: ['Câmeras', 'Lentes']
  },
  'Games': {
    icon: <Gamepad className="w-6 h-6 text-white" />,
    subcategories: ['Consoles', 'Jogos']
  },
  'TV & Home': {
    icon: <Tv className="w-6 h-6 text-white" />,
    subcategories: ['Smart TVs', 'Home Theater']
  }
};

const products: Product[] = [
  // Eletrônicos
  {
    id: 1,
    name: 'MacBook Pro M2',
    price: 12999.90,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80',
    category: 'Eletrônicos',
    subcategory: 'Notebooks',
    isNew: true,
    description: 'O notebook mais poderoso da Apple'
  },
  {
    id: 2,
    name: 'iPad Pro 12.9"',
    price: 9499.90,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80',
    category: 'Eletrônicos',
    subcategory: 'Tablets',
    discount: 10,
    description: 'A experiência definitiva em tablet'
  },
  {
    id: 3,
    name: 'Dell XPS 15',
    price: 11999.90,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80',
    category: 'Eletrônicos',
    subcategory: 'Notebooks',
    discount: 15,
    description: 'Performance excepcional para profissionais'
  },
  {
    id: 4,
    name: 'Samsung Galaxy Tab S9',
    price: 5999.90,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80',
    category: 'Eletrônicos',
    subcategory: 'Tablets',
    isNew: true,
    description: 'O tablet Android mais avançado'
  },

  // Smartphones
  {
    id: 5,
    name: 'iPhone 14 Pro Max',
    price: 7999.90,
    image: 'https://images.unsplash.com/photo-1678469816711-11d75dd4c1c1?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    subcategory: 'Apple',
    isNew: true,
    description: 'O iPhone mais avançado já criado'
  },
  {
    id: 6,
    name: 'Samsung Galaxy S23 Ultra',
    price: 6999.90,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    subcategory: 'Samsung',
    discount: 15,
    description: 'Câmera de 200MP e S Pen incluída'
  },
  {
    id: 7,
    name: 'Xiaomi 13 Pro',
    price: 5999.90,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    subcategory: 'Xiaomi',
    isNew: true,
    description: 'Tecnologia de ponta por menos'
  },
  {
    id: 8,
    name: 'iPhone 13',
    price: 4999.90,
    image: 'https://images.unsplash.com/photo-1632661674596-618d8b64d641?auto=format&fit=crop&q=80',
    category: 'Smartphones',
    subcategory: 'Apple',
    discount: 20,
    description: 'Ainda um excelente smartphone'
  },

  // Áudio
  {
    id: 9,
    name: 'Sony WH-1000XM5',
    price: 2499.90,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80',
    category: 'Áudio',
    subcategory: 'Fones',
    discount: 10,
    description: 'O melhor fone Bluetooth premium'
  },
  {
    id: 10,
    name: 'AirPods Pro 2',
    price: 1899.90,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80',
    category: 'Áudio',
    subcategory: 'Fones',
    isNew: true,
    description: 'Cancelamento de ruído adaptativo'
  },
  {
    id: 11,
    name: 'JBL Boombox 3',
    price: 2199.90,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80',
    category: 'Áudio',
    subcategory: 'Caixas de Som',
    isNew: true,
    description: 'Som potente e bateria duradoura'
  },
  {
    id: 12,
    name: 'Marshall Stanmore II',
    price: 2799.90,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80',
    category: 'Áudio',
    subcategory: 'Caixas de Som',
    discount: 15,
    description: 'Som vintage com tecnologia moderna'
  },

  // Fotografia
  {
    id: 13,
    name: 'Sony A7 IV',
    price: 12999.90,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
    category: 'Fotografia',
    subcategory: 'Câmeras',
    isNew: true,
    description: 'Câmera mirrorless full-frame profissional'
  },
  {
    id: 14,
    name: 'Canon EOS R6',
    price: 14999.90,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80',
    category: 'Fotografia',
    subcategory: 'Câmeras',
    discount: 15,
    description: 'Alta performance para foto e vídeo'
  },
  {
    id: 15,
    name: 'Sony 24-70mm f/2.8',
    price: 8999.90,
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80',
    category: 'Fotografia',
    subcategory: 'Lentes',
    isNew: true,
    description: 'A lente zoom padrão profissional'
  },
  {
    id: 16,
    name: 'Canon RF 50mm f/1.2',
    price: 9999.90,
    image: 'https://images.unsplash.com/photo-1617005082337-35b6e88bd2c6?auto=format&fit=crop&q=80',
    category: 'Fotografia',
    subcategory: 'Lentes',
    discount: 10,
    description: 'Bokeh perfeito e nitidez excepcional'
  },

  // Games
  {
    id: 17,
    name: 'PlayStation 5 Digital',
    price: 3999.90,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80',
    category: 'Games',
    subcategory: 'Consoles',
    discount: 20,
    description: 'Nova geração de jogos em 4K'
  },
  {
    id: 18,
    name: 'Xbox Series X',
    price: 4299.90,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf433fd6eb7?auto=format&fit=crop&q=80',
    category: 'Games',
    subcategory: 'Consoles',
    isNew: true,
    description: 'O console mais poderoso da Microsoft'
  },
  {
    id: 19,
    name: 'God of War Ragnarök',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1621784563330-caee0b138a00?auto=format&fit=crop&q=80',
    category: 'Games',
    subcategory: 'Jogos',
    isNew: true,
    description: 'A continuação da saga nórdica'
  },
  {
    id: 20,
    name: 'Starfield',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1616856769992-0a8c4e0e7b1c?auto=format&fit=crop&q=80',
    category: 'Games',
    subcategory: 'Jogos',
    discount: 10,
    description: 'Explore o espaço em uma aventura épica'
  },

  // TV & Home
  {
    id: 21,
    name: 'Samsung Neo QLED 65"',
    price: 8999.90,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80',
    category: 'TV & Home',
    subcategory: 'Smart TVs',
    isNew: true,
    description: 'Qualidade de imagem extraordinária'
  },
  {
    id: 22,
    name: 'LG OLED C2 55"',
    price: 6999.90,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80',
    category: 'TV & Home',
    subcategory: 'Smart TVs',
    discount: 15,
    description: 'Cores perfeitas e contraste infinito'
  },
  {
    id: 23,
    name: 'Sonos Arc',
    price: 4999.90,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80',
    category: 'TV & Home',
    subcategory: 'Home Theater',
    isNew: true,
    description: 'Som surround Dolby Atmos premium'
  },
  {
    id: 24,
    name: 'Samsung HW-Q990C',
    price: 5999.90,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80',
    category: 'TV & Home',
    subcategory: 'Home Theater',
    discount: 20,
    description: 'Sistema de som 11.1.4 canais'
  }
];

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

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          )}
        </div>
        
        {/* Price Section */}
        <div className="mt-4">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
            </span>
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
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
        {/* Header Section */}
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
        {Object.entries(categories).map(([category, { icon, subcategories }], index) => {
          const categoryProducts = products.filter(product => product.category === category);

          return (
            <div key={category} className="relative">
              {/* Category Separator */}
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
                {/* Category Header */}
                <div className="relative mb-12">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                      {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Ver mais button */}
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => navigateTo('shop', { category })}
                    className="group inline-flex items-center gap-2 px-8 py-3 rounded-full
                             text-blue-600 font-medium bg-white shadow-md
                             border border-blue-100 transition-all duration-300
                             hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                             hover:text-white hover:border-transparent hover:shadow-lg
                             transform hover:-translate-y-0.5"
                  >
                    Ver mais produtos de {category}
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