import React from "react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black w-full overflow-hidden mt-[49px] px-[50px] py-[39px] rounded-[100px_100px_0px_0px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-start my-auto max-md:mt-10">
            <p className="text-[rgba(242,242,242,1)] text-base font-light leading-6">
              Empowering youth through innovation, creativity,
              <br />
              and purpose-driven engagement
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Button variant="ghost" size="icon" className="p-0 h-[26px] w-[26px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b34d2a80ed16546a8cdc93c0e719206dd7df178?placeholderIfAbsent=true"
                  alt="Social 1"
                  className="aspect-[1] object-contain w-full h-full rounded-[5px]"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[26px] w-[26px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/078dea8327874463ea204f9d9d5e25c1f5f2b38c?placeholderIfAbsent=true"
                  alt="Social 2"
                  className="aspect-[1] object-contain w-full h-full rounded-[5px]"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[26px] w-[26px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/52f6ca1083382266f71d214a29099dfcfb3ac35f?placeholderIfAbsent=true"
                  alt="Social 3"
                  className="aspect-[1] object-contain w-full h-full rounded-[5px]"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[26px] w-[26px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/543e1c1b3ec5d921b75e0ff329bc381769a1ec10?placeholderIfAbsent=true"
                  alt="Social 4"
                  className="aspect-[1] object-contain w-full h-full rounded-[5px]"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[26px] w-[26px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d42ef490efc9b07ed6527b9784d6dd7fbb6678?placeholderIfAbsent=true"
                  alt="Social 5"
                  className="aspect-[1] object-contain w-full h-full rounded-[5px]"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
            <div className="flex w-[520px] max-w-full flex-col items-stretch">
              <div className="max-md:max-w-full max-md:mr-2.5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[22%] max-md:w-full max-md:ml-0">
                    <nav className="flex grow flex-col items-stretch text-base max-md:mt-10">
                      <h3 className="text-[#F2F2F2] font-medium">
                        Quick Links
                      </h3>
                      <ul className="w-full text-[rgba(242,242,242,1)] font-normal mt-[31px]">
                        <li className="mt-[11px] hover:text-[rgba(92,183,105,1)] transition-colors">
                          <Button variant="link" className="p-0 h-auto text-inherit">About</Button>
                        </li>
                        <li className="mt-[11px] hover:text-[rgba(92,183,105,1)] transition-colors">
                          <Button variant="link" className="p-0 h-auto text-inherit">Community</Button>
                        </li>
                        <li className="mt-[11px] hover:text-[rgba(92,183,105,1)] transition-colors">
                          <Button variant="link" className="p-0 h-auto text-inherit">Join US</Button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="w-full max-md:mt-10">
                      <div className="flex w-[178px] max-w-full flex-col items-start text-base ml-[11px] max-md:ml-2.5">
                        <h3 className="text-[#F2F2F2] font-medium">
                          Contact Us
                        </h3>
                        <div className="flex items-center gap-3 text-[rgba(242,242,242,1)] font-light whitespace-nowrap mt-8">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f0c1316f055c6bb09945970f591073c296e22f?placeholderIfAbsent=true"
                            alt="Email"
                            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                          />
                          <a
                            href="mailto:info@mulearn.org"
                            className="self-stretch my-auto hover:text-[rgba(92,183,105,1)] transition-colors"
                          >
                            info@mulearn.org
                          </a>
                        </div>
                      </div>
                      <div className="flex w-full items-stretch">
                        <div className="flex gap-2.5 p-2.5">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36bc6cc7f5add37c7151e9e69684277b3cee013f?placeholderIfAbsent=true"
                            alt="Location"
                            className="aspect-[1] object-contain w-6"
                          />
                        </div>
                        <address className="text-[rgba(242,242,242,1)] text-base font-light leading-6 grow shrink w-[305px] basis-auto not-italic">
                          Technopark, Kazhakoottam, Trivandrum
                          <br />
                          695581, Kerala, India
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[37px] text-base text-[rgba(242,242,242,1)] font-normal mt-[75px] max-md:mt-10">
                <Button variant="link" className="p-0 h-auto text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)]">
                  Privacy
                </Button>
                <Button variant="link" className="p-0 h-auto text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)]">
                  Terms of Service
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-[rgba(242,242,242,1)] font-normal leading-6 mt-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4568bc5279843b1f031d4cc7694c60aac33c42?placeholderIfAbsent=true"
                alt="Copyright"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <p className="self-stretch my-auto">
                2025 μLearn. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
