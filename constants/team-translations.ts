export interface TeamTextMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  video?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  behance?: string;
  website?: string;
}

export interface TeamTextLocale {
  heading: string;
  headingPart1: string;
  sectionLabel: string;
  description: string;
  badge: string;
  members: TeamTextMember[];
}

const memberUnchangedData: (Pick<TeamTextMember, "name" | "image"> &
  Partial<Omit<TeamTextMember, "name" | "image">>)[] = [
  {
    name: "Carlos Alberto",
    image: "/assets/branding/partner-1.webp",
    video: "/videos/carlos.mp4",
    linkedin: "https://www.linkedin.com/in/carlos-pineda-a1a780220/",
    instagram: "https://www.instagram.com/carlos.alberto",
    github: "https://github.com/carlosp2001",
    website: "https://portfolio-website-carlosp.fly.dev/",
  },
  {
    name: "Jorge Torres",
    image: "/assets/branding/partner-2.webp",
    video: "/videos/jorge.mp4",
    linkedin: "https://www.linkedin.com/in/jorge-torres-5396662a3/",
    instagram: "https://www.instagram.com/jorgeetorresx/",
    github: "https://github.com/jorge-torres",
    behance: "https://www.behance.net/jorgetorres46",
  },
  {
    name: "Marlon Castro",
    image: "/assets/branding/partner-3.webp",
    video: "/videos/geovany.mp4",
    linkedin: "https://www.linkedin.com/in/m-geovany/",
    instagram: "https://www.instagram.com/marlon.castro",
    github: "https://github.com/MGeovany",
    website: "https://mgeovany-dev.vercel.app/",
  },
];

