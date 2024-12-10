import React from 'react';
import { motion } from 'framer-motion';

const TrocasDevolucoesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Política de Trocas e Devoluções</h1>
          <p className="text-gray-600 dark:text-gray-400">Informações sobre o processo de trocas e devoluções</p>
        </motion.div>
        
        <div className="space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-[#7C3AED] dark:border-[#7C3AED]"
          >
            <h2 className="text-xl font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-4">Informações Gerais</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Nossa política de trocas e devoluções foi desenvolvida de acordo com o Código de Defesa do Consumidor.
              Garantimos a troca ou devolução de produtos dentro do prazo de 7 dias corridos após o recebimento,
              desde que atendidas as condições estabelecidas nesta política.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-[#7C3AED] dark:border-[#7C3AED]"
          >
            <h2 className="text-xl font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-4">Processo de Solicitação</h2>
            <div className="space-y-4">
              {[/* eslint-disable max-len */
                'Entre em contato com nosso atendimento',
                'Informe o número do pedido',
                'Descreva o motivo da troca ou devolução',
                'Aguarde as instruções por email',
                'Embale o produto adequadamente',
                'Envie conforme as instruções recebidas'
              /* eslint-enable max-len */
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#7C3AED]/10 dark:bg-[#7C3AED]/20 text-[#7C3AED] dark:text-[#8B5CF6] text-sm mr-3 shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{step}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-[#7C3AED] dark:border-[#7C3AED]"
            >
              <h2 className="text-xl font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-4">Condições Necessárias</h2>
              <ul className="space-y-3">
                {[/* eslint-disable max-len */
                  'Produto na embalagem original',
                  'Todos os acessórios inclusos',
                  'Sem sinais de uso',
                  'Nota fiscal presente',
                  'Dentro do prazo de 7 dias'
                /* eslint-enable max-len */
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-[#7C3AED] dark:text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-[#7C3AED] dark:border-[#7C3AED]"
            >
              <h2 className="text-xl font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-4">Prazos de Reembolso</h2>
              <div className="space-y-3">
                {[/* eslint-disable max-len */
                  { method: 'Cartão de crédito', time: 'até 2 faturas' },
                  { method: 'PIX', time: 'até 10 dias úteis' },
                  { method: 'Boleto', time: 'até 10 dias úteis' }
                /* eslint-enable max-len */
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <span className="text-gray-600 dark:text-gray-400">{item.method}</span>
                    <span className="text-gray-600 dark:text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-[#7C3AED] dark:border-[#7C3AED]"
          >
            <h2 className="text-xl font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-4">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-2">Quem paga o frete da devolução?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Em caso de defeito do produto, nós pagamos. Para arrependimento ou desistência, o cliente arca com os custos.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#7C3AED] dark:text-[#8B5CF6] mb-2">Qual o prazo para análise do produto?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Após recebermos o produto, a análise é feita em até 5 dias úteis.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] rounded-lg p-8 text-center text-white shadow-lg"
          >
            <h2 className="text-xl font-medium mb-4">Precisa de Ajuda?</h2>
            <p className="mb-6 text-white/90">
              Nossa equipe está disponível para esclarecer suas dúvidas sobre o processo de trocas e devoluções.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:atendimento@exemplo.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md text-white hover:bg-white/20 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                atendimento@exemplo.com
              </a>
              <a
                href="tel:1112345678"
                className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md text-white hover:bg-white/20 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 1234-5678
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default TrocasDevolucoesPage;
