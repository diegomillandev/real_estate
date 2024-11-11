import { assets } from "@/assets/assets";
import { Section, TitleSection } from "../shared";

export const About = () => {
  return (
    <Section id="About" classNames="">
      <TitleSection
        as="h1"
        title="About Us"
        highlight="Our Brand"
        subtitle="Passionate About Properties, Dedicated to Your Vision"
      />

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-10">
        <img
          src={assets.brand_img}
          alt="image brand"
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-slate-700">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div className="">
              <p className="text-4xl font-medium text-slate-900">10+</p>
              <p className="font-light">Years of Experience</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-slate-900">12+</p>
              <p className="font-light">Projects Completed</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-slate-900">20+</p>
              <p className="font-light">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-slate-900">25+</p>
              <p className="font-light">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <button className="w-full md:w-40 bg-blue-700 hover:bg-blue-600 text-white py-3 rounded font-medium">
            Learn More
          </button>
        </div>
      </div>
    </Section>
  );
};
