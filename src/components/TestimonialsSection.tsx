import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina Silva',
    location: 'São Paulo, SP',
    photo: '👩‍🍳',
    review: 'Uma experiência incrível! Os workshops foram fantásticos e consegui aprender técnicas que uso até hoje na minha cozinha. Mal posso esperar pela próxima edição!'
  },
  {
    name: 'Carlos Mendonça',
    location: 'Rio de Janeiro, RJ',
    photo: '👨‍🎓',
    review: 'Levei minha família inteira e todos se divertiram muito. A área kids foi perfeita para as crianças enquanto nós aproveitamos as degustações. Organização impecável!'
  },
  {
    name: 'Júlia Rodrigues',
    location: 'Belo Horizonte, MG',
    photo: '👩‍💼',
    review: 'Os chefs são verdadeiros artistas! Ver eles cozinhando ao vivo foi inspirador. E a música... que ambiente maravilhoso! Já comprei meu ingresso para o próximo ano.'
  },
  {
    name: 'Fernando Costa',
    location: 'Brasília, DF',
    photo: '👨‍🔬',
    review: 'Como chef profissional, posso dizer que este festival eleva o padrão da gastronomia brasileira. Networking excepcional e pratos que nunca vou esquecer!'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-festival-gradient">
            O que dizem nossos visitantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 50.000 pessoas já viveram momentos únicos no Festival Comidaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-festival h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Stars Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-festival-yellow text-festival-yellow" />
                  ))}
                </div>
                
                {/* Review Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.review}"
                </blockquote>
                
                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-to-r from-festival-red to-festival-yellow rounded-full flex items-center justify-center text-white text-xl">
                    {testimonial.photo}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-festival-red to-festival-yellow rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <span className="font-semibold">4.9/5 Avaliação Média</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-festival-red to-festival-yellow rounded-full flex items-center justify-center text-white font-bold text-sm">
                50K+
              </div>
              <span className="font-semibold">Visitantes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-festival-red to-festival-yellow rounded-full flex items-center justify-center text-white font-bold text-sm">
                98%
              </div>
              <span className="font-semibold">Retornariam ao Festival</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;