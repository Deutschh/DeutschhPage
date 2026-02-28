import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito Glassmorphism aprimorado
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FUNÇÃO MÁGICA: Scroll Suave com compensação da Navbar
  const scrollToSection = (e, href) => {
    e.preventDefault(); // Impede o pulo brusco padrão do HTML

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Pega a altura da Navbar para não cobrir o título da seção (aprox 100px)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // Executa a animação suave
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Se o menu de celular estiver aberto, ele fecha automaticamente após o clique
    setIsOpen(false);
  };

  // Links atualizados para bater com todas as seções criadas
  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Ver ao vivo", href: "#portfolio" },
    { name: "Galeria", href: "#galeria" },
    { name: "Soluções", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg shadow-sm py-3"
          : "bg-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Minimalista */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="bg-zinc-900 text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Code2 size={20} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-zinc-900">
              Guilherme<span className="text-zinc-400">.dev</span>
            </span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                // Efeito premium: sublinhado animado que cresce da esquerda para a direita
                className="group relative text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Botão de Contato atualizado para a cor do WhatsApp */}
            <a
              href="https://wa.me/5511981479715?text=Olá%20Guilherme!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-bold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors bg-zinc-50 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-4 py-3 text-base font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511981479715?text=Olá%20Guilherme!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-4 mt-2 text-base font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-md transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
