import { Award, ExternalLink } from "lucide-react";
import { Reveal, Section } from "@/components/Reveal";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Certificates & Achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <article className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-6">
              {c.image ? (
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="mb-5 aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              ) : (
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50">
                  <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
              )}
              <h3 className="text-base font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                {c.score && (
                  <span className="rounded-md border border-accent/50 px-2 py-1 text-foreground">
                    Score {c.score}
                  </span>
                )}
                {c.date && <span>{c.date}</span>}
              </div>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  View Certificate
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
