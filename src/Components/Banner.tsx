import React from "react";
import Container from "./Container";
import Title from "./Title";
import { GrHome } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { bannerImage } from "@/assets/images";

const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <Image src={bannerImage} alt="bannerImage" className="w-full h-full" />
      <div
        className="flex flex-col items-center lg:items-start justify-center
       gap-2 md:gap-5 text-white px-4 py-3 w-full h-full absolute top-0 left-0
        bg-black bg-opacity-50"
      >
        <p className="max-w-[450px] text-md md:text-xl lg:text-6xl font-semibold ">
          Broad Vision Honest Service Great Value
        </p>
        <p className="text-white/90 font-semibold text-xs md:text-base">
          Our goal then and now is to provide quality on time projects
        </p>
        <div className="flex items-center gap-4">
          <button
            className="text-xs md:text-lg font-semibold bg-orange-500 border border-transparent
          flex items-center justify-center gap-1 px-2 py-1.5 rounded-sm hover:bg-black
          hover:text-white duration-300 ease-in-out hover:border-green-300"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" /> Get Free Quote
          </button>
          <button
            className="text-sm md:text-lg font-semibold border border-transparent hover:border-gray-300 
           flex items-center justify-center gap-1 px-2 py-1.5 rounded-sm duration-300 ease-in-out"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" /> Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
