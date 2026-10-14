export type DayOfWeek =
  "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

export type ServiceDay = {
  day: string;
  dayOfWeek: DayOfWeek;
  theme?: string;
  times: readonly string[];
};

export type IconName = "clock" | "users" | "mapPin" | "cross" | "heart" | "hands";

export type NavigationLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type NamedLink = {
  label: string;
  href: string;
};

export type SocialProfile = {
  name: string;
  handle: string;
  href: string;
};

export type Pillar = {
  title: string;
  description: string;
  icon: IconName;
};

const domain = "iigdprudente.com.br";
const legalName = "IGREJA INTERNACIONAL DA GRACA DE DEUS";
const taxId = "30.902.803/1932-27";
const city = "Presidente Prudente/SP";
const street = "Rua Ribeiro de Barros, 751";
const neighborhood = "Jardim Aviação";

export const site = {
  url: `https://${domain}`,
  domain,
  name: "Igreja da Graça — Presidente Prudente",
  organizationName: "Igreja Internacional da Graça de Deus",
  legalName,
  taxId,
  wordmark: {
    primary: "Igreja da Graça",
    secondary: "Presidente Prudente",
  },
  seo: {
    title: "Igreja da Graça — Presidente Prudente | Igreja Internacional da Graça de Deus",
    description:
      "Site oficial da Igreja Internacional da Graça de Deus em Presidente Prudente/SP. Confira os horários dos cultos, o endereço e as nossas redes.",
  },
  logo: {
    src: "/brand/logo.png",
    alt: "Igreja Internacional da Graça de Deus",
    width: 1000,
    height: 690,
  },
  skipLink: "Pular para o conteúdo",
  navigation: {
    label: "Navegação principal",
    links: [
      { label: "Cultos", href: "/#cultos", icon: "clock" },
      { label: "Quem somos", href: "/#quem-somos", icon: "users" },
      { label: "Onde estamos", href: "/#onde-estamos", icon: "mapPin" },
    ] satisfies readonly NavigationLink[],
  },
  hero: {
    titleLead: "Igreja da Graça",
    titleSeparator: " — ",
    titleHighlight: "Presidente Prudente",
    tagline: "Você é bem-vindo. Venha participar de um de nossos cultos.",
    primaryCta: { label: "Horários dos cultos", href: "#cultos" },
    secondaryCta: { label: "Siga no Instagram", href: "https://instagram.com/iigdprudente" },
  },
  services: {
    id: "cultos",
    title: "Horários dos cultos",
    intro: "Todos são bem-vindos. Escolha o dia e venha participar.",
    days: [
      { day: "Domingo", dayOfWeek: "Sunday", times: ["08:00", "19:00"] },
      { day: "Segunda", dayOfWeek: "Monday", theme: "Prosperidade", times: ["09:00", "19:30"] },
      {
        day: "Terça",
        dayOfWeek: "Tuesday",
        theme: "Intercessão, 1h de oração",
        times: ["09:00"],
      },
      {
        day: "Quarta",
        dayOfWeek: "Wednesday",
        theme: "Família",
        times: ["09:00", "14:00", "19:30"],
      },
      {
        day: "Sexta",
        dayOfWeek: "Friday",
        theme: "Cura e Libertação",
        times: ["09:00", "14:00", "19:30"],
      },
      { day: "Sábado", dayOfWeek: "Saturday", theme: "Jovens", times: ["18:30"] },
    ] satisfies readonly ServiceDay[],
  },
  about: {
    id: "quem-somos",
    title: "Quem somos",
    missionTitle: "Nossa missão",
    mission:
      "A Igreja Internacional da Graça de Deus de Presidente Prudente tem como missão levar o Evangelho a toda criatura, com temor a Deus e amor ao próximo, auxiliando a comunidade em que está inserida e contribuindo para o bem-estar social e mental da sociedade por meio de sermões religiosos, atendimento social e fraternidade.",
    pillarsTitle: "Nossos pilares",
    pillars: [
      {
        title: "Temor a Deus",
        description: "Levar o Evangelho a toda criatura, com temor a Deus.",
        icon: "cross",
      },
      {
        title: "Amor ao próximo",
        description: "Acolher cada pessoa com amor ao próximo.",
        icon: "heart",
      },
      {
        title: "Serviço à comunidade",
        description: "Auxiliar a comunidade com sermões religiosos e atendimento social.",
        icon: "hands",
      },
      {
        title: "Fraternidade",
        description: "Promover a fraternidade e o bem-estar social e mental.",
        icon: "users",
      },
    ] satisfies readonly Pillar[],
    historyTitle: "Nossa história",
    foundedYear: "1980",
    history:
      "A Igreja Internacional da Graça de Deus foi fundada em 1980 e está ligada ao trabalho do Missionário R. R. Soares. Hoje, tem templos em todo o Brasil e também está presente em outros países, como Estados Unidos, África do Sul, Portugal e Espanha.",
    historyLink: { label: "Conheça a história completa", href: "https://ongrace.com/iigd/" },
  },
  ministries: {
    id: "redes",
    title: "Ministérios e redes",
    intro: "Acompanhe a igreja e os ministérios no Instagram.",
    profiles: [
      {
        name: "Instagram da igreja",
        handle: "@iigdprudente",
        href: "https://instagram.com/iigdprudente",
      },
      {
        name: "Jovens Que Vencem",
        handle: "@jqvsedeprudente",
        href: "https://instagram.com/jqvsedeprudente",
      },
      {
        name: "Crianças Que Vencem",
        handle: "@cqvprudente",
        href: "https://instagram.com/cqvprudente",
      },
    ] satisfies readonly SocialProfile[],
  },
  location: {
    id: "onde-estamos",
    title: "Onde estamos",
    street,
    neighborhood,
    city,
    streetAddress: `${street} — ${neighborhood}`,
    addressLocality: "Presidente Prudente",
    addressRegion: "SP",
    addressCountry: "BR",
    directions: {
      label: "Como chegar",
      href: "https://www.google.com/maps/search/?api=1&query=Rua+Ribeiro+de+Barros+751+Jardim+Avia%C3%A7%C3%A3o+Presidente+Prudente+SP",
    },
  },
  officialPortal: {
    id: "portal-oficial",
    title: "Portal oficial da IIGD",
    intro: "Conheça mais sobre a Igreja Internacional da Graça de Deus no portal oficial.",
    links: [
      { label: "Portal da IIGD", href: "https://ongrace.com/" },
      { label: "História da IIGD", href: "https://ongrace.com/iigd/" },
      { label: "Ministérios", href: "https://ongrace.com/ministerios/" },
      { label: "Encontre uma igreja", href: "https://ongrace.com/buscar-igrejas/" },
    ] satisfies readonly NamedLink[],
  },
  footer: {
    legalLine: `${legalName} · CNPJ ${taxId} · ${city}`,
    officialSiteLine: `Site oficial · ${domain}`,
    copyrightSymbol: "©",
  },
  externalLinkHint: "(abre em nova aba)",
  notFound: {
    title: "Página não encontrada",
    description: "O endereço acessado não existe ou foi movido.",
    backLink: { label: "Voltar para o início", href: "/" },
  },
} as const;
