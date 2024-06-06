/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import img1 from "../../assets/Vector 2.svg";
import img2 from "../../assets/Vector 3.png";

const HeroSection = () => {
  return (
    <section className="flex justify-around absolute top-0 w-full h-screen bg-gradient-to-b from-white from-10% to-[#FF7582] -z-50">
      <div></div>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl">Uncover what you require for </h1>
        <h1 className="text-4xl"> your special occasion</h1>
        <div className="absolute w-[225.6px] h-[146.7px] left-[1155.48px] top-[254.38px]">
          <svg
            width="230"
            height="152"
            viewBox="0 0 230 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 50C-5 16 81.9999 -33.4999 124 42.0801C140 7.99997 224.123 -27.5449 228 50C231.5 120 118.5 122.5 124 149.08C111.834 144.413 63.5 124 42.5 109"
              stroke="url(#paint0_linear_174_4)"
              stroke-width="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_174_4"
                x1="2"
                y1="76"
                x2="294.5"
                y2="76"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#FF7582" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute w-[225.6px] h-[146.7px] left-[1155.48px] top-[254.38px]">
          {/* <!-- Content for Vector 2 --> */}
          {/* <img src={img1} alt="love1"/> */}
          {img1}
        </div>
        <div className="flex">
          <div className="flex gap-1 pt-8 pb-2">
            <span>icon</span>
            <Input
              type="text"
              placeholder="Select Vendor"
              className="border border-gray-600"
            />
            <Input
              type="text"
              placeholder="in Location"
              className="border border-gray-600"
            />
            <Button>Discover</Button>
          </div>
        </div>
        <span>1000+ of vender and couple trust on us.</span>
      </div>
    </section>
  );
};

export default memo(HeroSection);
