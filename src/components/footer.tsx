import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container flex-col space-y-12">
        <div className="flex flex-col md justify-between py-12 gap-4 md:flex-row">
          <div className="flex flex-col gap-4 md:w-[35%] lg:w-[25%]">
            <Link href="#" className="flex gap-4">
              <img
                src="/logo_adiarko.jpg"
                className="my-auto w-8 h-8 md:w-10 md:h-10"
                alt=""
              />
              <h1 className="font-semibold my-auto text-2xl md:text-3xl">
                Adiarko
              </h1>
            </Link>
            <p className="text-xs text-[#A6A6A6] text-wrap">
              We help businesses and people to harness the power of digital
              technology, enabling seamless transformation and growth.
            </p>
            <Link
              href="/"
              className="text-xs text-[#A6A6A6] underline hover:text-white"
            >
              Privacy & Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <Link
              href="/get-started"
              className="text-xs text-[#A6A6A6] hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/#service"
              className="text-xs text-[#A6A6A6] hover:text-white"
            >
              About
            </Link>
            <Link
              href="/#review"
              className="text-xs text-[#A6A6A6] hover:text-white"
            >
              Review
            </Link>
            <Link
              href="/career"
              className="text-xs text-[#A6A6A6] hover:text-white"
            >
              Career
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-xl font-semibold">Follow Us On</h2>
            <Link
              href="https://www.facebook.com/Adiarko.id/"
              className="grid grid-cols-3 text-xs text-[#A6A6A6] w-1/3 -ms-4 md:w-full hover:text-white"
            >
              <img src="/facebook_icon.png" className="h-4 mx-auto" alt="" />
              <p className="my-auto col-span-2">Facebook</p>
            </Link>
            <Link
              href="https://www.instagram.com/adiarko.id"
              className="grid grid-cols-3 text-xs text-[#A6A6A6] w-1/3 -ms-4 md:w-full hover:text-white"
            >
              <img src="/instagram_icon.png" className="h-4 mx-auto" alt="" />
              <p className="my-auto col-span-2">Instagram</p>
            </Link>

            <Link
              href="https://www.youtube.com/@adiarko"
              className="grid grid-cols-3 text-xs text-[#A6A6A6] w-1/3 -ms-4 md:w-full hover:text-white"
            >
              <img src="/youtube_icon.png" className="h-4 mx-auto" alt="" />
              <p className="my-auto col-span-2">Youtube</p>
            </Link>
            <Link
              href="https://www.tiktok.com/@adiarko?is_from_webapp=1&sender_device=pc"
              className="grid grid-cols-3 text-xs text-[#A6A6A6] w-1/3 -ms-4 md:w-full hover:text-white"
            >
              <img src="/tiktok_icon.png" className="h-4 mx-auto" alt="" />
              <p className="my-auto col-span-2">TikTok</p>
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
