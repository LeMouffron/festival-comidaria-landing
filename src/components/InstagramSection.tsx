import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Simulando posts do Instagram para demonstração
const mockInstagramPosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop&auto=format',
    caption: 'Pizza artesanal do chef @mouffronleandro! 🍕✨',
    likes: 245,
    comments: 23
  },
  {
    id: '2', 
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format',
    caption: 'Preparando as delícias para o Festival Comidaria! 👨‍🍳',
    likes: 189,
    comments: 15
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&auto=format', 
    caption: 'Hambúrguer gourmet com ingredientes frescos 🍔',
    likes: 312,
    comments: 28
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&auto=format',
    caption: 'Sobremesas irresistíveis esperando por você! 🍰',
    likes: 167,
    comments: 19
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&auto=format',
    caption: 'Salada fresca e colorida para começar bem o dia! 🥗',
    likes: 98,
    comments: 12
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&auto=format',
    caption: 'Pratos exclusivos que só você encontra aqui! ⭐',
    likes: 203,
    comments: 31
  }
];

const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-festival-gradient">
            Acompanhe no Instagram
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Veja as últimas criações do chef @mouffronleandro e acompanhe os bastidores do Festival Comidaria
          </p>
          <Button 
            className="btn-festival inline-flex items-center gap-2 text-lg px-8 py-3"
            onClick={() => window.open('https://www.instagram.com/MOUFFRONLEANDRO/', '_blank')}
          >
            <Instagram className="w-5 h-5" />
            Seguir @mouffronleandro
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockInstagramPosts.map((post) => (
            <div
              key={post.id}
              className="card-festival overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/MOUFFRONLEANDRO/', '_blank')}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        ❤️ {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        💬 {post.comments}
                      </span>
                    </div>
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="btn-festival-outline text-lg px-8 py-3 inline-flex items-center gap-2"
            onClick={() => window.open('https://www.instagram.com/MOUFFRONLEANDRO/', '_blank')}
          >
            Ver mais no Instagram
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;