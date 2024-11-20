import React from 'react';
import { useNavigation } from '../hooks/useNavigation';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Earbuds',
    price: 199,
    image: 'https://images.unsplash.com/photo-1631867675167-90a456a90863?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch Elite',
    price: 299,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Designer Backpack',
    price: 159,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80',
  },
];

export function FeaturedProducts() {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-medium">${product.price}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button 
                    onClick={() => navigateTo('shop')}
                    className="bg-white text-black px-6 py-3 rounded-full font-medium transform -translate-y-2 group-hover:translate-y-0 transition-all"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}