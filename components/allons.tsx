"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allonsText } from "@/constants/allons-translations";
import { useLanguage } from "@/hooks/use-language";
import { MotionDiv, MotionP } from "./ui/motion-client";

const Allons = () => {
  const { language } = useLanguage();
  const t = allonsText[language as keyof typeof allonsText];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="allons" className="md:max-w-6xl mx-auto px-4 py-20">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <h2 className="uppercase text-sm font-bold tracking-wider text-orange-500 mb-4">
          {t.sectionTitle}
        </h2>

        <MotionP
          className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-snug mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.paragraph}
        </MotionP>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
          {t.involvement.map((item) => (
            <span key={item} className="text-sm text-gray-400 uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>

        <Link
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase inline-flex items-center hover:underline text-white"
        >
          {t.link}
          <ArrowUpRight size={16} className="ml-1" />
        </Link>
      </MotionDiv>
    </section>
  );
};

export default Allons;
