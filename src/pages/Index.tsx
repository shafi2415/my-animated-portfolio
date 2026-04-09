import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyHireSection from "@/components/WhyHireSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyHireSection />
    <ExperienceSection />
    <EducationSection />
    <SkillsSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
