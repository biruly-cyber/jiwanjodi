import { BiSupport } from "react-icons/bi";
import { LuInstagram } from "react-icons/lu";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-w-screen">
      {/* navbar  */}
      <div className="px-6 md:px-8 py-1 border-b border-slate-600">
        {/* top nav help section  */}
        <div className="flex justify-end gap-2">
          <BiSupport className="text-xl "/>
          <span className="text-sm">Need Help:- +91-6200932331</span>
        </div>
        {/* main navbar  */}
        <nav className="flex justify-between">
          <div className="cursor-pointer">
            <span className="text-xl">LOGO</span>
          </div>
          <div className="py-3">
            <ul className="flex gap-12 cursor-pointer">
              <li>Planning</li>
              <li>Vendor</li>
              <li>Wedding</li>
              <li>Venue</li>
              <li>Bride</li>
              <li>Grooms</li>
              <li>Blog</li>
              <li className="border border-gray-600 px-4 py-1 rounded-full ">
                Are you a vendor?
              </li>
              <li className="border border-gray-600 px-4 py-1 rounded-full bg-gradient-to-r from-white to-[#FF7582]">
                Sign In
              </li>
            </ul>
          </div>
        </nav>

        {/* bottom navbar  */}
        <div className="flex justify-end gap-2">
          <span className="text-sm ">Follow us on: </span>
          <LuInstagram className="cursor-pointer text-lg"/>
          <AiOutlineYoutube className="cursor-pointer text-lg" />
          <AiOutlineFacebook className="cursor-pointer text-lg"/>
          <FaWhatsapp className="cursor-pointer text-lg"/>
        </div>
      </div>

      {/* end navbar  */}
    </main>
  );
}
