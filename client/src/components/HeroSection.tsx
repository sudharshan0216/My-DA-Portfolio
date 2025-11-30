import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profileData } from "@/data/portfolioData";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                {profileData.name}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                {profileData.role}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Transforming complex datasets into actionable insights with Python, SQL, and Power BI
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-linkedin"
              >
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-github"
              >
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-400 to-primary rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
