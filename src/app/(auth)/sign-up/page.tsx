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
        <div
          className="h-screen w-[40%] bg-black"
          style={{
            background: `url('../../../assets/sign-up-img.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-[60%] h-screen overflow-y-scroll bg-[#fdfdfd]">
          <div className="px-6 md:px-8 py-10 bg-white text-black shadow-sm">
            <nav className="flex justify-between">
              <div className="cursor-pointer">
                <span className="text-xl">EVENTKAREN</span>
              </div>
              <span className="text-sm">Need Help: +91-6200932331</span>
            </nav>
          </div>

          <div className="p-8 flex justify-start items-start mx-auto flex-col w-full">
            <p className="font-semibold text-xl text-center">
              Try EventKaren.com for free and grow your business.
            </p>
            <div className="px-4 py-4 flex flex-col">
              <span className="font-semibold text-lg">Business Details</span>
              <span className="text-xs">
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
                    className="w-full p-4 h-12"
                    value={nameOfBusiness}
                    onChange={(e) => setNameOfBusiness(e.target.value)}
                  />
                </div>
                <div className="flex justify-start gap-5">
                  <div className="gap-1.5">
                    <Label htmlFor="select_sector">Sector Type</Label>
                    <Select onValueChange={handleSectorTypeChange}>
                      <SelectTrigger className="w-[180px] p-4 h-12">
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
                      <SelectTrigger className="w-[180px] p-4 h-12">
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
                <div className="flex justify-start gap-5">
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
                      <SelectTrigger className="w-[180px] p-4 h-12">
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
                      <SelectTrigger className="w-[180px] p-4 h-12">
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
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="pin_code">Pin code</Label>
                  <Input
                    type="text"
                    id="pin_code"
                    placeholder="Enter Pin Code"
                    className="w-full p-4 h-12"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Button className="mt-10 w-auto" onClick={handleSubmit}>
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
