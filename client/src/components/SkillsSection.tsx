import { Card } from "@/components/ui/card";
import { Database, Code, FileSpreadsheet, BarChart, Heart, Users, TrendingUp, MessageSquare } from "lucide-react";
import { skills } from "@/data/portfolioData";

export default function SkillsSection() {
  const skillIcons: { [key: string]: any } = {
    Python: Code,
    MySQL: Database,
    "MS Excel": FileSpreadsheet,
    "Power BI": BarChart,
    "Analytical Thinking": TrendingUp,
    "Work Ethic": Heart,
    "Leadership skills": Users,
    "Communication": MessageSquare
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.technical.map((skill) => {
                const Icon = skillIcons[skill] || Code;
                return (
                  <Card
                    key={skill}
                    className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-110 group cursor-pointer glass-card"
                    data-testid={`card-skill-${skill.replace(/\s+/g, '-')}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform" />
                      </div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{skill}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.soft.map((skill) => {
                const Icon = skillIcons[skill] || Heart;
                return (
                  <Card
                    key={skill}
                    className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-110 group cursor-pointer glass-card"
                    data-testid={`card-soft-skill-${skill.replace(/\s+/g, '-')}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform" />
                      </div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{skill}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
