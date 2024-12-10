import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../Electronics/ProductCard';
import { Filters } from '../Electronics/Filters';
import { mockProducts } from '../Electronics/mockData';
import { Product } from '../../types/product';

const ElectronicsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todos');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevancia');
  const [isFiltering, setIsFiltering] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // Função para rolar suavemente até os produtos
  const scrollToProducts = () => {
    if (productsRef.current) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const yOffset = -headerHeight - 20; // Offset ajustado considerando o header
      
      const element = productsRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      // Usando requestAnimationFrame para uma animação mais suave
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800; // Duração da animação em ms
      let start: number | null = null;

      const animate = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Função de easing para uma animação mais natural
        const easeInOutCubic = (t: number) => {
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const run = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  // Função para atualizar filtros com animação
  const handleFilterChange = (
    type: 'category' | 'brand' | 'price' | 'search',
    value: any
  ) => {
    setIsFiltering(true);

    // Atualiza o filtro específico
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

    // Rola até os produtos após um pequeno delay
    setTimeout(() => {
      scrollToProducts();
      setIsFiltering(false);
    }, 100);
  };

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'todos') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory]);

  // Filter products based on all criteria
  useEffect(() => {
    let filtered = mockProducts;

    // Category filter
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'preco-menor':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'preco-maior':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'desconto':
        filtered.sort((a, b) => {
          const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discountB - discountA;
        });
        break;
      default:
        // relevância - mantém a ordem original
        break;
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange, selectedBrands, sortBy]);

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
            setSearchQuery={(query) => handleFilterChange('search', query)}
            selectedCategory={selectedCategory}
            setSelectedCategory={(category) => handleFilterChange('category', category)}
            priceRange={priceRange}
            setPriceRange={(range) => handleFilterChange('price', range)}
            selectedBrands={selectedBrands}
            setSelectedBrands={(brands) => handleFilterChange('brand', brands)}
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
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-600 
                         bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100
                         focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              >
                <option value="relevancia">Relevância</option>
                <option value="preco-menor">Menor Preço</option>
                <option value="preco-maior">Maior Preço</option>
                <option value="desconto">Maior Desconto</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;
