import { Link } from "@tanstack/react-router";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p, large }: { p: Project; large?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[2.4/1]" : "aspect-[16/10]"}`}>
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={large ? 426 : 640}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        {p.flagship && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-xs font-medium border border-primary/40 text-primary">
            <Sparkles className="h-3 w-3" /> Flagship
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
            {p.title}
          </h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap pt-1">{p.date}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

        {p.results.length > 0 && (
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {p.results.map((r) => (
              <li
                key={r}
                className="text-xs text-foreground/80 flex items-start gap-1.5"
              >
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 6).map((s) => (
            <span
              key={s}
              className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-mono"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
          {p.github && (
            <span className="inline-flex items-center gap-1 hover:text-foreground">
              <Github className="h-3.5 w-3.5" /> Code
            </span>
          )}
          {p.demo && (
            <span className="inline-flex items-center gap-1 hover:text-foreground">
              <ExternalLink className="h-3.5 w-3.5" /> Demo
            </span>
          )}
          <span className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
