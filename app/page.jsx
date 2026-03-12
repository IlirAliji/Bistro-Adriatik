import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import MenuSection from "../components/MenuSection";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <MenuSection />
      <Reviews />
      <Gallery />
      <CTA />
    </main>
  );
}
