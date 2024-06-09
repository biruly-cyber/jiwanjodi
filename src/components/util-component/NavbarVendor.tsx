"use clients";
import React, { memo } from "react";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="px-6 md:px-8 py-2.5  sticky top-0 z-50 text-black shadow-sm">
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
            <li>Business Login</li>

            <li>Features</li>
            <li>Premium Services</li>
          </ul>
        </div>
      </nav>
      {/* bottom navbar  */}
    </div>
  );
};

export default memo(Navbar);
