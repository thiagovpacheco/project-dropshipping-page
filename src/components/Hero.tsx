import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ArrowLeftCircle, ArrowRightCircle, Smartphone, Laptop, Gamepad, Headphones } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  category: string;
  image: string;
  backgroundColor: string;
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
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=2400&h=1600",
      backgroundColor: "from-blue-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Black Friday Week",
      description: "As melhores ofertas em tecnologia",
      discount: "Até 35% OFF",
      category: "Eletrônicos",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2400&h=1600",
      backgroundColor: "from-purple-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Universo Gamer",
      description: "Equipamentos para sua melhor performance",
      discount: "Até 40% OFF",
      category: "Games",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=2400&h=1600",
      backgroundColor: "from-green-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Som Profissional",
      description: "Qualidade de áudio excepcional",
      discount: "Até 30% OFF",
      category: "Áudio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2400&h=1600",
      backgroundColor: "from-red-600",
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
    <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] pt-[104px]">
      {/* Slides Container */}
      <div 
        className="h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{ width: '100%' }}
          >
            {/* Image and Overlay */}
            <div className="absolute inset-0">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${offer.backgroundColor} via-black/50 to-transparent opacity-90`} />
            </div>
            
            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-full flex items-center">
                <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8">
                  {/* Category Badge */}
                  <span className="inline-flex items-center space-x-2 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white text-sm sm:text-base font-medium tracking-wider uppercase">
                    <span className="text-white">
                      {offer.category === "Smartphones" && <Smartphone className="w-5 h-5" />}
                      {offer.category === "Eletrônicos" && <Laptop className="w-5 h-5" />}
                      {offer.category === "Games" && <Gamepad className="w-5 h-5" />}
                      {offer.category === "Áudio" && <Headphones className="w-5 h-5" />}
                    </span>
                    <span>{offer.category}</span>
                  </span>

                  {/* Title and Description */}
                  <div className="space-y-4">
                    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${offer.textColor} leading-[1.1] tracking-tight`}>
                      {offer.title}
                    </h2>
                    <div className="space-y-2">
                      <p className={`text-xl sm:text-2xl ${offer.textColor} font-medium tracking-wide`}>
                        {offer.description}
                      </p>
                      <p className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${offer.textColor} tracking-tight`}>
                        {offer.discount}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => navigateTo('shop')}
                    className="group bg-white hover:bg-blue-600 text-gray-900 hover:text-white px-8 sm:px-10 py-4 rounded-full font-medium inline-flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
                  >
                    <span>Ver Ofertas</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <button
          onClick={prevSlide}
          className="group p-2 rounded-full bg-black/20 hover:bg-black/40 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ArrowLeftCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="group p-2 rounded-full bg-black/20 hover:bg-black/40 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ArrowRightCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-100' 
                : 'bg-white/50 scale-75 hover:scale-90 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}