import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverImage from "@/assets/projects/cover.png";
import aboutImage from "@/assets/projects/about.png";
import spunviceImage1 from "@/assets/projects/spunvice/WhatsApp Image 2025-10-26 at 16.57.31.jpeg";
import spunviceImage2 from "@/assets/projects/spunvice/WhatsApp Image 2025-10-26 at 16.57.31 (1).jpeg";
import ecurriculaImage1 from "@/assets/projects/ecurricula/1.png";
import ecurriculaImage2 from "@/assets/projects/ecurricula/2.png";

const Projects = () => {
  interface Project {
    title: string;
    description: string;
    tags: string[];
    status: string;
    images?: string[];
    link?: string;
  }

  const projects: Project[] = [
    {
      title: "The 25-Hour Day: How to Find Time You Didn't Know You Had",
      description: "A comprehensive guide to time management and productivity, helping readers discover hidden time in their daily routines.",
      tags: ["Amazon Kindle"],
      status: "View on Amazon",
      images: [coverImage, aboutImage],
      link: "https://www.amazon.in/dp/B0FXBGQ5F5",
    },
    {
      title: "SpunVice",
      description: "A multi-platform app store providing seamless access to applications across different operating systems. Built with a focus on user experience and cross-platform compatibility.",
      tags: ["Java", "HTML", "CSS"],
      status: "In Development",
      images: [spunviceImage1, spunviceImage2],
    },
    {
      title: "eCurricula",
      description: "SRM eCurricula module, a comprehensive digital curriculum management system developed for SRM Institute of Science and Technology.",
      tags: ["SRM", "Digital Platform"],
      status: "In Progress",
      images: [ecurriculaImage1, ecurriculaImage2],
    },
    {
      title: "Upcoming",
      description: "An exciting new project in the pipeline. Stay tuned for more details.",
      tags: ["New", "Project"],
      status: "Coming Soon",
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my work and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project images */}
              <div className="relative h-56 grid grid-cols-2 gap-2 p-2 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
                {project.images ? (
                  <>
                    <div className="relative bg-card rounded-lg overflow-hidden">
                      {project.images[0] && (
                        <img 
                          src={project.images[0]} 
                          alt={`${project.title} preview 1`}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="relative bg-card rounded-lg overflow-hidden">
                      {project.images[1] && (
                        <img 
                          src={project.images[1]} 
                          alt={`${project.title} preview 2`}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative bg-card rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-sm text-muted-foreground">Preview 1</span>
                      </div>
                    </div>
                    <div className="relative bg-card rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-sm text-muted-foreground">Preview 2</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    disabled={!project.link}
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.status}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    disabled
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
