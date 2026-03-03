import React from 'react';
import { MessageSquare, Mail, Instagram, Linkedin, Github, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Importante adicionar o hook

export default function Contact() {
  const { t } = useTranslation(); // Inicializa o hook

  // URL do WhatsApp traduzida dinamicamente
  const whatsappUrl = `https://wa.me/5511981479715?text=${encodeURIComponent(t("contact.whatsappMsg"))}`;

  return (
    <>
      {/* SEÇÃO DE CONTATO */}
      <section id="contato" className="bg-zinc-50 py-24 md:py-32 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cartão de Contato Premium */}
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-zinc-100 text-center relative overflow-hidden">
            
            {/* Detalhe visual de fundo (Círculos) */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-50 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">
                {t('contact.title1')} <br className="hidden md:block" />
                <span className="text-zinc-400">{t('contact.title2')}</span>
              </h2>
              
              <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('contact.subtitle')}
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* Botão Principal: WhatsApp */}
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] hover:-translate-y-1"
                >
                  <MessageSquare size={22} className="group-hover:animate-bounce" />
                  {t('contact.whatsappBtn')}
                  {/* Ping de Notificação */}
                  <span className="absolute -top-2 -right-2 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </a>

                {/* Botão Secundário: E-mail */}
                <a 
                  href="mailto:gui.d.andrade@gmail.com"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white text-zinc-700 font-bold rounded-xl border-2 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 transition-all"
                >
                  <Mail size={22} />
                  {t('contact.emailBtn')}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RODAPÉ (FOOTER) */}
      <footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Coluna 1: Marca e Posicionamento */}
            <div className="col-span-1 md:col-span-1">
              <a href="#inicio" className="flex items-center gap-2 group cursor-pointer mb-6 w-fit">
                <div className="bg-white text-zinc-900 p-1.5 rounded-lg">
                  <Code2 size={20} />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Guilherme<span className="text-zinc-500">.dev</span>
                </span>
              </a>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              {/* O Gatilho de Autoridade para as Gráficas */}
              <div className="inline-block px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-300 text-xs font-semibold">
                🤝 {t('footer.partnerBadge')}
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="col-span-1 flex flex-col md:items-center">
              <h4 className="text-white font-bold mb-6">{t('footer.navTitle')}</h4>
              <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-medium">
                <li><a href="#hero" className="hover:text-white transition-colors">{t('navbar.home')}</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">{t('navbar.solutions')}</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">{t('navbar.gallery')}</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">{t('navbar.contact')}</a></li>
              </ul>
            </div>

            {/* Coluna 3: Redes Sociais */}
            <div className="col-span-1 flex flex-col md:items-end">
              <h4 className="text-white font-bold mb-6">{t('footer.socialTitle')}</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Deutschh" target='_blank' rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-900 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
          </div>

          {/* Linha de Copyright */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
            <p>© {new Date().getFullYear()} Guilherme.dev. {t('footer.rights')}</p>
            <p>{t('footer.madeWith')}</p>
          </div>

        </div>
      </footer>
    </>
  );
}