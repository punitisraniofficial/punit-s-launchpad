import { Reveal, Section } from "@/components/Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Timeline">
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {education.map((e, i) => (
          <li key={e.degree}>
            <Reveal delay={i * 80}>
              <span
                aria-hidden="true"
                className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent"
              />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              {e.notes.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {e.notes.map((n) => (
                    <li key={n} className="text-sm leading-relaxed text-muted-foreground">
                      — {n}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
