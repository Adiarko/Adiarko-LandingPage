import StylingButton from "@/components/stylingButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { oprec } from "@/data";
import Link from "next/link";
import React from "react";

const Career = () => {
  return (
    <main className="flex min-h-screen flex-col place-content-center">
      <section className="max-w-full w-full">
        <div className="container flex flex-col gap-4 py-12">
          <Link className="flex items-center mx-auto gap-2" href="/">
            <img src="/logo_adiarko.jpg" className="w-6 h-6 mb-auto" alt="" />
            <span className="font-bold text-xl">Adiarko</span>
          </Link>
          <div className="flex pb-8">
            <h1 className="text-5xl text-center text-wrap font-bold mx-auto leading-snug w-[75%]">
              Explore Exciting Career & Internship{" "}
              <span className="text-[#FFC93E]"> Opportunities </span>with Us
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 pb-8">
            <div className="flex p-8">
              <img
                src="/career_pict.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 p-4 my-auto">
              <h1 className="text-4xl font-semibold">
                Diversity, Equity & Inclusion
              </h1>
              <p className="text-sm text-[#A6A6A6] text-balance">
                Aenean neque egestas urna. Elit etiam tincidunt lorem sit augue
                arcu sed. Feugiat ut arcu mollis aliquet felis sagittis vitae.
                Non est egestas purus ac laoreet aliquet facilisis. Lobortis
                interdum sed nisi at sed ac. Eu tempus tortor eget lectus sed
                non ultricies vel.Cras orci ornare tristique laoreet id nunc
                lectus turpis. Orci adipiscing laoreet donec malesuada pharetra
                vitae faucibus. Neque amet non bibendum amet eget elementum vel
                pretium aenean. Rhoncus donec tristique aenean diam at. Euismod
                dolor metus augue non sed feugiat. In dui ultrices pellentesque
                eget morbi aliquam placerat mattis. Rhoncus nulla urna pretium
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center pb-8">
            <h1 className="text-5xl  text-wrap font-bold mx-auto leading-snug w-[35%]">
              Interest in our Mission?
            </h1>
            <p className="text-sm text-[#A6A6A6]">
              eget morbi aliquam placerat mattis. Rhoncus nulla urna pretium
            </p>
          </div>
          <div className="grid grid-cols-3 pb-8">
            <div className="flex flex-col mx-auto text-center gap-4">
              <div className="flex mx-auto">
                <span className="p-4 bg-[#DDDFF4] w-24 rounded-full">
                  <img src="envelope.png" className="flex" alt="" />
                </span>
              </div>
              <h2 className="font-medium text-xl">We put people first</h2>
              <p className="text-xs text-wrap w-[65%] mx-auto text-[#A6A6A6]">
                eget morbi aliquam placerat mattis. Rhoncus nulla urna pretium
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center gap-4">
              <div className="flex mx-auto">
                <span className="p-4 bg-[#DDDFF4] w-24 rounded-full">
                  <img src="envelope.png" className="flex" alt="" />
                </span>
              </div>
              <h2 className="font-medium text-xl">We Always Growing</h2>
              <p className="text-xs text-wrap w-[65%] mx-auto text-[#A6A6A6]">
                eget morbi aliquam placerat mattis. Rhoncus nulla urna pretium
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center gap-4">
              <div className="flex mx-auto">
                <span className="p-4 bg-[#DDDFF4] w-24 rounded-full">
                  <img src="envelope.png" className="flex" alt="" />
                </span>
              </div>
              <h2 className="font-medium text-xl">We're accessible</h2>
              <p className="text-xs text-wrap w-[65%] mx-auto text-[#A6A6A6]">
                eget morbi aliquam placerat mattis. Rhoncus nulla urna pretium
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center pb-8">
            <h1 className="text-5xl  text-wrap font-bold mx-auto leading-snug">
              Open Positions
            </h1>
            <p className="text-sm text-[#A6A6A6] pb-8">
              eget morbi aliquam placerat mattis. Rhoncus nulla urna pretium
            </p>
            <div className="flex gap-4 mx-auto">
              <StylingButton
                className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
                title="Career"
              />
              <StylingButton
                className="bg-[#F4F5F7] text-xs text-black shadow-md hover:bg-yellow-500"
                title="Internship"
              />
            </div>
          </div>
          <div className="flex bg-[#F1F1F1] p-8 shadow-inner rounded-xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {oprec.map((jobs) => (
                <AccordionItem
                  key={jobs.id}
                  value={jobs.title}
                  className="bg-white py-4 px-8 rounded-xl shadow-md"
                >
                  <AccordionTrigger>
                    <div className="flex">
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-lg me-auto">
                          {jobs.title}
                        </h1>
                        <div className="flex gap-2 text-xs text-[#515151]">
                          <p>{jobs.type}</p>
                          <p>|</p>
                          <p>Position : {jobs.position}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-t-2 pt-4 space-y-2">
                    <p>{jobs.jobdesc}</p>
                    <ol className="ps-4">
                      {jobs.requirements.map((requirement, index) => (
                        <li className="flex gap-2">
                          <p>{index + 1}</p>
                          <p>{requirement}</p>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="bg-[#FFEDBE] bg-opacity-50">
          <div className="grid grid-cols-2 py-8 container">
            <div className="flex flex-col place-content-center">
              <div className="text-balance space-y-4">
                <h1 className="text-5xl leading-tight font-bold w-[75%]">
                  Couldn’t Find The Job You Are Looking For?
                </h1>
                <p className="font-normal text-sm text-[#5D5C5C]">
                  Send your resume on{" "}
                  <span className="font-bold"> adiarko@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="flex place-content-center ">
              <div className="flex-col mx-10 my-auto">
                <img src="/not_found.png" className="h-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full container pt-40 pb-24">
          <div className="flex bg-gradient-to-r from-[#FFC93E] to-[#FFCE51] rounded-xl w-full h-72 px-48">
            <div className="flex bg-[url('/rectangle_background.png')] bg-contain">
              <div className="grid grid-cols-5 gap-x-8 relative -mx-36">
                <div className="col-span-2 flex">
                  <h1 className="text-4xl font-extrabold leading-tight my-auto">
                    Let's join us,
                    <br />
                    to achieve a brilliant
                    <br />
                    future
                  </h1>
                </div>
                <div className="col-span-1 ">
                  <img src="/dot_shape.png" className="z-10" alt="" />
                  <img
                    src="/icon_people_career.png"
                    className="w-96 absolute bottom-0 -translate-x-20 z-0"
                    alt=""
                  />
                </div>
                <div className="col-span-2 my-auto ps-16">
                  <div className="flex flex-col gap-4">
                    <p className="text-[10px] text-wrap text-justify">
                      Aliquam urna consequat habitant et rhoncus elit eget
                      consectetur. Ipsum arcu donec consectetur enim quam elit
                      ac nunc est. Egestas in diam vehicula eu justo
                      pellentesque cum. Donec accumsan
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <StylingButton
                          className="bg-black w-full text-xs shadow-md hover:bg-yellow-500"
                          title="Career"
                        />
                      </div>
                      <div className="flex flex-col">
                        <StylingButton
                          className="bg-[#F4F5F7] w-full text-xs text-black shadow-md hover:bg-yellow-500"
                          title="Internship"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
