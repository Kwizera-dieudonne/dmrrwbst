import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-amber-50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer z-50" 
            onClick={() => scrollToSection('hero')}
          >
            {/* <Coffee className="w-8 h-8 text-amber-500" /> */}
            <span className={`font-bold text-xl transition-colors ${
              scrolled ? 'text-amber-900' : 'text-white'
            }`}>Damarara</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className={`transition-colors font-medium ${
                scrolled ? 'text-amber-900 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className={`transition-colors font-medium ${
                scrolled ? 'text-amber-900 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`transition-colors font-medium ${
                scrolled ? 'text-amber-900 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`transition-colors font-medium ${
                scrolled ? 'text-amber-900 hover:text-amber-600' : 'text-white hover:text-amber-500'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
              scrolled ? 'text-amber-900 hover:bg-amber-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-amber-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-amber-500 hover:text-white rounded-lg transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-amber-500 hover:text-white rounded-lg transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-amber-500 hover:text-white rounded-lg transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-amber-500 hover:text-white rounded-lg transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;