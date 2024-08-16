import StylingButton from "@/components/stylingButton";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <main className="flex py-8 flex-col min-[1920px]:h-dvh min-[1920px]:place-content-center">
      <section className="max-w-full w-full">
        <div className="container">
          <div className="grid grid-flow-row xl:grid-cols-2 xl:grid-rows-none gap-4">
            <div>
              <form className="flex flex-col gap-4 border-4 rounded-2xl p-8">
                <h1 className="font-bold text-xl">Let's Grow Together!</h1>
                <p className="pb-4 text-xs">
                  Join us on this journey to boost your business, innovate, and
                  reach new heights. Together, we can achieve more and make a
                  lasting impact.
                </p>
                <div className="grid gap-4 pb-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name *" />
                    <Input placeholder="Last Name *" />
                  </div>
                  <Input placeholder="Institution Name *" />
                  <Input type="email" placeholder="Email *" />
                </div>
                <p className="text-xs">
                  How can we help? Select all that apply
                </p>
                <RadioGroup className="py-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="rounded-sm"
                      id="digital-marketing"
                      value="digital-marketing"
                    />
                    <Label htmlFor="digital-marketing" className="text-xs">
                      Digital Marketing
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="rounded-sm"
                      id="digital-academy"
                      value="digital-academy"
                    />
                    <Label htmlFor="digital-academy" className="text-xs">
                      Digital Academy
                    </Label>
                  </div>
                </RadioGroup>
                <Textarea
                  className="h-28 caret-indigo-500"
                  placeholder="Please describe your project in detail * *"
                />
                <div className="flex items-center space-x-4 group">
                  <Checkbox
                    id="terms"
                    className="border-[#9C9C9C] group-active:border-black group-focus-within:border-black"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs font-medium text-[#9C9C9C] md:leading-none xl:text-balance group-active:text-black group-focus-within:text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to receive communications from Scale, and I
                    understand Scale will process my personal information in
                    accordance with Scale's Privacy Policy.*
                  </label>
                </div>
                <StylingButton
                  className="bg-gradient-to-b from-[#FFC93E] to-[#FF8F3E] text-xs text-white shadow-md hover:bg-yellow-500"
                  className2="gap-4"
                  title="Send"
                  icon="&#x1F872;"
                />
              </form>
            </div>
            <div className="flex flex-col gap-4 border-4 rounded-2xl p-8">
              <Link className="flex items-center gap-2" href="/">
                <img
                  src="/logo_adiarko.jpg"
                  className="w-6 h-6 mb-auto"
                  alt=""
                />
                <span className="font-bold text-xl">Adiarko</span>
              </Link>
              <p className="pb-8 text-xs text-justify">
                We specialize in digital marketing and our Digital Academy. Our
                digital marketing services boost online presence, build strong
                branding, and attract customers through SEO, social media,
                content creation, email marketing, and PPC advertising. Our
                Digital Academy offers courses from basic computer literacy to
                advanced programming, preparing students for successful careers
                with hands-on learning and expert instruction.
              </p>
              <div className="flex flex-col text-center gap-8">
                <p className="text-xs md:text-sm">
                  We&apos;ve connected with thousands of people around the
                  globe.
                </p>
                <div className="flex flex-col items-center gap-8 md:gap-12">
                  <div className="flex gap-4 h-3 justify-center md:justify-between md:gap-8 md:h-6">
                    <img src="/axn_vector.png" className="h-full" alt="" />
                    <img src="/lenovo_logo.png" className="h-full" alt="" />
                    <img src="/slack_logo.png" className="h-full" alt="" />
                    <img src="/youtube_vector.png" className="h-full" alt="" />
                  </div>
                  <div className="flex gap-4 h-4 justify-center md:justify-between md:gap-8 md:h-7">
                    <img src="/amazon_vector.png" className="h-full" alt="" />
                    <img src="/google_vector.png" className="h-full" alt="" />
                    <img
                      src="/microsoft_vector.png"
                      className="h-full"
                      alt=""
                    />
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

export default GetStarted;
