import CardChoose from "@/components/cardChoose";
import { chooseUs } from "@/data";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col bg-black w-full place-content-center py-24 xl:h-dvh">
      <div className="container space-y-14">
        <div className="flex flex-col gap-4 mx-auto">
          <h1 className="relative font-bold text-center leading-tight text-balance text-white text-2xl md:text-4xl">
            Why Choose Us?
            <span className="font-extrabold text-[#FFC93E]">
              {" "}
              Adiarko Digital
            </span>
            <img
              src="/highlight_choose.png"
              className="absolute z-0 h-3 bottom-6 right-16 md:h-8 md:right-16 md:bottom-8 lg:right-72 2xl:right-64"
              alt=""
            />
          </h1>
          <p className="text-[#A6A6A6] text-balance px-2 text-center text-xs md:text-sm">
            Clients love our marketing and branding for boosting their online
            presence. Students value our training for essential computer skills.
            Read their testimonials to see why they choose us.
          </p>
        </div>
        <div className="grid gap-4 grid-flow-row md:gap-8 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3">
          {chooseUs.map((chooses) => (
            <CardChoose
              key={chooses.id}
              whiteImage={chooses.whiteImage}
              blackImage={chooses.blackImage}
              alt={chooses.alt}
              title={chooses.title}
              description={chooses.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
