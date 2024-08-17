"use client";
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { MoveRight } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Card {
  id: number;
  picture: string;
  badgeTitle: string;
  title: string;
  description: string;
}

const CardProjects = (props: Card) => {
  const { id, picture, badgeTitle, title, description } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div
        className="w-full h-[95%] relative cursor-pointer"
        key={id}
        onClick={handleDialogClick}
      >
        <img src={picture} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex p-8 w-full h-full opacity-0 ease-in-out hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
          <div className="flex flex-col w-full h-full">
            <div className="grow">
              <Badge className="bg-white text-[#666FC9] hover:bg-fuchsia-100">
                {badgeTitle}
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xs md:text-sm">{title}</h2>
              <p className="text-xs md:text-sm">{description}</p>
              <span className="flex gap-4 cursor-pointer">
                <p className="text-[#FFC759] text-xs md:text-sm">See more</p>
                <MoveRight className="my-auto text-[#FFC759] w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} key={id}>
        <DialogContent className="mx-auto p-6 sm:max-w-[425px] md:max-w-5xl">
          <img src={picture} className="mx-auto w-full rounded-lg" alt="" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardProjects;
