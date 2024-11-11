import { cn } from "@/utils/utils";
import PropTypes from "prop-types";

export const Section = ({ id, children, classNames }) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden",
        classNames
      )}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  classNames: PropTypes.string,
};
