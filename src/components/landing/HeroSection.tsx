import React from "react";

export const HeroSection = () => {
  return (
    <header className="flex flex-col bg-blend-normal relative min-h-[940px] w-full overflow-hidden pt-[29px] pb-[199px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
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
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="self-center flex items-center gap-10 justify-center flex-wrap max-md:max-w-full">
            <div className="self-stretch flex min-w-60 flex-col text-white whitespace-nowrap justify-center my-auto py-[75px]">
              <div className="text-[156px] font-semibold leading-[0] max-md:text-[40px]">
                78+
              </div>
              <div className="text-[64px] font-medium leading-[0] mt-[79px] max-md:text-[40px] max-md:mt-10">
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
          <p className="text-neutral-50 text-base font-medium text-center mt-2 max-md:max-w-full">
            Our movement has one objective – to turn intoxicated lives into
            vibrant communities.
          </p>
        </div>
        <div className="self-center flex w-[586px] max-w-full items-stretch gap-5 text-sm font-medium text-right leading-[3] flex-wrap justify-between mt-[61px] max-md:mt-10">
          <button className="self-stretch rounded bg-white min-w-[150px] min-h-14 gap-2.5 text-black px-2.5 py-[23px]">
            Look up your certificate
          </button>
          <button className="self-stretch bg-[rgba(92,183,105,1)] min-w-[150px] min-h-14 gap-2.5 text-white px-2.5 py-[23px] rounded-[5px]">
            Take the Pledge
          </button>
        </div>
      </div>
    </header>
  );
};
