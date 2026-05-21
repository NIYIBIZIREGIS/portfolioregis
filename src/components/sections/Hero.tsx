import { ArrowDown, Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </div>

        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 text-2xl font-bold text-primary mb-6">
            {personalInfo.avatar}
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
          {personalInfo.title}
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {personalInfo.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button size="lg" onClick={() => scrollTo("#projects")}>
            View My Work
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
            <Mail className="mr-2 w-4 h-4" />
            Get In Touch
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href={personalInfo.resume} download>
              <Download className="mr-2 w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-150"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-150"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-150"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-150"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
