"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allonsText } from "@/constants/allons-translations";
import { useLanguage } from "@/hooks/use-language";
import { MotionDiv } from "./ui/motion-client";

const Allons = () => {
  const { language } = useLanguage();
  const t = allonsText[language as keyof typeof allonsText];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const reveal = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: fadeIn,
  } as const;

  return (
    <section id="allons" className="md:max-w-6xl mx-auto px-4 py-20 md:py-28">
      <MotionDiv {...reveal} transition={{ duration: 0.6 }}>
        {/* The wordmark is the only label, and it is the only link out. */}
        <h2>
          <Link
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group"
          >
            <Image
              src="/assets/allons/allons-wordmark.webp"
              alt={t.wordmarkAlt}
              width={1200}
              height={425}
              className="h-8 md:h-10 w-auto"
            />
            <ArrowUpRight
              size={18}
              className="text-gray-500 transition-colors group-hover:text-white"
            />
          </Link>
        </h2>

        <p className="mt-8 text-2xl md:text-3xl lg:text-4xl font-light text-white leading-snug max-w-3xl">
          {t.lead}
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">{t.role}</p>
      </MotionDiv>

      <MotionDiv
        {...reveal}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 rounded-xl overflow-hidden border border-white/10"
      >
        <Image
          src="/assets/allons/allons-site.webp"
          alt={t.imageAlt}
          width={1567}
          height={597}
          className="w-full h-auto"
        />
      </MotionDiv>
    </section>
  );
};

export default Allons;
