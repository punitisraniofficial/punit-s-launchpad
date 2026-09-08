import { Reveal, Section } from "@/components/Reveal";
import { beyondCoding, story } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="My Story">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-5">
          {story.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
              Beyond Coding
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {beyondCoding.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="card-hover h-full rounded-xl border border-border bg-card p-5">
                  <h4 className="text-sm font-medium text-card-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
