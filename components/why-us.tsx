"use client";

import { whyUsText } from "@/constants/why-us-translations";
import { useLanguage } from "@/hooks/use-language";
import {
  Building2,
  Users,
  Lightbulb,
  Brain,
  Handshake,
  Clock,
} from "lucide-react";
import { MotionDiv } from "./ui/motion-client";

const WhyUs = () => {
  const { language } = useLanguage();
  const t = whyUsText[language as keyof typeof whyUsText];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const icons = [
    <Building2 className="w-8 h-8 text-gray-400" />,
    <Users className="w-8 h-8 text-gray-400" />,
    <Lightbulb className="w-8 h-8 text-gray-400" />,
    <Brain className="w-8 h-8 text-gray-400" />,
    <Handshake className="w-8 h-8 text-gray-400" />,
    <Clock className="w-8 h-8 text-gray-400" />,
  ];

  return (
    <section
      id="whyUs"
      className="py-16 md:py-24 relative "
      style={{
        background: "#0b0605",
      }}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `
            radial-gradient(circle at center, transparent 0%, transparent 10%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%),
            linear-gradient(rgba(255, 237, 213, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 237, 213, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 160px 160px, 160px 160px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
            <h2 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text text-2xl leading-tight font-bold  text-transparent sm:text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
              {t.heading}
            </h2>
          <p className="text-gray-200 leading-relaxed text-md max-w-3xl mx-auto mb-4 font-medium">
            {t.description}
          </p>
          <p className="text-xl font-thin text-gray-300">"{t.quote}"</p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reasons.map((reason, index) => (
            <MotionDiv
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 flex flex-col h-full relative group overflow-hidden shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 border border-white/10 cursor-default"
              style={{
                position: 'relative',
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s ease-in-out infinite',
                }}
              />
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-6xl font-thin text-gray-500 transition-colors duration-300 group-hover:text-white">
                  {reason.number}
                </span>
                <div className="flex justify-end text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-lg font-normal text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                {reason.description}
              </p>
            </MotionDiv>
          ))}

       
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
