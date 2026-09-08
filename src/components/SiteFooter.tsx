import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
