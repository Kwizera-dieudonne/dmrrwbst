import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-300" />
              <span className="text-2xl font-bold">Damarara</span>
            </div>
            <p className="text-amber-100 mb-4">
              Crafting premium coffee and tea experiences since 2010. Every cup tells a story of passion, quality, and dedication.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-amber-800/50 hover:bg-amber-700 p-2 rounded-full transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-amber-100 hover:text-amber-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="text-amber-100 hover:text-amber-300 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-amber-100 hover:text-amber-300 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-amber-100 hover:text-amber-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-amber-100">
              <li>123 Brew Street</li>
              <li>Kigali, Rwanda</li>
              <li>Phone: +250 123 456 789</li>
              <li>Email: hello@damarara.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700/50 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Damarara. All rights reserved. Crafted with passion for coffee and tea lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;