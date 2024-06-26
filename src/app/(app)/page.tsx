"use client";

import HeroSection from "@/components/util-component/HeroSection";
import Navbar from "@/components/util-component/Navbar";
import dynamic from "next/dynamic";
// const ClientComponent = dynamic(() => import("@/components/couter/Couter"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="min-w-screen">
      {/* navbar  */}
      <Navbar />
      {/* end navbar  */}

      {/* hero section  start */}
      <HeroSection />
      {/* hero section  end */}
      {/* <div>
        <div>
          <title>Redux Toolkit in Next.js</title>
          <meta name="description" content="Using Redux Toolkit with Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </div>

        <main>
          <h1>Welcome to Next.js with Redux Toolkit</h1>
          <ClientComponent />
        </main>
      </div>*/}
    </main>
  );
}
