import { useState } from "react";
import { Github, Globe, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Section } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  const details = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Globe, label: "punitisrani.online", href: profile.website },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect.">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Interested in collaborating, discussing an opportunity, or simply talking about
              technology? Feel free to reach out.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-3">
            {details.map((d, i) => (
              <li key={d.label}>
                <Reveal delay={i * 60}>
                  <a
                    href={d.href}
                    {...(d.href.startsWith("http") ? { target: "_blank" as const } : {})}
                    rel="noreferrer"
                    className="card-hover flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                  >
                    <d.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="min-w-0 truncate">{d.label}</span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <form
            className="rounded-xl border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
              const body = encodeURIComponent(
                `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`,
              );
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              setSent(true);
              toast.success("Opening your email app with the message ready to send.");
              form.reset();
            }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
              {sent && (
                <p className="text-xs text-muted-foreground">
                  If nothing opened, email me directly at {profile.email}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
