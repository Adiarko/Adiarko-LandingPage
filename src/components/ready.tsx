import React from "react";
import StylingButton from "./stylingButton";

const Ready = () => {
  return (
    <div className="w-full h-full container py-20">
      <div className="flex relative rounded-xl w-full h-80 ">
        <img
          src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-xl object-contain ms-auto brightness-75"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-60% rounded-xl">
          <div className="grid grid-cols-4 p-8 relative">
            <div className="col-span-1">
              <img
                src="/icon_people_2.png"
                className="w-80 absolute p-2 bottom-0 left-0 -translate-x-10"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <div className="flex flex-col gap-2 w-[75%] text-balance pb-6">
                <h1 className="text-3xl font-bold text-white">
                  Kami siap membantu anda, untuk terus berkembang
                </h1>
                <p className="text-xs text-[#A6A6A6] pb-8">
                  Adiarko Indonesia berkomitmen untuk mendukung Anda dalam
                  setiap langkah transformasi digital. Dengan layanan dan solusi
                  yang kami tawarkan, kami yakin dapat membantu bisnis Anda
                  mencapai pertumbuhan berkelanjutan dan kesuksesan di masa
                  depan.
                </p>
                <StylingButton
                  className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
                  className2="gap-4"
                  title="Get Started"
                  icon="&#x1F872;"
                />
              </div>
              <span className="pt-2 flex gap-2 justify-end">
                <img
                  src="/logo_adiarko.jpg"
                  className="w-5 h-5 my-auto"
                  alt=""
                />
                <h1 className="font-medium text-white text-base my-auto">
                  Adiarko
                </h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
