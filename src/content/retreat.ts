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
    readMore: "Ler o texto completo",
    readLess: "Fechar o texto completo",
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
    momentsTitle: "Momentos só para vocês",
    moments: [
      { name: "Quarto Rosa", description: "Um momento para as meninas.", tone: "rose" },
      { name: "Papo Reto", description: "Um momento para os meninos.", tone: "ice" },
      {
        name: "Momento surpresa",
        description: "Um para cada grupo. Ainda não podemos contar o que é.",
        tone: "sun",
      },
    ] as const,
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
    blocks: [
      {
        paragraphs: [
          "Quando começamos a pensar no tema para o nosso retiro de 2027, queríamos algo que não fosse apenas bonito, que não fosse apenas uma palavra para colocar em uma camiseta ou em uma decoração, mas algo que realmente tivesse um significado, uma direção e principalmente um propósito para aquilo que acreditamos que Deus quer fazer na vida de cada jovem e adolescente.",
          "E foi assim que chegamos ao tema IMERSOS.",
        ],
      },
      {
        heading: "Mas afinal, por que IMERSOS?",
        paragraphs: [
          "A palavra imersão significa estar completamente mergulhado em algo, estar envolvido por inteiro, não apenas tocar a superfície, mas entrar profundamente. E quando pensamos nisso na nossa vida com Deus, entendemos que muitas vezes queremos viver coisas profundas com Ele, mas continuamos vivendo apenas na superfície.",
          "Queremos sentir a presença de Deus, queremos viver milagres, queremos respostas, queremos transformação, queremos experimentar coisas novas, mas será que estamos realmente dispostos a mergulhar? Será que estamos dispostos a ir mais fundo, deixar algumas coisas para trás e viver uma vida completamente entregue a Ele?",
          "Acreditamos que 2027 precisa ser um ano de profundidade. Um ano em que não vamos nos contentar com uma vida espiritual superficial, com momentos passageiros ou com uma fé que depende apenas do que sentimos dentro de uma igreja. Queremos jovens que vivam com Deus fora das quatro paredes, que tenham intimidade, que conheçam a Palavra, que busquem a presença e que entendam que existe muito mais de Deus para viver.",
        ],
      },
      {
        heading: "O nosso versículo: Ezequiel 47:5",
        paragraphs: [
          "“Finalmente, mediu mais quinhentos metros, e o rio era tão fundo, que eu não podia atravessar.” (NTLH)",
          "Mas para entender por que escolhemos esse versículo, precisamos entender o que estava acontecendo naquele momento.",
        ],
      },
      {
        heading: "O contexto bíblico",
        paragraphs: [
          "Em Ezequiel 47, o profeta Ezequiel recebe uma visão de Deus. Ele é levado até a entrada do templo e começa a observar uma água que saía debaixo da porta do templo, em direção ao lado oriental.",
          "Um homem o conduz por esse rio e, a cada mil côvados, a água vai ficando mais profunda.",
          "Primeiro chega aos tornozelos, depois aos joelhos, depois à cintura, até que se transforma em um rio tão profundo que já não era possível atravessar andando, era necessário nadar.",
          "E existe algo muito forte nessa visão, porque a água não parava de aumentar.",
          "Mais adiante, Ezequiel também vê que esse rio por onde passava levava vida. As águas alcançavam lugares que antes eram improdutivos e, por onde o rio passava, havia transformação, árvores, frutos e vida em abundância.",
          "Essa visão representa a restauração e a vida que vêm de Deus. É uma imagem de como a presença e a ação de Deus podem transformar aquilo que parecia sem vida.",
          "E é exatamente por isso que esse texto conversa tanto com o nosso tema.",
        ],
      },
      {
        heading: "Por que IMERSOS?",
        paragraphs: [
          "Porque não queremos apenas molhar os pés, queremos mergulhar por inteiro.",
          "Muitas vezes nos acostumamos a viver uma fé de momentos, buscamos a Deus quando precisamos, quando estamos passando por alguma dificuldade ou quando estamos em um ambiente que nos proporciona isso.",
          "Mas Deus nos chama para algo mais profundo.",
          "A água nos tornozelos representa apenas o começo, mas o rio continua crescendo. E nós também precisamos continuar crescendo. Não podemos viver sempre no mesmo nível, com a mesma entrega, com a mesma disposição e com a mesma intimidade.",
          "IMERSOS é sobre entender que não fomos chamados para viver apenas na superfície.",
          "É sobre permitir que Deus alcance todas as áreas da nossa vida, nossos pensamentos, nossas escolhas, nossos sonhos, nossos relacionamentos e tudo aquilo que muitas vezes tentamos manter longe da presença dEle.",
          "É sobre parar de querer controlar tudo e aprender a confiar. É sobre não querer apenas conhecer sobre Deus, mas conhecer a Deus de verdade.",
        ],
      },
      {
        heading: "O que esperamos de 2027?",
        paragraphs: [
          "Acreditamos que esse precisa ser um ano de posicionamento para a nossa geração.",
          "Uma geração que não tenha vergonha de viver o evangelho, que não tenha uma vida com Deus apenas dentro da igreja, que não dependa da presença de outras pessoas para buscar a presença dEle.",
          "Queremos adolescentes e jovens que tenham sede, que tenham fome da Palavra, que desejem estar perto de Deus mesmo quando ninguém estiver olhando.",
          "Queremos que esse retiro seja mais do que cinco dias de programação, ministrações, músicas e momentos especiais. Queremos que seja um marco, um começo, uma oportunidade de despertar algo que continue depois que todos voltarem para casa.",
          "Porque não adianta viver cinco dias de imersão e voltar para a mesma vida de antes.",
          "O nosso desejo é que cada pessoa saia dali diferente, não porque participou de um evento, mas porque teve um encontro verdadeiro com Deus e entendeu que existe uma profundidade que ainda não experimentou.",
        ],
      },
      {
        heading: "IMERSOS é um convite.",
        paragraphs: [],
        list: [
          "Um convite para sair da superfície.",
          "Um convite para ir mais fundo.",
          "Um convite para abandonar uma fé superficial.",
          "Um convite para viver uma intimidade verdadeira com Deus.",
        ],
        closing: [
          "E talvez a pergunta que precisamos levar para esse retiro não seja apenas até onde queremos chegar, mas o quanto estamos dispostos a mergulhar.",
          "Em 2027, não queremos apenas estar perto do rio. Não queremos apenas observar as águas passando.",
          "Queremos estar dentro dele.",
          "Queremos estar IMERSOS.",
        ],
      },
    ] satisfies readonly ManifestoBlock[],
  },
} as const;
