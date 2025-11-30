import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { profileData } from "@/data/portfolioData";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="p-8 glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">{profileData.location}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  data-testid="button-contact-linkedin"
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
                  data-testid="button-contact-github"
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
