import { ExternalLink, Github } from "lucide-react";
import { Reveal, Section } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've Built">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="card-hover group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
              <div className="overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold tracking-tight text-card-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground">
                      Private repository
                    </span>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
