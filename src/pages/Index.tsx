import React, { useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { InitiativesSection } from "@/components/landing/InitiativesSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { Footer } from "@/components/landing/Footer";
import { PledgeForm } from "@/components/landing/PledgeForm";

const Index = () => {
  const [showPledgeForm, setShowPledgeForm] = useState(false);

  return (
    <div className="bg-[rgba(239,238,236,1)] flex flex-col overflow-hidden items-stretch">
      <Header onPledgeClick={() => setShowPledgeForm(true)} />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <InitiativesSection />
      <JourneySection />
      <Footer />
      
      {showPledgeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <button 
              onClick={() => setShowPledgeForm(false)}
              className="float-right text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <PledgeForm onClose={() => setShowPledgeForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
