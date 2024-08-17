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
            <h1 className="text-center text-wrap font-bold mx-auto text-3xl w-full md:leading-snug md:text-4xl lg:leading-snug lg:text-5xl xl:w-[75%]">
              Explore Exciting Career & Internship{" "}
              <span className="text-[#FFC93E]"> Opportunities </span>with Us
            </h1>
          </div>
          <div className="grid gap-4 pb-4 md:gap-8 md:pb-8 md:grid-cols-2">
            <div className="flex p-6 lg:p-8">
              <img
                src="/4WRN7695.JPG"
                className="h-full w-full object-contain rounded-2xl"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 p-4 my-auto">
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                Diversity, Equity & Inclusion
              </h1>
              <p className="text-[#A6A6A6] text-balance text-justify text-[10px] md:text-xs lg:text-sm">
                At the core of our organization is a commitment to Diversity,
                Equity, and Inclusion (DEI). We believe embracing diverse
                perspectives fosters innovation and belonging. Our goal is to
                create an environment where everyone feels valued, respected,
                and heard, ensuring equal opportunities for all. Inclusion is a
                guiding principle, and we are dedicated to building a community
                where differences are celebrated, and everyone can contribute to
                our collective success.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center pb-8">
            <h1 className="text-wrap font-bold mx-auto text-3xl w-[95%] md:text-4xl md:leading-snug md:w-[35%] lg:text-5xl lg:leading-snug">
              Interest in our Mission?
            </h1>
            <p className="text-[#A6A6A6] text-[10px] md:text-xs lg:text-sm">
              Join us to create a positive impact through collaboration and
              innovation.
            </p>
          </div>
          <div className="grid pb-14 gap-8 md:grid-cols-3 md:gap-0">
            <div className="flex flex-col mx-auto text-center gap-4">
              <div className="flex mx-auto">
                <span className="p-4 bg-[#DDDFF4] rounded-full w-16 md:w-24">
                  <img src="envelope.png" className="flex" alt="" />
                </span>
              </div>
              <h2 className="font-medium text-base md:text-xl">
                We put people first
              </h2>
              <p className="text-xs text-wrap w-[65%] mx-auto text-[#A6A6A6]">
                We believe that by fostering a supportive and inclusive
                environment, we can help everyone thrive.
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center gap-4">
              <div className="flex mx-auto">
                <span className="p-4 bg-[#DDDFF4] rounded-full w-16 md:w-24">
                  <img src="envelope.png" className="flex" alt="" />
                </span>
              </div>
              <h2 className="font-medium text-base md:text-xl">
                We Always Growing
              </h2>
              <p className="text-xs text-wrap w-[65%] mx-auto text-[#A6A6A6]">
                We are committed to personal and professional development,
                encouraging innovation and creativity.
              </p>
            </div>
            <div className="flex flex-col mx-auto text-center gap-4">
              <div className="flex mx-auto">
                <span className="p-4 bg-[#DDDFF4] rounded-full w-16 md:w-24">
                  <img src="envelope.png" className="flex" alt="" />
                </span>
              </div>
              <h2 className="font-medium text-base md:text-xl">
                We&apos;re accessible
              </h2>
              <p className="text-xs text-wrap w-[65%] mx-auto text-[#A6A6A6]">
                We aim to create an open and inclusive environment where
                everyone can easily reach out and communicate.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center pb-2">
            <h1 className="text-wrap font-bold mx-auto text-3xl md:text-4xl lg:text-5xl">
              Open Positions
            </h1>
            <p className="text-[#A6A6A6] pb-8 text-[10px] md:text-xs lg:text-sm">
              Explore our open roles and be part of our dynamic, inclusive team.
            </p>
          </div>
          <div className="flex bg-[#F1F1F1] shadow-inner rounded-xl p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {oprec.map((jobs) => (
                <AccordionItem
                  key={jobs.id}
                  value={jobs.title}
                  className="bg-white rounded-xl shadow-md py-2 px-6 md:py-4 md:px-8"
                >
                  <AccordionTrigger>
                    <div className="flex">
                      <div className="flex flex-col">
                        <h1 className="font-semibold me-auto text-base md:text-lg">
                          {jobs.title}
                        </h1>
                        <div className="flex gap-2 text-[#515151] text-[10px] md:text-xs">
                          <p>{jobs.type}</p>
                          <p>|</p>
                          <p>Position : {jobs.position}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-t-2 pt-4 space-y-2 text-xs md:text-sm">
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
          <div className="grid container gap-8 py-12 md:py-8 md:grid-cols-2 md:gap-0">
            <div className="flex flex-col place-content-center">
              <div className="text-balance space-y-4 text-center md:text-start">
                <h1 className="font-bold text-3xl md:text-4xl md:leading-tight md:w-2/3 lg:leading-tight lg:text-5xl">
                  How to apply? <br />
                  Send your resume to
                </h1>
                <p className="font-normal text-xs md:text-sm text-[#5D5C5C]">
                  <span className="font-bold"> hi@adiarko.co.id </span>
                  with the subject line : [position] - name.
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
        <div className="w-full h-full container py-24 lg:py-0 lg:pt-40 lg:pb-24">
          <div className="flex bg-gradient-to-r from-[#FFC93E] to-[#FFCE51] rounded-xl w-full h-72 md:px-48">
            <div className="flex bg-[url('/rectangle_background.png')] bg-contain">
              <div className="grid gap-x-8 relative p-8 md:p-0 md:-mx-36 md:grid-cols-2 lg:grid-cols-5">
                <div className="flex lg:col-span-2">
                  <h1 className="font-extrabold my-auto mx-auto text-2xl text-center md:text-start md:text-3xl md:leading-tight lg:leading-tight lg:text-4xl">
                    Let's join us,
                    <br />
                    to achieve a
                    <br />
                    brilliant future
                  </h1>
                </div>
                <div className="hidden lg:grid lg:col-span-1">
                  <img
                    src="/icon_people_career.png"
                    className="w-[420px] xl:w-[480px] absolute bottom-0 z-0 -translate-x-28 xl:-translate-x-36"
                    alt=""
                  />
                </div>
                <div className="my-auto lg:col-span-2 lg:ps-16">
                  <div className="flex flex-col gap-4">
                    <p className="text-[10px] text-wrap text-center md:text-justify">
                      By combining our strengths and working collaboratively, we
                      can overcome challenges, seize new opportunities, and
                      create lasting success.
                    </p>
                    <div className="flex mx-auto md:mx-0">
                      <Link href="/get-started">
                        <StylingButton
                          className="bg-black w-full text-xs shadow-md hover:bg-gray-800"
                          title="Contact Us"
                        />
                      </Link>
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
