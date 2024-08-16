import StylingButton from "@/components/stylingButton";
import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <div className="w-full h-full container py-20">
      <div className="flex relative rounded-xl w-full h-80 ">
        <img
          src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-xl ms-auto brightness-75 object-cover md:object-contain"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-60% rounded-xl">
          <div className="relative p-6 grid grid-flow-row md:grid-cols-5 md:grid-rows-none md:p-8">
            <div className="hidden md:grid md:col-span-2">
              <img
                src="/icon_people_2.png"
                className="w-80 absolute p-2 bottom-0 left-0 -translate-x-8 -translate-y-4 xl:translate-y-0 xl:-translate-x-10"
                alt=""
              />
            </div>
            <div className="flex flex-col md:col-span-3">
              <div className="flex flex-col grow gap-4 pb-6 w-full text-balance md:ms-10 lg:ms-0">
                <h1 className="font-bold text-white text-2xl md:text-3xl">
                  We&apos;re Ready to Help You
                </h1>
                <p className="text-[#A6A6A6] pb-8 text-[10px] md:text-xs">
                  We&apos;re committed to your success. Contact us today to
                  discover how our digital solutions can transform your business
                  or enhance your skills. Let's achieve great things together!
                </p>
                <Link href="/get-started">
                  <StylingButton
                    className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
                    className2="gap-4"
                    title="Get Started"
                    icon="&#x1F872;"
                  />
                </Link>
              </div>
              <div className="pt-2 flex shrink-0 gap-2 justify-end">
                <img
                  src="/logo_adiarko.jpg"
                  className="w-5 h-5 my-auto"
                  alt=""
                />
                <h1 className="font-medium text-white text-base my-auto">
                  Adiarko
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
