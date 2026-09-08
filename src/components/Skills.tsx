import { Reveal, Section } from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const levelStyle: Record<string, string> = {
  "Building With": "border-accent/50 text-foreground",
  Learning: "border-border text-muted-foreground",
  Familiar: "border-border text-muted-foreground",
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 70}>
            <article className="card-hover h-full rounded-xl border border-border bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md border bg-secondary/40 px-3 py-1.5 text-sm",
                      levelStyle[item.level] ?? "border-border text-muted-foreground",
                    )}
                  >
                    {item.name}
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
