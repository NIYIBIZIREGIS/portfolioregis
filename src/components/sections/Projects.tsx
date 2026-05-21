import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const categories = ["All", "SaaS", "AI Tool", "E-commerce", "Developer Tool", "Security", "PWA"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm font-medium mb-2">MY WORK</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A selection of projects I've built — from SaaS products to developer tools.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-4xl mb-2">{project.image}</div>
                  {project.featured && (
                    <Badge variant="outline" className="text-xs flex items-center gap-1 border-primary/30 text-primary">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Badge variant="secondary" className="text-xs w-fit">{project.category}</Badge>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-4 gap-2">
                {project.github && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <Button variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : `Show All ${filtered.length} Projects`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
