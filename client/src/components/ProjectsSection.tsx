import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3 } from "lucide-react";
import { projects } from "@/data/portfolioData";

interface ProjectsSectionProps {
  onViewDashboard?: () => void;
}

export default function ProjectsSection({ onViewDashboard }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-8 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-[1.02] group glass-card cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="h-8 w-8 text-primary group-hover:scale-125 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {project.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-muted text-foreground text-sm font-medium rounded-full"
                        data-testid={`badge-project-tool-${tool}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onViewDashboard}
                data-testid="button-view-dashboard"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Interactive Dashboard
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
