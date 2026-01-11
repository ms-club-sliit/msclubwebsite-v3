
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import EventSection from "@/components/EventsSection";
import BenefitsSection from "@/components/BenefitsSection";
import JoinSection from "@/components/JoinSection";
import HeroNew from "@/components/HeroNew";
import Hero2026 from "@/components/Hero2026";


export default function Home() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      {/* <HeroNew /> */}
      <Hero2026 />
      <AboutSection />
      <HistorySection />
      <EventSection />
      <BenefitsSection />
      <JoinSection />
      <Footer />
      
    </>
  );
}
