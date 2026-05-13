import { Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Provider from "./provider";
import SEO from "@/next-seo.config";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/critical.css";
import ClientStyleLoader from "@/components/client-style-loader";
import SchemaMarkup from "@/components/schema-markup";
import { PostHogProvider } from "@/components/posthog-provider";
import { Metadata } from "next";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  ...SEO,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="alternate" href="https://www.thefndrs.com" hrefLang="es" />
        <link
          rel="alternate"
          href="https://www.thefndrs.com/en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.thefndrs.com/ja"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://www.thefndrs.com"
          hrefLang="x-default"
        />
        <SchemaMarkup />
      </head>
      <body className={poppins.className}>
        <ClientStyleLoader />
        <Suspense fallback={null}>
          <PostHogProvider>
            <Provider>{children}</Provider>
          </PostHogProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
