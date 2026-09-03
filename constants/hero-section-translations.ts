type HeroLang = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  sub: string;
  ctaPrimary: string;
};

export const heroText: Record<"en" | "es" | "ja", HeroLang> = {
  en: {
    eyebrow: "FNDRS · Honduras",
    headlineLine1: "We are",
    headlineLine2: "founders.",
    headlineLine3: "We want to keep going.",
    sub: "We design and build software for other companies. In a few, we end up part of the company.",
    ctaPrimary: "Get in touch",
  },
  es: {
    eyebrow: "FNDRS · Honduras",
    headlineLine1: "Somos",
    headlineLine2: "founders.",
    headlineLine3: "Queremos seguir siéndolo.",
    sub: "Diseñamos y construimos software para otras empresas. En algunas terminamos siendo parte.",
    ctaPrimary: "Escríbenos",
  },
  ja: {
    eyebrow: "FNDRS · ホンジュラス",
    headlineLine1: "私たちは",
    headlineLine2: "創業者。",
    headlineLine3: "これからも続けたい。",
    sub: "他社のためにソフトウェアを設計し、つくっている。そのうちの何社かでは、会社の側にも入っている。",
    ctaPrimary: "お問い合わせ",
  },
};
