import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: personalInfo.github, username: "@regisdeveloper" },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, username: "regisdeveloper" },
    { icon: Twitter, label: "Twitter", href: personalInfo.twitter, username: "@regisdeveloper" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Whether you have a project in mind, a question, or just want to say hi — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently available for freelance work and open to full-time opportunities. If you have a
                project that you'd like to collaborate on, or if you're looking for a dedicated developer to join
                your team, feel free to reach out.
              </p>
            </div>

            <Card className="hover:border-primary/30 transition-all">
              <CardContent className="pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/30 transition-all">
              <CardContent className="pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Also find me on</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-medium">{label}</span>
                      <span className="text-xs text-muted-foreground ml-2">{username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card>
            <CardContent className="pt-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Your email client should have opened. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Collaboration"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
