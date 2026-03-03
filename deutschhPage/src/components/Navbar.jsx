import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("navbar.home"), href: "#hero" },
    { name: t("navbar.live"), href: "#portfolio" },
    { name: t("navbar.gallery"), href: "#galeria" },
    { name: t("navbar.solutions"), href: "#servicos" },
    { name: t("navbar.contact"), href: "#contato" },
  ];

  const whatsappUrl = `https://wa.me/5511981479715?text=${encodeURIComponent(t("navbar.whatsappMsg"))}`;

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
                className="group relative text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="flex items-center gap-4 border-l border-zinc-200 pl-4">
              <LanguageSwitcher />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-bold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5"
              >
                {t("navbar.whatsappBtn")}
              </a>
            </div>
          </nav>

          {/* ⚡ A MÁGICA ACONTECE AQUI: Área Mobile (Botão Idioma + Menu) ⚡ */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            
            <button
              className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors bg-zinc-50 border border-zinc-200/80 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Menu Mobile Dropdown (Agora limpo, apenas com links e contato) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
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
          
          <div className="mt-4 pt-4 border-t border-zinc-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-4 text-base font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-md transition-colors"
            >
              {t("navbar.whatsappBtn")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}