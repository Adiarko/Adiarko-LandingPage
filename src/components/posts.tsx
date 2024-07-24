import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { BadgeCheck, MoveRight, Quote } from "lucide-react";
import { blog, thought } from "@/data";
import { Badge } from "./ui/badge";
import { px } from "framer-motion";
import Link from "next/link";

const Posts = () => {
  return (
    <div className="flex flex-col bg-white py-28 w-full place-content-center">
      <div className="container space-y-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight text-balance text-black w-1/3">
            Our Regular Update Blog Post
          </h1>
          <p className="text-sm text-[#A6A6A6] text-balance">
            Ikuti blog kami untuk mendapatkan wawasan terbaru tentang tren
            teknologi digital, tips SEO, dan manfaat transformasi digital bagi
            bisnis. Kami berbagi pengetahuan dan pengalaman kami untuk membantu
            Anda tetap terdepan dalam persaingan di era digital.
          </p>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-full h-full flex relative">
            <CarouselContent className="flex pb-14">
              {blog.map((blogs) => (
                <CarouselItem key={blogs.id} className="flex basis-1/3">
                  <Link href="#">
                    <Card className="flex flex-col rounded-2xl px-1 shadow-md group">
                      <CardHeader className="rounded-2xl relative flex w-full h-full">
                        <div className="flex relative w-80 h-48">
                          <img
                            src={blogs.image}
                            className="object-cover rounded-2xl"
                            alt=""
                          />
                          <div className="absolute rounded-2xl inset-0 flex mx-auto my-auto w-full h-full opacity-0 ease-in-out group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white"></div>
                        </div>
                        <div className="flex px-10 py-8 absolute inset-0">
                          <div className="flex-col">
                            <Badge className=" bg-white text-[#666FC9] group-hover:bg-fuchsia-100">
                              Adiarko
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="grow flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold truncate text-balance line-clamp-2">
                          {blogs.title}
                        </h2>
                        <p className="text-xs text-[#A6A6A6] truncate line-clamp-3 text-balance">
                          {blogs.description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex shrink-0 justify-between">
                        <span className="flex gap-4 cursor-pointer">
                          <p className="text-black text-sm font-medium">
                            See more
                          </p>
                          <MoveRight className="my-auto text-black w-3 h-3" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-0 right-12 left-12">
              <CarouselPrevious
                prevText="Previous"
                className="w-36 h-10 text-lg gap-4 shadow-md border-2 border-slate-500 "
              />
              <CarouselNext
                nextText="Next"
                className="w-36 h-10 text-lg gap-4 shadow-md border-2 border-slate-500 "
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Posts;
