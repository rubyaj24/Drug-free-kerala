import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onPledgeClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPledgeClick }) => {
  return (
    <section className="relative w-full overflow-hidden pt-36 pb-20 px-4 md:px-8 lg:px-20">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8684813001112ddca76c9158312ab954aeb0847?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="container mx-auto relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4364d1fdc705ef009187da087135ecb0628e1dde?placeholderIfAbsent=true"
          alt="Logo"
          className="object-contain w-[250px] md:w-[349px] max-w-full mb-10 md:mb-16"
        />
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 mb-10">
            <div className="flex flex-col items-center text-white mb-8 md:mb-0">
              <div className="text-4xl md:text-6xl font-semibold">78+</div>
              <div className="text-3xl md:text-5xl font-medium mt-4">Pledges</div>
            </div>
            <div className="hidden md:block h-24 w-px bg-white/30 self-stretch mx-4"></div>
            <div className="text-[rgba(244,244,244,1)] text-3xl md:text-5xl font-bold leading-tight text-center md:text-left max-w-xl">
              United{" "}
              <span className="text-[rgba(92,183,105,1)]">
                against addiction
              </span>
              <br />
              For us, for good
              <br />
              Ending addiction,
              <br />
              <span className="text-[rgba(92,183,105,1)]">
                Towards a greater good
              </span>
            </div>
          </div>
          <p className="text-neutral-50 text-base font-medium text-center mt-2 max-w-3xl mx-auto">
            Our movement has one objective – to turn intoxicated lives into
            vibrant communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              className="w-full sm:w-auto min-w-[200px] md:min-w-[230px] h-12 md:h-14 text-sm font-medium bg-white text-black hover:bg-gray-100 hover:text-black"
            >
              Look up your certificate
            </Button>
            <Button 
              className="w-full sm:w-auto min-w-[200px] md:min-w-[230px] h-12 md:h-14 text-sm font-medium bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)]"
              onClick={onPledgeClick}
            >
              Take the Pledge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
