import React from 'react';
import { Truck, HeadphonesIcon, RefreshCcw, ShieldCheck, Mail } from 'lucide-react';

export function InfoSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      {/* Elemento decorativo superior */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Frete Grátis */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-3 rounded-xl shadow-md">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Frete Grátis</h3>
            </div>
            <p className="text-slate-600">
              Receba seu pedido no conforto da sua casa com entrega garantida e segurada pelos Correios.
            </p>
          </div>

          {/* Precisa de Ajuda */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-3 rounded-xl shadow-md">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Precisa de Ajuda?</h3>
            </div>
            <p className="text-slate-600">
              Estamos disponíveis para te atender via E-mail e WhatsApp.
            </p>
          </div>

          {/* Garantia de Compra */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-3 rounded-xl shadow-md">
                <RefreshCcw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Garantia de Compra</h3>
            </div>
            <p className="text-slate-600">
              Troque ou devolva seus produtos em até 7 dias.
            </p>
          </div>

          {/* Pagamento Seguro */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-3 rounded-xl shadow-md">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Pagamento 100% Seguro</h3>
            </div>
            <p className="text-slate-600">
              Utilizamos a segurança de dados dos maiores bancos nacionais e internacionais (SSL).
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-2xl mx-auto text-center relative">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-200">
              Receba Nossas Promoções
            </h3>
            <p className="text-slate-300 mb-8">
              Seja o primeiro a saber sobre novas coleções e ofertas exclusivas.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu endereço de E-mail"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white 
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl 
                         font-medium hover:from-indigo-700 hover:to-violet-700 transition-all duration-300
                         transform hover:-translate-y-0.5 hover:shadow-lg"
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
