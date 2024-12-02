import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Heart, ArrowLeft, Star, Truck, Shield, Clock, ChevronDown } from 'lucide-react';
import type { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

// Mock data - Substituir por dados reais da API
const mockProduct: Product = {
  id: '1',
  name: 'Smart TV OLED 55" LG C1 4K',
  price: 3999.90,
  originalPrice: 4999.90,
  image: '/placeholder-product.jpg',
  brand: 'LG',
  category: 'tvs',
  isPromotion: true,
  rating: 4.8,
  reviewCount: 256,
  stock: 5,
  specifications: {
    resolution: '4K Ultra HD (3840 x 2160)',
    screenSize: '55 polegadas',
    smartFeatures: 'WebOS, ThinQ AI',
    processor: 'α9 Gen4 AI Processor 4K',
    hdr: 'Dolby Vision IQ, HDR10 Pro',
    sound: 'Dolby Atmos (40W)',
    connectivity: 'HDMI 2.1, USB, Bluetooth, Wi-Fi'
  },
  description: `
    🌟 Experimente uma Qualidade de Imagem Extraordinária!

    Transforme sua sala em uma verdadeira sala de cinema com a TV OLED LG C1. Com mais de 8 milhões de pixels autoiluminados, 
    você terá uma experiência visual única com pretos perfeitamente profundos e cores incrivelmente vivas e realistas.

    ✨ Destaques Exclusivos:
    • Pixels Autoiluminados: Cada pixel controla sua própria luz, proporcionando contrastes infinitos
    • Processador α9 Gen4 AI: Upscaling inteligente que otimiza imagem e som automaticamente
    • Gaming Pro: HDMI 2.1 para gaming em 4K a 120Hz, ideal para PS5 e Xbox Series X
    • Dolby Vision IQ & Dolby Atmos: Som e imagem cinematográficos
    • Smart TV Avançada: Controle por voz com Alexa e Google Assistant integrados

    🎮 Para Gamers:
    • Tempo de resposta de 1ms
    • VRR (Variable Refresh Rate)
    • NVIDIA G-SYNC e AMD FreeSync Premium
    • Game Optimizer para menor latência

    🎬 Para Amantes de Filmes:
    • Dolby Vision para HDR cinematográfico
    • Filmmaker Mode™ para cores como o diretor planejou
    • Upscaling 4K para conteúdos em menor resolução

    💡 Smart Features:
    • webOS renovado e mais intuitivo
    • ThinQ AI para automação residencial
    • Apple AirPlay 2 e HomeKit
    • Apps: Netflix, Prime Video, Disney+, HBO Max e mais

    ⭐ Diferenciais:
    • Design ultrafino premium
    • Suporte de parede slim incluso
    • Controle remoto com pointer
    • 4 entradas HDMI 2.1
  `,
};

const ProductOffer = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Array de imagens do produto (mock)
  const productImages = [
    mockProduct.image,
    '/placeholder-product-2.jpg',
    '/placeholder-product-3.jpg',
    '/placeholder-product-4.jpg'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  const product = mockProduct;

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  const calculateInstallments = (price: number) => {
    const installmentValue = price / 12;
    return formatPrice(installmentValue);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb e Botão Voltar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Container Principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Seção de Imagens */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  key={selectedImage}
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      aspect-square rounded-lg overflow-hidden bg-gray-100 
                      hover:ring-2 hover:ring-indigo-500 transition-all
                      ${selectedImage === index ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}
                    `}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Imagem ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Seção de Informações do Produto */}
            <div className="space-y-6">
              {/* Cabeçalho do Produto */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Em Estoque
                  </span>
                  {product.isPromotion && (
                    <span className="px-2.5 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                      {calculateDiscount(product.originalPrice, product.price)}% OFF
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                
                {/* Avaliações */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} avaliações)
                  </span>
                </div>
              </div>

              {/* Preço e Parcelamento */}
              <div className="space-y-3">
                <div className="flex items-baseline gap-3">
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg text-gray-900">
                    Em até 12x de {calculateInstallments(product.price)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatPrice(product.price)} à vista
                  </p>
                </div>
              </div>

              {/* Benefícios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Frete Grátis</p>
                    <p className="text-sm text-gray-600">Para todo o Brasil</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Garantia</p>
                    <p className="text-sm text-gray-600">12 meses de garantia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Entrega Rápida</p>
                    <p className="text-sm text-gray-600">Receba em até 3 dias úteis</p>
                  </div>
                </div>
              </div>

              {/* Descrição do Produto */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Descrição do Produto</h3>
                <div className={`prose prose-indigo max-w-none ${!isDescriptionExpanded ? 'line-clamp-4' : ''}`}>
                  <p className="whitespace-pre-line text-gray-600">{product.description}</p>
                </div>
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                >
                  <span>{isDescriptionExpanded ? 'Ver menos' : 'Ver mais'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isDescriptionExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Quantidade e Botões */}
              <div className="space-y-4">
                {/* Seletor de Quantidade */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Quantidade
                    </label>
                    <span className="text-sm text-gray-500">
                      {product.stock} unidades disponíveis
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center rounded-lg border border-gray-300">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        disabled={quantity <= 1}
                        className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Minus className="h-5 w-5 text-gray-600" />
                      </button>
                      <span className="w-16 text-center font-medium text-gray-900">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        disabled={quantity >= product.stock}
                        className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Plus className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="space-y-4">
                  {/* Promoção Countdown */}
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <p className="text-red-600 font-medium flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Oferta por tempo limitado! Aproveite o desconto de {calculateDiscount(product.originalPrice, product.price)}%
                    </p>
                  </div>

                  {/* Botões */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        handleAddToCart();
                        navigate('/checkout');
                      }}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-medium
                        flex items-center justify-center gap-3 hover:from-green-700 hover:to-green-800 
                        transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <ShoppingCart className="h-6 w-6" />
                      <span className="text-lg">Comprar Agora</span>
                    </button>

                    <div className="flex gap-3">
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-medium
                          flex items-center justify-center gap-3 hover:from-indigo-700 hover:to-indigo-800 
                          transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        <ShoppingCart className="h-6 w-6" />
                        <span className="text-lg">Adicionar ao Carrinho</span>
                      </button>
                      <button
                        className="p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50
                          transition-all duration-200 group"
                      >
                        <Heart className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                      </button>
                    </div>
                  </div>

                  {/* Benefícios de Compra */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                      <Truck className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Frete Grátis</p>
                        <p className="text-sm text-green-600">Entrega em até 3 dias úteis</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-blue-800">Garantia Estendida</p>
                        <p className="text-sm text-blue-600">12 meses de garantia</p>
                      </div>
                    </div>
                  </div>

                  {/* Formas de Pagamento */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-2">Formas de Pagamento:</h4>
                    <p className="text-gray-600">
                      • Até 12x sem juros no cartão
                      <br />
                      • 10% de desconto no PIX
                      <br />
                      • Parcelamento em até 24x no cartão
                    </p>
                  </div>
                </div>
              </div>

              {/* Especificações Técnicas */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Especificações Técnicas
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-start py-3 border-b border-gray-200 last:border-0"
                    >
                      <dt className="w-1/3 text-sm font-medium text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="w-2/3 text-sm text-gray-900">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductOffer;
