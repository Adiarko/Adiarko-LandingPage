import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Choose {
  title: string;
  description: string;
}

const CardChoose = (props: Choose) => {
  const { title, description } = props;

  return (
    <div className="w-full flex">
      <Card className="flex flex-col rounded-2xl border-0 bg-[#141414] group transition ease-in-out duration-300 hover:bg-yellow-400">
        <CardHeader className="flex">
          <div className="flex gap-4 ">
            <img src="/book_bookmark.png" className="w-8" alt="" />
            <CardTitle className="my-auto text-white text-lg font-semibold group-hover:text-black">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-col grow space-y-4">
          <CardDescription className="text-xs text-white text-wrap group-hover:text-black">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex">
          <div className="flex gap-4 cursor-pointer text-white text-xs group-hover:text-black">
            <p>See more</p>
            <span>&#x1F872;</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardChoose;
