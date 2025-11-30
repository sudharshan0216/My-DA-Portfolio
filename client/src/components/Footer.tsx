import { Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "@/data/portfolioData";
import DownloadProjectButton from "./DownloadProjectButton";

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {profileData.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Data Analyst passionate about transforming data into insights
            </p>
            <DownloadProjectButton />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.toLowerCase()}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover-elevate active-elevate-2 transition-colors"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover-elevate active-elevate-2 transition-colors"
                aria-label="GitHub"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 bg-primary/10 rounded-lg hover-elevate active-elevate-2 transition-colors"
                aria-label="Email"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Built with React, Vite & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
