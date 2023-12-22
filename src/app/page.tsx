import About from "@/components/About";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TextSlide from "@/components/TextSlide";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TextSlide />
      <Card />
      <Footer />
    </main>
  );
}
