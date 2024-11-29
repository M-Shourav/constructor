import React from "react";
import Container from "./Container";
import Title from "./Title";
import { MdCall } from "react-icons/md";
import Image from "next/image";
import { aboutImage } from "@/assets/images";

const Instruction = () => {
  return (
    <Container className="py-10 grid grid-cols-1 lg:grid-cols-2  items-start justify-between gap-10 md:gap-20">
      <div className="flex flex-col gap-5">
        <Title className="text-xl md:text-3xl max-w-[450px] ">
          Welcome to the Concrete Constructions
        </Title>
        <span className="w-20 h-[4px] bg-orange-500 inline-block" />
        <Title className="text-base md:text-2xl">
          Where We Build Your Visions
        </Title>
        <p className="text-md text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          repudiandae reprehenderit ratione tempore dolorum, eaque pariatur
          dicta veniam neque, id distinctio quod voluptatibus quia dignissimos
          totam voluptas delectus omnis iure. Libero quasi repellat perspiciatis
          enim eum quisquam sapiente, ut molestias repudiandae nisi ducimus
          veniam vero eius maxime voluptas vel necessitatibus aut? Repellat
          veritatis inventore quos perspiciatis unde dolor tempore natus libero
          porro earum quam et corrupti quod modi, maxime nam saepe odit, quae
          tempora. Rerum mollitia voluptatem quam inventore recusandae!
        </p>
        <div className="flex flex-col gap-2 mt-5">
          <p className="flex items-center gap-2 text-base md:text-2xl  font-semibold text-gray-500">
            <MdCall /> Call Us Today
          </p>
          <p className="text-xl md:text-3xl font-semibold text-black/90">
            +8801710267985
          </p>
        </div>
      </div>
      <div className="w-full h-full p-6">
        <div className="w-full h-full border-4 border-orange-500 ">
          <Image
            src={aboutImage}
            alt="aboutImage"
            className="w-full h-full -mx-6 -mt-8"
          />
        </div>
      </div>
    </Container>
  );
};

export default Instruction;
