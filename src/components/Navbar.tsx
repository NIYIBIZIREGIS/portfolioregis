import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 font-bold text-lg hover:text-primary transition-colors"
        >
          <Code2 className="w-6 h-6 text-primary" />
          <span>{personalInfo.name.split(" ")[0]}<span className="text-primary">.</span></span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="ml-2"
            onClick={() => window.open(personalInfo.resume, "_blank")}
          >
            Resume
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ml-1"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => window.open(personalInfo.resume, "_blank")}
          >
            Resume
          </Button>
        </div>
      )}
    </header>
  );
}
