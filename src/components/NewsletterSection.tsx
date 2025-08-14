import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate newsletter subscription
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá todas as novidades do Festival Comidaria em primeira mão.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-festival-red via-festival-yellow to-festival-yellow2 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-1/3 right-0 w-24 h-24 bg-white rounded-full translate-x-12"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-white rounded-full translate-y-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">
              Não perca nenhuma novidade!
            </h2>
            <p className="text-xl md:text-2xl font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed">
              Seja o primeiro a saber sobre shows exclusivos, novos chefs confirmados, 
              promoções especiais e muito mais. Cadastre-se agora!
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 text-lg bg-white/90 backdrop-blur-sm border-0 placeholder:text-gray-500"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-14 px-8 bg-white text-festival-red hover:bg-gray-100 font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Cadastrar
                </Button>
              </div>
              <p className="text-sm mt-4 text-white/80">
                Prometemos não enviar spam. Apenas as melhores novidades do festival!
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <Check className="w-16 h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Cadastro realizado!</h3>
              <p className="text-white/90">
                Obrigado por se juntar à nossa comunidade gastronômica. 
                Em breve você receberá novidades incríveis!
              </p>
            </div>
          )}

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold">15.000+ Inscritos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold">100% Livre de Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold">Cancele Quando Quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;