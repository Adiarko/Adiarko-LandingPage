import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { BadgeCheck, Quote } from "lucide-react";
import { thought } from "@/data";

const Quotes = () => {
  return (
    <div className="flex flex-col bg-white w-full place-content-center py-24 xl:h-screen">
      <div className="container space-y-14">
        <div className="flex flex-col gap-4 mx-auto">
          <h1 className="text-4xl font-bold text-center leading-tight text-wrap text-black">
            Apa kata mereka tentang kami
          </h1>
          <p className="text-sm text-[#A6A6A6] text-balance text-center">
            Lorem ipsum dolor sit amet consectetur. Praesent nascetur in diam ac
            sit purus volutpat integer donec. Nunc gravida vulputate adipiscing
            morbi nec pulvinar elementum sollicitudin.
          </p>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-full h-full flex">
            <CarouselContent className="relative flex">
              {thought.map((thoughts) => (
                <CarouselItem key={thoughts.id} className="flex basis-2/5">
                  <Card className="flex flex-col rounded-2xl pt-8 px-1 shadow-md group transition ease-in-out duration-300 hover:bg-gradient-to-b hover:from-[#FFC93E] hover:to-[#FFB23E]">
                    <CardContent className="grow">
                      <span className="text-sm font-medium text-balance font-serif italic">
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
                            <h2 className="font-semibold text-lg">
                              {thoughts.name}
                            </h2>
                            <BadgeCheck className="w-5 h-5 my-auto fill-sky-500 stroke-white" />
                          </span>
                          <p className="font-medium text-xs">{thoughts.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        <Quote className="w-8 h-8 stroke-yellow-500 transition ease-in-out duration-300 group-hover:stroke-amber-700" />
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
    </div>
  );
};

export default Quotes;
