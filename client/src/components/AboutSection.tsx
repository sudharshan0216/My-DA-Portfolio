import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users } from "lucide-react";
import { profileData, internship } from "@/data/portfolioData";

export default function AboutSection() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Expert in transforming raw data into actionable business intelligence"
    },
    {
      icon: Briefcase,
      title: "Hands-On Experience",
      description: "Practical internship experience at Besant Technologies"
    },
    {
      icon: Users,
      title: "Collaborative Mindset",
      description: "Strong communication and leadership skills for team success"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {profileData.about}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 group glass-card cursor-pointer"
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 group glass-card hover:scale-105 transition-all duration-300" data-testid="card-internship">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {internship.title}
                  </h3>
                  <p className="text-primary font-medium">{internship.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{internship.duration}</p>
                  <p className="text-sm text-muted-foreground">{internship.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {internship.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    data-testid={`badge-tool-${tool}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {internship.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
