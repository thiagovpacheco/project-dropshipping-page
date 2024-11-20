import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/Shop/ProductCard';
import { Filters } from '../components/Shop/Filters';
import { SearchBar } from '../components/Shop/SearchBar';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Earbuds',
    price: 199,
    image: 'https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&q=80',
    category: 'Audio',
    description: 'High-fidelity sound with active noise cancellation and premium build quality.',
  },
  {
    id: 2,
    name: 'Smart Watch Elite',
    price: 299,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80',
    category: 'Wearables',
    description: 'Advanced fitness tracking, heart rate monitoring, and smartphone notifications.',
  },
  {
    id: 3,
    name: 'Designer Backpack',
    price: 159,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80',
    category: 'Accessories',
    description: 'Stylish and functional backpack with laptop compartment and water resistance.',
  },
  {
    id: 4,
    name: 'Minimalist Watch',
    price: 249,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80',
    category: 'Wearables',
    description: 'Clean design with premium materials and Swiss movement.',
  },
  {
    id: 5,
    name: 'Wireless Charging Pad',
    price: 49,
    image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80',
    category: 'Electronics',
    description: 'Fast wireless charging with elegant design and LED indicators.',
  },
  {
    id: 6,
    name: 'Premium Headphones',
    price: 349,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80',
    category: 'Audio',
    description: 'Studio-quality sound with premium materials and wireless connectivity.',
  },
  {
    id: 7,
    name: 'Mechanical Keyboard',
    price: 179,
    image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80',
    category: 'Electronics',
    description: 'Premium mechanical switches with customizable RGB lighting.',
  },
  {
    id: 8,
    name: 'Leather Wallet',
    price: 89,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80',
    category: 'Accessories',
    description: 'Handcrafted genuine leather wallet with RFID protection.',
  },
  {
    id: 9,
    name: 'Portable Speaker',
    price: 129,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80',
    category: 'Audio',
    description: 'Waterproof portable speaker with 360-degree sound.',
  },
];

export function Shop() {
  const maxPrice = Math.max(...products.map(p => p.price));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  const categories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))).sort(),
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <Filters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  maxPrice={maxPrice}
                />
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <div className="mb-6">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}