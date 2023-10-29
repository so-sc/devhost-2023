import Image from "next/image";
import SlidingImages from "@/components/SlidingImages";
import Description from "@/components/Description";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
import OtherEvents from "@/components/OtherEvents";

import Info from "@/components/Info";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <Description />
      {/* <Info /> */}
      {/* <Events /> */}
      {/* <OtherEvents /> */}
      <SlidingImages />
      <div className="relative py-20 text-3xl font-poppinsB text-center top-0">
        COMING SOON
      </div>
      <Footer />
    </main>
  );
}
