import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card
          className="p-8 max-w-2xl mx-auto hover-elevate active-elevate-2 transition-transform hover:scale-105"
          data-testid="card-education"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-primary font-medium mb-1">
                {education.institution}
              </p>
              <p className="text-muted-foreground">{education.location}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
