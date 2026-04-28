import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Gamification from "@/components/landing/Gamification";
import ArtistSection from "@/components/landing/ArtistSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0B0F19", color: "#fff", fontFamily: "DM Sans, sans-serif" }}
    >
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <FeaturesGrid />
      <Gamification />
      <ArtistSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Home;
