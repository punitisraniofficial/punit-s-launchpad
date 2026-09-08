import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import portrait from "@/assets/punit-portrait.png.asset.json";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 glow" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            {profile.tagline}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {profile.location}
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 text-accent" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4 text-accent" aria-hidden="true" />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="animate-in fade-in duration-1000 motion-reduce:animate-none">
          <figure className="group relative mx-auto max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl border border-border/70"
            />
            <img
              src={portrait.url}
              alt="Portrait of Punit Israni"
              width={1456}
              height={1092}
              className="relative aspect-[4/3] w-full rounded-xl border border-border object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
            />
            <figcaption className="relative mt-4 font-mono text-xs text-muted-foreground">
              1st-year B.Tech student · Jaipur
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
