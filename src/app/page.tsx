import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import TextSlide from "@/components/TextSlide";
import SlidingImages from "@/components/SlidingImages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <About />
        {/* <Events /> */}
        <TextSlide />
        <SlidingImages />
      </div>
      <Footer />
    </main>
  );
}
