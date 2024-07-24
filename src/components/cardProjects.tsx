import React from "react";
import { Badge } from "./ui/badge";
import { MoveRight } from "lucide-react";

interface Card {
  picture: string;
  badgeTitle: string;
  title: string;
  description: string;
}

const CardProjects = (props: Card) => {
  const { picture, badgeTitle, title, description } = props;

  return (
    <div className="w-full h-[95%] relative">
      <img src={picture} className="w-full h-full object-cover" alt="" />
      <div className="absolute inset-0 flex p-8 w-full h-full opacity-0 ease-in-out hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
        <div className="flex flex-col w-full h-full">
          <div className="grow">
            <Badge className="bg-white text-[#666FC9]">{badgeTitle}</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-sm">{title}</h2>
            <p className="text-sm">{description}</p>
            <span className="flex gap-4 cursor-pointer">
              <p className="text-[#FFC759] text-sm">See more</p>
              <MoveRight className="my-auto text-[#FFC759] w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
