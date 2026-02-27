import React from 'react';
import { 
  LayoutTemplate, 
  Database, 
  Smartphone, 
  MousePointerClick, 
  TrendingUp,
  Layers
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Desenvolvimento Web (Full-Stack)',
      description: 'Engenharia de software completa. Do visual impecável (Front-end) à estrutura lógica e banco de dados (Back-end). Crio desde Landing Pages até sistemas web complexos.',
      icon: <Layers className="text-white" size={32} />,
      tags: ['React & Tailwind', 'Node & PHP', 'Bancos de Dados SQL'],
      delay: 'delay-0'
    },
    {
      title: 'Tráfego Pago (Performance)',
      description: 'Não basta ter o melhor site se ninguém o visita. Crio e gerencio campanhas estratégicas no Google e Meta Ads para colocar sua empresa na frente de quem já quer comprar.',
      icon: <MousePointerClick className="text-white" size={32} />,
      tags: ['Google Ads', 'Meta Ads (Insta/Face)', 'Foco em Conversão (Leads)'],
      delay: 'delay-100'
    },
    {
      title: 'Gestão de Mídias Sociais',
      description: 'Criação de identidade visual e conteúdo estratégico para suas redes. Padronizamos seu perfil para transmitir a mesma autoridade e confiança do seu site oficial.',
      icon: <Smartphone className="text-white" size={32} />,
      tags: ['Design de Posts', 'Identidade Visual', 'Estratégia de Conteúdo'],
      delay: 'delay-200'
    }
  ];

  return (
    <section id="servicos" className="bg-zinc-900 py-24 md:py-32 relative overflow-hidden">
      
      {/* Efeito de brilho de fundo (muito sutil) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-zinc-800/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Soluções Digitais
          </h2>
          <p className="text-lg text-zinc-400">
            Muito além do código. Ofereço um ecossistema completo para estruturar, posicionar e escalar o seu negócio na internet.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-3xl p-8 sm:p-10 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
            >
              
              {/* Ícone */}
              <div className="w-16 h-16 rounded-2xl bg-zinc-700/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-zinc-700 transition-all duration-500">
                {service.icon}
              </div>

              {/* Textos */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Tags (Ferramentas/Detalhes) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-semibold text-zinc-300 bg-zinc-900/50 border border-zinc-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Borda inferior que acende no hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Secundário */}
        <div className="mt-20 text-center">
          <p className="text-zinc-400 mb-6 font-medium">
            Precisa de uma solução específica que não está aqui?
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-lg hover:bg-zinc-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Vamos conversar sobre o seu projeto
            <TrendingUp size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}