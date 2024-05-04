import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-6 md:px-12 h-auto md:h-80 py-6 md:py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-auto md:h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-4 md:gap-10 translate-y-0 md:translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-3xl md:text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-1 rounded-lg bg-designColor"></span>
                <span className="w-full h-1 rounded-lg bg-designColor"></span>
                <span className="w-full h-1 rounded-lg bg-designColor"></span>
                <span className="w-full h-1 rounded-lg bg-designColor"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <h2 className="text-lg md:text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm md:text-base">{des}</p>
            <span className="text-lg md:text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
