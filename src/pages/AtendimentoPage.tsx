import React from 'react';

const AtendimentoPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Atendimento ao Cliente</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
          <div className="space-y-4">
            <p>Email: atendimento@exemplo.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Horário de atendimento: Segunda a Sexta, 9h às 18h</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Como faço para rastrear meu pedido?</h3>
              <p>Você pode rastrear seu pedido através do código de rastreamento enviado por email após a confirmação do envio.</p>
            </div>
            <div>
              <h3 className="font-medium">Qual o prazo de entrega?</h3>
              <p>O prazo de entrega varia de acordo com a sua localização, geralmente entre 5 a 10 dias úteis.</p>
            </div>
            <div>
              <h3 className="font-medium">Como solicitar a troca ou devolução?</h3>
              <p>Para solicitar uma troca ou devolução, acesse a página de Trocas e Devoluções em nosso site.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Formulário de Contato</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Nome</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Mensagem</label>
              <textarea
                id="message"
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AtendimentoPage;
