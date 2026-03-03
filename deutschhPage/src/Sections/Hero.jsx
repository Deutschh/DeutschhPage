import React from 'react';
import { ArrowRight, Code2, Rocket, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (e, href) => {
    e.preventDefault(); 
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 1;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id='hero' className="bg-white text-zinc-900 py-20 lg:py-32 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Tag superior estilo "Disponível para trabalho" */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {t('hero.badge')}
          </div>

          {/* Título Principal impactante */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {t('hero.title1')} <br className="hidden md:block" />
            <span className="text-zinc-400">{t('hero.title2')}</span>
          </h1>

          {/* Subtítulo focado na dor do cliente */}
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#contato"
              onClick={(e) => scrollToSection(e, "#contato")}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#portfolio" 
              onClick={(e) => scrollToSection(e, "#portfolio")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 font-semibold rounded-lg border-2 border-zinc-200 hover:border-zinc-900 transition-all"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          {/* Mini Destaques Técnicos (Autoridade) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-zinc-100 text-zinc-500 text-sm font-medium w-full">
            <div className="flex items-center justify-center gap-2">
              <Code2 size={18} /> {t('hero.feat1')}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Rocket size={18} /> {t('hero.feat2')}
            </div>
            <div className="flex items-center justify-center gap-2 col-span-2 md:col-span-1">
              <Search size={18} /> {t('hero.feat3')}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}