import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center bg-zinc-100 p-1 rounded-lg border border-zinc-200/80 shadow-inner">
      
      {/* Botão Português */}
      <button
        onClick={() => i18n.changeLanguage('pt')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-all duration-300 ${
          i18n.language === 'pt'
            ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/50'
            : 'text-zinc-400 hover:text-zinc-600'
        }`}
        title="Mudar para Português"
      >
        <img 
          src="https://flagcdn.com/w20/br.png" 
          alt="Bandeira do Brasil" 
          className={`w-4 h-auto rounded-sm transition-opacity ${i18n.language === 'pt' ? 'opacity-100' : 'opacity-50'}`} 
        />
        <span className="hidden sm:inline">PT</span>
      </button>
      
      {/* Botão Inglês */}
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-all duration-300 ${
          i18n.language === 'en'
            ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/50'
            : 'text-zinc-400 hover:text-zinc-600'
        }`}
        title="Switch to English"
      >
        <img 
          src="https://flagcdn.com/w20/us.png" 
          alt="USA Flag" 
          className={`w-4 h-auto rounded-sm transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`} 
        />
        <span className="hidden sm:inline">EN</span>
      </button>
      
    </div>
  );
}