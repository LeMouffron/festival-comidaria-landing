import React from 'react';
import { Button } from '@/components/ui/button';
import FestivalLogo from './FestivalLogo';
import heroImage from '@/assets/festival-hero.jpg';

interface HeroSectionProps {
  onScrollToProgramacao: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToProgramacao }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <FestivalLogo size="lg" className="drop-shadow-2xl" />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
          O Maior Festival
          <br />
          <span className="text-festival-gradient">Gastronômico</span>
          <br />
          do Brasil
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium drop-shadow-xl max-w-3xl mx-auto leading-relaxed">
          3 dias de sabores únicos, chefs renomados, música ao vivo e experiências inesquecíveis para toda a família
        </p>
        
        {/* Call-to-Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onScrollToProgramacao}
            className="btn-festival-outline-hero text-lg px-12 py-6"
          >
            Ver Programação
          </Button>
        </div>
        
        {/* Event Details */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-lg font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
            <span>15-17 Dezembro 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
            <span>Parque Ibirapuera - São Paulo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
            <span>50+ Chefs Renomados</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;