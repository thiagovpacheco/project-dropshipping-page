import React from 'react';
import { Instagram, Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-slate-900 text-slate-300 py-12 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-3">
              NEXUS
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Selecionando produtos premium para elevar seu estilo de vida. 
              Qualidade e sofisticação em cada detalhe.
            </p>
          </div>

          {/* Links e Atendimento Section */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => navigate('/')} 
                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Home
                  </button>
                  <button 
                    onClick={() => navigate('/about')} 
                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Sobre
                  </button>
                  <button 
                    onClick={() => navigate('/products')} 
                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Produtos
                  </button>
                  <button 
                    onClick={() => navigate('/contact')} 
                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Contato
                  </button>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Redes Sociais</h4>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group text-sm"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-400 group-hover:text-white transition-colors">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Atendimento */}
              <div className="col-span-2">
                <h4 className="text-lg font-semibold text-white mb-4">Atendimento</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-white text-sm mb-1">Horário de Atendimento</h5>
                      <p className="text-sm text-slate-400">Seg a Sáb: 09:00hs às 18:00hs</p>
                      <p className="text-sm text-slate-400">Dom e feriados: 09:00hs às 13:00hs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-white text-sm mb-1">Endereço</h5>
                      <p className="text-sm text-slate-400">Rio de Janeiro, RJ - Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <a 
                      href="mailto:thempreendedormilionario@gmail.com" 
                      className="text-sm text-slate-400 hover:text-white transition-colors truncate"
                    >
                      thempreendedormilionario@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <a 
                      href="https://wa.me/5524992666649" 
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      (24) 99266-6649
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative mt-8 pt-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-sm text-center">
            &copy; 2023 NEXUS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}