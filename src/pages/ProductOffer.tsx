import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Heart, ArrowLeft, Star, Truck, Shield, Clock, ChevronDown, FileText, Settings2, RefreshCcw, ShieldCheck, CheckCircle2, Percent, Zap, MessageSquare, ZoomIn, X, ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown, Filter } from 'lucide-react';
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

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    author: "Carlos Silva",
    rating: 5,
    date: "2024-01-15",
    comment: "Comprei essa TV após muita pesquisa e não me arrependi. A qualidade de imagem é impressionante, especialmente em conteúdo 4K.",
    verified: true,
    helpful: 45
  },
  {
    id: 2,
    author: "Ana Beatriz",
    rating: 4,
    date: "2024-01-10",
    comment: "A qualidade de imagem é realmente impressionante e os recursos smart são muito bons. O único ponto que poderia melhorar é o controle remoto.",
    verified: true,
    helpful: 32
  },
  {
    id: 3,
    author: "Roberto Martins",
    rating: 5,
    date: "2024-01-05",
    comment: "Perfeita para games! Tempo de resposta baixíssimo e suporte a 4K 120Hz funcionando perfeitamente com meu PS5.",
    verified: true,
    helpful: 28
  }
];

const ProductOffer = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const { addToCart } = useCart();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [reviewsSort, setReviewsSort] = useState<'recent' | 'helpful'>('helpful');

  // Array de imagens do produto (mock)
  const productImages = [
    '/placeholder-product.jpg',
    '/placeholder-product-2.jpg',
    '/placeholder-product-3.jpg',
    '/placeholder-product-4.jpg',
    '/placeholder-product-5.jpg',
    '/placeholder-product-6.jpg',
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

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

  // Calcular média das avaliações
  const averageRating = mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;
  const totalReviews = mockReviews.length;

  // Ordenar reviews
  const sortedReviews = [...mockReviews].sort((a, b) => {
    if (reviewsSort === 'helpful') {
      return b.helpful - a.helpful;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb e Botão Voltar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all font-medium shadow-sm hover:shadow border border-gray-100 dark:border-gray-600"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Container Principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Seção de Imagens */}
            <div className="space-y-4">
              {/* Imagem Principal */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800 group border border-gray-100 dark:border-gray-600 shadow-sm">
                <img
                  key={selectedImage}
                  src={productImages[selectedImage]}
                  alt={`${product.name} - Imagem ${selectedImage + 1}`}
                  className={`w-full h-full object-contain transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                
                {/* Controles de navegação */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                    className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                    className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Botão de Galeria */}
                <button
                  onClick={(e) => { e.stopPropagation(); setShowGallery(true); }}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                >
                  Ver Galeria
                </button>

                {/* Contador de imagens */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100">
                  {selectedImage + 1} / {productImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 hover:ring-2 hover:ring-indigo-500 dark:hover:ring-indigo-400 transition-all border ${
                      selectedImage === index
                        ? 'ring-2 ring-indigo-500 dark:ring-indigo-400 border-indigo-100 dark:border-indigo-900'
                        : 'border-gray-100 dark:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Seção de Informações do Produto */}
            <div className="space-y-6 p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/95 rounded-xl border border-gray-100 dark:border-gray-700">
              {/* Cabeçalho do Produto */}
              <div className="space-y-6">
                {/* Status e Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-100 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Em Estoque
                  </span>
                  {product.isPromotion && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-100 text-sm font-medium">
                      <Percent className="h-4 w-4" />
                      {calculateDiscount(product.originalPrice, product.price)}% OFF
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-100 text-sm font-medium">
                    <Zap className="h-4 w-4" />
                    Frete Grátis
                  </span>
                </div>

                {/* Nome e Avaliações */}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= averageRating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {averageRating.toFixed(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {totalReviews} avaliações
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Marca: {product.brand}
                  </p>
                </div>
                
                {/* Preços */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    {product.isPromotion && (
                      <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">à vista</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                      ou em até 12x de {calculateInstallments(product.price)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Parcele em até 24x no cartão de crédito
                    </p>
                  </div>
                </div>

                {/* Quantidade */}
                <div className="flex items-center gap-6 py-4">
                  <div className="flex items-center gap-3">
                    <label className="font-medium text-gray-700 dark:text-gray-300">Quantidade:</label>
                    <div className="flex items-stretch">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        disabled={quantity <= 1}
                        className="px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-50 dark:disabled:hover:bg-gray-800 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <div className="w-16 text-center py-2 border-y border-gray-300 dark:border-gray-600 font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800">
                        {quantity}
                      </div>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        disabled={quantity >= product.stock}
                        className="px-3 py-2 rounded-r-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-50 dark:disabled:hover:bg-gray-800 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
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
            </div>
          </div>
        </div>
      </main>

      {/* Seção de Detalhes do Produto */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Descrição do Produto */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/95 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Descrição do Produto</h2>
            </div>
            <div className="space-y-4">
              <div className={`prose dark:prose-invert max-w-none ${!isDescriptionExpanded && 'line-clamp-6'}`}>
                <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {product.description}
                </div>
              </div>
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="inline-flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
              >
                <span>{isDescriptionExpanded ? 'Ver menos' : 'Ver descrição completa'}</span>
                <ChevronDown className={`h-5 w-5 transform transition-transform ${isDescriptionExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Especificações Técnicas */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/95 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <Settings2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Especificações Técnicas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white dark:bg-gray-700/50 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-600 shadow-sm"
                >
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Avaliações dos Clientes */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/95 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            {/* Cabeçalho e Resumo */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center gap-6">
                <div className="text-center px-6 py-4 bg-white dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 shadow-sm">
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= averageRating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {mockReviews.length} avaliações
                  </p>
                </div>
                <div className="h-12 w-px bg-gray-200 dark:bg-gray-700" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Avaliações dos Clientes
                  </h2>
                  <select
                    value={reviewsSort}
                    onChange={(e) => setReviewsSort(e.target.value as 'recent' | 'helpful')}
                    className="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none focus:ring-0 cursor-pointer p-0"
                  >
                    <option value="helpful">Mais úteis primeiro</option>
                    <option value="recent">Mais recentes primeiro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Lista de Avaliações */}
            <div className="space-y-6 mt-6">
              {sortedReviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0 hover:bg-white dark:hover:bg-gray-700/50 rounded-xl p-4 -mx-4 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">•</div>
                    <time className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(review.date).toLocaleDateString('pt-BR')}
                    </time>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {review.author}
                    </h3>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                        <CheckCircle2 className="h-3 w-3" />
                        Verificada
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {review.comment}
                  </p>

                  <button className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.helpful} pessoas acharam útil</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefícios e Garantias */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-50/50 dark:from-green-900/30 dark:to-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-900/30 shadow-sm">
              <Truck className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
              <h3 className="font-medium text-green-900 dark:text-green-100">Frete Grátis</h3>
              <p className="text-sm text-green-600 dark:text-green-300">Entrega em todo Brasil</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-900/30 dark:to-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-medium text-blue-900 dark:text-blue-100">Garantia Estendida</h3>
              <p className="text-sm text-blue-600 dark:text-blue-300">12 meses de garantia</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-50/50 dark:from-purple-900/30 dark:to-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-900/30 shadow-sm">
              <RefreshCcw className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h3 className="font-medium text-purple-900 dark:text-purple-100">Devolução Grátis</h3>
              <p className="text-sm text-purple-600 dark:text-purple-300">30 dias para devolver</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-50/50 dark:from-orange-900/30 dark:to-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h3 className="font-medium text-orange-900 dark:text-orange-100">Compra Segura</h3>
              <p className="text-sm text-orange-600 dark:text-orange-300">Pagamento protegido</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductOffer;
