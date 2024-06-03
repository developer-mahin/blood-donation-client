import AboutUsSection from "@/components/UI/HomePage/AboutUsSection";
import Campaign from "@/components/UI/HomePage/Campaign";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Map from "@/components/UI/HomePage/Map";
import Testimonials from "@/components/UI/HomePage/Testimonial";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <Campaign />
      <Testimonials />
      <Map />
    </>
  );
};

export default HomePage;
