"use client";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion-client";
import { ArrowUpRight } from "lucide-react";
import ServiceCarousel from "./ui/services-carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { heroText } from "@/constants/hero-section-translations";
import { useLanguage } from "@/hooks/use-language";
import { useAnalytics } from "@/hooks/use-posthog";
import Navbar from "./navbar";

const Home = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const { trackButtonClick } = useAnalytics();
  const t = heroText[language as keyof typeof heroText];

  return (
    <section className="relative overflow-hidden !min-w-screen">
      {/*     <div className="absolute inset-0 z-0 w-screen h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg/vid-3.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div
        className="absolute inset-0 z-0 w-screen h-full"
        style={{
          backgroundImage: `
            url('/bg/bg-9.jpg')
          `,
          backgroundSize: "100% 100%",

          backgroundRepeat: "no-repeat",
        }}
      />
      <Navbar />

      <div className="container min-h-screen mx-auto px-4 relative z-10">
        <div className="flex flex-col h-screen justify-center max-w-6xl leading-8 mx-auto">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            {/*  <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/30 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0 mx-auto mb-4">
              <p className="mx-auto text-[14px] max-w-md  text-white/80 hover:text-white/100 ">
                <span>✨ Success as a Service</span>
              </p>
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              {t.title}
            </h1>
            <p
              className="text-center w-full leading-loose text-white font-normal mb-8 max-w-xl mx-auto"
              data-lcp
            >
              <strong className="font-bold">FNDRS </strong>
              {t.description}
            </p>
            <div className="flex flex-col justify-center sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  trackButtonClick("get_started", "hero_section");
                  router.push("#process");
                }}
              >
                {t.getStarted}
                <ArrowUpRight className="ml-2" size={16} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium hover:bg-gray-100 hover:text-gray-800"
                onClick={() => {
                  trackButtonClick("view_services", "hero_section");
                  router.push("#services");
                }}
              >
                {t.viewServices}
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Home;
