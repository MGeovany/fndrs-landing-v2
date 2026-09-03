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
    title: "We Build Product Together",
    description:
      "You bring the opportunity. We bring the product team: engineering, design, infrastructure, and the people to run it in production.",
    getStarted: "Work With Us",
    viewServices: "What We Bring",

    eyebrow: "FNDRS · Product partner",
    headlineLine1: "You bring the business.",
    headlineLine2: "We build",
    headlineLine3: "the product.",
    sub: "You bring the opportunity, the market, the distribution. We bring the product team: engineering, design, infrastructure, and the people to run it in production.",
    ctaPrimary: "Work With Us",
    ctaSecondary: "What We Bring",
    metaPills: [
      { num: "12+", label: "apps shipped" },
      { num: "14d", label: "avg. ship time" },
      { num: "allonsapp.com", label: "building now", href: "https://allonsapp.com" },
    ],
    metaLive: "2 partner spots · Q3 2026",
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
    title: "Construimos Producto Juntos",
    description:
      "Tú traes la oportunidad. Nosotros el equipo de producto: ingeniería, diseño, infraestructura y quienes lo llevan a producción.",
    getStarted: "Trabajemos Juntos",
    viewServices: "Lo Que Aportamos",

    eyebrow: "FNDRS · Socio de producto",
    headlineLine1: "Tú traes el negocio.",
    headlineLine2: "Nosotros construimos",
    headlineLine3: "el producto.",
    sub: "Tú traes la oportunidad, el mercado, la distribución. Nosotros el equipo de producto: ingeniería, diseño, infraestructura y quienes lo llevan a producción.",
    ctaPrimary: "Trabajemos Juntos",
    ctaSecondary: "Lo Que Aportamos",
    metaPills: [
      { num: "12+", label: "apps publicadas" },
      { num: "14d", label: "ship promedio" },
      { num: "allonsapp.com", label: "building now", href: "https://allonsapp.com" },
    ],
    metaLive: "2 cupos de socio · Q3 2026",
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
    title: "プロダクトを共に作る",
    description:
      "あなたが機会と市場、販路を持ち込む。私たちはプロダクトチームを持ち込む。エンジニアリング、デザイン、インフラ、そして本番を支える人材。",
    getStarted: "一緒に働く",
    viewServices: "提供するもの",

    eyebrow: "FNDRS · プロダクトパートナー",
    headlineLine1: "事業はあなたから。",
    headlineLine2: "プロダクトは",
    headlineLine3: "私たちが形にする。",
    sub: "あなたが機会と市場、販路を持ち込む。私たちはプロダクトチームを持ち込む。エンジニアリング、デザイン、インフラ、そして本番を支える人材。",
    ctaPrimary: "一緒に働く",
    ctaSecondary: "提供するもの",
    metaPills: [
      { num: "12+", label: "アプリ出荷" },
      { num: "14d", label: "平均出荷" },
      { num: "allonsapp.com", label: "開発中", href: "https://allonsapp.com" },
    ],
    metaLive: "Q3 · パートナー枠2",
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
