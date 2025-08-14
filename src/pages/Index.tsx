import React from 'react';
import HeroSection from '@/components/HeroSection';
import FestivalHighlights from '@/components/FestivalHighlights';
import ProgramacaoSection from '@/components/ProgramacaoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import InstagramSection from '@/components/InstagramSection';
import FestivalFooter from '@/components/FestivalFooter';
import StickyHeader from '@/components/StickyHeader';

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
        
        <section id="programacao">
          <ProgramacaoSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <InstagramSection />
        
        <section id="newsletter">
          <NewsletterSection />
        </section>
      </main>
      
      <FestivalFooter />
    </div>
  );
};

export default Index;
