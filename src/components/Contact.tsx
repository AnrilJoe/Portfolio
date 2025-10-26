import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anriljoeandrews@gmail.com",
      href: "mailto:anriljoeandrews@gmail.com",
      color: "from-primary to-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/anril-joe-andrews-8164a9359",
      href: "https://www.linkedin.com/in/anril-joe-andrews-8164a9359",
      color: "from-accent to-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8129440816",
      href: "tel:+918129440816",
      color: "from-primary via-accent to-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, 
                creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  target={info.label === "LinkedIn" ? "_blank" : undefined}
                  rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-secondary border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-secondary border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-secondary border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
