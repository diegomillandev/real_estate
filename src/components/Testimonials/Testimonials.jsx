import { assets } from "@/assets/assets";
import { Section, TitleSection } from "../shared";
import { testimonialsData } from "@/lib/testimonial";

export const Testimonials = () => {
  return (
    <Section id="Testimonials">
      <TitleSection
        title="Customer"
        highlight="Testimonials"
        subtitle="Real Stories from Those Who Found Home with Us"
      />

      <div className="flex flex-wrap gap-8 justify-center mt-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[21.25rem] border rounded shadow-lg px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="font-bold text-xl">{testimonial.name}</h2>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>
            <div className="flex justify-center my-3">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <img
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4"
                  key={index}
                />
              ))}
            </div>
            <p className="">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
