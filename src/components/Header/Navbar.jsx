import { assets } from "@/assets/assets";
import { MenuBackDrop } from "./MenuBackDrop";
import { navItems } from "@/constants";
import { MenuMobile } from "./ MenuMobile";

export const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 xl:px-32 bg-transparent">
          <img src={assets.logo} alt="logo" />

          <nav aria-label="Main Navigation">
            <ul className="hidden md:flex gap-7 text-white [&>li]:hover:cursor-pointer relative">
              {navItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <a
                    href={item.link}
                    className="text-white py-1 px-2 inline-block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="hidden md:block bg-white text-slate-700 py-2 px-6 rounded-full hover:bg-gray-200"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/diegomillandev",
                "_blank"
              )
            }
          >
            Contact
          </button>
          <MenuMobile />
        </div>
      </div>
      <MenuBackDrop props=".menu-item" />
    </>
  );
};
