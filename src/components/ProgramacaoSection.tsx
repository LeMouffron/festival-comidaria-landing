import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Star, ChefHat } from 'lucide-react';

const programacao = {
  dia1: [
    {
      time: '10:00',
      title: 'Abertura do Festival',
      chef: 'Chef Ana Soares',
      location: 'Palco Principal',
      highlight: true
    },
    {
      time: '11:30',
      title: 'Workshop: Massas Artesanais',
      chef: 'Chef Roberto Lima',
      location: 'Área de Workshops',
      highlight: false
    },
    {
      time: '14:00',
      title: 'Show Culinário: Cozinha Brasileira',
      chef: 'Chef Marlene Santos',
      location: 'Palco Principal',
      highlight: true
    },
    {
      time: '16:30',
      title: 'Degustação: Vinhos & Queijos',
      chef: 'Sommelier Carlos Mendes',
      location: 'Espaço Degustação',
      highlight: false
    }
  ],
  dia2: [
    {
      time: '09:30',
      title: 'Café da Manhã Gourmet',
      chef: 'Chef Patrícia Alves',
      location: 'Área Gourmet',
      highlight: false
    },
    {
      time: '11:00',
      title: 'Master Class: Doces Franceses',
      chef: 'Chef Pierre Dubois',
      location: 'Palco Principal',
      highlight: true
    },
    {
      time: '15:00',
      title: 'Concurso: Melhor Prato Regional',
      chef: 'Júri Especializado',
      location: 'Arena de Competição',
      highlight: true
    },
    {
      time: '18:00',
      title: 'Show Musical: Samba & Sabor',
      chef: 'Banda Tempero Brasileiro',
      location: 'Palco Musical',
      highlight: false
    }
  ],
  dia3: [
    {
      time: '10:00',
      title: 'Brunch Especial',
      chef: 'Chef Marcus Vieira',
      location: 'Área Gourmet',
      highlight: false
    },
    {
      time: '12:00',
      title: 'Grande Final: 50 Chefs, Um Prato',
      chef: 'Todos os Chefs Participantes',
      location: 'Palco Principal',
      highlight: true
    },
    {
      time: '16:00',
      title: 'Premiação & Encerramento',
      chef: 'Organização do Festival',
      location: 'Palco Principal',
      highlight: true
    },
    {
      time: '18:00',
      title: 'After Party: Música & Drinks',
      chef: 'DJ Festival',
      location: 'Área de Convivência',
      highlight: false
    }
  ]
};

const ProgramacaoSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState('dia1');

  return (
    <section id="programacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-festival-gradient">
            Programação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Três dias repletos de experiências gastronômicas únicas e momentos inesquecíveis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg rounded-xl p-2">
              <TabsTrigger 
                value="dia1" 
                className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-festival-red data-[state=active]:to-festival-yellow data-[state=active]:text-white"
              >
                15 Dez - Dia 1
              </TabsTrigger>
              <TabsTrigger 
                value="dia2"
                className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-festival-red data-[state=active]:to-festival-yellow data-[state=active]:text-white"
              >
                16 Dez - Dia 2
              </TabsTrigger>
              <TabsTrigger 
                value="dia3"
                className="text-lg font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-festival-red data-[state=active]:to-festival-yellow data-[state=active]:text-white"
              >
                17 Dez - Dia 3
              </TabsTrigger>
            </TabsList>

            {Object.entries(programacao).map(([day, events]) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`card-festival flex flex-col md:flex-row items-start md:items-center gap-4 ${
                      event.highlight ? 'ring-2 ring-festival-yellow bg-gradient-to-r from-white to-yellow-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-festival-red to-festival-yellow text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                        {event.time}
                      </div>
                      {event.highlight && (
                        <Star className="w-5 h-5 text-festival-yellow fill-current" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <ChefHat className="w-4 h-4" />
                          <span>{event.chef}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-festival text-lg px-8 py-4">
              Ver Programação Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramacaoSection;