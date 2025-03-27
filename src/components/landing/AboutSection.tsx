import React from "react";

export const AboutSection = () => {
  return (
    <section className="bg-[rgba(239,238,236,1)] w-full overflow-hidden pl-[50px] max-md:max-w-full max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[39%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="flex flex-col items-stretch justify-center max-md:max-w-full">
              <h2 className="text-black text-[40px] font-bold leading-[60px]">
                <span className="font-medium">Towards</span>
                <br />
                Drug-Free <span className="font-medium">Kerala</span>
              </h2>
              <p className="text-[rgba(82,91,101,1)] text-base font-medium leading-6 mt-[30px] max-md:max-w-full">
                A powerful alliance between Gtech and μLearn,
                <br />
                empowering youth with factual information about
                <br />
                drugs so that they can make informed decisions and live
                drug-free.
              </p>
            </div>
            <button className="rounded bg-white min-w-[150px] min-h-12 gap-2.5 text-sm text-black font-medium text-right leading-[3] mt-[79px] px-2.5 py-[19px] max-md:mt-10">
              Watch Video
            </button>
          </div>
        </div>
        <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[637px] grow items-center justify-center px-20 py-[272px] max-md:max-w-full max-md:mt-[39px] max-md:px-5 max-md:py-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13b99c932a25d242f9f0574dd2cfc4038341b0e8?placeholderIfAbsent=true"
              alt="About background"
              className="absolute h-full w-full object-cover inset-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05ac3dc982146770076765844b666bee5a3bf7e?placeholderIfAbsent=true"
              alt="Play button"
              className="aspect-[1] object-contain w-[94px] rounded-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
