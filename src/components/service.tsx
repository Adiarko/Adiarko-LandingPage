import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MoveRight } from "lucide-react";

const Service = () => {
  return (
    <section
      id="service"
      className="container flex-col place-content-center space-y-4 py-24"
    >
      <div className="text-yellow-500 font-medium text-base text-center md:text-start md:text-2xl">
        What we do ?
      </div>
      <div className="grid grid-flow-row gap-4 md:gap-0 md:grid-rows-none md:grid-cols-5 lg:grid-cols-6 xl:gap-20 2xl:gap-12">
        <h1 className="font-bold text-2xl col-span-1 text-center md:text-start md:text-4xl md:col-span-2 md:leading-snug lg:col-span-2">
          Latest Technical Skills. Yours For The Taking
        </h1>
        <p className="text-[#A6A6A6] text-wrap col-span-1 text-xs text-center md:text-start md:text-sm md:col-span-3 md:ms-12 lg:ms-20 lg:col-span-4">
          Adiarko Indonesia didirikan pada tahun 2020, berawal dari sebuah
          perusahaan yang berfokus pada eCommerce untuk meraih pasar global.
          Kami telah berhasil menjual 200.000 produk ke seluruh dunia. Kini,
          Adiarko Indonesia ingin berbagi kesuksesan dan inovasi kami dengan
          Anda.
        </p>
      </div>
      <div className="justify-center flex py-12">
        <span className="font-semibold text-xl md:text-3xl">
          Our Services & Products
        </span>
      </div>
      <div className="flex gap-8 justify-center flex-col md:flex-row">
        <div className="flex mx-auto md:mx-0">
          <Card className="flex flex-col rounded-xl w-72 shadow-md text-center md:text-start">
            <CardHeader className="flex">
              <div className="flex mx-auto md:mx-0">
                <span className="p-4 rounded-full bg-[#6F75B22B]">
                  <img src="/envelope.png" className="w-8" alt="" />
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-col grow space-y-4">
              <CardTitle className="text-lg font-semibold">
                Digital Marketing
              </CardTitle>
              <CardDescription className="text-xs text-[#A6A6A6] text-wrap">
                Membantu UMKM memanfaatkan strategi digital marketing untuk
                meningkatkan jangkauan pasar dan penjualan.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex shrink-0 justify-between">
              <span className="flex gap-4 cursor-pointer py-1 transition ease-in-out duration-300 mx-auto md:mx-0 hover:px-2 hover:bg-[#6F75B22B] hover:rounded-full">
                <p className="text-[#666FC9] text-xs">See more</p>
                <MoveRight className="my-auto text-[#666FC9] w-3 h-3" />
              </span>
            </CardFooter>
          </Card>
        </div>
        <div className="flex mx-auto md:mx-0">
          <Card className="flex flex-col rounded-xl w-72 shadow-md text-center md:text-start">
            <CardHeader className="flex">
              <div className="flex mx-auto md:mx-0">
                <span className="p-4 rounded-full bg-[#FAF7DE]">
                  <img src="/pen_nib_straight.png" className="w-8" alt="" />
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-col grow space-y-4">
              <CardTitle className="text-lg font-semibold">
                Digital Academy
              </CardTitle>
              <CardDescription className="text-xs text-[#A6A6A6] text-wrap">
                Menyediakan bimbingan belajar komputer untuk siswa dari tingkat
                sekolah dasar hingga sekolah menengah atas, mempersiapkan
                generasi muda untuk menghadapi era digital.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex shrink-0 justify-between">
              <span className="flex gap-4 cursor-pointer py-1 transition ease-in-out duration-300 mx-auto md:mx-0 hover:px-2 hover:bg-[#FAF7DE] hover:rounded-full">
                <p className="text-[#DC9C3D] text-xs">See more</p>
                <MoveRight className="my-auto text-[#DC9C3D] w-3 h-3" />
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;
