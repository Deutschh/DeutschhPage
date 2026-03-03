import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Aqui ficam as traduções
const resources = {
  pt: {
    translation: {
      "navbar": {
        "home": "Início",
        "live": "Ver ao vivo",
        "gallery": "Galeria",
        "solutions": "Soluções",
        "contact": "Contato",
        "whatsappBtn": "Falar no WhatsApp",
        "whatsappMsg": "Olá Guilherme! Vi seu portfólio e gostaria de conversar sobre um projeto."
      },
      "portfolio": {
        "title": "Trabalhos Recentes",
        "subtitle": "Projetos reais desenvolvidos com foco absoluto em performance, design premium e captação de clientes.",
        "videoFallback": "Seu navegador não suporta a tag de vídeo.",
        "project1": {
          "badge": "Limpeza Premium & Estética",
          "name": "Grupo Matti Ácaro",
          "description": "Desenvolvimento de uma Landing Page de alta conversão para serviços de higienização de estofados. O foco do projeto foi transmitir a autoridade da marca e facilitar o agendamento rápido via WhatsApp através de botões interativos.",
          "feat1": { "title": "Alta Velocidade", "desc": "Desenvolvido em React/Vite" },
          "feat2": { "title": "SEO Técnico", "desc": "Indexado no Google Console" },
          "feat3": { "title": "Foco em Conversão", "desc": "CTAs estratégicos" },
          "feat4": { "title": "Design Responsivo", "desc": "Perfeito em celulares" },
          "button": "Visitar Site ao Vivo"
        }
      },
      "contact": {
        "title1": "Vamos construir algo",
        "title2": "incrível juntos?",
        "subtitle": "Seja para criar um site de alta conversão para sua empresa ou para firmarmos uma parceria de indicação de sucesso. O primeiro passo é me mandar um \"Oi\".",
        "whatsappBtn": "Iniciar no WhatsApp",
        "emailBtn": "Enviar E-mail",
        "whatsappMsg": "Olá Guilherme! Vi seu portfólio e gostaria de conversar sobre um projeto."
      },
      "footer": {
        "description": "Desenvolvedor web especializado em criar landing pages ultra rápidas, focadas em design premium e geração de resultados.",
        "partnerBadge": "Parceiro oficial das melhores gráficas da região.",
        "navTitle": "Navegação",
        "socialTitle": "Acompanhe meu trabalho",
        "rights": "Todos os direitos reservados.",
        "madeWith": "Feito com React, Tailwind e muita dedicação."
      },
      "hero": {
        "badge": "Desenvolvedor Web Freelancer",
        "title1": "Sites de Alta Conversão em",
        "title2": "Preto no Branco.",
        "subtitle": "Desenvolvimento de páginas ultra rápidas, otimizadas para o Google e desenhadas estrategicamente para transformar visitantes em orçamentos no WhatsApp.",
        "ctaPrimary": "Solicitar Orçamento",
        "ctaSecondary": "Ver Projetos",
        "feat1": "Tecnologias Modernas",
        "feat2": "Carregamento Rápido",
        "feat3": "SEO Otimizado"
      },
      "services": {
        "header": {
          "title": "Soluções Completas",
          "subtitle": "Muito além do código. Ofereço um ecossistema completo para estruturar, posicionar e escalar o seu negócio na internet."
        },
        "nextBtn": "Próxima Solução",
        "explore": "Explorar",
        "items": {
          "web": {
            "tabName": "Desenvolvimento Web",
            "title": "Engenharia de Software & Landing Pages",
            "description": "Não construo apenas sites bonitos, desenvolvo máquinas de vendas. Uso tecnologias de ponta para garantir que seu site carregue em milissegundos, ranqueie no Google e converta visitantes em clientes reais pelo WhatsApp.",
            "del1": "Landing Pages de Alta Conversão",
            "del2": "Sistemas Full-Stack (React, Node, PHP)",
            "del3": "Integração Dinâmica com WhatsApp",
            "del4": "Otimização Extrema de SEO Técnico",
            "badgeTitle": "Velocidade Mínima",
            "badgeText": "Carregamento em < 1s"
          },
          "social": {
            "tabName": "Mídias Digitais",
            "title": "Posicionamento Premium nas Redes",
            "description": "O seu Instagram é a sua vitrine. Criamos uma identidade visual magnética e uma estratégia de conteúdo que transmite exatamente a mesma autoridade e profissionalismo que o seu site oficial.",
            "del1": "Criação de Identidade Visual Única",
            "del2": "Design de Posts e Criativos",
            "del3": "Estratégia de Engajamento e Retenção",
            "del4": "Padronização de Perfis (Insta, Face, LinkedIn)",
            "badgeTitle": "Engajamento Real",
            "badgeText": "Crescimento Orgânico"
          },
          "ads": {
            "tabName": "Tráfego Pago",
            "title": "Aceleração de Vendas e Performance",
            "description": "O melhor site do mundo não vende se ninguém entrar nele. Colocamos a sua empresa na primeira página do Google e no feed das redes sociais exatamente no momento em que seu cliente está pronto para comprar.",
            "del1": "Gestão de Google Ads (Rede de Pesquisa)",
            "del2": "Campanhas no Meta Ads (Instagram/Facebook)",
            "del3": "Foco Absoluto em ROI e Geração de Leads",
            "del4": "Relatórios Transparentes de Resultados",
            "badgeTitle": "Objetivo Principal",
            "badgeText": "Otimização de ROI"
          }
        }
      },
      "gallery": {
        "title": "Galeria de Projetos",
        "subtitle": "Um pouco do que já foi construído. Sites desenhados para performance e conversão.",
        "hint": "Clique em qualquer imagem para vê-la em tela cheia",
        "altProject": "Projeto",
        "altFullscreen": "Projeto em tela cheia"
      },
    }
  },
  en: {
    translation: {
      "navbar": {
        "home": "Home",
        "live": "Live Demos",
        "gallery": "Gallery",
        "solutions": "Solutions",
        "contact": "Contact",
        "whatsappBtn": "Chat on WhatsApp",
        "whatsappMsg": "Hi Guilherme! I saw your portfolio and would like to discuss a project."
      },
      "portfolio": {
        "title": "Recent Work",
        "subtitle": "Real projects developed with an absolute focus on performance, premium design, and lead generation.",
        "videoFallback": "Your browser does not support the video tag.",
        "project1": {
          "badge": "Premium Cleaning & Aesthetics",
          "name": "Matti Ácaro Group",
          "description": "Development of a high-conversion Landing Page for upholstery cleaning services. The project's focus was to convey brand authority and facilitate quick scheduling via WhatsApp through interactive buttons.",
          "feat1": { "title": "High Speed", "desc": "Built with React/Vite" },
          "feat2": { "title": "Technical SEO", "desc": "Indexed in Google Console" },
          "feat3": { "title": "Conversion Focused", "desc": "Strategic CTAs" },
          "feat4": { "title": "Responsive Design", "desc": "Flawless on Mobile" },
          "button": "Visit Live Site"
        }
      },
      "contact": {
        "title1": "Let's build something",
        "title2": "amazing together?",
        "subtitle": "Whether it's creating a high-converting website for your business or establishing a successful referral partnership. The first step is just to say \"Hi\".",
        "whatsappBtn": "Chat on WhatsApp",
        "emailBtn": "Send an Email",
        "whatsappMsg": "Hi Guilherme! I saw your portfolio and would like to discuss a project."
      },
      "footer": {
        "description": "Web developer specializing in ultra-fast landing pages, focused on premium design and driving results.",
        "partnerBadge": "Official partner of top-tier printing agencies.",
        "navTitle": "Navigation",
        "socialTitle": "Follow my work",
        "rights": "All rights reserved.",
        "madeWith": "Made with React, Tailwind, and hard work."
      },
      "hero": {
        "badge": "Freelance Web Developer",
        "title1": "High-Converting Websites in",
        "title2": "Black and White.",
        "subtitle": "Development of ultra-fast, Google-optimized pages strategically designed to turn visitors into leads on WhatsApp.",
        "ctaPrimary": "Request a Quote",
        "ctaSecondary": "View Projects",
        "feat1": "Modern Technologies",
        "feat2": "Fast Loading",
        "feat3": "Optimized SEO"
      },
      "services": {
        "header": {
          "title": "Complete Solutions",
          "subtitle": "Way beyond code. I offer a complete ecosystem to structure, position, and scale your business online."
        },
        "nextBtn": "Next Solution",
        "explore": "Explore",
        "items": {
          "web": {
            "tabName": "Web Development",
            "title": "Software Engineering & Landing Pages",
            "description": "I don't just build pretty websites; I develop sales machines. I use cutting-edge technologies to ensure your site loads in milliseconds, ranks on Google, and converts visitors into real clients via WhatsApp.",
            "del1": "High-Converting Landing Pages",
            "del2": "Full-Stack Systems (React, Node, PHP)",
            "del3": "Dynamic WhatsApp Integration",
            "del4": "Extreme Technical SEO Optimization",
            "badgeTitle": "Minimum Speed",
            "badgeText": "Loads in < 1s"
          },
          "social": {
            "tabName": "Digital Media",
            "title": "Premium Social Media Positioning",
            "description": "Your Instagram is your storefront. We create a magnetic visual identity and content strategy that conveys the exact same authority and professionalism as your official website.",
            "del1": "Unique Visual Identity Creation",
            "del2": "Post & Creative Design",
            "del3": "Engagement & Retention Strategy",
            "del4": "Profile Standardization (Insta, FB, LinkedIn)",
            "badgeTitle": "Real Engagement",
            "badgeText": "Organic Growth"
          },
          "ads": {
            "tabName": "Paid Traffic",
            "title": "Sales Acceleration & Performance",
            "description": "The best website in the world won't sell if nobody visits it. We put your business on the first page of Google and social media feeds exactly when your customer is ready to buy.",
            "del1": "Google Ads Management (Search Network)",
            "del2": "Meta Ads Campaigns (Instagram/Facebook)",
            "del3": "Absolute Focus on ROI & Lead Gen",
            "del4": "Transparent Performance Reports",
            "badgeTitle": "Main Objective",
            "badgeText": "ROI Optimization"
          }
        }
      },
      "gallery": {
        "title": "Project Gallery",
        "subtitle": "A glimpse of what has been built. Websites designed for performance and conversion.",
        "hint": "Click on any image to view it in full screen",
        "altProject": "Project",
        "altFullscreen": "Project in full screen"
      },
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;