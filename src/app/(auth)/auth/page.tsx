"use client";
import NavbarVendor from "@/components/util-component/NavbarVendor";
import React, { memo, useState } from "react";
import VerifyOtp from "@/components/util-component/VerifyOtp";
import AuthNumber from "@/components/util-component/AuthNumber";
import { toast, useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import img from "../../../assets/bg_wed.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Feature from "@/components/util-component/feature/Feature";

const Auth = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [otp, setOtp] = useState<number | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // handleOnPhoneNumberSubmit
  const handleOnPhoneNumberSubmit = async (
    phoneNumber: string,
    isSubmitted: boolean
  ) => {
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
    setIsSubmitted(isSubmitted);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/send/otp",
        {
          phoneNumber,
        }
      );
      const { success, message } = response.data;
      if (success) {
        toast({
          title: "Success",
          description: message,
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  // handleOnVerifyOtp
  const handleOnVerifyOtp = async (otp: number) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/verify/otp",
        {
          otp,
          phoneNumber,
        }
      );

      const { success, message } = response.data;
      if (success) {
        toast({ title: "Success", description: message, variant: "default" });
        router.replace("./sign-up");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  // farmer motion
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(244, 63, 94, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(244, 63, 94, 1)",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <NavbarVendor />
      <div className=" h-auto flex justify-between">
        <div></div>
        <div className="z-20 transform -rotate-45 h-40">
          <motion.svg
            width="1000"
            height="110"
            viewBox="10 1 1 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.2, rotate: 90 }}
          >
            <motion.path
              d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
              fill="#f43f5e"
              fill-rule="evenodd"
              clip-rule="evenodd"
              variants={icon}
              initial="hidden"
              animate="visible"
            ></motion.path>
          </motion.svg>
        </div>
      </div>

      <div className="w-full absolute top-0 mx-auto flex justify-between items-center h-2/3 -z-10">
        <div className="w-2/3 h-full">
          <Image
            src={img}
            alt="Photo by Drew Beamer"
            fill
            className=" object-cover filter brightness-50 blur-sm backdrop-blur-none"
          />
          <span className="absolute top-48 left-48 text-4xl font-bold text-white uppercase bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Get start with free <br /> and brand Grow your business.
          </span>
        </div>
        <div className="md:px-40 z-10">
          {isSubmitted ? (
            <VerifyOtp onVerify={handleOnVerifyOtp} />
          ) : (
            <AuthNumber onPhoneNumberSubmit={handleOnPhoneNumberSubmit} />
          )}
        </div>
      </div>

      {/* feature section */}
      <div className="md:mt-52">
        <Feature />
      </div>
    </>
  );
};

export default memo(Auth);
