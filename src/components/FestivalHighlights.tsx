import React from 'react';
import { ChefHat, Music, GraduationCap, Users } from 'lucide-react';

const highlights = [
  {
    icon: ChefHat,
    title: 'Chefs Renomados',
    description: 'Shows culinários ao vivo e demonstrações exclusivas dos melhores chefs do Brasil e do mundo.'
  },
  {
    icon: Music,
    title: 'Música ao Vivo',
    description: 'Bandas nacionais e internacionais criando a trilha sonora perfeita para sua experiência gastronômica.'
  },
  {
    icon: GraduationCap,
    title: 'Workshops e Aulas',
    description: 'Aprenda técnicas culinárias, receitas secretas e dicas dos grandes mestres da gastronomia.'
  },
  {
    icon: Users,
    title: 'Diversão para Toda Família',
    description: 'Atividades especiais para crianças, jogos, área kids e delícias que agradam todos os paladares.'
  }
];

const FestivalHighlights: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-festival-gradient">
            O que esperar do Festival Comidaria?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma experiência gastronômica completa que desperta todos os seus sentidos e cria memórias inesquecíveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="card-festival text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-festival-red to-festival-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FestivalHighlights;