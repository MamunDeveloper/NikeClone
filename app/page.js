import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import PopularSection from "./sections/PopularSection";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import Review from "./sections/review";

export default function Home() {
  return (
    <main className=" relative">
      <Navbar />
      <HeroSection />
      <PopularSection />
      <AboutUs />
      <Services />
      <SpecialOffer />
      <Review />
      <Subscribe />
      <Footer />
    </main>
  );
}
