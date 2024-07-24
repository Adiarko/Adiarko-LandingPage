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
    <main className="flex min-h-screen flex-col place-content-center">
      <section className="max-w-full w-full">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 border-4 rounded-2xl p-8">
              <h1 className="font-bold text-xl">
                Mari Kita Berkembang Bersama
              </h1>
              <p className="pb-4 text-xs">
                Bekerjasama dengan tim terkemuka Adiarko yang menyediakan
                berbagai pilihan service untuk memenuhi kebutuhanmu. Pesan
                dengan kami untuk memulai.
              </p>
              <div className="grid gap-4 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input type="" placeholder="Nama Depan *" />
                  <Input type="" placeholder="Nama Belakang *" />
                </div>
                <Input type="" placeholder="Nama Instansi / Wali *" />
                <Input type="email" placeholder="Email *" />
              </div>
              <p className="text-xs">
                Apa yang dapat kami bantu? Pilih semua yang sesuai
              </p>
              <RadioGroup defaultValue="option-one" className="py-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="rounded-sm"
                    value="digital-marketing"
                    id="digital-marketing"
                  />
                  <Label htmlFor="digital-marketing" className="text-xs">
                    Digital Marketing
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="rounded-sm"
                    value="digital-academy"
                    id="digital-academy"
                  />
                  <Label htmlFor="digital-academy" className="text-xs">
                    Digital Academy
                  </Label>
                </div>
              </RadioGroup>
              <Textarea
                className="h-28"
                placeholder="Harap jelaskan proyek Anda secara detail * *"
              />
              <div className="flex items-center space-x-4 group">
                <Checkbox
                  id="terms"
                  className="border-[#9C9C9C] group-active:border-black group-focus-within:border-black"
                />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium text-[#9C9C9C] text-balance leading-none group-active:text-black group-focus-within:text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receive communications from Scale, and I understand
                  Scale will process my personal information in accordance with
                  Scale's Privacy Policy.*
                </label>
              </div>
              <StylingButton
                className="bg-gradient-to-b from-[#FFC93E] to-[#FF8F3E] text-xs text-white shadow-md hover:bg-yellow-500"
                className2="gap-4"
                title="Kirim"
                icon="&#x1F872;"
              />
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
              <p className="pb-8 text-xs">
                Lorem ipsum dolor sit amet consectetur. Tempus amet suspendisse
                lectus purus. Molestie accumsan mi mauris urna ut ipsum sit
                sagittis. Faucibus scelerisque metus non tellus facilisis augue
                dictum. Quam sed sed tempus elit. Sit morbi ullamcorper lacinia
                porta viverra diam nunc urna id.
              </p>
              <div className="flex flex-col pb-12 text-xs">
                <p>Diar Adrinantoko</p>
                <p>Owner Adiarko</p>
              </div>
              <div className="flex flex-col text-center gap-8">
                <p className="text-sm">
                  Dipercaya oleh beberapa klien ambisius dunia
                </p>
                <div className="flex flex-col gap-12 items-center">
                  <div className="flex justify-between gap-8 h-6">
                    <img src="/axn_vector.png" className="h-full" alt="" />
                    <img src="/lenovo_logo.png" className="h-full" alt="" />
                    <img src="/slack_logo.png" className="h-full" alt="" />
                    <img src="/youtube_vector.png" className="h-full" alt="" />
                  </div>
                  <div className="flex justify-between gap-8 h-7">
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
