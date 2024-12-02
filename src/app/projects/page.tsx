import Container from "@/Components/Container";
import RecentProjects from "@/Components/RecentProjects";
import Title from "@/Components/Title";
import TopFooter from "@/Components/TopFooter";
import React from "react";

const ProjectsPage = () => {
  return (
    <>
      <Container className="py-10 lg:py-20 flex flex-col items-start gap-20">
        <div className="flex flex-col gap-4 items-start">
          <Title className="md:text-4xl">Recent Projects</Title>
          <p className="text-sm md:text-base font-normal tracking-wide text-gray-500">
            Tiny sub heading that focuses on the topic mentioned above
          </p>
        </div>
        <RecentProjects />
      </Container>
      <TopFooter />
    </>
  );
};

export default ProjectsPage;
