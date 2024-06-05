import AboutUsSection from "@/components/UI/HomePage/AboutUsSection";
import BloodDonor from "@/components/UI/HomePage/BloodDonor";
import BloodDonors from "@/components/UI/HomePage/BloodDonor";
import Campaign from "@/components/UI/HomePage/Campaign";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Map from "@/components/UI/HomePage/Map";
import Testimonials from "@/components/UI/HomePage/Testimonial";

const HomePage = ({
  searchParams,
}: {
  searchParams?: {
    searchTerm?: string;
    bloodType?: string;
    availability?: string;
  };
}) => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <BloodDonor searchParams={searchParams} />
      <Campaign />
      <Testimonials />
      <Map />
    </>
  );
};

export default HomePage;
