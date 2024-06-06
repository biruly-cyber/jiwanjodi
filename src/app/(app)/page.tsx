import HeroSection from "@/components/util-component/HeroSection";
import Navbar from "@/components/util-component/Navbar";


export default function Home() {
  return (
    <main className="min-w-screen">
      {/* navbar  */}
        <Navbar/>
      {/* end navbar  */}

      {/* hero section  start */}
        <HeroSection/>
      {/* hero section  end */}
    </main>
  );
}
