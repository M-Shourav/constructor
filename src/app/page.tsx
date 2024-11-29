import Banner from "@/Components/Banner";
import Instruction from "@/Components/Instruction";
import OurSpecialization from "@/Components/OurSpecialization";
import SecondInstruction from "@/Components/SecondInstruction";

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
    </div>
  );
};

export default HomePage;
