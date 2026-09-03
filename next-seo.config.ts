import { Metadata } from "next";

const SEO: Metadata = {
  title: "FNDRS - Make things with excellence",
  description:
    "FNDRS is a team of founders in Honduras. We design and build software for other companies, and in some of them we end up part of the company.",
  metadataBase: new URL("https://www.thefndrs.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "64x64" },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_HN",
    url: "https://www.thefndrs.com",
    siteName: "FNDRS",
    title: "FNDRS - Make things with excellence",
    description:
      "FNDRS is a team of founders in Honduras. We design and build software for other companies, and in some of them we end up part of the company.",
    images: [
      {
        url: "https://www.thefndrs.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "FNDRS - Make things with excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FNDRS",
    creator: "@FNDRS",
    title: "FNDRS - Make things with excellence",
    description:
      "FNDRS is a team of founders in Honduras. We design and build software for other companies, and in some of them we end up part of the company.",
    images: [
      {
        url: "https://www.thefndrs.com/og.jpg",
        alt: "FNDRS - Make things with excellence",
      },
    ],
  },
};

export default SEO;
