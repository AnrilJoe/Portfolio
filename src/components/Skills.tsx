import { Code2, Database, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-primary to-accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "C", level: 75 },
        { name: "C++", level: 80 },
        { name: "Java", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-accent to-primary",
      skills: [
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "from-primary via-accent to-primary",
      skills: [
        { name: "Figma", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse toolkit to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-8 border border-border shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {["Python", "C", "C++", "Java", "SQL", "Figma", "Problem Solving", "Team Work"].map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-secondary border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
