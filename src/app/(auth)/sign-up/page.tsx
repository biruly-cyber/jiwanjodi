"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <div
          className={`h-screen w-[30%] bg-black`}
          style={{
            backgroundImage: `url('../../../assets/sign-up-img.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Content for the first div */}
        </div>
        <div className="w-[70%]  h-screen overflow-y-scroll">
          <div className="px-6 md:px-8 py-10   z-50 text-black shadow-sm">
            {/* main navbar  */}
            <nav className="flex justify-between">
              <div className="cursor-pointer">
                <span className="text-xl">EVENTKAREN</span>
              </div>
              <span className="text-sm">Need Help:- +91-6200932331</span>
            </nav>
            {/* bottom navbar  */}
          </div>

          {/* QUATE FOR THE BUSINESS  */}
          <div className="p-8">
            <p className="font-seminbold text-3xl text-start">
              Try EventKaren.com for free and grow your business.
            </p>
            <div
              className="py-4 flex flex-col
            gap-2"
            >
              <span className="font-semibold text-lg">Business Details</span>
              <span className=" text-sm">
                Create your own storefront and be visible to thousands of
                couples.
              </span>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name_of_business">Name of Business</Label>
                  <Input
                    type="text"
                    id="name_of_business"
                    placeholder="Name of Business"
                  />
                </div>
                <div className="flex justify-start">
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">Sector Type</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sector Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">Select Category</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">State</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">City</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name_of_business">Pin code</Label>
                  <Input
                    type="text"
                    id="pin_code"
                    placeholder="Enter Pin Code"
                  />
                </div>
                <div>
                  <Slider defaultValue={[20]} max={100} step={1} />
                </div>
                <div>
                  <Label htmlFor="airplane-mode">Negotiable</Label>
                  <Switch id="airplane-mode" />
                </div>
              </div>
              <span className="font-semibold text-lg">Login Information</span>
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="Password" />
                  <span>
                    Your password must be between 8 and 48 characters and
                    include at least 1 lowercase letter, 1 capital letter, 1
                    number, and no spaces.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Button>Create our Account</Button>
        </div>
      </section>
    </>
  );
};

export default page;
