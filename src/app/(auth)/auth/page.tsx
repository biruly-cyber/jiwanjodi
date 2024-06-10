"use client";
import NavbarVendor from "@/components/util-component/NavbarVendor";
import React, { memo, useState } from "react";
import VerifyOtp from "@/components/util-component/VerifyOtp";
import AuthNumber from "@/components/util-component/AuthNumber";
import { toast, useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

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
        router.replace('./sign-up')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <NavbarVendor />
      <div className="w-full absolute top-0 mx-auto flex justify-center items-center h-screen">
        {isSubmitted ? (
          <VerifyOtp onVerify={handleOnVerifyOtp} />
        ) : (
          <AuthNumber onPhoneNumberSubmit={handleOnPhoneNumberSubmit} />
        )}
      </div>
    </>
  );
};

export default memo(Auth);
