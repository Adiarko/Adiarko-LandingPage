"use client";
import React from "react";
import { Button } from "./ui/button";

interface Btn {
  className: string;
  className2?: string;
  title: string;
  icon?: string;
}

const StylingButton = (props: Btn) => {
  const { className, className2, title, icon } = props;

  return (
    <div className="flex">
      <Button className={`rounded-xl ${className} px-5`}>
        <div className={`flex ${className2}`}>
          <p>{title}</p>
          <p className="my-auto">{icon}</p>
        </div>
      </Button>
    </div>
  );
};

export default StylingButton;
