"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#edd7d6]/30 to-[#d79a97]/20 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1 - Logo e Sobre */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Fran Hair Studio"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-medium text-[#723738]">Fran Hair Studio</span>
            </div>
            <p className="text-[#8f4e4e] text-sm leading-relaxed">
              Há mais de 20 anos transformando a beleza e autoestima das mulheres através de serviços especializados e atendimento personalizado.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/franhairstudiodebeleza/" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#d35c54] flex items-center justify-center text-white hover:bg-[#723738] transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="https://api.whatsapp.com/send?phone=5512982323584"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#d35c54] flex items-center justify-center text-white hover:bg-[#723738] transition-colors"
              >
                <Phone size={20} />
              </Link>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h4 className="text-lg font-semibold text-[#723738] mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {["Coloração", "Tratamentos Capilares", "Estética Facial", "Estética Corporal", "Manicure e Pedicure"].map((service) => (
                <li key={service}>
                  <Button variant="link" className="text-[#8f4e4e] hover:text-[#d35c54] p-0 h-auto">
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-[#723738] mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Agendar Horário", "Programa Fidelidade", "Clube de Indicação", "Galeria de Trabalhos"].map((link) => (
                <li key={link}>
                  <Button variant="link" className="text-[#8f4e4e] hover:text-[#d35c54] p-0 h-auto">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 className="text-lg font-semibold text-[#723738] mb-6">Contato & Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#d35c54] mt-1" />
                <div className="text-[#8f4e4e]">
                  <p className="font-medium">Endereço</p>
                  <p className="text-sm">Rua Serimbura, 192</p>
                  <p className="text-sm">Vila Guaianazes</p>
                  <p className="text-sm">São José dos Campos/SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#d35c54] mt-1" />
                <div className="text-[#8f4e4e]">
                  <p className="font-medium">Contato</p>
                  <Link 
                    href="https://api.whatsapp.com/send?phone=5512982323584"
                    target="_blank"
                    className="text-sm hover:text-[#d35c54] transition-colors"
                  >
                    (12) 98232-3584
                  </Link>
                </div>
              </div>

              <Link 
                href="https://api.whatsapp.com/send?phone=5512982323584"
                target="_blank"
                className="w-full bg-[#d35c54] hover:bg-[#723738] text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                Agendar Horário
              </Link>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-[#d79a97]/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#8f4e4e] text-sm">
              © {new Date().getFullYear()} Fran Hair Studio. Todos os direitos reservados.
            </div>
            
            {/* Horário de Funcionamento */}
            <div className="flex items-center text-[#8f4e4e] text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Seg - Sáb: 9h às 19h
            </div>

            {/* Links de Política */}
            <div className="flex space-x-4 text-sm">
              <Button variant="link" className="text-[#8f4e4e] hover:text-[#d35c54] p-0 h-auto">
                Política de Privacidade
              </Button>
              <Button variant="link" className="text-[#8f4e4e] hover:text-[#d35c54] p-0 h-auto">
                Termos de Uso
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Flutuante */}
      <Link 
        href="https://api.whatsapp.com/send?phone=5512982323584"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Phone size={28} />
      </Link>
    </footer>
  );
};

export default Footer;