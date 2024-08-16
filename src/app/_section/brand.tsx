import React from "react";
import Link from "next/link";
import StylingButton from "@/components/stylingButton";
import CountProjects from "@/components/countProjects";

const Brand = () => {
  return (
    <section className="w-full container pb-24 flex flex-col place-content-center gap-12 md:gap-16 lg:h-dvh">
      <div className="grid lg:grid-rows-none lg:grid-cols-5 xl:grid-cols-3 md:gap-8">
        <div className="hidden lg:grid lg:relative lg:col-span-3 xl:col-span-2">
          <img src="/union.png" className="w-[60%] mx-auto mt-auto" alt="" />
          <img
            src="/vector_6.png"
            className="absolute translate-x-28 translate-y-10 z-10 h-[85%]"
            alt=""
          />
          <img
            src="/ellipse_7.png"
            className="absolute translate-x-48 translate-y-10 z-20 h-[4%]"
            alt=""
          />
          <img
            src="/ellipse_8.png"
            className="absolute right-44 top-48 z-20 h-[4%]"
            alt=""
          />
          <img
            src="/love_91k.png"
            className="absolute translate-x-28 translate-y-32 z-20 h-[15%]"
            alt=""
          />
          <img
            src="/like_99k.png"
            className="absolute right-0 -translate-x-28 translate-y-80 z-30 h-[15%]"
            alt=""
          />
          <img
            src="/note.png"
            className="absolute right-0 -translate-x-52 translate-y-52 z-40 h-[45%]"
            alt=""
          />
          <div className="p-2 rounded-md shadow-md bg-white/50 absolute bottom-0 translate-x-56 -translate-y-8 z-30">
            <img src="/instagram_logo.png" className="w-10" alt="" />
          </div>
          <img
            src="/icon_people.png"
            className="absolute translate-x-48 z-20 h-full"
            alt=""
          />
        </div>
        <div className="grid gap-4 md:gap-8 lg:col-span-2 xl:col-span-1">
          <span className="flex gap-2 justify-center lg:justify-start lg:gap-4">
            <img
              src="/logo_adiarko.jpg"
              className="w-6 h-6 md:w-8 md:h-8 xl:w-12 xl:h-12 my-auto"
              alt=""
            />
            <h1 className="font-bold my-auto text-xl md:text-3xl xl:text-4xl">
              Adiarko
            </h1>
          </span>
          <span className="font-bold text-xl text-center md:text-3xl lg:text-start xl:space-y-2 xl:text-4xl">
            <h1>Top #1 IT Agency</h1>
            <h1 className="relative">
              <span className="relative z-10">in Kediri Raya</span>
              <img
                src="/highlight_brand.png"
                className="absolute z-0 bottom-0 h-3 translate-y-0 translate-x-28 md:translate-y-1 md:translate-x-72 md:h-5 lg:translate-x-2 xl:translate-x-8"
                alt=""
              />
            </h1>
          </span>
          <p className="text-[#A6A6A6] text-wrap text-xs text-center pb-4 px-0 md:px-24 md:text-sm lg:px-0 lg:pb-8 lg:text-start">
            We proudly help businesses and individuals succeed in the digital
            world. Our premier digital marketing and branding services boost
            online presence and attract customers. Through our Digital Academy,
            we equip students with essential computer skills, from basic
            literacy to advanced programming.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/get-started">
              <StylingButton
                className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
                className2="gap-4"
                title="Get Started"
                icon="&#x1F872;"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <CountProjects />
      </div>
    </section>
  );
};

export default Brand;
