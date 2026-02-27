import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito elegante: a barra ganha uma sombra e fundo semi-transparente ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Minimalista */}
          <a href="#inicio" className="flex items-center gap-2 group cursor-pointer">
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
                className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Botão de Contato sempre visível */}
            <a 
              href="#contato"
              className="px-5 py-2.5 text-sm font-bold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </nav>

          {/* Botão do Menu Mobile */}
          <button 
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-3 mt-2 text-base font-bold text-white bg-zinc-900 rounded-lg shadow-md"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}