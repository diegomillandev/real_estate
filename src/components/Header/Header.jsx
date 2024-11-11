import { Section } from "../shared";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="bg-hero-pattern min-h-screen bg-cover bg-center flex justify-center items-center w-full overflow-hidden">
      <Section classNames="text-white text-center">
        <h2 className="text-5xl sm:text-6xl md:text-[5.5rem] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="mt-10 inline-flex gap-x-4">
          <a
            href="#Projects"
            className="py-2 px-4 rounded border transition-colors duration-150 border-white hover:bg-gray-50/10"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="py-2 px-4 rounded transition-colors duration-150 bg-blue-700 hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </Section>
      <Navbar />
    </div>
  );
};
