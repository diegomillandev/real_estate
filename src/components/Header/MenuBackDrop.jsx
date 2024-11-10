import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const MenuBackDrop = ({ props }) => {
  const menuBackdropRef = useRef(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll(props);

    const handleMouseEnter = (event) => {
      const item = event.currentTarget;
      const { top, left, width, height } = item.getBoundingClientRect();

      if (menuBackdropRef.current) {
        menuBackdropRef.current.style.setProperty("--top", `${top}px`);
        menuBackdropRef.current.style.setProperty("--left", `${left}px`);
        menuBackdropRef.current.style.setProperty("--width", `${width}px`);
        menuBackdropRef.current.style.setProperty("--height", `${height}px`);
        menuBackdropRef.current.style.opacity = 1;
        menuBackdropRef.current.style.visibility = "visible";
      }
    };

    const handleMouseLeave = () => {
      if (menuBackdropRef.current) {
        menuBackdropRef.current.style.opacity = 0;
        menuBackdropRef.current.style.visibility = "hidden";
      }
    };

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [props]);
  return (
    <div
      id="menu-backdrop"
      ref={menuBackdropRef}
      className="absolute bg-gray-100/10 backdrop-blur-lg rounded opacity-0 
             left-[var(--left)] top-[var(--top)] 
             w-[var(--width)] h-[var(--height)] 
             transition-all duration-300 ease-in-out"
    ></div>
  );
};

MenuBackDrop.propTypes = {
  props: PropTypes.string.isRequired,
};
