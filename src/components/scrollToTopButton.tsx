"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 p-3 bg-[#FED45B] text-black rounded-full shadow-lg hover:bg-yellow-400 transition-opacity duration-1000 ease-in-out ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
