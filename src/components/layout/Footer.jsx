import { works, footerNavLinks } from "../../data/works";
import icon from "../../assets/Icon.png";
import linkedIn from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const Footer = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="flex flex-col items-centert mt-6 bg-black text-white font-manrova">
      <Carousel
        plugins={[plugin.current]}
        className="flex justify-center items-center border-b"
      >
        <CarouselContent className="flex gap-2 sm:gap-20 items-center">
          {works.map((work, index) => (
            <CarouselItem key={index} className="flex items-center m-2">
              <img src={icon} alt="icon" className="size-10 bg-inherit" />
              <span className="p-2 uppercase text-sm line-clampl-1">
                {work}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center mt-4">
        <div className="px-20 py-[100px] flex flex-col items-center gap-[10px]">
          <p className=" text-gray-500 font-semibold text-xl uppercase">
            A more meaningful home for photography & video editing
          </p>
          <div className="flex items-center gap-2 mt-10">
            <p className="text-white text-[58px] uppercase text-left">Let’s</p>
            <p>
              <Button className="bg-[#4A2CED] rounded-[100px] py-[18px] px-[50px] shadow-lg inset-0">
                <MoveUpRight size={32} />
              </Button>
            </p>
          </div>
          <p className="uppercase text-[58px] font-semibold">Work Together</p>
        </div>
        <div className="flex justify-between items-center gap-10">
          {footerNavLinks.map((link, index) => (
            <div className="flex flex-col items-center gap-10" key={index}>
              <a
                href="#"
                key={index}
                className="px-4 text-gray-500 hover:text-white transition duration-300 ease-in-out uppercase"
              >
                {link.label}
              </a>
              {link.links.map((subLink, index) => (
                <a href="#" key={index} className="px-4 text-white uppercase">
                  {subLink.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-gray-600 items-center mt-10 border border-t p-8 border-gray-700">
        <p className="text-sm">Terms & Conditions | Privacy Policy</p>
        <div className="flex items-center gap-4 rounded-full border border-gray-500 p-2 shadow-md shadow-slate-700">
          <div className="rounded-full p-2 border border-gray-700 shadow-xl">
            <img src={linkedIn} alt="linkedIn" />
          </div>
          <div className="rounded-full p-2 border border-gray-700 shadow-xl">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="rounded-full p-2 border border-gray-700 shadow-xl">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <p className="text-sm">
          © 2024 Chandu Kilaparthi Photography and editing. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
