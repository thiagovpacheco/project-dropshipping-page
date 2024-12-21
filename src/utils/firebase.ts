import { collection, doc, setDoc, getDocs, query, where, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Product } from '../types/product';

export const categories = {
  electronics: 'Eletrônicos',
  smartphones: 'Smartphones',
  audio: 'Áudio',
  photography: 'Fotografia',
  games: 'Games',
  tvhome: 'TV & Home',
  computers: 'Computadores',
  accessories: 'Acessórios',
} as const;

// Função para adicionar um produto ao Firestore
export const addProduct = async (product: Product) => {
  try {
    const productRef = doc(db, 'products', product.id.toString());
    await setDoc(productRef, {
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Error adding product:', error);
    return false;
  }
};

// Função para adicionar múltiplos produtos ao Firestore
export const addMultipleProducts = async (products: Product[]) => {
  try {
    const results = await Promise.all(
      products.map(product => addProduct(product))
    );
    return results.every(result => result === true);
  } catch (error) {
    console.error('Error adding multiple products:', error);
    return false;
  }
};

// Função para buscar produtos por categoria
export const getProductsByCategory = async (category: string) => {
  try {
    const q = query(
      collection(db, 'products'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Product);
  } catch (error) {
    console.error('Error getting products:', error);
    return [];
  }
};

// Função para atualizar um produto
export const updateProduct = async (productId: string, updates: Partial<Product>) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Error updating product:', error);
    return false;
  }
};

// Função para deletar um produto
export const deleteProduct = async (productId: string) => {
  try {
    await deleteDoc(doc(db, 'products', productId));
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
};

// Função para buscar um produto específico
export const getProduct = async (productId: string) => {
  try {
    const productDoc = await getDoc(doc(db, 'products', productId));
    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() } as Product;
    }
    return null;
  } catch (error) {
    console.error('Error getting product:', error);
    return null;
  }
};

// Função para migrar os produtos mockados para o Firebase
export const migrateProductsToFirebase = async (mockProducts: Product[]) => {
  try {
    console.log('Starting product migration to Firebase...');
    const success = await addMultipleProducts(mockProducts);
    
    if (success) {
      console.log('Products successfully migrated to Firebase!');
      return true;
    } else {
      console.error('Some products failed to migrate');
      return false;
    }
  } catch (error) {
    console.error('Error migrating products:', error);
    return false;
  }
};
