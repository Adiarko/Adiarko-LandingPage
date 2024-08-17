import ClientBoard from "@/components/clientBoard";
import React from "react";

const Client = () => {
  return (
    <div className="w-full h-full justify-center pb-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-[#01080E] text-center text-base md:text-lg">
          We have<span className="text-[#FFC93E]"> 1000+ </span>satisfied
          customers across marketplace
        </h1>
        <div className="flex">
          <ClientBoard />
        </div>
      </div>
    </div>
  );
};

export default Client;
