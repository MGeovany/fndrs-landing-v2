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
    title: "FNDRS Builds Products",
    description:
      "Some of it is paid work. In some of it, FNDRS stays inside the product.",
    getStarted: "Get in Touch",
    viewServices: "See Allons",

    eyebrow: "FNDRS · Product studio",
    headlineLine1: "FNDRS builds",
    headlineLine2: "products,",
    headlineLine3: "not software for hire.",
    sub: "Some of it is paid work. In some of it, FNDRS stays inside the product.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "See Allons",
    metaPills: [
      { num: "allonsapp.com", label: "inside", href: "https://allonsapp.com" },
    ],
    metaLive: "Currently building",
    marquee: [
      "4 active squads",
      "12 products in production",
      "based in tgu · cdmx · remote",
      "soc 2 type II",
      "2-week sprints",
      "nda in 24h",
    ],
    statLatency: { label: "latency", value: "38", unit: "ms" },
    statLive: { label: "now", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "coverage", value: "94", unit: "%" },
  },
  es: {
    title: "FNDRS Construye Productos",
    description:
      "Parte es trabajo por contrato. En otra parte, FNDRS se queda dentro del producto.",
    getStarted: "Escríbenos",
    viewServices: "Ver Allons",

    eyebrow: "FNDRS · Estudio de producto",
    headlineLine1: "FNDRS construye",
    headlineLine2: "productos,",
    headlineLine3: "no software a la medida.",
    sub: "Parte es trabajo por contrato. En otra parte, FNDRS se queda dentro del producto.",
    ctaPrimary: "Escríbenos",
    ctaSecondary: "Ver Allons",
    metaPills: [
      { num: "allonsapp.com", label: "adentro", href: "https://allonsapp.com" },
    ],
    metaLive: "Construyendo ahora",
    marquee: [
      "4 squads activos",
      "12 productos en producción",
      "base en tgu · cdmx · remoto",
      "soc 2 type II",
      "sprints de 2 semanas",
      "nda en 24h",
    ],
    statLatency: { label: "latencia", value: "38", unit: "ms" },
    statLive: { label: "ahora", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "cobertura", value: "94", unit: "%" },
  },
  ja: {
    title: "FNDRSはプロダクトを作る",
    description:
      "契約で終わる仕事もあれば、プロダクトの中に残り続ける仕事もある。",
    getStarted: "お問い合わせ",
    viewServices: "Allonsを見る",

    eyebrow: "FNDRS · プロダクトスタジオ",
    headlineLine1: "FNDRSがつくるのは",
    headlineLine2: "プロダクト。",
    headlineLine3: "受託開発ではない。",
    sub: "契約で終わる仕事もあれば、プロダクトの中に残り続ける仕事もある。",
    ctaPrimary: "お問い合わせ",
    ctaSecondary: "Allonsを見る",
    metaPills: [
      { num: "allonsapp.com", label: "参加中", href: "https://allonsapp.com" },
    ],
    metaLive: "制作中",
    marquee: [
      "稼働中スクワッド 4",
      "本番運用中 12プロダクト",
      "拠点 tgu · cdmx · リモート",
      "soc 2 type II",
      "2週間スプリント",
      "nda 24時間以内",
    ],
    statLatency: { label: "latency", value: "38", unit: "ms" },
    statLive: { label: "now", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "coverage", value: "94", unit: "%" },
  },
};
