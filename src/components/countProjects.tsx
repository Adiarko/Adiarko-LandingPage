import React from "react";

const CountProjects = () => {
  return (
    <div className="flex gap-14 md:gap-40 lg:gap-60 xl:gap-80 justify-center">
      <div className="flex-col">
        <p className="font-bold text-xl md:text-4xl">
          300
          <span className="text-[#FEC03C] align-super font-bold text-2xl md:text-[42px]">
            +
          </span>
        </p>
        <p className="text-[#96979D] text-[0.5rem] md:text-xs">
          Happy Customer
        </p>
      </div>
      <div className="flex-col">
        <p className="font-bold text-xl md:text-4xl">
          512
          <span className="text-[#FA7F6B] align-super font-bold text-2xl md:text-[42px]">
            +
          </span>
        </p>
        <p className="text-[#96979D] text-[0.5rem] md:text-xs">
          Project Complete
        </p>
      </div>
      <div className="flex-col">
        <p className="font-bold text-xl md:text-4xl">
          10
          <span className="text-[#169AFD] align-super font-bold text-2xl md:text-[42px]">
            +
          </span>
        </p>
        <p className="text-[#96979D] text-[0.5rem] md:text-xs">
          Years Experience
        </p>
      </div>
    </div>
  );
};

export default CountProjects;
