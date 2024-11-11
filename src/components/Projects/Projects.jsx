import { Section, TitleSection } from "../shared";
import { SliderImages } from "./SliderImages";

export const Projects = () => {
  return (
    <Section id="Projects">
      <TitleSection
        title="Projects"
        highlight="Completed"
        subtitle="Crafting Spaces, Building Legacies—Explore Our Portfolio"
      />

      <SliderImages />
    </Section>
  );
};
