"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addDays, format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Check,
  ChevronsUpDown,
  Loader2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { City, Country, ICity, IState, State } from "country-state-city";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import * as z from "zod";

type EventLocation = {
  state: string;
  city: string;
};

type NewUser = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  eventLocation: EventLocation;
  eventDate: number;
  eventFor: string;
};

// Define Zod schema for validation
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  eventLocation: z.object({
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
  }),
  eventDate: z.number().min(1, "Event date is required"),
  eventFor: z.string().min(1, "Event for is required"),
});

const SignUp = () => {
  const apiUrl = process.env.API_URL;
  const router = useRouter();
  const [date, setDate] = React.useState<Date>();
  const [userState, setUserState] = useState<NewUser>({
    name: "",
    email: "",
    password: "",
    mobile: "",
    eventLocation: { state: "", city: "" },
    eventDate: 0,
    eventFor: "",
  });
  const [openLocation, setOpenLocation] = React.useState(false);
  const [locationValue, setLocationValue] = React.useState("");
  const [openCountary, setOpenCountary] = React.useState(false);
  const [countaryValue, setCountaryValue] = React.useState("");
  const [isOtherOptionSelected, setIsOtherOptionSelected] = useState(false);
  const [otherOtionSelected, setOtherOptionSelected] = useState("");
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedStateCode, setSelectedStateCode] = useState<string>();
  const [isSignUpClicked, setIsSignUpClicked] = useState<Boolean>();
  const [errors, setErrors] = useState<Partial<Record<keyof NewUser, string>>>(
    {}
  );

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

  useEffect(() => {
    setUserState((prevState) => ({
      ...prevState,
      eventLocation: {
        ...prevState.eventLocation,
        state: countaryValue,
      },
    }));

    setUserState((prevState) => ({
      ...prevState,
      eventLocation: {
        ...prevState.eventLocation,
        city: locationValue,
      },
    }));

    setUserState((prevState: NewUser) => ({
      ...prevState,
      eventDate: date?.getTime() || 0, // Fallback to 0 if date is undefined
    }));

    setUserState((prevState) => ({
      ...prevState,
      eventFor: otherOtionSelected,
    }));
  }, [locationValue, countaryValue, date, otherOtionSelected]);

  //handle for sign up
  const handleToRedirectSignIn = () => {
    router.replace("./sign-in");
  };

  //handle on other radio
  const handleOnOther = () => {
    setIsOtherOptionSelected((prev) => !prev);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value !== "other") {
      setUserState((prevState) => ({
        ...prevState,
        eventFor: e.target.value,
      }));
    }
  };

  //handle on sign up
  const handleOnSignUp = async () => {
    try {
      setIsSignUpClicked(true);
      // Validate form data
      const validation = userSchema.safeParse(userState);
      if (!validation.success) {
        // Handle validation errors
        validation.error.errors.forEach((error) => {
          toast({
            title: "Validation Error",
            description: error.message,
            variant: "destructive",
          });
        });
        setIsSignUpClicked(false);
        return;
      }

      const response = await axios.post(
        `https://event-management-server-o19a.onrender.com/api/event-karen/v1/user/new`,
        {
          name: userState.name,
          email: userState.email,
          password: userState.password,
          mobile: userState.mobile,
          eventLocation: userState.eventLocation,
          eventDate: userState.eventDate,
          eventFor: userState.eventFor,
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
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSignUpClicked(false);
    }
  };

  return (
    <>
      <div className="w-full  flex flex-col md:flex-row items-center justify-around h-screen md:top-0 mx-auto bg-gray-50 p-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-2xl font-bold"> Eventkaren.com</p>

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

          <p className="mt-2 capitalize text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-700 ">
            Celebrate with Love
          </p>

          <p className="text-2xl mt-10 uppercase text-semibold">
            Enter your details to create your account
          </p>
        </div>
        <div className="max-w-md ">
          <Card className="w-full">
            <CardHeader>
              {/* <CardTitle className="text-center text-xl bg-gradient-to-r from-pink-500 to-red-500 text-white p-1 rounded-sm">
                SIGN IN
              </CardTitle> */}
              {/* <CardDescription className="text-center">
                Enter your details to create your account
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row w-full items-center justify-center gap-2">
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
                    <Input
                      id="name"
                      placeholder="Name"
                      value={userState.name}
                      onChange={(e) =>
                        setUserState((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Email"
                      value={userState.email}
                      onChange={(e) =>
                        setUserState((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={userState.password}
                      onChange={(e) =>
                        setUserState((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      type="tel"
                      id="mobile"
                      placeholder="Mobile number"
                      value={userState.mobile}
                      onChange={(e) =>
                        setUserState((prevState) => ({
                          ...prevState,
                          mobile: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className=" flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:justify-between md:items-center">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">State</Label>
                      <Popover
                        open={openCountary}
                        onOpenChange={setOpenCountary}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openCountary}
                            className="w-full md:w-[200px] justify-between"
                          >
                            {countaryValue
                              ? states.find(
                                  (state) => state.name === countaryValue
                                )?.name
                              : "Select State"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {states.map((state, index) => (
                                  <CommandItem
                                    key={index}
                                    value={state.name}
                                    onSelect={(currentValue) => {
                                      setCountaryValue(
                                        currentValue === countaryValue
                                          ? ""
                                          : currentValue
                                      );
                                      setSelectedStateCode(state?.isoCode);
                                      setOpenCountary(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        countaryValue === state.name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {state.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">City</Label>
                      <Popover
                        open={openLocation}
                        onOpenChange={setOpenLocation}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openLocation}
                            className="w-full md:w-[200px]  justify-between"
                          >
                            {locationValue
                              ? cities.find(
                                  (city) => city.name === locationValue
                                )?.name
                              : "Select City.."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {cities.map((city) => (
                                  <CommandItem
                                    key={city.name}
                                    value={city.name}
                                    onSelect={(currentValue) => {
                                      setLocationValue(
                                        currentValue === locationValue
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenLocation(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        locationValue === city.name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {city.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                        <Select
                          onValueChange={(value) => {
                            setDate(addDays(new Date(), parseInt(value)));
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="0">Today</SelectItem>
                            <SelectItem value="1">Tomorrow</SelectItem>
                            <SelectItem value="3">In 3 days</SelectItem>
                            <SelectItem value="7">In a week</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="rounded-md border">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Label htmlFor="i_m">I am</Label>
                    <RadioGroup
                      defaultValue="bride"
                      className="flex space-x-4"
                      onChange={handleUserChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bride" id="r1" />
                        <Label htmlFor="r1">Bride</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="groom" id="r2" />
                        <Label htmlFor="r2">Groom</Label>
                      </div>
                      <div
                        className={`flex items-center space-x-2 ${
                          isOtherOptionSelected ? "hidden" : "block"
                        }`}
                      >
                        <RadioGroupItem
                          value="other"
                          id="r3"
                          onClick={handleOnOther}
                        />
                        <Label htmlFor="r3">Other</Label>
                      </div>
                    </RadioGroup>
                    {isOtherOptionSelected && (
                      <Select
                        onValueChange={(value) => setOtherOptionSelected(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="guest">Guests</SelectItem>
                          <SelectItem value="relative">Relative</SelectItem>
                          <SelectItem value="professional">
                            Professional
                          </SelectItem>
                          <SelectItem value="press">Press</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-center">
              <Button
                onClick={handleOnSignUp}
                disabled={isSignUpClicked ? true : false}
              >
                {isSignUpClicked && <Loader2 className="animate-spin mx-2" />}{" "}
                Sign Up
              </Button>
              <span className="text-center text-sm text-gray-500 mt-5">
                Already have an account?
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleToRedirectSignIn}
                >
                  Sign In
                </span>
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;
