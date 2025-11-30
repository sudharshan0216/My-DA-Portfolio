import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { profileData } from "@/data/portfolioData";

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection = "home" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg"
            data-testid="button-logo"
          >
            {profileData.name.split(" ")[0]}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors hover-elevate active-elevate-2 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              size="default"
              data-testid="button-download-resume"
            >
              <a href={profileData.resumePdf} download>
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover-elevate active-elevate-2"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg hover-elevate active-elevate-2 ${
                  activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Button asChild className="w-full" data-testid="button-download-resume-mobile">
              <a href={profileData.resumePdf} download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
