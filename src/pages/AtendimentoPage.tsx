import React from 'react';

const AtendimentoPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
        Atendimento ao Cliente
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Canais de Atendimento */}
        <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
            Canais de Atendimento
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 dark:text-slate-100">E-mail</h3>
                <p className="text-slate-600 dark:text-slate-400">atendimento@techstore.com</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Resposta em até 24 horas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 dark:text-slate-100">Telefone</h3>
                <p className="text-slate-600 dark:text-slate-400">0800 123 4567</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 dark:text-slate-100">Chat Online</h3>
                <p className="text-slate-600 dark:text-slate-400">Atendimento em tempo real</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Todos os dias, 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-slate-800 dark:text-slate-100">Como faço para rastrear meu pedido?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Você pode rastrear seu pedido através do link enviado no e-mail de confirmação ou acessando a área "Meus Pedidos" em sua conta.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-slate-800 dark:text-slate-100">Qual o prazo de entrega?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                O prazo de entrega varia de acordo com a sua localização e o método de envio escolhido. Durante o checkout, você poderá ver as opções disponíveis e seus respectivos prazos.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-slate-800 dark:text-slate-100">Como funciona a garantia dos produtos?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Todos os produtos possuem garantia legal de 90 dias. Alguns produtos podem ter garantia estendida oferecida pelo fabricante. As informações específicas de garantia estão disponíveis na página de cada produto.
              </p>
            </details>
          </div>
        </section>
      </div>

      {/* Formulário de Contato */}
      <section className="mt-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
          Entre em Contato
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Assunto da mensagem"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Sua mensagem..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg
                     transform transition-all duration-200 hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     dark:focus:ring-offset-slate-800"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
};

export default AtendimentoPage;