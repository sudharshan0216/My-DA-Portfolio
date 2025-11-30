import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface HomePageProps {
  onNavigateToDashboard?: () => void;
}

export default function HomePage({ onNavigateToDashboard }: HomePageProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "education", "certificates", "contact"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection onViewDashboard={onNavigateToDashboard} />
      <SkillsSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
