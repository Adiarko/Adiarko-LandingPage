import StylingButton from "@/components/stylingButton";
import { CirclePlay } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[rgb(252,251,247)] flex justify-between lg:h-dvh">
      <div className="container relative py-24 grid grid-flow-row md:grid-cols-4 md:grid-rows-none lg:py-0">
        <div className="col-span-1 space-y-12 my-auto md:col-span-2 lg:pe-24 xl:pe-48">
          <div className="text-wrap space-y-4">
            <h1 className="z-10 relative font-bold text-3xl text-center md:text-start md:text-4xl lg:text-5xl lg:leading-tight">
              <span className="relative z-10">
                Your Innovative Partner for Digitalization
              </span>
              <img
                src="/highlight_hero.png"
                className="absolute w-52 z-0 bottom-0 h-6 translate-y-1 translate-x-16 md:w-60 md:translate-y-2 md:-translate-x-1 md:h-7 lg:w-80 lg:h-10"
                alt=""
              />
            </h1>
            <p className="font-semibold text-[#96979D] text-sm pe-0 text-center md:text-xs md:text-start md:pe-24 lg:pe-0 lg:text-sm">
              We help businesses and people to harness the power of digital
              technology, enabling seamless transformation and growth.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/get-started" className="flex gap-4">
              <StylingButton
                className="bg-gradient-to-b from-[#FED45B] to-[#F9B936] text-base text-black font-semibold"
                className2="gap-4"
                title="Get Started"
                icon=""
              />
              <CirclePlay className="w-10 h-10 text-black" />
            </Link>
          </div>
        </div>
        <div className="hidden md:col-span-2 md:block relative">
          <div className="p-2 rounded-md shadow-md backdrop-opacity-5 absolute z-20 top-0 left-10 lg:top-28 lg:left-0 xl:top-32 xl:left-20 2xl:top-36 2xl:left-10 min-[1920px]:top-44">
            <img src="/instagram_logo.png" className="w-10 lg:w-14" alt="" />
          </div>
          <div className="p-2 rounded-md shadow-md backdrop-opacity-5 absolute z-20 top-20 -right-4 lg:top-52 lg:right-4 xl:top-56 2xl:right-2 min-[1920px]:top-80 min-[1920px]:-right-28">
            <img
              src="/online_education_1.png"
              className="w-10 lg:w-14"
              alt=""
            />
          </div>
          <div className="p-2 rounded-md shadow-md backdrop-opacity-5 absolute z-20 -bottom-24 left-48 lg:bottom-0 xl:left-72 min-[1920px]:left-80">
            <img src="/tiktok_logo.png" className="w-10 lg:w-14" alt="" />
          </div>
          <div className="flex p-2 rounded-full shadow-md backdrop-opacity-5 absolute z-20 bottom-2 -left-10 lg:bottom-44 lg:-left-24 xl:-left-4 2xl:-left-10 min-[1920px]:bottom-60">
            <div className="flex py-2 px-4 rounded-full gap-2 bg-white">
              <img src="/stamp_2.png" className="flex w-10 lg:w-14" alt="" />
              <div className="flex flex-col my-auto">
                <span className="text-[10px] lg:text-xs font-semibold">
                  100% Trusted
                </span>
                <span className="text-[10px] lg:text-xs font-semibold">
                  IT Agency in Kediri
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-2 rounded-xl shadow-md bg-white absolute z-20 right-0 -top-20 lg:top-10">
            <div className="flex gap-2">
              <img src="/stamp_1.png" className="flex w-10 h-10" alt="" />
              <div className="flex flex-col my-auto">
                <span className="text-[0.5rem] font-normal">Project Done</span>
                <span className="text-lg lg:text-xl font-bold mx-auto">
                  512
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/hero_icon.png"
          className="hidden md:block md:h-full md:absolute md:z-10 md:bottom-0 md:right-0 2xl:-translate-x-20 min-[1920px]:translate-x-10"
          alt=""
        />
      </div>
    </div>
  );
}
