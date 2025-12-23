import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md sticky top-0 z-50 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 group">
            <Coffee className="h-8 w-8 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <span className="text-2xl font-bold text-gold-500">Damarara</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-medium text-gray-200 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-gold-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gold-500/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-lg font-medium text-gray-200 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
