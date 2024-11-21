import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

export function Hero() {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative min-h-[600px] h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          alt="Produtos tecnológicos e lifestyle modernos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Tecnologia e Lifestyle Premium
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl">
          Da mais alta tecnologia aos produtos essenciais do dia a dia. Descubra nossa seleção premium de eletrônicos, gadgets inovadores e acessórios indispensáveis para uma vida mais conectada e prática.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => navigateTo('shop')}
            className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base"
          >
            <span>Descobrir Produtos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}