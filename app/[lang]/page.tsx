"use client";

import HomeSection from "@/components/home";
import Allons from "@/components/allons";
import Services from "@/components/services";
import TeamSection from "@/components/team";
import WhyUs from "@/components/why-us";
import Stages from "@/components/stages";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Allons />
      <WhyUs />
      <Stages />
      <TeamSection />
      <Services />
    </div>
  );
}
