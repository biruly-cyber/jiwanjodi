"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BellIcon,
  DesktopIcon,
  FaceIcon,
  HeartFilledIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  FaBarcode,
  FaBars,
  FaCheck,
  FaDashcube,
  FaDesktop,
  FaDollarSign,
  FaDownload,
  FaEvernote,
  FaHamburger,
  FaList,
  FaPlus,
  FaUserCheck,
} from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { addDays, format } from "date-fns";
import {
  Calculator,
  Calendar as CalendarIcon,
  CreditCard,
  LogOut,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Dahboard = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <>
      {/* header  */}
      <header className="flex justify-between px-10 py-3 items-center border-b">
        <div>
          <ul className="flex md:gap-9 items-center">
            <li className="cursor-pointer md:hidden block">
              {/* drawer  */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">
                    <FaBars />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>EventKaren.com</DrawerTitle>
                      <DrawerDescription className="flex justify-center gap-1">
                        Celebrate your event with{" "}
                        <HeartFilledIcon className="text-red-500" />
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerClose asChild>
                      <Command className="rounded-lg border shadow-md">
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                            <CommandItem>
                              <Calculator className="mr-2 h-4 w-4" />
                              <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                              <Smile className="mr-2 h-4 w-4" />
                              <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem>
                              <Calculator className="mr-2 h-4 w-4" />
                              <span>Calculator</span>
                            </CommandItem>
                          </CommandGroup>
                          <CommandSeparator />
                          <CommandGroup heading="Settings">
                            <CommandItem>
                              <User className="mr-2 h-4 w-4" />
                              <span>Profile</span>
                              <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                              <CreditCard className="mr-2 h-4 w-4" />
                              <span>Billing</span>
                              <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                              <Settings className="mr-2 h-4 w-4" />
                              <span>Settings</span>
                              <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </DrawerClose>

                    <DrawerFooter className="mt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Setting</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </li>
            <li className="cursor-pointer md:block hidden text-2xl font-semibold">
              Eventkaren.com
            </li>
            <li className="cursor-pointer md:block hidden">Overview</li>
            <li className="cursor-pointer md:block hidden">Customers</li>
            <li className="cursor-pointer md:block hidden">Products</li>
            <li className="cursor-pointer md:block hidden">Setting</li>
          </ul>
        </div>
        <div>
          <ul className="flex md:gap-9 justify-center items-center">
            <li className="cursor-pointer md:block hidden">
              <Input type="search" placeholder="Search" />
            </li>
            {/* <li className="cursor-pointer md:block hidden">
              <BellIcon className="text-7xl" />
            </li>
            <li className="cursor-pointer md:block hidden">
              <MoonIcon />
              <SunIcon />
            </li> */}
            <li className="cursor-pointer ">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Command className="rounded-lg border shadow-md">
                        {/* <CommandInput placeholder="Type a command or search..." /> */}
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                            <CommandItem>
                              <Calculator className="mr-2 h-4 w-4" />
                              <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                              <Smile className="mr-2 h-4 w-4" />
                              <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem>
                              <Calculator className="mr-2 h-4 w-4" />
                              <span>Calculator</span>
                            </CommandItem>
                          </CommandGroup>
                          <CommandSeparator />
                          <CommandGroup heading="Settings">
                            <CommandItem>
                              <User className="mr-2 h-4 w-4" />
                              <span>Profile</span>
                              <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                              <CreditCard className="mr-2 h-4 w-4" />
                              <span>Billing</span>
                              <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                              <Settings className="mr-2 h-4 w-4" />
                              <span>Settings</span>
                              <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="text-red-500">
                              <LogOut className="mr-2 h-4 w-4" />
                              <span>Sign Out</span>
                              <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </li>
          </ul>
        </div>
      </header>
      {/* end header  */}

      {/* title head  */}
      <div className="flex justify-between px-6 md:px-14 py-4">
        <span className="text-xl md:text-3xl font-bold">Dashboard</span>
        <div className="flex gap-10">
          {/* new post   */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="block">
                Add New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you are
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* date range picker  */}
          <div className={`${cn("grid gap-2")} hidden md:block`}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-auto justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button variant="secondary" className="hidden md:block">Download</Button>
        </div>
      </div>

      {/* menubar  */}
      <div className=" flex justify-between px-4 md:px-14 overflow-x-scroll">
        <ul className="flex gap-5 text-black bg-gray-50 p-2 rounded-md ">
          <li className="cursor-pointer border px-2 py-1 rounded-md border-white bg-blue-700 text-white">
            Overview
          </li>
          <li className="cursor-pointer border px-2 py-1 rounded-md ">
            Analytics
          </li>
          <li className="cursor-pointer border px-2 py-1 rounded-md ">
            Content
          </li>
          <li className="cursor-pointer border px-2 py-1 rounded-md ">
            Reports
          </li>
          <li className="cursor-pointer border px-2 py-1 rounded-md ">
            Customer
          </li>
        </ul>
      </div>
      {/* end menubar  */}

      {/* analytic card */}
      <div className="flex flex-wrap justify-center md:justify-evenly mt-4 px-5 md:px-0">
        {/* Total Revenue */}
        <Card className="w-full sm:w-[350px] mb-4 md:mb-0">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Total Revenue</span>
              <FaDollarSign className="text-gray-600" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-2xl font-bold">
              <FaDollarSign className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* End Total Revenue */}

        {/* Total Sales */}
        <Card className="w-full sm:w-[350px] mb-4 md:mb-0">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Sales</span>
              <FaList className="text-gray-600" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-2xl font-bold">
              <FaPlus className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* End Total Sales */}

        {/* Customers */}
        <Card className="w-full sm:w-[350px] mb-4 md:mb-0">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Customers</span>
              <FaUserCheck className="text-gray-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-2xl font-bold">
              <FaPlus className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* End Customers */}

        {/* Event Booked */}
        <Card className="w-full sm:w-[350px] mb-4 md:mb-0">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Event Booked</span>
              <FaCheck className="text-gray-600" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-2xl font-bold">
              <FaPlus className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* End Event Booked */}
      </div>

      {/* analytics  */}
      <section className="flex md:flex-row flex-col justify-center md:justify-evenly p-8 gap-4">
        <div className="w-full md:w-2/3 h-80 bg-gray-50 border rounded-lg mb-4 md:mb-0"></div>
        <div className="w-full md:w-1/3 h-80 p-4 border rounded-lg overflow-y-scroll shadow-sm">
          <p className="text-lg">Recent Booking</p>
          <span className="text-sm">You made 265 sales this month.</span>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="sticky top-0 ">
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </section>
    </>
  );
};

export default Dahboard;
