"use client";
import CustomerNabar from "@/components/util-component/customer-navbar/CustomerNabar";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SignUp = () => {
  return (
    <>
      <div>
        <CustomerNabar />
      </div>

      <div className="w-full  relative md:absolute flex flex-col md:flex-row items-center justify-around h-screen md:top-0 mx-auto bg-gray-50 md:-z-10 p-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex justify-center md:justify-start">
            <span className="capitalize text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Your special day
            </span>
            <svg
              width="40"
              height="40"
              viewBox="0 1 15 15"
              fill="#e11d48"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                fill="#e11d48"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="capitalize text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-700 bg-200%"
          >
            Celebrate with Love
          </motion.div>
        </div>
        <div className="w-full max-w-xs">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center text-xl bg-gradient-to-r from-pink-500 to-red-500 text-white p-1 rounded-sm">
                SIGN IN
              </CardTitle>
              <CardDescription className="text-center">
                Enter your details to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <div className="flex items-center justify-center w-full gap-2 border p-1 rounded-sm">
                  <FaGoogle className="text-xl" />
                  <span className="text-sm font-semibold">Google</span>
                </div>
                <div className="flex items-center justify-center w-full gap-2 border p-1 rounded-sm">
                  <FaGoogle className="text-xl" />
                  <span className="text-sm font-semibold">Google</span>
                </div>
              </div>
              <div className="flex justify-between items-center my-4">
                <Separator className="w-[40%]" />
                <span className="px-3">Or</span>
                <Separator className="w-[40%]" />
              </div>

              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Location</Label>
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>North America</SelectLabel>
                          <SelectItem value="est">
                            Eastern Standard Time (EST)
                          </SelectItem>
                          <SelectItem value="cst">
                            Central Standard Time (CST)
                          </SelectItem>
                          <SelectItem value="mst">
                            Mountain Standard Time (MST)
                          </SelectItem>
                          <SelectItem value="pst">
                            Pacific Standard Time (PST)
                          </SelectItem>
                          <SelectItem value="akst">
                            Alaska Standard Time (AKST)
                          </SelectItem>
                          <SelectItem value="hst">
                            Hawaii Standard Time (HST)
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Europe & Africa</SelectLabel>
                          <SelectItem value="gmt">
                            Greenwich Mean Time (GMT)
                          </SelectItem>
                          <SelectItem value="cet">
                            Central European Time (CET)
                          </SelectItem>
                          <SelectItem value="eet">
                            Eastern European Time (EET)
                          </SelectItem>
                          <SelectItem value="west">
                            Western European Summer Time (WEST)
                          </SelectItem>
                          <SelectItem value="cat">
                            Central Africa Time (CAT)
                          </SelectItem>
                          <SelectItem value="eat">
                            East Africa Time (EAT)
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Asia</SelectLabel>
                          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                          <SelectItem value="ist">
                            India Standard Time (IST)
                          </SelectItem>
                          <SelectItem value="cst_china">
                            China Standard Time (CST)
                          </SelectItem>
                          <SelectItem value="jst">
                            Japan Standard Time (JST)
                          </SelectItem>
                          <SelectItem value="kst">
                            Korea Standard Time (KST)
                          </SelectItem>
                          <SelectItem value="ist_indonesia">
                            Indonesia Central Standard Time (WITA)
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Australia & Pacific</SelectLabel>
                          <SelectItem value="awst">
                            Australian Western Standard Time (AWST)
                          </SelectItem>
                          <SelectItem value="acst">
                            Australian Central Standard Time (ACST)
                          </SelectItem>
                          <SelectItem value="aest">
                            Australian Eastern Standard Time (AEST)
                          </SelectItem>
                          <SelectItem value="nzst">
                            New Zealand Standard Time (NZST)
                          </SelectItem>
                          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>South America</SelectLabel>
                          <SelectItem value="art">
                            Argentina Time (ART)
                          </SelectItem>
                          <SelectItem value="bot">
                            Bolivia Time (BOT)
                          </SelectItem>
                          <SelectItem value="brt">
                            Brasilia Time (BRT)
                          </SelectItem>
                          <SelectItem value="clt">
                            Chile Standard Time (CLT)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Country</Label>
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>North America</SelectLabel>
                          <SelectItem value="est">
                            Eastern Standard Time (EST)
                          </SelectItem>
                          <SelectItem value="cst">
                            Central Standard Time (CST)
                          </SelectItem>
                          <SelectItem value="mst">
                            Mountain Standard Time (MST)
                          </SelectItem>
                          <SelectItem value="pst">
                            Pacific Standard Time (PST)
                          </SelectItem>
                          <SelectItem value="akst">
                            Alaska Standard Time (AKST)
                          </SelectItem>
                          <SelectItem value="hst">
                            Hawaii Standard Time (HST)
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Europe & Africa</SelectLabel>
                          <SelectItem value="gmt">
                            Greenwich Mean Time (GMT)
                          </SelectItem>
                          <SelectItem value="cet">
                            Central European Time (CET)
                          </SelectItem>
                          <SelectItem value="eet">
                            Eastern European Time (EET)
                          </SelectItem>
                          <SelectItem value="west">
                            Western European Summer Time (WEST)
                          </SelectItem>
                          <SelectItem value="cat">
                            Central Africa Time (CAT)
                          </SelectItem>
                          <SelectItem value="eat">
                            East Africa Time (EAT)
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Asia</SelectLabel>
                          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                          <SelectItem value="ist">
                            India Standard Time (IST)
                          </SelectItem>
                          <SelectItem value="cst_china">
                            China Standard Time (CST)
                          </SelectItem>
                          <SelectItem value="jst">
                            Japan Standard Time (JST)
                          </SelectItem>
                          <SelectItem value="kst">
                            Korea Standard Time (KST)
                          </SelectItem>
                          <SelectItem value="ist_indonesia">
                            Indonesia Central Standard Time (WITA)
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Australia & Pacific</SelectLabel>
                          <SelectItem value="awst">
                            Australian Western Standard Time (AWST)
                          </SelectItem>
                          <SelectItem value="acst">
                            Australian Central Standard Time (ACST)
                          </SelectItem>
                          <SelectItem value="aest">
                            Australian Eastern Standard Time (AEST)
                          </SelectItem>
                          <SelectItem value="nzst">
                            New Zealand Standard Time (NZST)
                          </SelectItem>
                          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>South America</SelectLabel>
                          <SelectItem value="art">
                            Argentina Time (ART)
                          </SelectItem>
                          <SelectItem value="bot">
                            Bolivia Time (BOT)
                          </SelectItem>
                          <SelectItem value="brt">
                            Brasilia Time (BRT)
                          </SelectItem>
                          <SelectItem value="clt">
                            Chile Standard Time (CLT)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Event Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Label htmlFor="i_m">I am</Label>
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Bride</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Groom</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-center">
              <Button>Sign Up</Button>
              <span className="text-center text-sm text-gray-500 mt-5">
                Already have an account?{" "}
                <span className="text-blue-500 cursor-pointer">Sign In</span>
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;
