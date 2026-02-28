import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { X } from 'lucide-react'; // Importamos o ícone de fechar

// Seus imports de imagens continuam iguais
import Img1 from '../images/print-site1.jpg';
import Img2 from '../images/print-site2.jpg';
import Img3 from '../images/print-site3.jpg';
import Img4 from '../images/print-site4.jpg';
import Img5 from '../images/print-site5.jpg';
import Img6 from '../images/print-site6.jpg';
import Img7 from '../images/print-site7.jpg';
import Img8 from '../images/print-site8.jpg';
import Img9 from '../images/print-site9.jpg';
import Img10 from '../images/print-site10.jpg';
import Img11 from '../images/print-site11.jpg';
import Img12 from '../images/print-site12.jpg'; 
import Img13 from '../images/print-site13.jpg';
import Img14 from '../images/print-site14.jpg';
import Img15 from '../images/print-site15.jpg';
import Img16 from '../images/print-site16.jpg';
import Img17 from '../images/print-site17.jpg';
import Img18 from '../images/print-site18.jpg';
import Img19 from '../images/print-site19.jpg';
import Img20 from '../images/print-site20.jpg';

export default function Gallery() {
  // Estado para controlar qual imagem está aberta em tela cheia (nulo = nenhuma)
  const [selectedImage, setSelectedImage] = useState(null);

  const row1Images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
  ];

  const row2Images = [
   Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
  ];

  return (
// Adicionei 'py-10' na section para dar espaço vertical para os cards crescerem sem cortar
    <section id="galeria" className="bg-white py-24 md:py-32 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
          Galeria de Projetos
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Um pouco do que já foi construído. Sites desenhados para performance e conversão.
        </p>

      </div>


      <div className="flex flex-col gap-8">
        
        
            <p className='text-base text-zinc-700 font-bold mx-auto -mb-8'>Clique em qualque imagem para vê-la em tela cheia</p>

        {/* Esteira 1 */}
        {/* Adicionei 'overflow-y-visible' no style para permitir que o card saia da linha */}
        <Marquee gradient={true} gradientColor="white" gradientWidth={100} speed={40} pauseOnHover={true} style={{ overflowY: 'visible' }}>
          {/* Adicionei 'py-8' para dar margem vertical para o crescimento */}
          <div className="flex gap-6 pr-6 py-8 items-center">
            {row1Images.map((src, index) => (
              <div 
                key={`row1-${index}`} 
                onClick={() => setSelectedImage(src)}
                // MUDANÇAS CRUCIAIS AQUI:
                // 1. removemos 'overflow-hidden' (para a sombra não cortar)
                // 2. hover:scale-110: O container todo cresce 10%
                // 3. hover:z-20: Garante que ele fique por cima dos vizinhos
                // 4. transition-all duration-300 ease-out: Movimento rápido e suave
                className="relative w-72 h-48 sm:w-80 sm:h-56 rounded-2xl cursor-pointer group shadow-md hover:shadow-2xl hover:scale-110 hover:z-20 transition-all duration-300 ease-out bg-white"
              >
                {/* A imagem agora só precisa arredondar os cantos, sem zoom nela */}
                <img 
                  src={src} 
                  alt={`Projeto ${index + 1}`} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Esteira 2 */}
        <Marquee gradient={true} gradientColor="white" gradientWidth={100} speed={30} direction="right" pauseOnHover={true} style={{ overflowY: 'visible' }}>
          <div className="flex gap-6 pr-6 py-8 items-center">
            {row2Images.map((src, index) => (
              <div 
                key={`row2-${index}`} 
                onClick={() => setSelectedImage(src)}
                // Mesmas mudanças da linha de cima
                className="relative w-72 h-48 sm:w-80 sm:h-56 rounded-2xl cursor-pointer group shadow-md hover:shadow-2xl hover:scale-110 hover:z-20 transition-all duration-300 ease-out bg-white"
              >
                <img 
                  src={src} 
                  alt={`Projeto ${index + 1}`} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </Marquee>

      </div>

      {/* MODAL / TELA CHEIA (Só aparece se selectedImage tiver alguma foto) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-zinc-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out transition-opacity"
          onClick={() => setSelectedImage(null)} // Fecha se clicar fora da imagem
        >
          {/* Botão de Fechar */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          {/* Imagem em tamanho gigante */}
          <img 
            src={selectedImage} 
            alt="Projeto em tela cheia" 
            className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
          />
        </div>
      )}

    </section>
  );
}