import React from "react";
import Container from "./Container";
import Title from "./Title";
import { GrHome } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="py-5 bannerImg bg-black/65 opacity-85 w-full h-full text-white">
      <Container className="py-10">
        <div className="flex flex-col justify-between items-start gap-5">
          <p className="text-white font-semibold text-3xl md:text-6xl max-w-[400px] line-clamp-4">
            Broad Vision Honest Service Great Value
          </p>
          <p className="text-base md:text-xl">
            Our goal then and now is to provide quality on time projects
          </p>
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1 bg-orange-500 py-3 px-4 rounded-md
            text-lg font-semibold hover:bg-black hover:text-white duration-300 ease-in-out"
            >
              <IoIosArrowRoundForward className="mt-1 text-2xl" /> Get Free
              Quote
            </button>
            <button
              className="flex items-center gap-1 text-white/80 py-3 px-4 rounded-md
              text-lg font-semibold  hover:text-white duration-300 ease-in-out border
              border-transparent hover:border-gray-300"
            >
              <IoIosArrowRoundForward className="mt-1 text-2xl" /> Get In Touch
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
