import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AICore from "@/components/AICore";
import UseCases from "@/components/UseCases";
import Market from "@/components/Market";
import BusinessModel from "@/components/BusinessModel";
import GoToMarket from "@/components/GoToMarket";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Problem />
      <Solution />
      <AICore />
      <UseCases />
      <Market />
      <BusinessModel />
      <GoToMarket />
      <Vision />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
