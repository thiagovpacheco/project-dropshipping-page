import { db } from '../config/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Interface para o tipo Produto
interface Produto {
  id?: string;
  nome: string;
  preco: number;
  precoAntigo: number;
  descricao: string;
  imagem: string;
  novo: boolean;
  desconto: boolean;
  porcentagemDesconto: number;
}

// Referência à coleção
const COLLECTION_NAME = 'Produtos Nexus';
const produtosRef = collection(db, COLLECTION_NAME);

// CREATE - Adicionar novo produto
export const addProduto = async (produto: Produto) => {
  try {
    const docRef = await addDoc(produtosRef, produto);
    return { id: docRef.id, ...produto };
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    throw error;
  }
};

// READ - Buscar todos os produtos
export const getProdutos = async () => {
  try {
    const querySnapshot = await getDocs(produtosRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Produto[];
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

// READ - Buscar produto por ID
export const getProdutoById = async (id: string) => {
  try {
    const docRef = doc(produtosRef, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Produto;
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    throw error;
  }
};

// UPDATE - Atualizar produto
export const updateProduto = async (id: string, produto: Partial<Produto>) => {
  try {
    const docRef = doc(produtosRef, id);
    await updateDoc(docRef, produto);
    return { id, ...produto };
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
};

// DELETE - Remover produto
export const deleteProduto = async (id: string) => {
  try {
    const docRef = doc(produtosRef, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    throw error;
  }
};
