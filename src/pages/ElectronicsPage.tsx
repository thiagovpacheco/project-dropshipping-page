import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/Electronics/ProductCard';
import { Filters } from '../components/Electronics/Filters';
import { Product } from '../types/product';
import { ElectronicsService } from '../services/electronics.service';
import { toast } from 'react-hot-toast';

const ElectronicsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || '');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedDiscountRanges, setSelectedDiscountRanges] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const electronicsService = ElectronicsService.getInstance();

  useEffect(() => {
    const unsubscribe = electronicsService.onProductsChange((updatedProducts) => {
      setProducts(updatedProducts);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Função para rolar suavemente até os produtos
  const scrollToProducts = () => {
    if (productsRef.current) {
      const yOffset = -100;
      const y = productsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Função para atualizar filtros com animação
  const handleFilterChange = (
    type: 'category' | 'brand' | 'price' | 'search',
    value: any
  ) => {
    setIsFiltering(true);

    switch (type) {
      case 'category':
        setSelectedCategory(value);
        break;
      case 'brand':
        setSelectedBrands(value);
        break;
      case 'price':
        setPriceRange(value);
        break;
      case 'search':
        setSearchQuery(value);
        break;
    }

    setTimeout(() => {
      scrollToProducts();
      setIsFiltering(false);
    }, 100);
  };

  // Effect to update category when URL changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get('categoria');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  const filteredProducts = products.filter(product => {
    // Filtro de busca
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filtro de categoria
    if (selectedCategory && selectedCategory !== 'todos' && product.category !== selectedCategory) {
      return false;
    }

    // Filtro de marcas
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Filtro de preço
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Filtro de faixa de desconto
    if (selectedDiscountRanges.length > 0) {
      if (!product.originalPrice || !product.isPromotion) return false;
      
      const discountPercentage = Math.floor(((product.originalPrice - product.price) / product.originalPrice) * 100);
      
      return selectedDiscountRanges.some(range => {
        const [min, max] = range.split('-').map(Number);
        if (max === 100) {
          return discountPercentage >= 50;
        }
        return discountPercentage >= min && discountPercentage < max;
      });
    }

    return true;
  }).sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'most-sold':
        return (b.sales || 0) - (a.sales || 0);
      case 'most-recent':
        return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      case 'highest-discount': {
        const getDiscount = (p: Product) => {
          if (!p.originalPrice || !p.isPromotion) return 0;
          return ((p.originalPrice - p.price) / p.originalPrice) * 100;
        };
        return getDiscount(b) - getDiscount(a);
      }
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-6">
        <ul className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
          <li>
            <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Home
            </a>
          </li>
          <li className="before:content-['/'] before:mx-2">Eletrônicos</li>
          {selectedCategory !== 'todos' && (
            <li className="before:content-['/'] before:mx-2 capitalize">
              {selectedCategory}
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4">
          <Filters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedDiscountRanges={selectedDiscountRanges}
            setSelectedDiscountRanges={setSelectedDiscountRanges}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-3/4" ref={productsRef}>
          {/* Sort and Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredProducts.length} produtos encontrados
            </p>
            <div className="flex items-center space-x-2">
              <label className="text-slate-600 dark:text-slate-400">Ordenar por:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-600 
                         bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100
                         focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              >
                <option value="">Relevância</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="most-sold">Mais Vendidos</option>
                <option value="most-recent">Mais Recentes</option>
                <option value="highest-discount">Maiores Descontos</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-slate-200 dark:bg-slate-700 h-64 rounded-lg mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full text-center py-8">
                  <p className="text-slate-600 dark:text-slate-400">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;