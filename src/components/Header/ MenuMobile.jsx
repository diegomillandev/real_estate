import { assets } from "@/assets/assets";
import { navItems } from "@/constants";
import { useEffect, useState } from "react";

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button className="md:hidden w-7" onClick={handleMenu}>
        <img src={assets.menu_icon} alt="" />
      </button>

      {isOpen && (
        <div
          className={`md:hidden top-0 bottom-0 overflow-hidden bg-white z-20 transition-all duration-300 ease-in-out
             ${
               isOpen
                 ? "fixed left-0 w-full h-full opacity-100"
                 : "fixed right-0 w-full h-full opacity-0"
             }
          `}
        >
          <div className="flex justify-end p-6">
            <button onClick={handleMenu}>
              <img src={assets.cross_icon} alt="icons cross" className="w-6" />
            </button>
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex flex-col items-center gap-7 text-slate-800 [&>li]:hover:cursor-pointer relative">
              {navItems.map((item, index) => (
                <li key={index} className="menu-item py-1 px-2">
                  <a href={item.link} className="" onClick={handleMenu}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
