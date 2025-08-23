
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import AboutSection from "@/components/home/AboutSection";
import HistorySection from "@/components/home/HistorySection";
import EventSection from "@/components/home/EventsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import JoinSection from "@/components/home/JoinSection";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <HistorySection />
      <EventSection />
      <BenefitsSection />
      <JoinSection />
      <Footer />
      
    </>
  );
}
