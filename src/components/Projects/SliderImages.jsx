import { assets } from "@/assets/assets";
import { projectsData } from "@/lib/data";
import { useEffect, useState } from "react";

export const SliderImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length >= 3 ? 2 : projectsData.length);
      } else {
        setCardToShow(1);
      }
    };

    updateCardToShow();

    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev + cardToShow >= projectsData.length) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return projectsData.length - cardToShow;
      }
      return prev - 1;
    });
  };

  return (
    <>
      <div className="w-full flex justify-end items-center mb-8">
        <button className="p-3 bg-gray-200 rounded mr-2" onClick={handlePrev}>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className="p-3 bg-gray-200 rounded" onClick={handleNext}>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex *
                (currentIndex === projectsData.length ? 85 : 88.5)) /
                cardToShow +
              (currentIndex === projectsData.length ? 0 : 2)
            }%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-10/12 sm:w-4/6 md:w-7/12 lg:w-2/6 xl:w-2/6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover"
              />
              <div className="absolute left-0 -right-0 bottom-5 flex justify-end">
                <div className="bg-white inline-block w-3/4 px-4 py-2 shadow-lg rounded-l-md">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {project.price}
                    <span className="mx-1">|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
