import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm font-medium mb-2">MY JOURNEY</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            My professional journey building products and working with great teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience - spans 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={job.id} className="relative pl-12">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-5 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                        index === 0
                          ? "bg-primary border-primary text-primary-foreground"
                          : "bg-background border-border text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <Card className="hover:border-primary/30 transition-all hover:shadow-md">
                      <CardContent className="pt-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-bold text-base">{job.role}</h4>
                            <p className="text-primary font-medium text-sm">{job.company}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-xs">{job.period}</Badge>
                            <p className="text-xs text-muted-foreground mt-1">{job.location}</p>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {job.description}
                        </p>

                        <ul className="space-y-1 mb-4">
                          {job.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {job.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.degree} className="hover:border-primary/30 transition-all">
                  <CardContent className="pt-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-base leading-snug mb-1">{edu.degree}</h4>
                    <p className="text-primary text-sm font-medium mb-1">{edu.school}</p>
                    <Badge variant="outline" className="text-xs mb-3">{edu.period}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}

              {/* Open to work card */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-primary">Open to Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently exploring senior full stack or lead engineering roles. Remote preferred.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
