import { site } from "@/content/site";

/*
 * Conteúdo temporário do Retiro Imersos 2027 (JQV). Depois de 09/02/2027, remover:
 *   - src/app/jqv/, src/app/retiro/, src/components/retiro/
 *   - public/jqv/, src/content/retreat.ts, src/lib/retreat-schedule.ts
 *   - <RetreatBanner /> e <RetreatMinistryCard /> (src/app/page.tsx, src/components/Ministries.tsx)
 *   - tokens "retreat" e a regra `--banner-h` em src/app/globals.css
 *   - o offset `--banner-h` em SiteHeader.tsx e Hero.tsx
 *   - a entrada em src/app/sitemap.ts e a linha sobre esta página no .claude/CLAUDE.md
 */

const basePath = "/jqv/retiro-imersos";
const assetPath = basePath;

const whatsappMessage = encodeURIComponent("Oi! Quero saber mais sobre o Retiro Imersos.");

export type DepthLevel = {
  id: string;
  name: string;
};

export type ManifestoBlock = {
  heading?: string;
  paragraphs: readonly string[];
  list?: readonly string[];
  closing?: readonly string[];
};

export const retreat = {
  path: basePath,
  url: `${site.url}${basePath}`,
  name: "Retiro Imersos",
  year: "2027",
  ministry: "JQV Presidente Prudente",
  organization: "Jovens Que Vencem · IIGD Presidente Prudente",
  seo: {
    title: "Retiro Imersos 2027 | JQV Presidente Prudente",
    description:
      "Retiro Imersos 2027, dos Jovens Que Vencem da IIGD Presidente Prudente. De 05/02 a 09/02. Inscrições abertas até 01/02. Mais profundidade, mais presença, mais de Deus.",
    ogAlt: "Retiro Imersos 2027, de 05/02 a 09/02, JQV Presidente Prudente",
  },
  assets: {
    ogImage: `${assetPath}/og.jpg`,
    ogImageWide: `${assetPath}/og-wide.jpg`,
    surface: `${assetPath}/mar-superficie.webp`,
    calm: `${assetPath}/mar-calmo.webp`,
    ripples: `${assetPath}/mar-ondas.webp`,
    iigdDark: `${assetPath}/iigd-preto.webp`,
    iigdLight: `${assetPath}/iigd-cinza.webp`,
    jqvDark: `${assetPath}/jqv-preto.webp`,
    jqvLight: `${assetPath}/jqv-branco.webp`,
  },
  hero: {
    kicker: "Retiro JQV Presidente Prudente",
    tagline: { before: "o raso ", highlight: "não", after: " me serve mais" },
    dates: "05/02 a 09/02",
    datesNote: "De sexta a terça · 2027",
    scrollHint: "Conhecer o retiro",
  },
  levels: [
    { id: "superficie", name: "Superfície" },
    { id: "quando-e-onde", name: "Raso" },
    { id: "por-que-imersos", name: "Fundo" },
    { id: "inscricao", name: "Imerso" },
  ] satisfies readonly DepthLevel[],
  depthMeterLabel: "Nível da água",
  why: {
    id: "por-que-imersos",
    title: { before: "Por que “", highlight: "Imersos", after: "”?" },
    paragraphs: [
      "A palavra “imersão” significa estar completamente mergulhado em algo, estar envolvido por inteiro; não apenas tocar a superfície, mas entrar profundamente.",
      "Queremos sentir a presença de Deus, queremos viver milagres, queremos respostas, queremos transformação, queremos experimentar coisas novas, mas será que estamos realmente dispostos a mergulhar? Será que estamos dispostos a ir mais fundo, deixar algumas coisas para trás e viver uma vida completamente entregue a Ele?",
      "Imersos é sobre entender que não fomos chamados para viver apenas na superfície.",
    ],
    motto: "Mais profundidade, mais presença, mais de Deus.",
    readMore: "Ler mais sobre o tema",
  },
  verse: {
    id: "versiculo",
    label: "O nosso versículo",
    text: {
      before: "Finalmente, mediu mais quinhentos metros, e o rio era ",
      highlight: "tão fundo",
      after: ", que eu não podia atravessar.",
    },
    reference: "Ezequiel 47:5",
    version: "NTLH",
    stepsTitle: "A cada mil côvados, a água ficava mais funda",
    steps: ["Tornozelos", "Joelhos", "Cintura", "A nado"],
  },
  details: {
    id: "quando-e-onde",
    title: "Quando e onde",
    when: {
      label: "Quando",
      value: "05/02 a 09/02",
      note: "Chegamos na sexta, saímos na terça.",
    },
    departure: {
      label: "Saída da IIGD",
      value: "Sexta, 05/02, às 21h30",
      note: "Saímos juntos da igreja, com transporte incluso.",
      address: `${site.location.street} — ${site.location.neighborhood}`,
    },
    place: {
      label: "Onde",
      value: "Chácara Rodrigues e Cremonezi",
      mapLink: { label: "Ver no mapa", href: "https://maps.app.goo.gl/H5vZU4Pr5Yj5ak9w7" },
      instagramLink: {
        label: "Instagram da chácara",
        href: "https://www.instagram.com/chacararodriguescremonezi/",
      },
    },
    audience: {
      label: "Quem pode ir",
      value: "A partir de 12 anos",
      note: "Aberto a outros ministérios e a outras igrejas, não só da IIGD.",
    },
    momentsTitle: "Momentos especiais",
    moments: [
      {
        name: "Quarto Rosa",
        description: "Um momento só para as meninas: aula de pilates e comes e bebes.",
        tone: "rose",
      },
      {
        name: "Papo Reto",
        description:
          "Um momento só para os meninos: momento fit com personal trainer e comes e bebes.",
        tone: "ice",
      },
      {
        name: "Momento com a família",
        description: "Na terça, um momento para viver com a família.",
        tone: "sun",
      },
    ] as const,
    more: {
      label: "E tem muito mais!",
      items: ["Festas", "Vigília", "Dinâmicas"],
    },
    guests: {
      label: "Convidados especiais",
      value: "Fique ligado para ver quem virá!",
    },
  },
  registration: {
    id: "inscricao",
    title: "Hora de mergulhar",
    price: { label: "Investimento", value: "R$ 260,00" },
    payment: "Pix e dinheiro, à vista ou parcelado em até 4x (até fev/27).",
    steps: [
      { when: "Até 01/02", what: "Inscrições abertas" },
      { when: "Até 02/02", what: "Pagamento" },
      { when: "05/02, 21h30", what: "Saída da IIGD" },
    ],
    form: { label: "Quero me inscrever", href: "https://forms.gle/vXDmZS8jsezWgf9R7" },
    deadline: "Inscrições abertas até 01/02",
    closed: "Inscrições encerradas",
    contactTitle: "Dúvidas? Fale com a gente",
    contacts: [
      {
        label: "(18) 99143-8290",
        href: `https://wa.me/5518991438290?text=${whatsappMessage}`,
      },
      {
        label: "(18) 99601-9654",
        href: `https://wa.me/5518996019654?text=${whatsappMessage}`,
      },
    ],
    contactVia: "WhatsApp",
    instagram: { label: "@jqvprudente", href: "https://instagram.com/jqvprudente" },
  },
  bar: {
    countdownPrefix: "Faltam",
    inProgress: "O retiro está acontecendo",
    cta: "Inscrever",
    units: { days: "d", hours: "h", minutes: "min", seconds: "s" },
  },
  home: {
    bannerLabel: "Retiro Imersos",
    bannerDates: "05 a 09/02",
    bannerOpen: "Inscrições até 01/02",
    bannerClosed: "Inscrições encerradas",
    bannerCta: "Saiba mais",
    cardKicker: "JQV · 2027",
    cardTitle: "Retiro Imersos",
    cardDescription: "De 05/02 a 09/02. O raso não me serve mais.",
    cardCta: "Conheça e inscreva-se",
  },
  footer: {
    backLink: { label: "← iigdprudente.com.br", href: "/" },
    line: "Igreja Internacional da Graça de Deus · Presidente Prudente/SP",
  },
  redirect: {
    title: "Redirecionando…",
    message: "Você será levado ao convite do Retiro Imersos.",
    link: "Ir para o convite",
  },
  manifesto: {
    title: "Imersos 2027",
    closeLabel: "Fechar",
    blocks: [
      {
        paragraphs: [
          "Quando começamos a pensar no tema do retiro de 2027, queríamos mais do que uma palavra bonita para uma camiseta: queríamos um significado, uma direção e um propósito para aquilo que Deus quer fazer na vida de cada jovem e adolescente.",
          "Imersão é estar completamente mergulhado, e não apenas tocar a superfície. Muitas vezes queremos viver coisas profundas com Deus, mas continuamos na superfície, com uma fé que depende só do que sentimos dentro da igreja.",
        ],
      },
      {
        heading: "O contexto bíblico",
        paragraphs: [
          "Em Ezequiel 47, o profeta vê um rio que sai do templo. A cada mil côvados a água fica mais funda: tornozelos, joelhos, cintura, até um rio que só se atravessa a nado. E por onde ele passa há vida, transformação e frutos.",
          "É a imagem de como a presença de Deus restaura o que parecia sem vida e de como precisamos continuar crescendo, sem viver sempre no mesmo nível de entrega.",
        ],
      },
      {
        heading: "O que esperamos de 2027",
        paragraphs: [
          "Um ano de posicionamento para a nossa geração: adolescentes e jovens com sede e fome da Palavra, que não têm vergonha do evangelho e buscam a Deus até quando ninguém está olhando.",
          "Queremos que o retiro seja um marco, um começo, e que ninguém volte para a mesma vida de antes.",
        ],
      },
      {
        heading: "Imersos é um convite",
        paragraphs: [],
        list: [
          "Para sair da superfície.",
          "Para ir mais fundo.",
          "Para abandonar uma fé superficial.",
          "Para viver uma intimidade verdadeira com Deus.",
        ],
        closing: [
          "Não queremos apenas estar perto do rio, observando as águas passarem. Queremos estar dentro dele. Queremos estar IMERSOS.",
        ],
      },
    ] satisfies readonly ManifestoBlock[],
  },
} as const;
