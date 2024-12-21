import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLvGuxPFsNeGqgrbrWsw6uDMkt1ZCVDVI",
  authDomain: "nexus-bd-17bd8.firebaseapp.com",
  projectId: "nexus-bd-17bd8",
  storageBucket: "nexus-bd-17bd8.firebasestorage.app",
  messagingSenderId: "979628101121",
  appId: "1:979628101121:web:4b844fdf9c3bbd4c06fa00",
  measurementId: "G-DPW6NSEL87"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const initialProducts = [
  {
    name: 'iPhone 14 Pro Max',
    price: 7999.99,
    originalPrice: 8999.99,
    description: 'iPhone 14 Pro Max com 256GB, Câmera Tripla de 48MP, Tela Super Retina XDR de 6.7"',
    image: 'https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=1000',
    brand: 'Apple',
    category: 'smartphones',
    isNew: true,
    isPromotion: true,
    discountPercentage: 11,
    stock: 10,
    sales: 150,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    price: 6799.99,
    originalPrice: 7499.99,
    description: 'Samsung Galaxy S23 Ultra com 256GB, Câmera de 200MP, S Pen integrada',
    image: 'https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=1000',
    brand: 'Samsung',
    category: 'smartphones',
    isNew: false,
    isPromotion: true,
    discountPercentage: 9,
    stock: 15,
    sales: 120,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Xiaomi 13 Pro',
    price: 5499.99,
    originalPrice: 5999.99,
    description: 'Xiaomi 13 Pro com 256GB, Câmera Leica, Snapdragon 8 Gen 2',
    image: 'https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=1000',
    brand: 'Xiaomi',
    category: 'smartphones',
    isNew: false,
    isPromotion: true,
    discountPercentage: 8,
    stock: 8,
    sales: 80,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'MacBook Pro 14\' M3 Pro',
    price: 14999.99,
    originalPrice: 16999.99,
    description: 'Notebook Apple com chip M3 Pro, 18GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000',
    brand: 'Apple',
    category: 'notebooks',
    isNew: true,
    isPromotion: true,
    discountPercentage: 15,
    stock: 5,
    sales: 45,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sony WH-1000XM4',
    price: 1999.99,
    originalPrice: 2499.99,
    description: 'Fone de ouvido premium com cancelamento de ruído',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000',
    brand: 'Sony',
    category: 'acessorios',
    isNew: true,
    isPromotion: true,
    discountPercentage: 20,
    stock: 20,
    sales: 200,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Smart TV LG OLED 65\'',
    price: 8999.99,
    originalPrice: 10999.99,
    description: 'TV OLED 4K com HDR10 e processador α9',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000',
    brand: 'LG',
    category: 'tvs',
    isNew: true,
    isPromotion: true,
    discountPercentage: 18,
    stock: 7,
    sales: 35,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'PlayStation 5',
    price: 3799.99,
    originalPrice: 4499.99,
    description: 'Console de última geração com controle DualSense',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=1000',
    brand: 'Sony',
    category: 'consoles',
    isNew: true,
    isPromotion: true,
    discountPercentage: 15,
    stock: 12,
    sales: 180,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dell XPS 15',
    price: 12999.99,
    originalPrice: 14999.99,
    description: 'Notebook premium com Intel Core i9 e RTX 4070',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000',
    brand: 'Dell',
    category: 'notebooks',
    isNew: true,
    isPromotion: true,
    discountPercentage: 13,
    stock: 6,
    sales: 40,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Samsung Neo QLED 75\'',
    price: 11999.99,
    originalPrice: 13999.99,
    description: 'Smart TV com tecnologia Mini LED e 4K',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000',
    brand: 'Samsung',
    category: 'tvs',
    isNew: true,
    isPromotion: true,
    discountPercentage: 14,
    stock: 4,
    sales: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function setupElectronics() {
  console.log('Iniciando setup dos produtos eletrônicos...');

  try {
    // Primeiro, autenticar anonimamente
    console.log('Autenticando...');
    await signInAnonymously(auth);
    console.log('Autenticado com sucesso!');

    // Criar cada produto na coleção eletronicos
    const eletronicosRef = collection(db, 'eletronicos');
    
    for (const product of initialProducts) {
      console.log(`Tentando criar produto: ${product.name}`);
      const docId = product.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const productRef = doc(eletronicosRef, docId);
      await setDoc(productRef, product);
      console.log(`Produto criado: ${product.name}`);
    }

    console.log('Setup concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o setup:', error);
    throw error;
  }
}

// Executar o setup
setupElectronics()
  .then(() => {
    console.log('Script finalizado com sucesso');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Erro ao executar script:', error);
    process.exit(1);
  });
