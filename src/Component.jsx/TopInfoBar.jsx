
import React from "react";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";

const TopInfoBar = () => {
  return (
    <div className="w-full bg-gray-100 text-black">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[47px] flex flex-wrap items-center justify-between gap-y-2 py-2">

          <div className="flex items-center gap-3 text-sm sm:text-base">
            <FiMapPin size={19} />
            <span>Hisar, Haryana, 125001</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-8">

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FiClock size={23} />
              <span>Monday-Saturday: 8am-12pm</span>
            </div>

            <a
              href="tel:7988411414"
              className="flex items-center gap-3 text-sm sm:text-base hover:text-gray-300 transition-colors duration-300"
            >
              <FiPhone size={19} />
              <span>7988411414</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
