import React from "react";
import { portfolio } from "@/data";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardProjects from "@/components/cardProjects";
import StylingButton from "@/components/stylingButton";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col w-full container pb-24 gap-8"
    >
      <div className="flex flex-col gap-4 mx-auto md:w-[75%] lg:w-[55%] xl:w-[45%]">
        <h1 className="relative font-bold text-center leading-tight text-wrap text-2xl md:text-4xl">
          Take a Look at <br /> Our
          <span className=" relative z-10 font-extrabold"> Project</span>
          <img
            src="/highlight_brand.png"
            className="absolute z-0 bottom-0 right-0 h-4 w-20 translate-y-0 -translate-x-24 md:-translate-x-48 md:h-5 md:w-32 lg:-translate-x-56 xl:-translate-x-44 2xl:-translate-x-40"
            alt=""
          />
        </h1>
        <p className="text-[#96979D] text-wrap text-center text-xs md:text-sm">
          We invite you to explore our portfolio of past projects that showcase
          our dedication to excellence and innovation.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <Tabs className="mx-auto w-full flex flex-col gap-4" defaultValue="all">
          <TabsList className="mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            {portfolio.map((tabs) => (
              <TabsTrigger value={tabs.value}>{tabs.label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all">
            <div className="grid gap-4 grid-flow-row md:gap-8 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3">
              {portfolio
                .flatMap((data) => data.contents)
                .map((portfolios) => (
                  <CardProjects
                    key={portfolios.id}
                    id={portfolios.id}
                    picture={portfolios.image}
                    badgeTitle={portfolios.badge_title}
                    title={portfolios.title}
                    description={portfolios.description}
                  />
                ))}
            </div>
          </TabsContent>
          {portfolio.map((data) => (
            <TabsContent value={data.value} key={data.value}>
              <div className="grid gap-4 grid-flow-row md:gap-8 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3">
                {data.contents.map((datas) => (
                  <CardProjects
                    key={datas.id}
                    id={datas.id}
                    picture={datas.image}
                    badgeTitle={datas.badge_title}
                    title={datas.title}
                    description={datas.description}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="mx-auto">
        <Link href="/#portfolio">
          <StylingButton
            className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
            className2="gap-4"
            title="View All Portfolio"
            icon="&#x1F872;"
          />
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
