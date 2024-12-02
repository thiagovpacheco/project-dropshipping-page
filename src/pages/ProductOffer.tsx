import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Heart, ArrowLeft, Star, Truck, Shield, Clock, ChevronDown, FileText, Settings2, RefreshCcw, ShieldCheck, CheckCircle2, Percent, Zap, MessageSquare } from 'lucide-react';
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
                    className={`aspect-square rounded-lg overflow-hidden bg-gray-100 hover:ring-2 hover:ring-indigo-500 transition-all ${selectedImage === index ? 'ring-2 ring-indigo-500' : 'ring-1 ring-gray-200'}`}
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
              <div className="space-y-6">
                {/* Status e Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Em Estoque
                  </span>
                  {product.isPromotion && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-100 text-red-700 text-sm font-medium">
                      <Percent className="h-4 w-4" />
                      {calculateDiscount(product.originalPrice, product.price)}% OFF
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
                    <Zap className="h-4 w-4" />
                    Frete Grátis
                  </span>
                </div>

                {/* Nome do Produto */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{product.name}</h1>
                  <p className="mt-1 text-lg text-gray-500">Marca: {product.brand}</p>
                </div>
                
                {/* Avaliações */}
                <div className="flex items-center gap-6 py-3 border-y border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${
                            index < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageSquare className="h-5 w-5" />
                    <span>{product.reviewCount} avaliações</span>
                  </div>
                </div>

                {/* Preços */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    {product.isPromotion && (
                      <span className="text-lg text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-gray-600">à vista</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg text-gray-900 font-medium">
                      ou em até 12x de {calculateInstallments(product.price)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Parcele em até 24x no cartão de crédito
                    </p>
                  </div>
                </div>

                {/* Quantidade */}
                <div className="flex items-center gap-6 py-4">
                  <div className="flex items-center gap-3">
                    <label className="font-medium text-gray-700">Quantidade:</label>
                    <div className="flex items-stretch">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        disabled={quantity <= 1}
                        className="px-3 py-2 rounded-l-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <div className="w-16 text-center py-2 border-y border-gray-300 font-medium text-gray-900">
                        {quantity}
                      </div>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        disabled={quantity >= product.stock}
                        className="px-3 py-2 rounded-r-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.stock} unidades disponíveis)
                  </span>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col gap-3 pt-4">
                <button
                  onClick={() => {
                    handleAddToCart();
                    navigate('/checkout');
                  }}
                  className="max-w-sm w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white text-base font-medium rounded-xl hover:bg-green-700 transition-colors"
                >
                  Comprar Agora
                </button>
                <button
                  onClick={handleAddToCart}
                  className="max-w-sm w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Adicionar ao Carrinho
                </button>
              </div>

              {/* Descrição do Produto */}
              <div className="mt-8 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Descrição do Produto</h3>
                  </div>
                  <div className={`prose prose-indigo max-w-none ${!isDescriptionExpanded ? 'line-clamp-4' : ''}`}>
                    <p className="whitespace-pre-line text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="mt-4 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    <span>{isDescriptionExpanded ? 'Ver menos' : 'Ver descrição completa'}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDescriptionExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Especificações Técnicas */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-6">
                    <Settings2 className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Especificações Técnicas</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-start py-4 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <dt className="w-1/3 text-sm font-medium text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </dt>
                        <dd className="w-2/3 text-sm text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefícios e Garantias */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-6">
                    <Shield className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Benefícios e Garantias</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50">
                      <Truck className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-green-900">Frete Grátis</p>
                        <p className="text-sm text-green-700">Entrega em até 3 dias úteis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50">
                      <Shield className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-blue-900">Garantia Estendida</p>
                        <p className="text-sm text-blue-700">12 meses de garantia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-50">
                      <RefreshCcw className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-purple-900">Devolução Grátis</p>
                        <p className="text-sm text-purple-700">30 dias para devolver</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50">
                      <ShieldCheck className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-orange-900">Compra Segura</p>
                        <p className="text-sm text-orange-700">Seus dados protegidos</p>
                      </div>
                    </div>
                  </div>
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
