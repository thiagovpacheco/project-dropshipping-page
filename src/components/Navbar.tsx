import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Link } from './Link';
import { useNavigation } from '../hooks/useNavigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo } = useNavigation();

  const handleNavigation = (page: string) => {
    navigateTo(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => handleNavigation('home')} className="text-2xl font-bold tracking-tighter">
              NEXUS
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('shop')} className="text-gray-900 hover:text-blue-600 transition-colors">Shop</button>
            <button onClick={() => handleNavigation('about')} className="text-gray-900 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => handleNavigation('reviews')} className="text-gray-900 hover:text-blue-600 transition-colors">Reviews</button>
            <button onClick={() => handleNavigation('contact')} className="text-gray-900 hover:text-blue-600 transition-colors">Contact</button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button 
                onClick={() => handleNavigation('shop')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Shop
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('reviews')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Contact
              </button>
              <button 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>Account</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}