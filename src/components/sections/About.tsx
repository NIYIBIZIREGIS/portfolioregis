import { MapPin, Calendar, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm font-medium mb-2">GET TO KNOW ME</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me hiking, contributing to open-source projects, or
              experimenting with new tech. I'm always looking for opportunities to learn and grow.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                <span>5+ years of professional experience</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Coffee className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Powered by coffee and curiosity</span>
              </div>
            </div>
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="text-center hover:border-primary/40 transition-colors hover:shadow-md"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
