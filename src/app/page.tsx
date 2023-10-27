import Image from "next/image";
import SlidingImages from "@/components/SlidingImages";
import Description from "@/components/Description";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
import OtherEvents from "@/components/OtherEvents";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <Description />
      {/* <Events />
      <OtherEvents />
      <SlidingImages /> */}
      <div className="relative pb-20 text-3xl font-poppinsSB text-center top-0">
        COMING SOON
      </div>
      <Footer />
    </main>
  );
}
