import { GraduationCap, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Anril Joe Andrews</span>
            </h2>
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground text-lg">
                    Currently pursuing <span className="text-foreground font-semibold">B.Tech</span> at{" "}
                    <span className="text-primary font-semibold">SRM Institute of Science and Technology</span>,
                    Kattankulathur, Chennai.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Expected Graduation: <span className="text-accent font-semibold">2028</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Passion</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I'm a passionate technologist dedicated to using technology as a force for good. 
                    My goal is to create innovative solutions that <span className="text-primary font-semibold">simplify everyday life</span> and 
                    solve real-world problems. I believe that technology should be accessible, intuitive, 
                    and genuinely helpful to people.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Every line of code I write, every project I build, is driven by the desire to make a 
                    positive impact. I'm constantly learning, exploring new technologies, and seeking 
                    opportunities to grow as a developer. My journey is about{" "}
                    <span className="text-accent font-semibold">continuous improvement</span> and creating 
                    technology that truly matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
