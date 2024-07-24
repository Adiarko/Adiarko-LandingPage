import React from "react";
import ClientBoard from "./clientBoard";

const Client = () => {
  return (
    <div className="w-full h-full justify-center pb-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-lg text-[#01080E] text-center">
          We have<span className="text-[#FFC93E]"> 240+ </span>satisfied clients
        </h1>
        <div className="flex">
          <ClientBoard />
        </div>
      </div>
    </div>
  );
};

export default Client;
