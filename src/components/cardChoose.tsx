"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface Choose {
  title: string;
  description: string;
  whiteImage: string;
  blackImage: string;
  alt: string;
}

const CardChoose = (props: Choose) => {
  const { title, description, whiteImage, blackImage, alt } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex">
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col rounded-2xl border-0 bg-[#141414] group transition ease-in-out duration-300 hover:bg-yellow-400"
      >
        <CardHeader className="flex">
          <div className="flex gap-4 ">
            <Image
              src={isHovered ? blackImage : whiteImage}
              width={32}
              height={32}
              className="transition-opacity duration-300"
              alt={alt}
            />
            <CardTitle className="my-auto text-white font-semibold text-base md:text-lg group-hover:text-black">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-col space-y-4">
          <CardDescription className="text-white text-wrap text-[10px] md:text-xs group-hover:text-black">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardChoose;
