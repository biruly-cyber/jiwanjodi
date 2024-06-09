"use client";
import React, { use, useEffect, useState } from "react";
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
import { Country, State, City, IState, ICity } from "country-state-city";
import { stat } from "fs";

const SignUpPage = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedState, setSelectedState] = useState<string>();
  const [selectedStateCode, setSelectedStateCode] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [isStateSelected, setIsStateSelected] = useState<boolean>(false);

  // Fetch states only once when the component mounts
  useEffect(() => {
    // Fetch states only once when the component mounts
    const india = Country.getCountryByCode("IN");
    if (india) {
      const statesInIndia = State.getStatesOfCountry(india.isoCode);
      setStates(statesInIndia);
    }
  }, []);

  useEffect(() => {
    console.log(selectedState);

    if (selectedState) {
      const allCities = City.getCitiesOfState("IN", selectedState);
      setCities(allCities);
    }
  }, [selectedState, selectedStateCode]);

  const handleChangestate = (state: string, stateCode: string) => {
    console.log(state);
    setSelectedState(state);
    setSelectedStateCode(stateCode);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <>
      <section className="flex justify-between items-center">
        <div
          className={`h-screen w-[40%] bg-black`}
          style={{
            backgroundImage: `url('../../../assets/sign-up-img.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Content for the first div */}
        </div>
        <div className="w-[60%]  h-screen overflow-y-scroll bg-[#fdfdfd]">
          <div className="px-6 md:px-8 py-10 bg-white text-black shadow-sm">
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
          <div className="p-8 flex justify-start items-start mx-auto flex-col w-full">
            <p className="font-seminbold text-xl text-center">
              Try EventKaren.com for free and grow your business.
            </p>
            <div className="px-4 py-4 flex flex-col">
              <span className="font-semibold text-lg">Business Details</span>
              <span className=" text-xs">
                Create your own storefront and be visible to thousands of
                couples.
              </span>
              <div className="mt-4 flex flex-col gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name_of_business">Name of Business</Label>
                  <Input
                    type="text"
                    id="name_of_business"
                    placeholder="Name of Business"
                    className="w-full"
                  />
                </div>
                {/* sector type and category */}
                <div className="flex justify-start gap-5">
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
                {/* state and city  */}
                <div className="flex justify-start gap-5">
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">State</Label>
                    <Select
                      onValueChange={(value) => {
                        const selectedState = JSON.parse(value);
                        handleChangestate(
                          selectedState.name,
                          selectedState.stateCode
                        );
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>State</SelectLabel>
                          {states.map((state, index) => (
                            <SelectItem value={state.name} key={index}>
                              {state.name}
                            </SelectItem>
                          ))}
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
                          <SelectLabel>Cities</SelectLabel>
                          {cities.map((city, index) => (
                            <SelectItem value={city.name} key={index}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {/* cost and other  */}
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name_of_business">Pin code</Label>
                  <Input
                    type="text"
                    id="pin_code"
                    placeholder="Enter Pin Code"
                  />
                </div>

                <div className="flex justify-between ">
                  <div className="flex flex-col">
                    <Label htmlFor="airplane-mode">Negotiable</Label>
                    <span className="text-xs">Price is negotiable?</span>
                  </div>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="min_cost">Minimum Cost</Label>
                    <Slider defaultValue={[20]} max={100} step={1} />
                  </div>
                  <Input
                    type="number"
                    id="min_cost"
                    placeholder="Minimum Cost"
                    className="w-32"
                  />
                </div>
              </div>
              <span className="font-semibold text-lg mt-9">
                Login Information
              </span>
              <div className="flex flex-col gap-4 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="number" id="phone" placeholder="Phone Number" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="Password" />
                  <span className="text-xs">
                    Your password must be between 8 and 48 characters and
                    include at least 1 lowercase letter, 1 capital letter, 1
                    number, and no spaces.
                  </span>
                </div>
              </div>
              <div>
                <Button className="mt-10 w-auto">Create our Account</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
