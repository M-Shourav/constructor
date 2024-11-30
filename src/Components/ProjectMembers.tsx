"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { teamArray } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialLink from "./SocialLink";
import TeamSocialAccount from "./TeamSocialAccount";
import CountUp from "react-countup";

const ProjectMembers = () => {
  return (
    <Container className="py-10 flex flex-col gap-5 items-start">
      <div>
        <Title className="md:text-4xl">Our Expert Team</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p className="max-w-[500px] text-base text-gray-500 tracking-wider">
          You can use these sections to highlight the features of heading. Use
          these paragraphs to focus on the topic you want. Make sure you keep it
          short and attractive.
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-5
        w-full h-full"
      >
        {teamArray?.map((item) => (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: item?.del }}
            className="border border-gray-200 rounded-md  flex
             flex-col items-center gap-1 shadow-xl"
            key={item?.name}
          >
            <Image
              src={item?.images}
              alt="TeamImages"
              className=" rounded-t-md object-cover "
            />
            <div className=" px-4 py-5">
              <Title>{item?.name}</Title>
              <p className="text-base font-normal text-gray-500">
                {item?.title}
              </p>
              <TeamSocialAccount />
            </div>
          </motion.div>
        ))}
      </div>
      {/* count value */}
      <div className="w-full py-20 grid grid-cols-2 md:grid-cols-4 items-center gap-10">
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={6820} duration={5} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">
            clients
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={4000} duration={5} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">
            projects
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={3568} duration={5} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">
            Repairing
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={1530} duration={5} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">awards</p>
        </div>
      </div>
    </Container>
  );
};

export default ProjectMembers;
