import React from "react";
import { BadgeCheck, Quote } from "lucide-react";
import { thought } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Quotes = () => {
  return (
    <section
      id="review"
      className="flex flex-col bg-white w-full place-content-center py-24 xl:h-screen"
    >
      <div className="container space-y-14">
        <div className="flex flex-col gap-4 mx-auto w-[95%] lg:w-3/4 2xl:w-full">
          <h1 className="relative font-bold text-center leading-tight text-balance text-black text-2xl md:text-4xl">
            <span className="relative z-10">What They Say About Us?</span>
            <img
              src="/highlight_portfolio.png"
              className="absolute z-0 bottom-0 right-2 h-4 w-28 md:right-36 md:w-44 md:h-5 lg:right-56 2xl:right-[350px]"
              alt=""
            />
          </h1>
          <p className="text-[#A6A6A6] text-balance text-center text-xs md:text-sm">
            Clients love our marketing and branding for boosting their online
            presence. Students value our training for essential computer skills.
            Read their testimonials to see why they choose us.
          </p>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-full h-full flex">
            <CarouselContent className="relative flex">
              {thought.map((thoughts) => (
                <CarouselItem
                  key={thoughts.id}
                  className="flex md:basis-3/5 lg:basis-2/5"
                >
                  <Card className="flex flex-col rounded-2xl pt-8 px-1 shadow-md bg-white group transition ease-in-out duration-300 hover:bg-gradient-to-b hover:from-[#FFC93E] hover:to-[#FFB23E]">
                    <CardContent className="grow">
                      <span className="font-medium text-balance font-serif italic text-xs md:text-sm">
                        "{thoughts.quote}"
                      </span>
                    </CardContent>
                    <CardFooter className="flex shrink-0 justify-between">
                      <div className="flex gap-4">
                        <Avatar className="my-auto">
                          <AvatarImage src={thoughts.image} />
                        </Avatar>
                        <div className="flex-col">
                          <span className="flex gap-1">
                            <h2 className="font-semibold text-base md:text-lg">
                              {thoughts.name}
                            </h2>
                            <BadgeCheck className="w-5 h-5 my-auto fill-sky-500 stroke-white" />
                          </span>
                          <p className="font-medium text-[10px] md:text-xs">
                            {thoughts.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <Quote className="w-8 h-8 stroke-yellow-500 group-hover:stroke-amber-700" />
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-80 right-12 ">
              <CarouselPrevious className="w-10 h-10 text-2xl rounded-full shadow-md bg-[#1E1E1E] text-[#FEC03C] hover:bg-[#ECB22E] hover:text-white" />
              <CarouselNext className="w-10 h-10 text-2xl rounded-full shadow-md bg-[#1E1E1E] text-[#FEC03C] hover:bg-[#ECB22E] hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
