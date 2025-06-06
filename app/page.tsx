"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Rocket,
  Globe,
  Users,
  Target,
  ChevronDown,
  Play,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-mars-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-mars-500" />
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
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="#mision"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                MISIÓN
              </Link>
              <Link
                href="#desafios"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                TECNOLOGÍA
              </Link>
              <Link
                href="#equipo"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                EQUIPO
              </Link>
              <Link
                href="#contacto"
                className="block text-sm font-medium hover:text-mars-400 transition-colors py-2"
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

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            NESTbio
            <span className="block text-mars-500 mt-2">
              REVOLUCIÓN ENERGÉTICA
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Transformando algas chlorella en energía sostenible para Marte y la
            Tierra. La biotecnología que cambiará el futuro de la humanidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-mars-600 hover:bg-mars-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              VER MISIÓN
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              EXPLORAR TECNOLOGÍA
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
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-mars-950/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                LA BIOTECNOLOGÍA
                <span className="block text-mars-400 mt-2">MÁS INNOVADORA</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                Nuestra misión es crear productos innovadores que ayuden a la
                raza humana en la exploración espacial de manera eficiente y
                autónoma. NESTbio desarrolla sistemas de compostaje de algas
                chlorella para generar energía sostenible, utilizando recursos
                marcianos locales para crear biofactorías autónomas que producen
                oxígeno, biocombustibles y biomasa.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black/50">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    onError={(e) => {
                      console.error("Error loading video:", e);
                      // Fallback to image if video fails
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
                  {/* Fallback image */}
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Video+de+Mision+Marte"
                    alt="Video de la Misión a Marte"
                    width={800}
                    height={600}
                    className="rounded-lg w-full h-auto hidden"
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
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
                className="bg-black/50 p-6 sm:p-8 rounded-lg border border-mars-900/30 hover:border-mars-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <challenge.icon className="h-10 w-10 sm:h-12 sm:w-12 text-mars-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3">
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
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mars-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            ÚNETE A LA
            <span className="block text-mars-400 mt-2">
              REVOLUCIÓN BIOTECNOLÓGICA
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Sé parte de la innovación que transformará la exploración espacial.
            Nuestra misión es desarrollar productos biotecnológicos que permitan
            a la humanidad explorar el espacio de manera eficiente y autónoma.
            Regístrate para recibir actualizaciones sobre NESTbio y
            oportunidades de colaboración.
          </p>

          <div className="max-w-md mx-auto mb-6 sm:mb-8">
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-white/10 border-mars-900/50 text-white placeholder:text-gray-400 flex-1 h-12"
              />
              <Button className="bg-mars-600 hover:bg-mars-700 px-6 h-12 w-full sm:w-auto">
                ENVIAR
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-3 px-2">
              Al registrarte, aceptas recibir comunicaciones sobre el Reto
              Marte.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              className="bg-mars-600 hover:bg-mars-700 px-6 sm:px-8 w-full sm:w-auto"
            >
              APLICAR COMO INVESTIGADOR
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-mars-500 text-mars-400 hover:bg-mars-500 hover:text-white px-6 sm:px-8 w-full sm:w-auto"
            >
              DESCARGAR WHITEPAPER
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-mars-900/30 py-8 sm:py-12">
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
