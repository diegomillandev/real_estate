import { assets } from "@/assets/assets";
import { MenuBackDrop } from "./MenuBackDrop";

export const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
          <img src={assets.logo} alt="logo" />

          <ul className="hidden md:flex gap-7 text-white [&>li]:hover:cursor-pointer relative">
            <li className="menu-item py-1 px-2">Home</li>
            <li className="menu-item py-1 px-2">About</li>
            <li className="menu-item py-1 px-2">Projects</li>
            <li className="menu-item py-1 px-2">Testimonials</li>
          </ul>

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
        </div>
      </div>
      <MenuBackDrop props=".menu-item" />
    </>
  );
};
