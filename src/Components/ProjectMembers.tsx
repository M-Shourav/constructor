import React from "react";
import Container from "./Container";
import Title from "./Title";

const ProjectMembers = () => {
  return (
    <Container className="py-10">
      <div>
        <Title className="md:text-4xl">Our Expert Team</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p className="max-w-[500px] text-base text-gray-500 tracking-wider">
          You can use these sections to highlight the features of heading. Use
          these paragraphs to focus on the topic you want. Make sure you keep it
          short and attractive.
        </p>
      </div>
    </Container>
  );
};

export default ProjectMembers;
