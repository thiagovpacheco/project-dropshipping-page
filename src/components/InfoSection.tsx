import React from 'react';
import { Truck, HeadphonesIcon, RefreshCcw, ShieldCheck, Mail } from 'lucide-react';

export function InfoSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Frete Grátis */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Frete Grátis</h3>
            </div>
            <p className="text-gray-600">
              Receba seu pedido no conforto da sua casa com entrega garantida e segurada pelos Correios.
            </p>
          </div>

          {/* Precisa de Ajuda */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Precisa de Ajuda?</h3>
            </div>
            <p className="text-gray-600">
              Estamos disponíveis para te atender via E-mail e WhatsApp.
            </p>
          </div>

          {/* Garantia de Compra */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <RefreshCcw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Garantia de Compra</h3>
            </div>
            <p className="text-gray-600">
              Troque ou devolva seus produtos em até 7 dias.
            </p>
          </div>

          {/* Pagamento Seguro */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Pagamento 100% Seguro</h3>
            </div>
            <p className="text-gray-600">
              Utilizamos a segurança de dados dos maiores bancos nacionais e internacionais (SSL).
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Receba Nossas Promoções
            </h3>
            <p className="text-gray-300 mb-8">
              Seja o primeiro a saber sobre novas coleções e ofertas exclusivas.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu endereço de E-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
