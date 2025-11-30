import { Card } from "@/components/ui/card";
import { Award, Database } from "lucide-react";
import { certificates } from "@/data/portfolioData";

export default function CertificatesSection() {
  const getIcon = (iconName: string) => {
    return iconName === "database" ? Database : Award;
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => {
            const Icon = getIcon(cert.icon);
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 group cursor-pointer"
                data-testid={`card-certificate-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
