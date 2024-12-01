import Banner from "@/Components/Banner";
import Counter from "@/Components/Counter";
import Instruction from "@/Components/Instruction";
import OurSpecialization from "@/Components/OurSpecialization";
import Project from "@/Components/Project";
import ProjectMembers from "@/Components/ProjectMembers";
import SecondInstruction from "@/Components/SecondInstruction";
import Testimonials from "@/Components/Testimonials";

const HomePage = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Instruction */}
      <Instruction />
      {/* secondInstruction */}
      <SecondInstruction />
      {/* OurSpecialization */}
      <OurSpecialization />
      {/* testimonials */}
      <Testimonials />
      {/* Project */}
      <Project />
      {/* projectMember */}
      <ProjectMembers />
      {/* counter */}
      <Counter />
    </div>
  );
};

export default HomePage;
