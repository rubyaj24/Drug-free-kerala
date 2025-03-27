import React from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { InitiativesSection } from "@/components/landing/InitiativesSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-[rgba(239,238,236,1)] flex flex-col overflow-hidden items-stretch">
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <InitiativesSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default Index;
