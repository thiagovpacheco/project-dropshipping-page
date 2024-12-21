import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { mockProducts } from '../components/Electronics/mockData';

const ProductOffer: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Por enquanto, vamos usar os dados mockados
        const foundProduct = mockProducts.find(p => p.id === Number(productId));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Produto não encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar o produto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          {error || 'Produto não encontrado'}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Imagem do Produto */}
        <div className="lg:w-1/2">
          <div className="relative pb-[100%] overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Informações do Produto */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
              {product.description}
            </p>
          </div>

          {/* Preços */}
          <div className="space-y-2">
            {product.originalPrice && product.price < product.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-lg text-slate-500 dark:text-slate-500 line-through">
                  R$ {product.originalPrice.toLocaleString('pt-BR')}
                </span>
                <span className="text-sm font-medium text-red-500">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            )}
            <div className="text-4xl font-bold text-slate-800 dark:text-slate-100">
              R$ {product.price.toLocaleString('pt-BR')}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {product.isNew && (
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm font-medium">
                Novo
              </span>
            )}
            {product.stock && product.stock < 10 && (
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-sm font-medium">
                Últimas {product.stock} unidades
              </span>
            )}
          </div>

          {/* Botão Adicionar ao Carrinho */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-xl
                     transform transition-all duration-200 hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     dark:focus:ring-offset-slate-800"
          >
            Adicionar ao Carrinho
          </button>

          {/* Informações Adicionais */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
                Marca
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                {product.brand}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
                Categoria
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                {product.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;