import React from 'react';
import { Instagram, Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">NEXUS</h2>
              <p className="text-gray-400 leading-relaxed">
                Selecionando produtos premium para elevar seu estilo de vida. 
                Qualidade e sofisticação em cada detalhe.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Rio de Janeiro, RJ - Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:thempreendedormilionario@gmail.com" className="hover:text-white transition-colors">
                  thempreendedormilionario@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Unified Section */}
          <div className="md:col-span-8">
            <div className="bg-gray-800/50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Links and Social */}
                <div className="space-y-6">
                  {/* Quick Links */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
                    <div className="flex gap-6">
                      <button onClick={() => navigate('/')} className="hover:text-white transition-colors flex items-center gap-2 group">
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                        Home
                      </button>
                      <button onClick={() => navigate('/about')} className="hover:text-white transition-colors flex items-center gap-2 group">
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                        Sobre
                      </button>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-3 px-5 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                      <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Column - Customer Service */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-white">Atendimento</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white mb-2">Horário de Atendimento</h5>
                        <p className="text-sm text-gray-400">Seg a Sáb: 09:00hs às 18:00hs</p>
                        <p className="text-sm text-gray-400">Dom e feriados: 09:00hs às 13:00hs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <div>
                        <h5 className="font-semibold text-white mb-1">WhatsApp</h5>
                        <a 
                          href="https://wa.me/5524992666649" 
                          className="text-gray-400 hover:text-white transition-colors"
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
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Nexus. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}