import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

export function Hero() {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative min-h-[600px] h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Elevate Your Lifestyle
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl">
          Discover our curated collection of premium products designed to enhance your everyday experiences.
        </p>
        <button 
          onClick={() => navigateTo('shop')}
          className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base"
        >
          <span>Shop Now</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}