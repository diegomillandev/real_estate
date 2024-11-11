import { cn } from "@/utils/utils";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const Section = ({ id, children, classNames }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id={id}
      className={cn(
        "flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden",
        classNames
      )}
    >
      {children}
    </motion.section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  classNames: PropTypes.string,
};
