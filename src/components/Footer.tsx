import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/anril-joe-andrews"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:anril@example.com"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center gap-2 justify-center">
              © {currentYear} Anril Joe Andrews. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and passion
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground italic">
              "Creating technology that makes life simpler, one project at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
