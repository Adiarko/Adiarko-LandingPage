import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container flex-col space-y-12">
        <div className="flex justify-between py-12">
          <div className="flex flex-col gap-4 w-[25%]">
            <Link href="#" className="flex gap-4">
              <img
                src="/logo_adiarko.jpg"
                className="w-10 h-10 my-auto"
                alt=""
              />
              <h1 className="font-semibold text-3xl my-auto">Adiarko</h1>
            </Link>
            <p className="text-xs text-[#A6A6A6] text-wrap">
              Lorem ipsum dolor sit amet consectetur. Praesent nascetur in diam
              ac sit purus volutpat integer donec. Nunc gravida vulputate
              adipiscing morbi nec pulvinar elementum sollicitudin.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-[#1E1E1E]">
                <img src="/facebook_icon.png" className="w-3 h-3" alt="" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-[#1E1E1E]">
                <img src="/instagram_icon.png" className="w-3 h-3" alt="" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-[#1E1E1E]">
                <img src="/x_icon.png" className="w-3 h-3" alt="" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-[#1E1E1E]">
                <img src="/youtube_icon.png" className="w-3 h-3" alt="" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-[#1E1E1E]">
                <img src="/tiktok_icon.png" className="w-3 h-3" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Contact & About</h2>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Book a demo
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              About
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Review
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Industries
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Technical</h2>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Release Note
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Service
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Site Map
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Term & Conditions</h2>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Term & Conditions
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Service
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Cookie Policy
            </Link>
            <Link href="#" className="text-xs text-[#A6A6A6] hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex border-t-2 border-[#151515] justify-center">
          <p className="py-4 text-xs text-[#A6A6A6]">
            Copyright 2024 Adiarko, Corp. All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
