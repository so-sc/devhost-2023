import Image from "next/image";
import SlidingImages from "@/components/SlidingImages";
import Description from "@/components/Description";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <Description />
      {/* <Events />
      <div className="bg-black h-screen">hello</div>
      <SlidingImages /> */}
      <div className="relative pb-20 text-3xl font-poppinsSB text-center top-0">
        COMING SOON
      </div>
      <Footer />
    </main>
  );
}
