import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smart TV OLED 55"',
    price: 3999.90,
    originalPrice: 4999.90,
    image: '/placeholder-product.jpg',
    brand: 'LG',
    category: 'tvs',
    isPromotion: true,
    maxQuantity: 3,
    specifications: {
      resolution: '4K',
      screenSize: '55 polegadas',
      smartFeatures: 'WebOS, ThinQ AI'
    },
    description: 'O Smart TV OLED 55" é um produto de alta qualidade, desenvolvido com os melhores materiais e tecnologias disponíveis no mercado.'
  },
  {
    id: '2',
    name: 'Smartphone Galaxy S23',
    price: 4999.90,
    originalPrice: 5999.90,
    image: '/smartphone-s23.jpg',
    brand: 'Samsung',
    category: 'smartphones',
    isPromotion: true,
    maxQuantity: 5,
    specifications: {
      processor: 'Snapdragon 8 Gen 2',
      ram: '8GB',
      storage: '256GB'
    },
    description: 'O Galaxy S23 é o mais recente smartphone da Samsung, com câmera de alta resolução e processador potente.'
  },
  {
    id: 'starlink',
    name: 'Adaptador Starlink Ethernet V2',
    price: 249.99,
    originalPrice: 300.00,
    image: '/images/products/starlink-adapter.png',
    brand: 'Genérico',
    category: 'eletronicos',
    isPromotion: true,
    maxQuantity: 10,
    specifications: {
      tipo: 'Adaptador Ethernet',
      versao: 'V2',
      categoria: 'Eletrônicos, componentes'
    },
    description: 'Adaptador Starlink Ethernet V2 é a solução definitiva para quem deseja aproveitar a conexão de internet via satélite com máxima eficiência e desempenho.'
  },
  {
    id: 'carrinho-off-road',
    name: 'Carrinho de controle remoto off-road 4x4 MN82',
    price: 399.99,
    originalPrice: 499.99,
    image: '/images/products/carrinho-off-road.png',
    brand: 'MN82',
    category: 'brinquedos',
    isPromotion: false,
    maxQuantity: 10,
    specifications: {
      tipo: 'Carrinho de Controle Remoto',
      modelo: 'MN82',
      tracao: '4x4',
      categoria: 'Off-road'
    },
    description: 'Carrinho de controle remoto off-road com tração nas 4 rodas, ideal para diversão em qualquer terreno.'
  },
  {
    id: 'samsung-s23-ultra',
    name: 'Smartphone Galaxy S23 Ultra',
    price: 6999.99,
    originalPrice: 7499.99,
    image: '/images/products/galaxy-s23-ultra.jpg',
    brand: 'Samsung',
    category: 'smartphones',
    isPromotion: true,
    maxQuantity: 5,
    specifications: {
      processor: 'Snapdragon 8 Gen 2',
      ram: '12GB',
      storage: '512GB',
      camera: '200MP'
    },
    description: 'O mais avançado smartphone Samsung com câmera de 200MP e S Pen integrada.'
  },
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro 14" M3 Pro',
    price: 14999.99,
    originalPrice: 15999.99,
    image: '/images/products/macbook-pro-m3.jpg',
    brand: 'Apple',
    category: 'eletronicos',
    isPromotion: false,
    maxQuantity: 3,
    specifications: {
      processor: 'Apple M3 Pro',
      ram: '18GB',
      storage: '512GB'
    },
    description: 'Notebook Apple com chip M3 Pro, 18GB RAM, 512GB SSD.'
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5',
    price: 1999.99,
    originalPrice: 2499.99,
    image: '/images/products/sony-wh1000xm5.jpg',
    brand: 'Sony',
    category: 'audio',
    isPromotion: true,
    maxQuantity: 8,
    specifications: {
      type: 'Over-ear',
      bluetooth: '5.2',
      batteryLife: '30 hours'
    },
    description: 'Fone de ouvido premium com cancelamento de ruído.'
  },
  {
    id: 'lg-oled-65',
    name: 'Smart TV LG OLED 65"',
    price: 8999.99,
    originalPrice: 10999.99,
    image: '/images/products/lg-oled-65.jpg',
    brand: 'LG',
    category: 'tvs',
    isPromotion: true,
    maxQuantity: 2,
    specifications: {
      resolution: '4K',
      screenSize: '65 inches',
      hdr: 'Dolby Vision IQ'
    },
    description: 'TV OLED 4K com WebOS e processador α9 Gen6 AI.'
  },
  {
    id: 'playstation-5',
    name: 'PlayStation 5',
    price: 3799.99,
    originalPrice: 4499.99,
    image: '/images/products/ps5.jpg',
    brand: 'Sony',
    category: 'games',
    isPromotion: true,
    maxQuantity: 3,
    specifications: {
      storage: '825GB SSD',
      resolution: '4K',
      hdmi: '2.1'
    },
    description: 'Console de última geração com controle DualSense.'
  },
  {
    id: 'ipad-pro-m2',
    name: 'iPad Pro 12.9" M2',
    price: 9499.99,
    originalPrice: 10499.99,
    image: '/images/products/ipad-pro-m2.jpg',
    brand: 'Apple',
    category: 'eletronicos',
    isPromotion: false,
    maxQuantity: 5,
    specifications: {
      processor: 'Apple M2',
      storage: '256GB',
      display: 'Liquid Retina XDR'
    },
    description: 'Tablet Apple com chip M2, tela Liquid Retina XDR.'
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    price: 12999.99,
    originalPrice: 13999.99,
    image: '/images/products/dell-xps-15.jpg',
    brand: 'Dell',
    category: 'eletronicos',
    isPromotion: false,
    maxQuantity: 3,
    specifications: {
      processor: 'Intel Core i9',
      gpu: 'RTX 4070',
      ram: '32GB',
      storage: '1TB SSD'
    },
    description: 'Notebook premium com Intel Core i9 e RTX 4070.'
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro Max',
    price: 8499.99,
    originalPrice: 9499.99,
    image: '/images/products/iphone-15-pro.jpg',
    brand: 'Apple',
    category: 'smartphones',
    isPromotion: true,
    maxQuantity: 5,
    specifications: {
      processor: 'A17 Pro',
      camera: '48MP',
      storage: '256GB'
    },
    description: 'iPhone com câmera de 48MP e chip A17 Pro.'
  },
  {
    id: 'samsung-qn85c',
    name: 'Samsung QN85C Neo QLED 75"',
    price: 11999.99,
    originalPrice: 13999.99,
    image: '/images/products/samsung-qn85c.jpg',
    brand: 'Samsung',
    category: 'tvs',
    isPromotion: false,
    maxQuantity: 2,
    specifications: {
      technology: 'Mini LED',
      resolution: '4K',
      processor: 'Neural Quantum'
    },
    description: 'Smart TV com tecnologia Mini LED e processador Neural Quantum.'
  }
];
