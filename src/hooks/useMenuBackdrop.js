import { useEffect, useRef } from "react";

export const useMenuBackdrop = (selector) => {
  const menuBackdropRef = useRef(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll(selector);
    console.log(menuItems);

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
  }, [selector]);

  return menuBackdropRef;
};
