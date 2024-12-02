import Container from "@/Components/Container";
import Title from "@/Components/Title";

const ContactPage = () => {
  return (
    <Container className="py-10 md:py-20 flex flex-col gap-10">
      <div className="w-full h-full">
        <Title className="md:text-3xl">Get in Touch</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p className="max-w-2xl text-sm md:text-lg text-gray-500 tracking-wider">
          Add a couple of lines that tell users how easily they can get in touch
          with you. People prefer services where they can contact providers
          right away.
        </p>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row  gap-5 ">
        <div className="bg-red-300 w-full h-full p-6">
          <Title>Send Us A Message</Title>
        </div>
        <div className="bg-red-500 w-full h-full p-6">
          <Title>Contact Info</Title>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
