"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BiLoaderCircle } from "react-icons/bi";

type Props = {
  onPhoneNumberSubmit: (phoneNumber: string, isSubmitted: boolean) => void;
};

const AuthNumber: React.FC<Props> = ({ onPhoneNumberSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendOtp = () => {
    console.log("Sending OTP to:", phoneNumber);
    // Integrate OTP sending logic here
    onPhoneNumberSubmit(phoneNumber, true);
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full sm:w-[350px] shadow-md">
        <CardHeader>
          <CardTitle className="text-center uppercase">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 h-12"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={handleSendOtp}
            disabled={isSubmitted}
            className={`${
              isSubmitted ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isSubmitted ? (
              <span>
                <BiLoaderCircle className="animate-spin inline-block mr-2" />{" "}
                OTP Sent
              </span>
            ) : (
              "Send OTP"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthNumber;
