import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-gradient-shift" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-gradient-shift" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block text-foreground">Anril Joe</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
                Andrews
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Creating technology that makes life simpler,{" "}
              <span className="text-primary font-semibold">one project at a time.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-40 animate-glow" />
              <div 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
              >
                <img
                  src={profileImage}
                  alt="Anril Joe Andrews"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full animate-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full animate-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
