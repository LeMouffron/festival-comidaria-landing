import React from 'react';
import FestivalLogo from './FestivalLogo';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const FestivalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <FestivalLogo size="md" className="mb-6" />
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              O maior festival gastronômico do Brasil. Três dias de experiências culinárias únicas, 
              chefs renomados, música ao vivo e momentos inesquecíveis para toda a família.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/festivalcomidaria" 
                className="w-10 h-10 bg-festival-blue hover:bg-festival-red rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/festivalcomidaria" 
                className="w-10 h-10 bg-festival-blue hover:bg-festival-red rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@festivalcomidaria" 
                className="w-10 h-10 bg-festival-blue hover:bg-festival-red rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-festival-gradient">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-festival-yellow transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#programacao" className="text-gray-300 hover:text-festival-yellow transition-colors duration-300">
                  Programação
                </a>
              </li>
              <li>
                <a href="#ingressos" className="text-gray-300 hover:text-festival-yellow transition-colors duration-300">
                  Ingressos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-festival-yellow transition-colors duration-300">
                  Contato
                </a>
              </li>
              <li>
                <a href="#politica" className="text-gray-300 hover:text-festival-yellow transition-colors duration-300">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-festival-gradient">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-festival-yellow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Parque Ibirapuera<br />
                    Av. Paulista, 1578<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-festival-yellow" />
                <span className="text-gray-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-festival-yellow" />
                <span className="text-gray-300">contato@festivalcomidaria.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Festival Comidaria. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#termos" className="text-gray-400 hover:text-festival-yellow transition-colors">
                Termos de Uso
              </a>
              <a href="#privacidade" className="text-gray-400 hover:text-festival-yellow transition-colors">
                Privacidade
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-festival-yellow transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FestivalFooter;