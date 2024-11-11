import { assets } from "@/assets/assets";
import { navItems } from "@/constants";

export const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-slate-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="logo dark" />
          <p className="text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>
        </div>
        <div className="">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <nav aria-label="Main Navigation">
            <ul className=" gap-7 [&>li]:hover:cursor-pointer relative">
              {navItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <a
                    href={item.link}
                    className="text-gray-500 hover:text-gray-300  py-1 px-2 inline-block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-500 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 text-white px-4 py-2 rounded mr-2 focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-center py-5 border-t border-gray-600 mt-5">
        Copyright 2024 © Millandev.
      </div>
    </div>
  );
};
