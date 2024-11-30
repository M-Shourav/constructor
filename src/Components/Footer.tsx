import React from "react";
import Container from "./Container";
import Image from "next/image";
import { footerLogo, logo } from "@/assets/images";
import Title from "./Title";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-20 px-8 bg-black text-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5">
        <div className="h-full w-full">
          <Image src={footerLogo} alt="logo" className="w-[80%] object-cover" />
          <p>
            Natus eget occaecati, lobortis, vestibulum nam eros, risus lacinia
            lacus.Lorem accusantium.
          </p>
        </div>
        <div>
          <Title className="text-white">Our Company</Title>
        </div>
        <div>
          <Title className="text-white">Our Services</Title>
        </div>
        <div>
          <Title className="text-white">Contact Details</Title>
        </div>
      </div>
    </div>
  );
};

export default Footer;
