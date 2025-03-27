import React from "react";

export const InitiativesSection = () => {
  return (
    <section id="initiatives" className="bg-white flex w-full flex-col pt-[75px] pb-[204px] px-20 rounded-[100px_100px_0px_0px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="self-center flex w-full max-w-[1088px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[#1E1E1E] text-center text-[40px] font-bold max-md:max-w-full">
          Key Initiatives
        </h2>
        <p className="text-black text-center text-base font-medium leading-6 self-center w-[501px] mt-[19px] max-md:max-w-full">
          Comprehensive awareness programs for students, parents, and teachers
        </p>
        <div className="flex w-full items-center gap-4 flex-wrap mt-[19px] max-md:max-w-full">
          <div className="self-stretch min-w-60 overflow-hidden text-base text-black font-normal text-center grow shrink w-52 my-auto">
            <div className="flex flex-col relative aspect-[0.582] w-full items-stretch justify-center px-[21px] py-[207px] rounded-[20px] max-md:px-5 max-md:py-[100px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c5c00dd34f7c1d7517203f7bbfdef01fc10b3e9?placeholderIfAbsent=true"
                alt="GTECH Initiative"
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative bg-white mb-[-43px] px-[43px] py-[5px] rounded-[30px] max-md:mb-2.5 max-md:px-5">
                GTECH Initiative
              </div>
            </div>
          </div>
          <div className="self-stretch min-w-60 overflow-hidden grow shrink w-52 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6703e9897cae4545820310c498f68350cf6c5957?placeholderIfAbsent=true"
              alt="Initiative 2"
              className="aspect-[0.58] object-contain w-full"
            />
          </div>
          <div className="self-stretch min-w-60 overflow-hidden text-base text-black font-normal text-center grow shrink w-52 my-auto">
            <div className="flex flex-col relative aspect-[0.582] w-full items-stretch justify-center px-[21px] py-[207px] rounded-[20px] max-md:pl-5 max-md:py-[100px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c5c00dd34f7c1d7517203f7bbfdef01fc10b3e9?placeholderIfAbsent=true"
                alt="Social Engagement"
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative bg-white mb-[-43px] px-[27px] py-[5px] rounded-[30px] max-md:mb-2.5 max-md:px-5">
                Social Engagement
              </div>
            </div>
          </div>
          <div className="self-stretch min-w-60 overflow-hidden grow shrink w-52 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5390300001c223043589766a1fa07a49f79c7d?placeholderIfAbsent=true"
              alt="Initiative 4"
              className="aspect-[0.58] object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
