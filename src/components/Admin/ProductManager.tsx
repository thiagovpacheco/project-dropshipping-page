import React, { useState } from 'react';
import { mockProducts } from '../Electronics/mockData';
import { migrateProductsToFirebase, addProduct, getProductsByCategory } from '../../utils/firebase';
import { Product } from '../../types/product';
import { Button } from '../ui/button';
import { toast } from 'react-hot-toast';

export const ProductManager: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleMigration = async () => {
    try {
      setIsLoading(true);
      const success = await migrateProductsToFirebase(mockProducts);
      
      if (success) {
        toast.success('Produtos migrados com sucesso!');
      } else {
        toast.error('Erro ao migrar produtos');
      }
    } catch (error) {
      console.error('Erro durante a migração:', error);
      toast.error('Erro durante a migração');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadCategory = async () => {
    if (!selectedCategory) {
      toast.error('Selecione uma categoria');
      return;
    }

    try {
      setIsLoading(true);
      const products = await getProductsByCategory(selectedCategory);
      console.log(`Produtos da categoria ${selectedCategory}:`, products);
      toast.success(`${products.length} produtos carregados`);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      toast.error('Erro ao carregar produtos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gerenciador de Produtos</h1>
      
      <div className="space-y-6">
        {/* Migração */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Migração de Produtos</h2>
          <Button 
            onClick={handleMigration}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Migrando...' : 'Migrar Produtos para Firebase'}
          </Button>
        </div>

        {/* Visualização por Categoria */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Visualizar por Categoria</h2>
          <div className="space-y-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Selecione uma categoria</option>
              <option value="smartphones">Smartphones</option>
              <option value="audio">Áudio</option>
              <option value="cameras">Fotografia</option>
              <option value="games">Games</option>
              <option value="tv">TV & Home</option>
              <option value="notebooks">Notebooks</option>
            </select>
            
            <Button 
              onClick={handleLoadCategory}
              disabled={isLoading || !selectedCategory}
              className="w-full"
            >
              {isLoading ? 'Carregando...' : 'Carregar Produtos'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
