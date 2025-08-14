import React from 'react';
import StickyHeader from '@/components/StickyHeader';
import HeroSection from '@/components/HeroSection';
import FestivalHighlights from '@/components/FestivalHighlights';
import ProgramacaoSection from '@/components/ProgramacaoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import FestivalFooter from '@/components/FestivalFooter';

const Index = () => {
  const scrollToProgramacao = () => {
    const programacaoSection = document.getElementById('programacao');
    if (programacaoSection) {
      programacaoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <StickyHeader onScrollToProgramacao={scrollToProgramacao} />
      
      <main>
        <section id="hero">
          <HeroSection onScrollToProgramacao={scrollToProgramacao} />
        </section>
        
        <FestivalHighlights />
        
        <ProgramacaoSection />
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="newsletter">
          <NewsletterSection />
        </section>
      </main>
      
      <FestivalFooter />
    </div>
  );
};

export default Index;
