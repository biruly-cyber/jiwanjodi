import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../app/custom-css/scrollbar.css";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from 'react-redux'
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <Provider store={store}>{children}</Provider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
