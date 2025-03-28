import React from "react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black w-full overflow-hidden mt-20 pt-12 pb-8 rounded-t-[50px] md:rounded-t-[80px]">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          {/* Left Column */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col">
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
          
          {/* Right Column */}
          <div className="w-full md:w-2/3">
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row gap-10">
                {/* Quick Links */}
                <div className="w-full sm:w-1/4">
                  <nav className="flex flex-col">
                    <h3 className="text-[#F2F2F2] font-medium text-base">
                      Quick Links
                    </h3>
                    <ul className="text-[rgba(242,242,242,1)] font-normal mt-6">
                      <li className="mt-2 hover:text-[rgba(92,183,105,1)] transition-colors">
                        <Button variant="link" className="p-0 h-auto text-inherit">About</Button>
                      </li>
                      <li className="mt-2 hover:text-[rgba(92,183,105,1)] transition-colors">
                        <Button variant="link" className="p-0 h-auto text-inherit">Community</Button>
                      </li>
                      <li className="mt-2 hover:text-[rgba(92,183,105,1)] transition-colors">
                        <Button variant="link" className="p-0 h-auto text-inherit">Join US</Button>
                      </li>
                    </ul>
                  </nav>
                </div>
                
                {/* Contact Us */}
                <div className="w-full sm:w-3/4">
                  <div className="flex flex-col">
                    <h3 className="text-[#F2F2F2] font-medium text-base">
                      Contact Us
                    </h3>
                    <div className="flex items-center gap-3 text-[rgba(242,242,242,1)] font-light mt-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f0c1316f055c6bb09945970f591073c296e22f?placeholderIfAbsent=true"
                        alt="Email"
                        className="aspect-[1] object-contain w-6 shrink-0"
                      />
                      <a
                        href="mailto:info@mulearn.org"
                        className="hover:text-[rgba(92,183,105,1)] transition-colors"
                      >
                        info@mulearn.org
                      </a>
                    </div>
                    <div className="flex items-start gap-3 mt-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/36bc6cc7f5add37c7151e9e69684277b3cee013f?placeholderIfAbsent=true"
                        alt="Location"
                        className="aspect-[1] object-contain w-6 mt-1"
                      />
                      <address className="text-[rgba(242,242,242,1)] text-base font-light leading-6 not-italic">
                        Technopark, Kazhakoottam, Trivandrum
                        <br />
                        695581, Kerala, India
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Links */}
              <div className="flex flex-wrap items-center gap-6 text-base text-[rgba(242,242,242,1)] font-normal mt-12">
                <Button variant="link" className="p-0 h-auto text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)]">
                  Privacy
                </Button>
                <Button variant="link" className="p-0 h-auto text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)]">
                  Terms of Service
                </Button>
              </div>
              
              {/* Copyright */}
              <div className="flex items-center gap-1 text-sm text-[rgba(242,242,242,1)] font-normal mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4568bc5279843b1f031d4cc7694c60aac33c42?placeholderIfAbsent=true"
                  alt="Copyright"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
                <p>
                  2025 μLearn. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
