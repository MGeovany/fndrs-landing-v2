import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next/types";

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const baseUrl = "https://www.thefndrs.com";
  const lang = (await params).lang ?? "es";
  const langPrefix = lang === "es" ? "" : `/${lang}`;

  return {
    title: "FNDRS - Make things with excellence",
    description:
      "FNDRS is a development team of software developers, designers, engineers, security experts, and cloud specialists ready to work on your projects.",
    alternates: {
      canonical: `${baseUrl}${langPrefix}`,
      languages: {
        es: `${baseUrl}/`,
        en: `${baseUrl}/en`,
        ja: `${baseUrl}/ja`,
      },
    },
  };
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <div />
      <main className="w-screen min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
