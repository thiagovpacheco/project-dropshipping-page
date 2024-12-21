import { mockProducts } from '../components/Electronics/mockData';
import { products as additionalProducts } from '../data/products';
import { migrateProductsToFirebase } from '../utils/firebase';
import { Product } from '../types/product';

// Mapeamento das categorias antigas para as novas
const categoryMapping = {
  'notebooks': 'Eletrônicos',
  'tablets': 'Eletrônicos',
  'eletronicos': 'Eletrônicos',
  'smartphones': 'Smartphones',
  'audio': 'Áudio',
  'cameras': 'Fotografia',
  'games': 'Games',
  'tv': 'TV & Home',
  'tvs': 'TV & Home',
  'brinquedos': 'Games'
};

// Função para ajustar as categorias dos produtos
const adjustProductCategories = (products: Product[]): Product[] => {
  return products.map(product => ({
    ...product,
    category: categoryMapping[product.category.toLowerCase() as keyof typeof categoryMapping] || 'Eletrônicos',
    // Converte o ID para número se for string
    id: typeof product.id === 'string' ? parseInt(product.id) || product.id : product.id,
    // Garante que todos os campos necessários existam
    isNew: 'isNew' in product ? product.isNew : false,
    stock: 'maxQuantity' in product ? product.maxQuantity : ('stock' in product ? product.stock : 10),
    originalPrice: product.originalPrice || product.price * 1.2
  }));
};

const runMigration = async () => {
  try {
    console.log('Iniciando migração dos produtos...');
    
    // Combina os produtos de ambas as fontes
    const allProducts = [...mockProducts, ...additionalProducts];
    
    // Ajusta as categorias dos produtos
    const adjustedProducts = adjustProductCategories(allProducts);
    
    console.log('Produtos ajustados:', adjustedProducts);
    
    // Migra os produtos para o Firebase
    const success = await migrateProductsToFirebase(adjustedProducts);
    
    if (success) {
      console.log('Migração concluída com sucesso!');
    } else {
      console.error('Erro durante a migração!');
    }
  } catch (error) {
    console.error('Erro durante a migração:', error);
  }
};

// Executa a migração
runMigration();
