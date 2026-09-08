import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const pos = window.scrollY + 140;
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= pos) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#home" className="min-w-0 truncate text-sm font-semibold tracking-tight">
          Punit Israni
          <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
            / portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="ml-2 inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-accent hover:bg-secondary"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm text-muted-foreground last:border-0 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
