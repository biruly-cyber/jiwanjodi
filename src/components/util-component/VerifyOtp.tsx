"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "../ui/use-toast";

type Props = {
  onVerify: (verificationCode: number) => void;
};

const VerifyOtp: React.FC<Props> = ({ onVerify }) => {
  const { toast } = useToast();
  const [otp, setOtp] = useState<string>("");

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const sendOtpToVerifyPage = () => {
    console.log("Verify OTP", otp);
    if (otp.length === 6) {
      onVerify(parseInt(otp, 10));
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid OTP",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center ">
      <Card className="w-full sm:w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Verification Code</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex md:grid w-full items-center gap-4">
              <div className="flex flex-col space-y-7 items-center">
                <InputOTP maxLength={6} value={otp} onChange={handleChange}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={sendOtpToVerifyPage}>Verify</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyOtp;
