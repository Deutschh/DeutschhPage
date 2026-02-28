import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Smartphone, 
  MousePointerClick, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Code2,
  TrendingUp,
  Share2,
  Zap,     // NOVO
  Users,   // NOVO
  Target
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Dados completos e persuasivos de cada serviço
  const services = [
    {
      id: 'web',
      tabName: 'Desenvolvimento Web',
      title: 'Engenharia de Software & Landing Pages',
      description: 'Não construo apenas sites bonitos, desenvolvo máquinas de vendas. Uso tecnologias de ponta para garantir que seu site carregue em milissegundos, ranqueie no Google e converta visitantes em clientes reais pelo WhatsApp.',
      icon: <Layers size={48} className="text-emerald-400" />,
      bgIcon: <Code2 size={240} className="text-zinc-800/30" />,
      deliverables: [
        'Landing Pages de Alta Conversão',
        'Sistemas Full-Stack (React, Node, PHP)',
        'Integração Dinâmica com WhatsApp',
        'Otimização Extrema de SEO Técnico'
      ],
      techs: ['React', 'Tailwind CSS', 'JavaScript', 'SQL'],
      badge: { title: 'Velocidade Mínima', text: 'Carregamento em < 1s', icon: <Zap size={18} className="text-emerald-400" /> }
    },
    {
      id: 'social',
      tabName: 'Mídias Digitais',
      title: 'Posicionamento Premium nas Redes',
      description: 'O seu Instagram é a sua vitrine. Criamos uma identidade visual magnética e uma estratégia de conteúdo que transmite exatamente a mesma autoridade e profissionalismo que o seu site oficial.',
      icon: <Smartphone size={48} className="text-blue-400" />,
      bgIcon: <Share2 size={240} className="text-zinc-800/30" />,
      deliverables: [
        'Criação de Identidade Visual Única',
        'Design de Posts e Criativos',
        'Estratégia de Engajamento e Retenção',
        'Padronização de Perfis (Insta, Face, LinkedIn)'
      ],
      techs: ['Design Gráfico', 'Copywriting', 'Branding'],
      badge: { title: 'Engajamento Real', text: 'Crescimento Orgânico', icon: <Users size={18} className="text-blue-400" /> }
    },
    {
      id: 'ads',
      tabName: 'Tráfego Pago',
      title: 'Aceleração de Vendas e Performance',
      description: 'O melhor site do mundo não vende se ninguém entrar nele. Colocamos a sua empresa na primeira página do Google e no feed das redes sociais exatamente no momento em que seu cliente está pronto para comprar.',
      icon: <MousePointerClick size={48} className="text-orange-400" />,
      bgIcon: <TrendingUp size={240} className="text-zinc-800/30" />,
      deliverables: [
        'Gestão de Google Ads (Rede de Pesquisa)',
        'Campanhas no Meta Ads (Instagram/Facebook)',
        'Foco Absoluto em ROI e Geração de Leads',
        'Relatórios Transparentes de Resultados'
      ],
      techs: ['Google Ads', 'Meta Business', 'Analytics'],
      // ... 
      badge: { title: 'Objetivo Principal', text: 'Otimização de ROI', icon: <Target size={18} className="text-orange-400" /> }
    }
  ];

  // Função para trocar de serviço com animação suave
  const changeService = (newIndex) => {
    if (newIndex === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(newIndex);
      setIsAnimating(false);
    }, 300); // Tempo da animação de saída antes de trocar o conteúdo
  };

  const nextService = () => {
    const nextIndex = activeTab === services.length - 1 ? 0 : activeTab + 1;
    changeService(nextIndex);
  };

  const prevService = () => {
    const prevIndex = activeTab === 0 ? services.length - 1 : activeTab - 1;
    changeService(prevIndex);
  };

  const currentService = services[activeTab];

  return (
    <section id="servicos" className="bg-zinc-950 py-24 md:py-32 relative overflow-hidden border-t border-zinc-900">
      
      {/* Brilho de fundo atualizado para seguir a cor do ícone ativo */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${
        activeTab === 0 ? 'bg-emerald-900/30' : activeTab === 1 ? 'bg-blue-900/30' : 'bg-orange-900/30'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Soluções Completas
          </h2>
          <p className="text-lg text-zinc-400">
            Muito além do código. Ofereço um ecossistema completo para estruturar, posicionar e escalar o seu negócio na internet.
          </p>
        </div>

        {/* O Super Container Interativo */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Navegação de Abas (Tabs) no topo */}
          <div className="flex flex-wrap border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => changeService(index)}
                className={`flex-1 py-4 px-6 text-sm sm:text-base font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === index 
                    ? 'text-white border-white bg-zinc-800/50' 
                    : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-zinc-800/30'
                }`}
              >
                {service.tabName}
              </button>
            ))}
          </div>

          {/* Área de Conteúdo (Com animação) */}
          <div 
            className={`p-8 md:p-12 lg:p-16 transition-all duration-300 transform ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Lado Esquerdo: Textos e Gatilhos */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-zinc-800 rounded-2xl border border-zinc-700 mb-6 shadow-lg">
                  {currentService.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {currentService.title}
                </h3>
                
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  {currentService.description}
                </p>

                {/* Lista de Entregáveis */}
                <div className="space-y-4 mb-10">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags Tecnológicas baseadas no seu perfil */}
                <div className="flex flex-wrap gap-2">
                  {currentService.techs.map((tech, idx) => (
                    <span key={idx} className="px-4 py-1.5 text-xs font-bold text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lado Direito: Visual Abstrato & Botão de Avançar */}
              <div className="relative flex flex-col items-center justify-center h-full min-h-[300px] bg-zinc-950/50 rounded-3xl border border-zinc-800/50 p-8 overflow-hidden group">
                
                {/* Ícone gigante no fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out">
                  {currentService.bgIcon}
                </div>

                {/* ✨ NOVO: Mini-Card Flutuante de Benefício */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-500 z-20">
                  <div className="bg-zinc-800/80 p-2 sm:p-2.5 rounded-full shadow-inner border border-zinc-700/50">
                    {currentService.badge.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider mb-0.5">
                      {currentService.badge.title}
                    </p>
                    <p className="text-sm sm:text-base text-white font-extrabold tracking-tight">
                      {currentService.badge.text}
                    </p>
                  </div>
                </div>

                {/* Botão de Próxima Solução (O que você pediu!) */}
                <div className="relative z-10 mt-auto pt-32">
                  <button 
                    onClick={nextService}
                    className="flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 font-bold rounded-xl hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105"
                  >
                    Próxima Solução
                    <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-zinc-500 text-sm mt-4 font-medium">
                    Explorar {services[activeTab === services.length - 1 ? 0 : activeTab + 1].tabName}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}