import React from "react";

export const PillarsSection = () => {
  return (
    <section className="bg-[rgba(237,248,239,1)] flex w-full flex-col overflow-hidden items-stretch mt-[19px] pt-[79px] pb-[279px] rounded-[100px_100px_0px_0px] max-md:max-w-full max-md:pb-[100px]">
      <h2 className="text-[#1E1E1E] text-[40px] font-bold leading-[60px] self-center">
        <span className="font-medium">Our </span>Three Pillars
      </h2>
      <p className="text-[#1E1E1E] text-center text-base font-medium leading-6 self-center w-[745px] mt-[13px] max-md:max-w-full">
        A comprehensive approach to creating drug-free environments through
        awareness, prevention, and action.
      </p>

      <div className="bg-[rgba(219,243,223,1)] flex w-full flex-col text-black justify-center mt-[72px] px-[70px] py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1032px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="flex items-stretch gap-[40px_75px] whitespace-nowrap">
            <span className="text-base font-medium my-auto">01</span>
            <div className="bg-white flex w-[81px] shrink-0 h-[81px] rounded-[50%]" />
            <h3 className="text-[40px] font-bold">Alert</h3>
          </div>
          <p className="text-base font-medium my-auto">
            Mechanism to alert on substance abuse
          </p>
        </div>
      </div>

      <div className="bg-[rgba(219,243,223,1)] w-full mt-4 px-20 py-8 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow items-stretch gap-[40px_75px] text-[#525B65] whitespace-nowrap max-md:max-w-full max-md:mt-10">
              <span className="text-base font-medium my-auto">02</span>
              <div className="bg-white flex w-[81px] shrink-0 h-[81px] rounded-[50%]" />
              <h3 className="text-[40px] font-bold grow shrink w-[226px]">
                Awareness
              </h3>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <p className="text-[#525B65] text-base font-medium leading-6 self-stretch my-auto max-md:max-w-full max-md:mt-10">
              Comprehensive awareness programs for students, parents, and
              teachers
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(219,243,223,1)] flex w-full flex-col items-center text-[#525B65] justify-center mt-4 -mb-14 px-[70px] py-8 max-md:max-w-full max-md:mb-2.5 max-md:px-5">
        <div className="flex w-full max-w-[1127px] items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
          <div className="flex items-stretch gap-[40px_75px] whitespace-nowrap flex-1">
            <span className="text-base font-medium my-auto">03</span>
            <div className="bg-white flex w-[81px] shrink-0 h-[81px] rounded-[50%]" />
            <h3 className="text-[40px] font-bold basis-auto">Action</h3>
          </div>
          <p className="text-base font-medium leading-6 my-auto">
            Taking concrete steps through support services and engagement
          </p>
        </div>
      </div>
    </section>
  );
};
