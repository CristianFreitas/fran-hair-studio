"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Star,
  Share2,
  Menu,
  ChevronRight,
  User,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/layout/Footer";
import ServiceCard from "./ServiceCard";
import FeatureCard from "./FeatureCard";
import ProfileImageSlider from "./ProfileImageSlider";

const FranHairStudio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const HomeContent = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-br from-[#edd7d6] to-[#d79a97] rounded-3xl shadow-xl">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            {/* Coluna de Conteúdo */}
            <div className="relative z-10 p-8 md:p-12 rounded-3xl bg-white/95 shadow-xl backdrop-blur-sm">
              <div className="space-y-8">
                <div className="inline-flex px-4 py-1 rounded-full bg-[#d35c54] text-white">
                  <span className="text-sm font-medium">
                    Bem-vinda ao Fran Hair Studio
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-[#723738]">
                  Transforme seu
                  <span className="font-medium block mt-2">
                    visual com quem entende
                  </span>
                </h2>

                <p className="text-[#8f4e4e] text-lg">
                  Especialista em transformação e cuidados capilares
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#d35c54] hover:bg-[#723738] text-white font-medium px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Agendar Horário
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-[#d35c54] text-[#d35c54] hover:bg-[#d35c54]/10 font-medium px-8 py-6 text-lg rounded-xl"
                  >
                    Conhecer Serviços
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-[#8f4e4e]">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-[#d35c54] text-[#d35c54]" />
                    <span>4.9/5 avaliações</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#d35c54]" />
                    <span>+1000 clientes satisfeitas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Imagem */}
            <div className="hidden md:flex items-center justify-center relative">
              <ProfileImageSlider
                initialImage="/profile2.png"
                workImages={[
                  "/Logo-01.png",
                  "/Logo-02.png",
                  "/Logo-03.png",
                  "/Logo-04.png",
                  "/Logo-05.png",
                  "/Logo-06.png",
                  "/Logo-07.png",
                  "/Logo-08.png",
                  "/Logo-09.png",
                  "/Logo-11.png",
                  "/Logo-12.png",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white/50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-medium text-[#723738]">
                Serviços em Destaque
              </h3>
              <p className="text-[#8f4e4e] mt-1">
                Escolha o serviço ideal para você
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-[#d35c54] hover:text-[#723738]"
            >
              Ver todos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Coloração Premium"
              time="2h30"
              price="R$ 180"
              image="/services/coloracao.jpg"
            />
            <ServiceCard
              title="Tratamento VIP"
              time="1h30"
              price="R$ 150"
              image="/services/tratamento.jpg"
            />
            <ServiceCard
              title="Transformação Total"
              time="3h"
              price="R$ 250"
              image="/services/transformacao.jpg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Calendar}
            title="Agendamento Online"
            description="Marque seu horário de forma rápida e prática"
          />
          <FeatureCard
            icon={Star}
            title="Programa Fidelidade"
            description="Acumule pontos e ganhe benefícios exclusivos"
          />
          <FeatureCard
            icon={Share2}
            title="Clube de Indicação"
            description="Indique amigas e ganhe recompensas"
          />
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-white/50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium text-[#723738] mb-2">
              Números que nos Orgulham
            </h3>
            <p className="text-[#8f4e4e]">
              Conheça um pouco mais sobre nossa história
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d35c54] mb-2">
                +5000
              </div>
              <div className="text-[#8f4e4e]">Clientes Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d35c54] mb-2">15+</div>
              <div className="text-[#8f4e4e]">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d35c54] mb-2">4.9</div>
              <div className="text-[#8f4e4e]">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d35c54] mb-2">20+</div>
              <div className="text-[#8f4e4e]">Serviços Especializados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#edd7d6] to-[#d79a97] rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-medium text-[#723738] mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-[#723738] mb-8">
              Receba dicas de beleza, promoções exclusivas e novidades do nosso
              studio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-6 py-3 rounded-xl border border-[#d79a97] focus:outline-none focus:ring-2 focus:ring-[#d35c54] bg-white/90"
              />
              <Button className="bg-[#d35c54] hover:bg-[#723738] text-white px-8 py-3 rounded-xl">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#edd7d6]/30">
      {/* Header */}
      <header className="border-b border-[#d79a97]/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Fran Hair Studio"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-medium text-[#723738]">
                Fran Hair Studio
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button
                variant="ghost"
                className="text-[#8f4e4e] hover:text-[#d35c54]"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                className="text-[#8f4e4e] hover:text-[#d35c54]"
              >
                Serviços
              </Button>
              <Button
                variant="ghost"
                className="text-[#8f4e4e] hover:text-[#d35c54]"
              >
                Agenda
              </Button>
              <Button
                onClick={() => (window.location.href = "/login")}
                className="bg-[#d35c54] hover:bg-[#723738] px-6 py-2 text-white rounded-xl"
              >
                Fazer Login
              </Button>
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Menu className="w-6 h-6 text-[#723738]" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Button
                    variant="ghost"
                    className="text-[#8f4e4e] hover:text-[#d35c54]"
                  >
                    Início
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[#8f4e4e] hover:text-[#d35c54]"
                  >
                    Serviços
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[#8f4e4e] hover:text-[#d35c54]"
                  >
                    Agenda
                  </Button>
                  <Button
                    className="bg-[#d35c54] text-white hover:bg-[#723738]"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Fazer Login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HomeContent />
      </main>

      <Footer />
    </div>
  );
};

export default FranHairStudio;
