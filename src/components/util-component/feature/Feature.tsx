"use client";
import React from "react";
import { IoMdLaptop } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";

const Feature = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-7 ">
      <div className="flex flex-col justify-center items-center flex-1 mx-2 mb-5 md:mb-0 p-5 text-center ">
        <RiMailSendLine className="text-7xl mb-2 " />
        <h2 className="text-2xl mb-2">Get more leads</h2>
        <p className="text-gray-600">
          Reply directly to potential clients via email or your account
          Dashboard.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 mx-2 mb-5 md:mb-0 p-5 text-center ">
        <IoMdLaptop className="text-7xl mb-2" />
        <h2 className="text-2xl mb-2">Reach engaged couples</h2>
        <p className="text-gray-600">
          Couples can find your Storefront and request information about your
          business.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 mx-2 p-5 text-center ">
        <GiLovers className="text-7xl mb-2" />
        <h2 className="text-2xl mb-2">Book More Weddings</h2>
        <p className="text-gray-600">
          Increase your bookings and grow your wedding business.
        </p>
      </div>
    </div>
  );
};

export default Feature;
