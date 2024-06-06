import React, { memo } from "react";
import { BiSupport } from "react-icons/bi";
import { LuInstagram } from "react-icons/lu";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="px-6 md:px-8 py-1 border-b border-slate-600 ">
      {/* top nav help section  */}
      <div className="flex justify-end gap-2">
        <BiSupport className="text-xl " />
        <span className="text-sm">Need Help:- +91-6200932331</span>
      </div>
      {/* main navbar  */}
      <nav className="flex justify-between">
        <div className="cursor-pointer">
          <span className="text-xl">LOGO</span>
        </div>
        <div className="py-3">
          <ul className="flex gap-12 cursor-pointer relative">
            <li>Planning</li>
            <li className="group relative">
              Vendor
              <ul className="absolute w-64 left-0 mt-2 hidden bg-white text-black border border-gray-200 rounded-lg group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
              </ul>
            </li>
            <li>Wedding</li>
            <li>Venue</li>
            <li>Bride</li>
            <li>Grooms</li>
            <li>Blog</li>
            <li>
              <Button className="border border-gray-600 px-4 rounded-full bg-transparent text-slate-900 hover:text-white">
                Are you a vendor?
              </Button>
            </li>
            <li>
              <Button className="px-4  rounded-full">Sign in</Button>
            </li>
          </ul>
        </div>
      </nav>
      {/* bottom navbar  */}
      <div className="flex justify-end gap-2">
        <span className="text-sm ">Follow us on: </span>
        <LuInstagram className="cursor-pointer text-lg" />
        <AiOutlineYoutube className="cursor-pointer text-lg" />
        <AiOutlineFacebook className="cursor-pointer text-lg" />
        <FaWhatsapp className="cursor-pointer text-lg" />
      </div>
    </div>
  );
};

export default memo(Navbar);
