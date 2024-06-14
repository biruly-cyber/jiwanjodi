"use client";
import React, { useState, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import { Country, State, City, IState, ICity } from "country-state-city";
import Image from "next/image";
import img from "../../../../assets/sign-up-img.jpg";

const SignUpPage: React.FC = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedStateCode, setSelectedStateCode] = useState<string>();
  const [isStateSelected, setIsStateSelected] = useState<boolean>(false);
  const [sectorCategory, setSectorCategory] = useState<string[]>([]);

  const [nameOfBusiness, setNameOfBusiness] = useState<string>("");
  const [sectorType, setSectorType] = useState<string>("");
  const [selectCategory, setSelectCategory] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [minCost, setMinCost] = useState<number>(5000);
  const [pinCode, setPinCode] = useState<string>("");

  const sectorTypes = ["Wedding Venue", "Wedding Vendor", "Bride", "Groom"];

  const weddingVenues = [
    "Wedding Lawns Farmhouse",
    "Hotel",
    "Banquet Halls",
    "Marriage Garden",
    "Wedding Halls",
    "Wedding Resorts",
  ];
  const weddingVendors = [
    "Caterers",
    "Wedding Invitation",
    "Wedding Decor",
    "Wedding Gift",
    "Wedding Photographers",
    "Wedding Coordinators",
    "Wedding Music",
    "Wedding Videographers",
    "Wedding Transportation",
    "Wedding House",
    "Tent House",
    "Wedding Entertainment",
    "Florists",
    "Wedding Planner",
    "Wedding Decoration",
    "Wedding Cakes",
    "Wedding Agencies",
    "Wedding DJ",
    "Pandit",
    "Photobooth",
    "Astrologers",
  ];
  const brides = [
    "Bridal Lahenga",
    "Bridal Jewellery",
    "Bridal Makeup Artist",
    "Mehndi Artist",
    "Makeup Salon",
  ];
  const grooms = ["Sherwani", "Men's Grooming", "Men's Accessories"];

  useEffect(() => {
    const india = Country.getCountryByCode("IN");
    if (india) {
      const statesInIndia = State.getStatesOfCountry(india.isoCode);
      setStates(statesInIndia);
    }
  }, []);

  useEffect(() => {
    if (selectedStateCode) {
      const allCities = City.getCitiesOfState("IN", selectedStateCode);
      setCities(allCities);
    }
  }, [selectedStateCode]);

  const handleStateChange = (state: string, stateCode: string) => {
    setSelectedState(state);
    setIsStateSelected(true);
    setSelectedStateCode(stateCode);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const handleSectorTypeChange = (sector: string) => {
    setSectorType(sector);
    if (sector === "Wedding Venue") {
      setSectorCategory(weddingVenues);
    } else if (sector === "Wedding Vendor") {
      setSectorCategory(weddingVendors);
    } else if (sector === "Bride") {
      setSectorCategory(brides);
    } else if (sector === "Groom") {
      setSectorCategory(grooms);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", {
      nameOfBusiness,
      sectorType,
      selectCategory,
      selectedState,
      selectedCity,
      minCost,
      pinCode,
    });
  };

  return (
    <>
      <section className="flex justify-between items-center">
        <div className="h-screen w-0 md:w-[40%] -z-20">
          <Image
            src={img}
            alt="Photo by Drew Beamer"
            content="Photo by Drew Beamer"
            className="hidden md:block rounded-md object-cover h-screen blur-sm backdrop-blur-sm filter brightness-50"
          />
          <p className="hidden md:block font-semibold text-6xl text-center absolute top-96 left-10  bg-gradient-to-r from-white to-violet-600 text-transparent bg-clip-text">
            Try EventKaren.com <br />
            for Free and <br /> Grow your business.
          </p>
        </div>
        <div className="w-full md:w-[60%] h-screen  bg-[#fdfdfd]">
          <div className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 bg-white text-black shadow-sm">
            <nav className="flex justify-between items-center">
              <div className="cursor-pointer">
                <span className="text-lg sm:text-xl">EVENTKAREN</span>
              </div>
              <span className="text-xs sm:text-sm">
                Need Help: +91-6200932331
              </span>
            </nav>
          </div>

          <div className=" py-3 px-4 sm:p-6 md:p-8 flex justify-center items-center flex-col w-full">
            <div className="w-full max-w-lg px-4 py-4 flex flex-col border rounded-md shadow-md bg-white">
              <span className="font-semibold text-lg text-center uppercase">
                Business Details
              </span>
              <span className="text-xs mt-3 text-center bg-gradient-to-r from-pink-800 to-violet-900 text-transparent bg-clip-text">
                Create your own storefront and be visible to thousands of
                couples.
              </span>
              <div className="mt-4 flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name_of_business">Name of Business</Label>
                  <Input
                    type="text"
                    id="name_of_business"
                    placeholder="Name of Business"
                    className="w-full p-2 sm:p-4 h-10 sm:h-12"
                    value={nameOfBusiness}
                    onChange={(e) => setNameOfBusiness(e.target.value)}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-start gap-5">
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">Sector Type</Label>
                    <Select onValueChange={handleSectorTypeChange}>
                      <SelectTrigger className="w-full sm:w-[227px] p-2 sm:p-4 h-10 sm:h-12">
                        <SelectValue placeholder="Sector Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Sector</SelectLabel>
                          {sectorTypes.map((sector, index) => (
                            <SelectItem value={sector} key={index}>
                              {sector}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="gap-1.5">
                    <Label htmlFor="select_category">Select Category</Label>
                    <Select onValueChange={setSelectCategory}>
                      <SelectTrigger className="w-full sm:w-[227px] p-2 sm:p-4 h-10 sm:h-12">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          {sectorCategory.map((category, index) => (
                            <SelectItem value={category} key={index}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start gap-5">
                  <div className="gap-1.5">
                    <Label htmlFor="select_state">State</Label>
                    <Select
                      onValueChange={(value) => {
                        const selectedState = JSON.parse(value);
                        handleStateChange(
                          selectedState.name,
                          selectedState.stateCode
                        );
                      }}
                    >
                      <SelectTrigger className="w-full sm:w-[227px] p-2 sm:p-4 h-10 sm:h-12">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>State</SelectLabel>
                          {states.map((state) => (
                            <SelectItem
                              value={JSON.stringify({
                                name: state.name,
                                stateCode: state.isoCode,
                              })}
                              key={state.isoCode}
                            >
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="gap-1.5">
                    <Label htmlFor="select_city">City</Label>
                    <Select
                      disabled={!isStateSelected}
                      onValueChange={handleCityChange}
                    >
                      <SelectTrigger className="w-full sm:w-[227px] p-2 sm:p-4 h-10 sm:h-12">
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
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="pin_code">Pin code</Label>
                  <Input
                    type="text"
                    id="pin_code"
                    placeholder="Enter Pin Code"
                    className="w-full p-2 sm:p-4 h-10 sm:h-12"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  className="mt-6 sm:mt-10 w-full sm:w-auto"
                  onClick={handleSubmit}
                >
                  Create your Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