export const teamText: Record<"en" | "es" | "ja", TeamTextLocale> = {
  en: {
    heading: "Meet the Founding team that makes it all happen",
    headingPart1: "Discover the minds behind FNDRS.",
    sectionLabel: "THE TEAM",
    description:
      "We have spent years working on startups, building out digital experiences and working on tech companies.",
    badge: "We're open to collaborations!",
    members: [
      {
        name: memberUnchangedData[0].name,
        role: "Software Engineer & Cloud Architect",
        bio: "Specializes in backend systems and scalable cloud architectures for high-growth startups. Expert in API design, infrastructure automation, and performance-driven solutions. Currently focused on performance tuning, reliability engineering, and cost-aware architectures on AWS. Passionate about mentoring teams and building tooling that accelerates delivery.",
        image: memberUnchangedData[0].image,
        video: memberUnchangedData[0].video,
        linkedin: memberUnchangedData[0].linkedin,
        github: memberUnchangedData[0].github,
        website: memberUnchangedData[0].website,
      },
      {
        name: memberUnchangedData[1].name,
        role: "Creative Director & Product Designer",
        bio: "Leads design at FNDRS, uniting product vision, UX strategy, and visual storytelling to craft digital experiences that drive engagement and elevate brands. His recent work spans design systems, motion design, and brand identity for early-stage products, collaborating closely with engineers to ship polished experiences.",
        image: memberUnchangedData[1].image,
        video: memberUnchangedData[1].video,
        linkedin: memberUnchangedData[1].linkedin,
        instagram: memberUnchangedData[1].instagram,
        behance: memberUnchangedData[1].behance,
      },
      {
        name: memberUnchangedData[2].name,
        role: "Software Engineer & Project Manager",
        bio: "Leads software delivery at FNDRS, combining technical expertise and operational leadership. Experienced in building scalable web and mobile applications. He bridges product, delivery, and engineering—setting roadmaps, aligning teams, and managing stakeholder communication across cross-functional squads.",
        image: memberUnchangedData[2].image,
        video: memberUnchangedData[2].video,
        linkedin: memberUnchangedData[2].linkedin,
        github: memberUnchangedData[2].github,
        website: memberUnchangedData[2].website,
      },
    ],
  },
  es: {
    heading: "Conoce al equipo fundador que lo hace posible",
    headingPart1: "Descubre las mentes detrás de FNDRS.",
    sectionLabel: "EL EQUIPO",
    description:
      "Hemos trabajado en startups, creando experiencias digitales y colaborando con empresas tecnológicas.",
    badge: "¡Estamos abiertos a colaboraciones!",
    members: [
      {
        name: memberUnchangedData[0].name,
        role: "Ingeniero de Software & Arquitecto en la Nube",
        bio: "Especialista en sistemas backend y arquitecturas cloud escalables para startups en crecimiento. Actualmente se enfoca en optimización de rendimiento, confiabilidad y arquitecturas rentables en AWS. Le apasiona mentorizar equipos y crear herramientas que aceleren la entrega.",
        image: memberUnchangedData[0].image,
        video: memberUnchangedData[0].video,
        linkedin: memberUnchangedData[0].linkedin,
        github: memberUnchangedData[0].github,
        website: memberUnchangedData[0].website,
      },
      {
        name: memberUnchangedData[1].name,
        role: "Director Creativo & Diseñador de Producto",
        bio: "Lidera el diseño en FNDRS, uniendo visión de producto, estrategia y narrativa visual para crear experiencias digitales. Su trabajo reciente abarca design systems, motion design e identidad de marca para productos en etapas tempranas. Disfruta colaborar con ingenieros para lanzar experiencias pulidas.",
        image: memberUnchangedData[1].image,
        video: memberUnchangedData[1].video,
        linkedin: memberUnchangedData[1].linkedin,
        instagram: memberUnchangedData[1].instagram,
        behance: memberUnchangedData[1].behance,
      },
      {
        name: memberUnchangedData[2].name,
        role: "Ingeniero de Software & Gerente de proyectos",
        bio: "Encabeza la entrega de software en FNDRS, combinando liderazgo operativo con expertise técnico. Conecta producto, entrega e ingeniería, definiendo roadmaps y manteniendo a los equipos alineados. Conduce escuadras multidisciplinarias y gestiona la comunicación con stakeholders.",
        image: memberUnchangedData[2].image,
        video: memberUnchangedData[2].video,
        linkedin: memberUnchangedData[2].linkedin,
        github: memberUnchangedData[2].github,
        website: memberUnchangedData[2].website,
      },
    ],
  },
  ja: {
    heading: "すべてを実現する創業メンバーを紹介します",
    headingPart1: "FNDRSの背後にいる才能ある個人たちをご紹介します。",
    sectionLabel: "チーム",
    description:
      "私たちのチームは技術的専門知識、創造的ビジョン、戦略的思考を組み合わせ、アイデアをデジタル成功ストーリーに変える革新的なソリューションを提供します。",
    badge: "コラボレーション募集中！",
    members: [
      {
        name: memberUnchangedData[0].name,
        role: "ソフトウェアエンジニア & クラウドアーキテクト",
        bio: "成長中のスタートアップ向けに、スケーラブルなバックエンドシステムとクラウドアーキテクチャを構築する専門家。API設計やインフラ自動化、パフォーマンス重視のソリューションに精通。現在は、AWS 上でのパフォーマンス最適化、信頼性向上、コストを意識したアーキテクチャに注力。チームのメンタリングや開発生産性を高めるツール作りに情熱を注いでいます。",
        image: memberUnchangedData[0].image,
        video: memberUnchangedData[0].video,
        linkedin: memberUnchangedData[0].linkedin,
        github: memberUnchangedData[0].github,
        website: memberUnchangedData[0].website,
      },
      {
        name: memberUnchangedData[1].name,
        role: "クリエイティブディレクター & プロダクトデザイナー",
        bio: "FNDRSのデザインをリード。プロダクトビジョン、UX戦略、ビジュアルストーリーテリングを融合し、ブランドを高めるデジタル体験を創出します。直近では、デザインシステム、モーションデザイン、ブランドアイデンティティまで幅広く担当。エンジニアと緊密に連携し、完成度の高い体験を届けることを得意とします。",
        image: memberUnchangedData[1].image,
        video: memberUnchangedData[1].video,
        linkedin: memberUnchangedData[1].linkedin,
        instagram: memberUnchangedData[1].instagram,
        behance: memberUnchangedData[1].behance,
      },
      {
        name: memberUnchangedData[2].name,
        role: "ソフトウェアエンジニア & プロジェクトマネージャー",
        bio: "FNDRSでソフトウェア開発を統括。技術力と運用リーダーシップを融合し、スケーラブルなWeb・モバイルアプリを構築した経験を持つ。プロダクト、デリバリー、エンジニアリングを横断し、ロードマップ策定とチームアラインメントをリード。部門横断のスクワッドを率い、ステークホルダー調整も得意です。",
        image: memberUnchangedData[2].image,
        video: memberUnchangedData[2].video,
        linkedin: memberUnchangedData[2].linkedin,
        github: memberUnchangedData[2].github,
        website: memberUnchangedData[2].website,
      },
    ],
  },
};
