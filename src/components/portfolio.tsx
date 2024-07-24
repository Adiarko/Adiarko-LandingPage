import React from "react";
import { Card } from "./ui/card";
import CardProjects from "./cardProjects";
import { portfolio } from "@/data";
import StylingButton from "./stylingButton";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col w-full container pb-24 gap-8"
    >
      <div className="flex flex-col gap-4 mx-auto md:w-[75%] lg:w-[65%] xl:w-[45%]">
        <h1 className="font-bold text-center leading-tight text-wrap text-2xl md:text-4xl">
          Kami telah menyelesaikan beberapa
          <span className="font-extrabold"> Project</span>
        </h1>
        <p className="text-[#96979D] text-wrap text-center text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur. Praesent nascetur in diam ac
          sit purus volutpat integer donec. Nunc gravida vulputate adipiscing
          morbi nec pulvinar elementum sollicitudin.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <Card className="px-4 py-1 cursor-pointer rounded-lg bg-transparent text-slate-700 border border-slate-700 text-xs md:text-base hover:text-white hover:bg-slate-700">
          All
        </Card>
        <Card className="px-4 py-1 cursor-pointer rounded-lg bg-transparent text-slate-700 border border-slate-700 text-xs md:text-base hover:text-white hover:bg-slate-700">
          Marketing
        </Card>
        <Card className="px-4 py-1 cursor-pointer rounded-lg bg-transparent text-slate-700 border border-slate-700 text-xs md:text-base hover:text-white hover:bg-slate-700">
          Academy
        </Card>
      </div>
      <div className="grid gap-4 grid-flow-row md:gap-8 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((portfolios) => (
          <CardProjects
            key={portfolios.id}
            picture={portfolios.image}
            badgeTitle={portfolios.badge_title}
            title={portfolios.title}
            description={portfolios.description}
          />
        ))}
      </div>
      <div className="mx-auto">
        <StylingButton
          className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
          className2="gap-4"
          title="View All Portfolio"
          icon="&#x1F872;"
        />
      </div>
    </section>
  );
};

export default Portfolio;
