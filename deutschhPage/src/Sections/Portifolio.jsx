import React from "react";
import {
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Zap,
  Search,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="bg-zinc-50 py-24 lg:py-32 border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-zinc-600">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Card do Projeto - Case Matti Ácaro */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 transition-all hover:shadow-2xl group">
          <div className="grid lg:grid-cols-12">
            
            {/* Lado Esquerdo: Vídeo do Projeto */}
            <div className="relative lg:col-span-7 bg-zinc-50 flex items-center justify-center p-6 sm:p-10 lg:p-12">
              <div className="w-full rounded-xl overflow-hidden shadow-2xl border-2 border-zinc-200 bg-white transform group-hover:scale-[1.02] transition-transform duration-500 ease-in-out">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                >
                  <source src="/MattiAcaro.mp4" type="video/mp4" />
                  {t('portfolio.videoFallback')}
                </video>
              </div>
            </div>

            {/* Lado Direito: Informações do Case */}
            <div className="p-8 md:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 uppercase tracking-wider mb-6 w-fit">
                {t('portfolio.project1.badge')}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                {t('portfolio.project1.name')}
              </h3>

              <p className="text-zinc-600 mb-8 leading-relaxed">
                {t('portfolio.project1.description')}
              </p>

              {/* Badges de Resultados/Tecnologias */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-zinc-100 p-1.5 rounded-md text-zinc-900">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm">
                      {t('portfolio.project1.feat1.title')}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {t('portfolio.project1.feat1.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-zinc-100 p-1.5 rounded-md text-zinc-900">
                    <Search size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm">
                      {t('portfolio.project1.feat2.title')}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {t('portfolio.project1.feat2.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-zinc-100 p-1.5 rounded-md text-zinc-900">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm">
                      {t('portfolio.project1.feat3.title')}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {t('portfolio.project1.feat3.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-zinc-100 p-1.5 rounded-md text-zinc-900">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm">
                      {t('portfolio.project1.feat4.title')}
                    </h4>
                    <p className="text-xs text-zinc-500">
                      {t('portfolio.project1.feat4.desc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão para ver o site ao vivo */}
              <a
                href="https://www.grupomattiacaro.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all w-fit"
              >
                {t('portfolio.project1.button')}
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}