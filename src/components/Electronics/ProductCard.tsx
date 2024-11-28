import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';
import { ShoppingCart, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1500);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Não navega se o clique foi em um botão
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/produto/${product.id}`);
  };

  const buttonBaseClasses = `
    flex items-center justify-center gap-1.5 
    px-2 py-2.5 
    text-[12px] font-semibold tracking-wide
    rounded-lg 
    transition-all duration-300
    min-h-[42px]
    w-full
  `;

  return (
    <div 
      className="group bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Imagem e Badge de Desconto */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-lg transform rotate-12 transition-transform duration-300 group-hover:rotate-0" />
              <div className="relative px-2 py-1 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
                -{discountPercentage}%
              </div>
            </div>
          </div>
        )}
        {/* Overlay escuro no hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-grow p-4">
        {/* Marca */}
        <span className="text-sm text-slate-900 dark:text-slate-100 font-medium mb-1 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {product.brand}
        </span>

        {/* Nome do Produto */}
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-2 min-h-[3.5rem] transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {product.name}
        </h3>

        {/* Descrição */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-grow transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-200">
          {product.description}
        </p>

        {/* Preços */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                {product.originalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-1 font-medium transition-colors duration-300 group-hover:text-green-500 dark:group-hover:text-green-300">
              Economize {(product.originalPrice - product.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          )}
        </div>

        {/* Botões */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {/* Ver Produto */}
          <button
            onClick={() => navigate(`/produto/${product.id}`)}
            className={`${buttonBaseClasses}
              text-indigo-600 dark:text-indigo-400
              bg-indigo-50 dark:bg-indigo-900/30 
              hover:bg-indigo-100 dark:hover:bg-indigo-900/50
              active:bg-indigo-200 dark:active:bg-indigo-900/70
              transform transition-transform duration-300 hover:scale-[1.02]
            `}
          >
            <Eye className="w-[18px] h-[18px] flex-shrink-0" />
            <span className="flex-shrink-0">Ver Produto</span>
          </button>

          {/* Adicionar ao Carrinho */}
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`${buttonBaseClasses}
              text-white relative overflow-hidden
              transform transition-all duration-300 hover:scale-[1.02]
              ${isAddingToCart 
                ? 'bg-green-500 dark:bg-green-600' 
                : 'bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 active:bg-indigo-800 dark:active:bg-indigo-700'}
            `}
          >
            <div className={`absolute inset-0 flex items-center justify-center gap-1.5 transform transition-transform duration-300 ${
              isAddingToCart ? '-translate-y-10' : 'translate-y-0'
            }`}>
              <ShoppingCart className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="flex-shrink-0">Carrinho</span>
            </div>
            <div className={`absolute inset-0 flex items-center justify-center gap-1.5 transform transition-transform duration-300 ${
              isAddingToCart ? 'translate-y-0' : 'translate-y-10'
            }`}>
              <Check className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="flex-shrink-0">Adicionado!</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
