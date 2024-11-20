import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

export function Hero() {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Elevate Your Lifestyle
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-xl">
          Discover our curated collection of premium products designed to enhance your everyday experiences.
        </p>
        <button 
          onClick={() => navigateTo('shop')}
          className="group bg-white text-black px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-600 hover:text-white transition-all"
        >
          <span>Shop Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}