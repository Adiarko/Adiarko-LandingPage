import { chooseUs } from "@/data";
import React from "react";
import CardChoose from "./cardChoose";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col bg-black w-full place-content-center py-24 xl:h-dvh">
      <div className="container space-y-14">
        <div className="flex flex-col gap-4 mx-auto">
          <h1 className="text-4xl font-bold text-center leading-tight text-wrap text-white">
            Why Choose Us?
            <span className="font-extrabold text-[#FFC93E]">
              {" "}
              Adiarko Digital
            </span>
          </h1>
          <p className="text-sm text-[#A6A6A6] text-wrap text-center">
            Adiarko Indonesia adalah mitra yang tepat untuk digitalisasi bisnis
            Anda.
          </p>
        </div>
        <div className="grid gap-4 grid-flow-row md:gap-8 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3">
          {chooseUs.map((chooses) => (
            <CardChoose
              key={chooses.id}
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
