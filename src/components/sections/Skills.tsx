import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, techStack } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm font-medium mb-2">WHAT I WORK WITH</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A collection of tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Proficiency bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {techStack.map((tech) => (
            <div key={tech.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${tech.level}%`,
                    background: `linear-gradient(90deg, hsl(var(--primary)), hsl(221 83% 70%))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group) => (
            <Card key={group.category} className="hover:border-primary/40 transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-primary">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
