"use client";

import { Button } from "@/components/ui/button";
import {
  Rocket,
  Globe,
  Users,
  Target,
  ChevronDown,
  Play,
  Menu,
  X,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Fabian Rivera",
      phone: "+50685351653",
    },
    {
      name: "Nicole Rodriguez",
      phone: "+50664048935",
    },
    {
      name: "Avril Porras",
      phone: "+50686798681",
    },
    {
      name: "Valeska Aparicio",
      phone: "+50663467521",
    },
    {
      name: "Yalitza Castillo",
      phone: "+50687261249",
    },
    {
      name: "Josué Brenes",
      phone: "+50685833467",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-mars-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="NESTbio Logo"
              width={32}
              height={32}
            />
            <span className="text-lg sm:text-xl font-bold">NESTbio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#mision"
              className="text-sm font-medium hover:text-mars-400 transition-colors"
            >
              MISIÓN
            </Link>
            <Link
              href="#desafios"
              className="text-sm font-medium hover:text-mars-400 transition-colors"
            >
              TECNOLOGÍA
            </Link>
            <Link
              href="#equipo"
              className="text-sm font-medium hover:text-mars-400 transition-colors"
            >
              EQUIPO
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:text-mars-400 transition-colors"
            >
              CONTACTO
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden sm:inline-flex bg-mars-600 hover:bg-mars-700 text-white text-sm px-4 py-2">
              ÚNETE AL RETO
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-mars-500/20">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="#mision"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                MISIÓN
              </Link>
              <Link
                href="#desafios"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                TECNOLOGÍA
              </Link>
              <Link
                href="#equipo"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                EQUIPO
              </Link>
              <Link
                href="#contacto"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACTO
              </Link>
              <Button className="w-full bg-mars-600 hover:bg-mars-700 text-white mt-4">
                ÚNETE AL RETO
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/marte-hero.png"
            alt="Superficie de Marte"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            NESTbio
            <span className="block text-mars-500 mt-2">
              REVOLUCIÓN ENERGÉTICA
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Transformando algas chlorella en energía sostenible para Marte y la
            Tierra. La biotecnología que cambiará el futuro de la humanidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-mars-600 hover:bg-mars-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              <Link href="#mision" className="flex items-center">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                VER MISIÓN
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              <Link href="#desafios" className="flex items-center">
                EXPLORAR TECNOLOGÍA
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mision"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-mars-950/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                LA BIOTECNOLOGÍA
                <span className="block text-mars-400 mt-2">MÁS INNOVADORA</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
                Nuestra misión es crear productos innovadores que ayuden a la
                raza humana en la exploración espacial de manera eficiente y
                autónoma. NESTbio desarrolla sistemas de compostaje de algas
                chlorella para generar energía sostenible, utilizando recursos
                marcianos locales para crear biofactorías autónomas que producen
                oxígeno, biocombustibles y biomasa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-mars-400">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    EFICIENCIA ENERGÉTICA
                  </div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-mars-400">
                    CO₂→O₂
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    CONVERSIÓN ATMOSFÉRICA
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative order-1 lg:order-2">
                <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black/50 aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    onError={(e) => {
                      console.error("Error loading video:", e);
                      e.currentTarget.style.display = "none";
                      const img = e.currentTarget.nextElementSibling;
                      if (img && img instanceof HTMLElement)
                        img.style.display = "block";
                    }}
                  >
                    <source src="/videos/mision-video.mp4" type="video/mp4" />
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp-5Hr4NR88noGh7NCFkvc8B5iOT3QBJ2.mp4"
                      type="video/mp4"
                    />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Video+de+Mision+Marte"
                    alt="Video de la Misión a Marte"
                    fill
                    className="object-cover hidden"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="desafios" className="py-12 sm:py-16 lg:py-20 bg-mars-950/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              DESAFÍOS DE LA
              <span className="block text-mars-400 mt-2">
                BIOTECNOLOGÍA ESPACIAL
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cada obstáculo biotecnológico es una oportunidad para innovar.
              Estos son los retos que NESTbio supera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Globe,
                title: "CULTIVO DE ALGAS",
                description:
                  "Optimizar el crecimiento de chlorella en condiciones marcianas extremas con recursos limitados.",
              },
              {
                icon: Target,
                title: "COMPOSTAJE EFICIENTE",
                description:
                  "Desarrollar sistemas de transformación de biomasa en energía mediante procesos de compostaje avanzado.",
              },
              {
                icon: Users,
                title: "CONSTRUCCIÓN ISRU",
                description:
                  "Utilizar regolito marciano y cemento sulfurado para crear estructuras habitables y duraderas.",
              },
              {
                icon: Rocket,
                title: "SISTEMAS HÍBRIDOS",
                description:
                  "Integrar paneles solares, electrólisis y biocombustibles en un sistema energético autónomo.",
              },
              {
                icon: Globe,
                title: "AUTOMATIZACIÓN IA",
                description:
                  "Controlar variables críticas como presión, temperatura y composición gaseosa mediante inteligencia artificial.",
              },
              {
                icon: Target,
                title: "ESCALABILIDAD",
                description:
                  "Adaptar la tecnología desde módulos individuales hasta colonias completas sin depender de la Tierra.",
              },
            ].map((challenge, index) => (
              <div
                key={index}
                className="bg-black/50 p-4 sm:p-6 lg:p-8 rounded-lg border border-mars-900/30 hover:border-mars-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <challenge.icon className="h-10 w-10 sm:h-12 sm:w-12 text-mars-400 mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="equipo"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-mars-950/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              NUESTRO
              <span className="block text-mars-400 mt-2">EQUIPO</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Un equipo multidisciplinario de visionarios comprometidos con el
              futuro de la exploración espacial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 sm:p-8 rounded-lg border border-mars-900/30 hover:border-mars-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-mars-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 sm:h-10 sm:w-10 text-mars-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <div className="w-12 h-0.5 bg-mars-400 mx-auto mb-4"></div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`https://wa.me/${member.phone.replace(/\s+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600/20 hover:bg-green-600/40 rounded-full flex items-center justify-center transition-colors group"
                    title="WhatsApp"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 group-hover:text-green-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-full flex items-center justify-center transition-colors group"
                    title="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-blue-400 group-hover:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-mars-950/30 to-rust-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "O₂+H₂", label: "PRODUCCIÓN DUAL" },
              { value: "ISRU", label: "RECURSOS LOCALES" },
              { value: "CO₂→O₂", label: "CAPTURA CARBONO" },
              { value: "100%", label: "AUTONOMÍA ENERGÉTICA" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mars-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacto"
        className="bg-black border-t border-mars-900/30 py-6 sm:py-8 lg:py-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-mars-500" />
                <span className="text-lg font-bold">NESTbio</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollando biotecnología sostenible para la exploración
                espacial y la preservación terrestre.
              </p>
            </div>

            {[
              {
                title: "PROYECTO",
                links: ["Misión", "Tecnología", "Cronograma", "Equipo"],
              },
              {
                title: "PARTICIPAR",
                links: [
                  "Voluntarios",
                  "Investigadores",
                  "Patrocinadores",
                  "Comunidad",
                ],
              },
              {
                title: "CONTACTO",
                links: ["Prensa", "Soporte", "Legal", "Privacidad"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3 text-mars-400">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-mars-900/30 mt-8 pt-6 sm:pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Reto Marte. Todos los derechos
              reservados. | Haciendo historia, un paso a la vez.
            </p>
          </div>
        </div>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
    document.addEventListener('DOMContentLoaded', function() {
      const video = document.querySelector('video');
      const loading = document.getElementById('video-loading');
      
      if (video) {
        video.addEventListener('loadeddata', function() {
          if (loading) loading.style.display = 'none';
        });
        
        video.addEventListener('error', function() {
          if (loading) loading.style.display = 'none';
        });
      }
    });
  `,
        }}
      />
    </div>
  );
}
