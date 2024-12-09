import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CreditCard from '../components/CreditCard';
import PixIcon from '../components/PixIcon';
import { useAuth } from '../contexts/AuthContext';
import { useNavbar } from '../contexts/NavbarContext';

interface CheckoutProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setShowLoginModal } = useNavbar();
  const product = location.state?.product as CheckoutProduct;

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Atenção
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Para finalizar sua compra, você precisa estar logado na sua conta ou criar uma nova conta.
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                setShowLoginModal(true);
              }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Fazer Login / Criar Conta
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Voltar para o Produto
            </button>
          </div>
        </div>
      </div>
    );
  }

  const returnUrl = encodeURIComponent(location.pathname + location.search);

  useEffect(() => {
    if (!user) {
      navigate(`/conta?returnUrl=${returnUrl}`, { 
        state: { 
          message: 'Faça login para continuar com a compra',
          returnUrl: location.pathname + location.search
        }
      });
    }
  }, [user, navigate, returnUrl]);

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCVV: ''
  });

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Formatação específica para cada campo
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').slice(0, 16);
    } else if (name === 'cardExpiry') {
      formattedValue = value
        .replace(/\D/g, '')
        .slice(0, 4)
        .replace(/(\d{2})(\d{2})/, '$1/$2')
        .slice(0, 5);
    } else if (name === 'cardCVV') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de processamento do pagamento
    console.log('Processando pagamento:', formData);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Nenhum produto selecionado</h2>
          <button
            onClick={handleGoBack}
            className="mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
          >
            Voltar às compras
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </button>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>

        {/* Resumo do Pedido */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resumo do Pedido</h2>
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
            <div>
              <h3 className="text-gray-900 dark:text-white font-medium">{product.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">Quantidade: {product.quantity}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Informações Pessoais */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informações Pessoais</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nome Completo
              </label>
              <div className="text-gray-900 dark:text-white p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {user?.name}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <div className="text-gray-900 dark:text-white p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {user?.email}
              </div>
            </div>
          </div>
        </div>

        {/* Endereço de Entrega */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Endereço de Entrega</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Endereço
              </label>
              <div className="text-gray-900 dark:text-white p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {user?.address?.street}, {user?.address?.number}
                {user?.address?.complement && ` - ${user.address.complement}`}
                {user?.address?.neighborhood && ` - ${user.address.neighborhood}`}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Cidade
                </label>
                <div className="text-gray-900 dark:text-white p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {user?.address?.city}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Estado
                </label>
                <div className="text-gray-900 dark:text-white p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {user?.address?.state}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                CEP
              </label>
              <div className="text-gray-900 dark:text-white p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {user?.address?.zipCode}
              </div>
            </div>
          </div>
        </div>

        {/* Informações de Pagamento */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informações de Pagamento</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  onFocus={() => setIsCardFlipped(false)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome no Cartão
                </label>
                <input
                  type="text"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleInputChange}
                  onFocus={() => setIsCardFlipped(false)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  placeholder="NOME COMO ESTÁ NO CARTÃO"
                  required
                />
              </div>

              {/* Container para campos pequenos e cartão */}
              <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                {/* Campos pequenos */}
                <div className="w-full md:w-1/3 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Data de Validade
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      onFocus={() => setIsCardFlipped(false)}
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cardCVV"
                      value={formData.cardCVV}
                      onChange={handleInputChange}
                      onFocus={() => setIsCardFlipped(true)}
                      onBlur={() => setIsCardFlipped(false)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                {/* Cartão */}
                <div className="w-full md:w-2/3 flex justify-center md:justify-end">
                  <CreditCard
                    cardNumber={formData.cardNumber}
                    cardHolder={formData.cardHolder}
                    expiryDate={formData.cardExpiry}
                    cvv={formData.cardCVV}
                    isFlipped={isCardFlipped}
                  />
                </div>
              </div>
            </div>

            {/* Botão de PIX */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => {
                  // Aqui você pode adicionar a lógica para gerar o QR Code do PIX
                  console.log('Gerar PIX');
                }}
                className="w-full bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <PixIcon className="w-6 h-6" />
                Pagar com PIX
              </button>
            </div>

            {/* Botão de Finalizar Compra */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-900 transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
