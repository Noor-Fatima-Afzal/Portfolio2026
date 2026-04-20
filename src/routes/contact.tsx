import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Noor Fatima" },
      {
        name: "description",
        content:
          "Get in touch with Noor Fatima for research collaborations, internships and PhD opportunities.",
      },
      { property: "og:title", content: "Contact — Noor Fatima" },
      {
        property: "og:description",
        content: "Open to research collaborations, internships and PhD positions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const email = fd.get("email");
    const message = fd.get("message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:noorfatimaafzalbutt@gmail.com?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">Contact</div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Let's <span className="text-gradient">collaborate</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Open to research collaborations, internship opportunities and PhD positions in AI / Quantum
        Machine Learning.
      </p>

      <div className="mt-12 grid md:grid-cols-5 gap-8">
        <aside className="md:col-span-2 space-y-3">
          <a
            href="mailto:noorfatimaafzalbutt@gmail.com"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
          >
            <span className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-medium">noorfatimaafzalbutt@gmail.com</div>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <span className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm font-medium">+92-327-8734825</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <span className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Based in</div>
              <div className="text-sm font-medium">Lahore, PK · Cyprus · Saskatoon, CA (2026)</div>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 grid place-items-center rounded-lg border border-border bg-card hover:bg-secondary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 grid place-items-center rounded-lg border border-border bg-card hover:bg-secondary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://scholar.google.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              className="h-10 w-10 grid place-items-center rounded-lg border border-border bg-card hover:bg-secondary"
            >
              <ScholarIcon className="h-4 w-4" />
            </a>
          </div>
        </aside>

        <form
          onSubmit={onSubmit}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-mono text-muted-foreground">Name</span>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="block">
              <span className="text-xs font-mono text-muted-foreground">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-mono text-muted-foreground">Subject</span>
            <input
              name="subject"
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <label className="block">
            <span className="text-xs font-mono text-muted-foreground">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && (
            <p className="text-xs text-muted-foreground">
              Opening your mail client… If nothing happens, write directly to
              noorfatimaafzalbutt@gmail.com.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
