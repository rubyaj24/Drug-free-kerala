
import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <header className="flex flex-col bg-blend-normal relative min-h-[940px] w-full overflow-hidden pt-[89px] pb-[199px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8684813001112ddca76c9158312ab954aeb0847?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4364d1fdc705ef009187da087135ecb0628e1dde?placeholderIfAbsent=true"
        alt="Logo"
        className="aspect-[7.94] object-contain w-[349px] bg-blend-normal max-w-full"
      />
      <div className="relative self-center flex w-full max-w-[1042px] flex-col items-stretch mt-[107px] -mb-10 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="self-center flex items-center gap-10 justify-center flex-wrap max-md:max-w-full">
            <div className="self-stretch flex min-w-60 flex-col text-white whitespace-nowrap justify-center my-auto py-[75px]">
              <div className="text-6xl font-semibold leading-[0] max-md:text-[40px] text-center">
                78+
              </div>
              <div className="text-[64px] font-medium leading-[0] mt-[79px] max-md:text-[40px] max-md:mt-10 text-center">
                Pledges
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de7e9b674db5daae6346e2c7b4fbca583883cfc0?placeholderIfAbsent=true"
              alt="Divider"
              className="aspect-[0] object-contain w-px self-stretch shrink-0 my-auto"
            />
            <div className="text-[rgba(244,244,244,1)] text-5xl font-bold leading-[62px] self-stretch w-[599px] my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
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
          <p className="text-neutral-50 text-base font-medium text-center mt-2 max-w-3xl mx-auto max-md:max-w-full">
            Our movement has one objective – to turn intoxicated lives into
            vibrant communities.
          </p>
        </div>
        <div className="self-center flex w-[586px] max-w-full items-stretch gap-5 flex-wrap justify-center mt-[61px] max-md:mt-10">
          <Button
            variant="outline"
            className="min-w-[230px] min-h-14 text-sm font-medium bg-white text-black hover:bg-gray-100 hover:text-black"
          >
            Look up your certificate
          </Button>
          <Button 
            className="min-w-[230px] min-h-14 text-sm font-medium bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)]"
          >
            Take the Pledge
          </Button>
        </div>
      </div>
    </header>
  );
};
