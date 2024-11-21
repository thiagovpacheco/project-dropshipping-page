import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ArrowLeftCircle, ArrowRightCircle, Smartphone, Laptop, Gamepad, Headphones } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  category: string;
  backgroundImage: string;
  textColor: string;
}

export function Hero() {
  const { navigateTo } = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers: Offer[] = [
    {
      id: 1,
      title: "Smartphones Premium",
      description: "Últimos lançamentos com tecnologia de ponta",
      discount: "Até 25% OFF",
      category: "Smartphones",
      backgroundImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=2400&h=1600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Black Friday Week",
      description: "As melhores ofertas em tecnologia",
      discount: "Até 35% OFF",
      category: "Eletrônicos",
      backgroundImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2400&h=1600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Universo Gamer",
      description: "Equipamentos para sua melhor performance",
      discount: "Até 40% OFF",
      category: "Games",
      backgroundImage: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=2400&h=1600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Som Profissional",
      description: "Qualidade de áudio excepcional",
      discount: "Até 30% OFF",
      category: "Áudio",
      backgroundImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2400&h=1600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [offers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${offer.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-full flex items-center">
                <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
                  {/* Category Badge */}
                  <span className="inline-flex items-center space-x-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium tracking-wider uppercase">
                    <span className="text-white">
                      {offer.category === "Smartphones" && <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {offer.category === "Eletrônicos" && <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {offer.category === "Games" && <Gamepad className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {offer.category === "Áudio" && <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                    <span>{offer.category}</span>
                  </span>

                  {/* Title and Description */}
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className={`text-3xl sm:text-4xl lg:text-6xl font-bold ${offer.textColor} leading-[1.1] tracking-tight`}>
                      {offer.title}
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <p className={`text-lg sm:text-xl lg:text-2xl ${offer.textColor} font-medium tracking-wide`}>
                        {offer.description}
                      </p>
                      <p className={`text-2xl sm:text-3xl lg:text-5xl font-bold ${offer.textColor} tracking-tight`}>
                        {offer.discount}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => navigateTo('shop')}
                    className="group bg-white hover:bg-blue-600 text-gray-900 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium inline-flex items-center space-x-2 sm:space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <span>Ver Ofertas</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          <ArrowLeftCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/30 text-white backdrop-blur-sm transition-all duration-200"
        >
          <ArrowRightCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center space-x-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}