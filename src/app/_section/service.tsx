import React from "react";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Service = () => {
  return (
    <section
      id="service"
      className="container flex-col place-content-center space-y-4 py-24"
    >
      <div className="text-yellow-500 font-medium text-base text-center md:text-start md:text-2xl">
        What we do ?
      </div>
      <div className="grid grid-flow-row gap-4 md:gap-0 md:grid-rows-none md:grid-cols-5 lg:grid-cols-6 xl:gap-20 2xl:gap-12">
        <h1 className="font-bold text-2xl col-span-1 text-center md:text-start md:text-4xl md:col-span-2 md:leading-snug lg:col-span-2">
          Boost your online presence and computer skills.
        </h1>
        <p className="text-[#A6A6A6] text-wrap col-span-1 text-xs text-center md:text-start md:text-sm md:col-span-3 md:ms-12 lg:ms-20 lg:col-span-4">
          We specialize in digital marketing and our Digital Academy. Our
          digital marketing services boost online presence, build strong
          branding, and attract customers through SEO, social media, content
          creation, email marketing, and PPC advertising. Our Digital Academy
          offers courses from basic computer literacy to advanced programming,
          preparing students for successful careers with hands-on learning and
          expert instruction.
        </p>
      </div>
      <div className="justify-center flex py-12">
        <span className="font-semibold text-xl md:text-3xl">
          Our Services & Products
        </span>
      </div>
      <div className="flex gap-8 justify-center flex-col md:flex-row">
        <div className="flex mx-auto md:mx-0">
          <Link href="/digital-marketing" className="flex">
            <Card className="flex flex-col rounded-xl w-72 shadow-md text-center group md:text-start">
              <CardHeader className="flex">
                <div className="flex mx-auto md:mx-0">
                  <span className="p-4 rounded-full bg-[#6F75B22B]">
                    <img src="/envelope.png" className="w-8" alt="" />
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-col grow space-y-4">
                <CardTitle className="text-lg font-semibold">
                  Digital Marketing
                </CardTitle>
                <CardDescription className="text-xs text-[#A6A6A6] text-balance">
                  We enhance your online presence and build strong branding with
                  SEO, social media marketing, content creation, email
                  marketing, and PPC advertising to attract customers and
                  achieve marketing goals.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex shrink-0 justify-between">
                <span className="flex gap-4 cursor-pointer py-1 transition ease-in-out duration-300 mx-auto md:mx-0 group-hover:px-2 group-hover:bg-[#6F75B22B] group-hover:rounded-full">
                  <p className="text-[#666FC9] text-xs">See more</p>
                  <MoveRight className="my-auto text-[#666FC9] w-3 h-3" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="flex mx-auto md:mx-0">
          <Link href="/digital-academy">
            <Card className="flex flex-col rounded-xl w-72 shadow-md text-center group md:text-start">
              <CardHeader className="flex">
                <div className="flex mx-auto md:mx-0">
                  <span className="p-4 rounded-full bg-[#FAF7DE]">
                    <img src="/pen_nib_straight.png" className="w-8" alt="" />
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-col grow space-y-4">
                <CardTitle className="text-lg font-semibold">
                  Digital Academy
                </CardTitle>
                <CardDescription className="text-xs text-[#A6A6A6] text-balance">
                  Our academy offers hands-on courses in essential computer
                  skills, from basic literacy to advanced programming, preparing
                  students for successful careers in today's digital world.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex shrink-0 justify-between">
                <span className="flex gap-4 cursor-pointer py-1 transition ease-in-out duration-300 mx-auto md:mx-0 group-hover:px-2 group-hover:bg-[#FAF7DE] group-hover:rounded-full">
                  <p className="text-[#DC9C3D] text-xs">See more</p>
                  <MoveRight className="my-auto text-[#DC9C3D] w-3 h-3" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
