import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FestivalLogo from './FestivalLogo';
import { Menu, X } from 'lucide-react';

interface StickyHeaderProps {
  onScrollToProgramacao: () => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ onScrollToProgramacao }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <FestivalLogo 
              size="sm" 
              className={`transition-all duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-90'
              }`} 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-festival-red' 
                  : 'text-white hover:text-festival-yellow'
              }`}
            >
              Início
            </button>
            <button 
              onClick={onScrollToProgramacao}
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-festival-red' 
                  : 'text-white hover:text-festival-yellow'
              }`}
            >
              Programação
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-festival-red' 
                  : 'text-white hover:text-festival-yellow'
              }`}
            >
              Avaliações
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-festival-red' 
                  : 'text-white hover:text-festival-yellow'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className={`btn-festival font-semibold transition-all duration-300 ${
                isScrolled ? 'shadow-md' : 'shadow-xl'
              }`}
              size="lg"
            >
              Comprar Ingresso
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-foreground hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={onScrollToProgramacao}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors"
              >
                Programação
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors"
              >
                Avaliações
              </button>
              <button 
                onClick={() => scrollToSection('newsletter')}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors"
              >
                Contato
              </button>
              <div className="px-4 py-2">
                <Button className="btn-festival w-full">
                  Comprar Ingresso
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;