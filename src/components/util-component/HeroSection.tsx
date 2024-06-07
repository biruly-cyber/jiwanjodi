/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import heroSetionStyle from "../../app/custom-css/hero-section.module.css";

const HeroSection = () => {
  return (
    <>
      <div className={heroSetionStyle.imageBackground}></div>
      <div className="bg-[#5F708E] min-h-screen opacity-80 absolute top-0 left-0 right-0 bottom-0 -z-40"></div>
      <section className="min-h-screen   flex items-center justify-center flex-col gap-2 absolute w-full top-0">
        <h1 className="text-7xl text-white">Celebrate with Love</h1>
        {/* <h1 className="text-4xl text-white"> your special occasion</h1> */}
       
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
            <Button className="bg-blue-600 hover:bg-blue-700">Discover</Button>
          </div>
        </div>
        <span>1000+ of vender and couple trust on us.</span>
      </section>
    </>
  );
};

export default memo(HeroSection);
