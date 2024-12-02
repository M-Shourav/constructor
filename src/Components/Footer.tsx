import React from "react";
import Container from "./Container";
import Image from "next/image";
import { footerLogo } from "@/assets/images";
import Title from "./Title";
import SocialLink from "./SocialLink";
import Link from "next/link";
import { companyArr, companyServicesArr } from "@/constants";

const Footer = () => {
  return (
    <div className="w-full h-full  py-10 bg-black text-white flex flex-col gap-y-10 items-center">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
        <div className="w-full h-full">
          <Link href={"/"} className="w-full h-full">
            <Image
              src={footerLogo}
              alt="footerLogo"
              className="w-[50%] md:w-[70%] object-cover"
            />
          </Link>
          <div className="flex flex-col gap-y-5 mt-5">
            <p className="text-white/80 text-base font-normal tracking-wide">
              We are a team of designers and developers that create high quality
              Next.js
            </p>
            <SocialLink />
          </div>
        </div>
        {/* our company */}
        <div>
          <Title className="text-white">Our Company</Title>
          <div className="flex flex-col gap-y-2 mt-5">
            {companyArr?.map((item) => (
              <Link
                href={item?.href}
                key={item?.title}
                className="text-white/80 w-fit hover:text-white duration-300 ease-in-out
                 hover:underline hover:underline-offset-4 text-sm md:text-base font-normal tracking-wide "
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Our services */}
        <div>
          <Title className="text-white">Our Services</Title>
          <div className="flex flex-col gap-y-2 mt-5">
            {companyServicesArr?.map((item) => (
              <Link
                href={item?.href}
                key={item?.title}
                className="text-white/80 w-fit hover:text-white duration-300 ease-in-out
                 hover:underline hover:underline-offset-4 text-sm md:text-base font-normal tracking-wide "
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Contact details */}
        <div>
          <Title className="text-white">Contact Details</Title>
          <div className="flex flex-col gap-y-2 mt-5">
            <h2
              className="text-sm md:text-base font-normal tracking-wide
             text-white/80"
            >
              12/A Green Road Panthapath, Dhaka,Bangladesh
            </h2>
            <p className="text-sm md:text-base font-semibold text-white/80">
              Phone :
              <span
                className="hover:text-orange-500 hover:underline
               hover:underline-offset-4 duration-300"
              >
                +8801710267985
              </span>
            </p>
            <div className="flex items-center gap-1">
              <p className="text-sm md:text-base font-semibold text-white/80">
                E-mail:
              </p>
              <Link
                href={"mailto:am.masum1129@gmail.com"}
                className="text-white/80 hover:text-orange-500 hover:underline 
                hover:underline-offset-4 duration-300 ease-in-out"
              >
                am.masum1129@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex items-center justify-center">
        <p className="text-sm text-white/80">
          &copy;2024 Masum Ahmed All Right Reserve.
        </p>
      </div>
    </div>
  );
};

export default Footer;
