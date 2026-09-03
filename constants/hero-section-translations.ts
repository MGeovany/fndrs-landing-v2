type HeroLang = {
  // legacy fields (kept for any other component still consuming them)
  title: string;
  description: string;
  getStarted: string;
  viewServices: string;
  // new hero copy
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  metaPills: { num: string; label: string; href?: string }[];
  metaLive: string;
  marquee: string[];
  statLatency: { label: string; value: string; unit: string };
  statLive: { label: string; value: string };
  statStack: { label: string; value: string };
  statCoverage: { label: string; value: string; unit: string };
};

export const heroText: Record<"en" | "es" | "ja", HeroLang> = {
  en: {
    title: "We want to found more than one company",
    description: "There are three of us: design, engineering and infrastructure.",
    getStarted: "See Allons",
    viewServices: "Get in touch",

    eyebrow: "FNDRS · Honduras",
    headlineLine1: "We want to found",
    headlineLine2: "more than one company.",
    headlineLine3: "Allons is the first.",
    sub: "There are three of us: design, engineering and infrastructure.",
    ctaPrimary: "See Allons",
    ctaSecondary: "Get in touch",
    metaPills: [
      {
        num: "allonsapp.com",
        label: "events · honduras",
        href: "https://allonsapp.com",
      },
    ],
    metaLive: "Building",
    marquee: [],
    statLatency: { label: "latency", value: "38", unit: "ms" },
    statLive: { label: "now", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "coverage", value: "94", unit: "%" },
  },
  es: {
    title: "Queremos fundar más de una empresa",
    description: "Somos tres: diseño, ingeniería e infraestructura.",
    getStarted: "Ver Allons",
    viewServices: "Escríbenos",

    eyebrow: "FNDRS · Honduras",
    headlineLine1: "Queremos fundar",
    headlineLine2: "más de una empresa.",
    headlineLine3: "Allons es la primera.",
    sub: "Somos tres: diseño, ingeniería e infraestructura.",
    ctaPrimary: "Ver Allons",
    ctaSecondary: "Escríbenos",
    metaPills: [
      {
        num: "allonsapp.com",
        label: "eventos · honduras",
        href: "https://allonsapp.com",
      },
    ],
    metaLive: "En construcción",
    marquee: [],
    statLatency: { label: "latencia", value: "38", unit: "ms" },
    statLive: { label: "ahora", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "cobertura", value: "94", unit: "%" },
  },
  ja: {
    title: "会社をいくつも立ち上げたい",
    description: "三人でやっている。デザイン、エンジニアリング、インフラ。",
    getStarted: "Allonsを見る",
    viewServices: "お問い合わせ",

    eyebrow: "FNDRS · ホンジュラス",
    headlineLine1: "会社をいくつも",
    headlineLine2: "立ち上げたい。",
    headlineLine3: "Allonsがその一社目。",
    sub: "三人でやっている。デザイン、エンジニアリング、インフラ。",
    ctaPrimary: "Allonsを見る",
    ctaSecondary: "お問い合わせ",
    metaPills: [
      {
        num: "allonsapp.com",
        label: "イベント · ホンジュラス",
        href: "https://allonsapp.com",
      },
    ],
    metaLive: "開発中",
    marquee: [],
    statLatency: { label: "latency", value: "38", unit: "ms" },
    statLive: { label: "now", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "coverage", value: "94", unit: "%" },
  },
};
