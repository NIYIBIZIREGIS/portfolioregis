import { Code2, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="w-4 h-4 text-primary" />
          <span>
            Built with <Heart className="w-3 h-3 inline text-red-500 fill-current" /> by{" "}
            <span className="font-medium text-foreground">{personalInfo.name}</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>React</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
