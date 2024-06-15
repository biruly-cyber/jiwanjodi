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
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  FaCheck,
  FaDashcube,
  FaDollarSign,
  FaEvernote,
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

const Dahboard = () => {
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
          <ul className="flex gap-9 ">
            <li className="cursor-pointer">Overview</li>
            <li className="cursor-pointer">Customers</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Setting</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-9">
            <li className="cursor-pointer">
              <Input type="search" placeholder="Search" />
            </li>
            <li className="cursor-pointer">
              <BellIcon  className="text-7xl"/>
            </li>
            <li className="cursor-pointer flex">
              <MoonIcon />
              <SunIcon />
            </li>
            <li className="cursor-pointer">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
          </ul>
        </div>
      </header>
      {/* end header  */}

      {/* title head  */}
      <div className="flex justify-between px-14 py-4">
        <span className="text-4xl font-bold">Dashboard</span>
        <div className="flex gap-10">
          <Input type="date" placeholder="" />
          <Button>Download</Button>
        </div>
      </div>

      {/* menubar  */}
      <div className=" h-auto flex justify-between px-14">
        <div>
          <ul className="flex gap-5 text-black bg-gray-50">
            <li>Overview</li>
            <li>Analytics</li>
            <li>Content</li>
            <li>Reports</li>
            <li>Customer</li>
            <li>Setting</li>
          </ul>
        </div>
        <div></div>
      </div>
      {/* end menubar  */}

      {/* analytic card */}
      <div className="flex justify-evenly ">
        {/* total Revenue  */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Total Revenue</span>{" "}
              <FaDollarSign className="text-gray-600" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-4xl font-bold">
              <FaDollarSign className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* end total Revenue  */}

        {/* total sales    */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Sales</span> <DesktopIcon className="text-gray-600" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-4xl font-bold">
              <FaPlus className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* end total sales   */}

        {/* cutomer  */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Customers</span> <FaUserCheck className="text-gray-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-4xl font-bold">
              <FaPlus className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* customer end  */}

        {/* event booked  */}
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Event Booked</span>
              <FaCheck className="text-gray-600" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex justify-start items-center text-4xl font-bold">
              <FaPlus className="text-gray-600" /> 23832832
            </p>
            <span>+20.1% from last month</span>
          </CardContent>
        </Card>
        {/* end event booked  */}
      </div>

      {/* analytics  */}
      <section className="flex justify-evenly p-8 gap-4">
        <div className="w-2/3 h-80 bg-gray-50 border rounded-lg"></div>
        <div className="w-1/3 h-80 p-4 border rounded-lg overflow-y-scroll shadow-sm">
          <p className="text-lg ">Recent Booking</p>
          <span className="text-sm">You made 265 sales this month.</span>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
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
