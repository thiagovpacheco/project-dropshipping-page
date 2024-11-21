import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">NEXUS</h3>
            <p className="text-sm">
              Selecionando produtos premium para o estilo de vida moderno.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">Loja</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-white transition-colors">Sobre</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Contato</button></li>
              <li><button onClick={() => navigate('/reviews')} className="hover:text-white transition-colors">Avaliações</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Atendimento ao Cliente</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/shipping')} className="hover:text-white transition-colors">Informações de Envio</button></li>
              <li><button onClick={() => navigate('/returns')} className="hover:text-white transition-colors">Devoluções</button></li>
              <li><button onClick={() => navigate('/faq')} className="hover:text-white transition-colors">Perguntas Frequentes</button></li>
              <li><button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Política de Privacidade</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Conecte-se Conosco</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Nexus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}