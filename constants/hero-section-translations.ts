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
  scrollCue: string;
  statLatency: { label: string; value: string; unit: string };
  statLive: { label: string; value: string };
  statStack: { label: string; value: string };
  statCoverage: { label: string; value: string; unit: string };
};

export const heroText: Record<"en" | "es" | "ja", HeroLang> = {
  en: {
    title: "We Ship Product Together",
    description:
      "Developers, designers, engineers, security experts, and cloud specialists ready to work. Skip the search. Get the full squad.",
    getStarted: "Hire Our Team",
    viewServices: "Our Capabilities",

    eyebrow: "FNDRS · Dev Team as a service",
    headlineLine1: "Your team to build",
    headlineLine2: "product",
    headlineLine3: "fast, without the overhead.",
    sub: "Developers, designers, engineers, security experts, and cloud specialists ready to work. Skip the search. Get the full squad.",
    ctaPrimary: "Hire Our Team",
    ctaSecondary: "View capabilities",
    metaPills: [
      { num: "12+", label: "apps shipped" },
      { num: "14d", label: "avg. ship time" },
      { num: "allonsapp.com", label: "building now", href: "https://allonsapp.com" },
    ],
    metaLive: "2 spots open — Q3 2026",
    marquee: [
      "4 active squads",
      "12 products in production",
      "based in tgu · cdmx · remote",
      "soc 2 type II",
      "2-week sprints",
      "nda in 24h",
    ],
    scrollCue: "scroll · explore",
    statLatency: { label: "latency", value: "38", unit: "ms" },
    statLive: { label: "now", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "coverage", value: "94", unit: "%" },
  },
  es: {
    title: "Construimos Juntos",
    description:
      "Desarrolladores, diseñadores, ingenieros, expertos en seguridad y especialistas en la nube—listos para trabajar.",
    getStarted: "Contrata Nuestro Equipo",
    viewServices: "Nuestras Capacidades",

    eyebrow: "FNDRS · Dev Team as a service",
    headlineLine1: "Tu equipo para construir",
    headlineLine2: "producto",
    headlineLine3: "rápido, sin el caos.",
    sub: "Desarrolladores, diseñadores, ingenieros, expertos en seguridad y especialistas en la nube listos para trabajar. Sin búsqueda. Obtén el equipo completo.",
    ctaPrimary: "Contrata Nuestro Equipo",
    ctaSecondary: "Ver capacidades",
    metaPills: [
      { num: "12+", label: "apps publicadas" },
      { num: "14d", label: "ship promedio" },
      { num: "allonsapp.com", label: "building now", href: "https://allonsapp.com" },
    ],
    metaLive: "2 spots disponibles — Q3 2026",
    marquee: [
      "4 squads activos",
      "12 productos en producción",
      "base en tgu · cdmx · remoto",
      "soc 2 type II",
      "sprints de 2 semanas",
      "nda en 24h",
    ],
    scrollCue: "scroll · explorar",
    statLatency: { label: "latencia", value: "38", unit: "ms" },
    statLive: { label: "ahora", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "cobertura", value: "94", unit: "%" },
  },
  ja: {
    title: "あなたのプロジェクトで働く準備ができた開発チーム",
    description:
      "私たちは、ソフトウェア開発者、デザイナー、エンジニア、セキュリティ専門家、クラウドスペシャリストの完全なチームです。",
    getStarted: "チームを雇う",
    viewServices: "私たちの能力",

    eyebrow: "FNDRS · Dev Team as a service",
    headlineLine1: "チームで作る",
    headlineLine2: "プロダクト",
    headlineLine3: "素早く、無駄なく。",
    sub: "開発者・デザイナー・エンジニア・セキュリティ専門家・クラウドスペシャリスト揃えたチームがすぐ動ける。採用は不要。フルチームをそのまま。",
    ctaPrimary: "チームを雇う",
    ctaSecondary: "私たちの能力",
    metaPills: [
      { num: "12+", label: "アプリ出荷" },
      { num: "14d", label: "平均出荷" },
      { num: "allonsapp.com", label: "開発中", href: "https://allonsapp.com" },
    ],
    metaLive: "Q3 — 残り2枠",
    marquee: [
      "稼働中スクワッド 4",
      "本番運用中 12プロダクト",
      "拠点 tgu · cdmx · リモート",
      "soc 2 type II",
      "2週間スプリント",
      "nda 24時間以内",
    ],
    scrollCue: "scroll · 探索",
    statLatency: { label: "latency", value: "38", unit: "ms" },
    statLive: { label: "now", value: "deploy #2148" },
    statStack: { label: "stack", value: "RN · Next · Go · TF" },
    statCoverage: { label: "coverage", value: "94", unit: "%" },
  },
};
