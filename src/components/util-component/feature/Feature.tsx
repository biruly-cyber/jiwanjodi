"use client";
import React from "react";
import { IoMdLaptop } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";

const Feature = () => {
  return (
    <div className="flex justify-between items-center px-20 py-7 rounded-lg  ">
      <div className="flex mx-2 p-5 text-center  flex-col justify-center items-center">
        <IoMdLaptop className="text-7xl mb-2 " />
        <h2 className="text-2xl mb-2">Reach</h2>
        <p className="text-gray-600">
          Expand your reach and connect with more clients.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 mx-2 p-5   text-center">
        <RiMailSendLine className="text-7xl mb-2 " />
        <h2 className="text-2xl mb-2">Lead</h2>
        <p className="text-gray-600">Generate and manage leads efficiently.</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 mx-2 p-5   text-center">
        <GiLovers className="text-7xl mb-2 " />
        <h2 className="text-2xl mb-2">Book More Weddings</h2>
        <p className="text-gray-600">
          Increase your bookings and grow your wedding business.
        </p>
      </div>
    </div>
  );
};

export default Feature;
