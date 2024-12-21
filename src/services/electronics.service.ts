import { db } from '../config/firebase';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  onSnapshot,
  Timestamp,
  DocumentData,
  QueryConstraint
} from 'firebase/firestore';
import { Product } from '../types/product';

const ELECTRONICS_COLLECTION = 'eletronicos';

export class ElectronicsService {
  private static instance: ElectronicsService;
  private constructor() {}

  static getInstance(): ElectronicsService {
    if (!ElectronicsService.instance) {
      ElectronicsService.instance = new ElectronicsService();
    }
    return ElectronicsService.instance;
  }

  // Converter do Firestore para o modelo Product
  private firestoreToProduct(doc: DocumentData): Product {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      price: data.price,
      originalPrice: data.originalPrice,
      description: data.description,
      image: data.image,
      brand: data.brand,
      category: data.category,
      isNew: data.isNew,
      isPromotion: data.isPromotion,
      discountPercentage: data.discountPercentage,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
      sales: data.sales || 0,
      stock: data.stock || 0
    };
  }

  // Buscar todos os produtos
  async getAllProducts(
    sortBy: string = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
    filters: {
      category?: string;
      brand?: string;
      isPromotion?: boolean;
      minPrice?: number;
      maxPrice?: number;
    } = {}
  ): Promise<Product[]> {
    try {
      const queryConstraints: QueryConstraint[] = [];

      // Adicionar filtros
      if (filters.category) {
        queryConstraints.push(where('category', '==', filters.category));
      }
      if (filters.brand) {
        queryConstraints.push(where('brand', '==', filters.brand));
      }
      if (filters.isPromotion !== undefined) {
        queryConstraints.push(where('isPromotion', '==', filters.isPromotion));
      }
      if (filters.minPrice !== undefined) {
        queryConstraints.push(where('price', '>=', filters.minPrice));
      }
      if (filters.maxPrice !== undefined) {
        queryConstraints.push(where('price', '<=', filters.maxPrice));
      }

      // Adicionar ordenação
      queryConstraints.push(orderBy(sortBy, sortOrder));

      const q = query(collection(db, ELECTRONICS_COLLECTION), ...queryConstraints);
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => this.firestoreToProduct(doc));
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  }

  // Buscar um produto pelo ID
  async getProductById(id: string): Promise<Product | null> {
    try {
      const docRef = doc(db, ELECTRONICS_COLLECTION, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return this.firestoreToProduct(docSnap);
      }
      return null;
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      throw error;
    }
  }

  // Observar mudanças nos produtos
  onProductsChange(callback: (products: Product[]) => void): () => void {
    const q = query(collection(db, ELECTRONICS_COLLECTION));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const products = querySnapshot.docs.map(doc => this.firestoreToProduct(doc));
      callback(products);
    }, (error) => {
      console.error('Erro ao observar produtos:', error);
    });

    return unsubscribe;
  }

  // Adicionar um novo produto
  async addProduct(product: Omit<Product, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, ELECTRONICS_COLLECTION), {
        ...product,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      throw error;
    }
  }

  // Atualizar um produto
  async updateProduct(id: string, product: Partial<Product>): Promise<void> {
    try {
      const docRef = doc(db, ELECTRONICS_COLLECTION, id);
      await updateDoc(docRef, {
        ...product,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      throw error;
    }
  }

  // Deletar um produto
  async deleteProduct(id: string): Promise<void> {
    try {
      const docRef = doc(db, ELECTRONICS_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw error;
    }
  }
}
