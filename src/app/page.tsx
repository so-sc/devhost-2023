import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import TextSlide from "@/components/TextSlide";
import SlidingImages from "@/components/SlidingImages";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollToTopButton />
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <About />
        {/* <Events /> */}
        <TextSlide />
        <SlidingImages />
      </div>
    </main>
  );
}
