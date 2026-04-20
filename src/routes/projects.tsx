import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Noor Fatima" },
      {
        name: "description",
        content:
          "Selected engineering projects across AI/ML, Healthcare AI, and LLM applications, with measurable real-world impact.",
      },
      { property: "og:title", content: "Projects | Noor Fatima" },
      {
        property: "og:description",
        content:
          "Flagship projects including NeuroAI Platform, Real-time Seizure Detection, and Multimodal RAG for chest X-ray.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const filtered = projects.filter(
    (p) => filter === "All" || p.categories.includes(filter),
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">
        Projects
      </div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Building at the <span className="text-gradient">edge of applied AI</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        {projects.length} projects spanning neural decoding, medical imaging, and LLM applications,
        each shipped with measurable impact.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
                active
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {c}
              <span className="ml-1.5 text-xs opacity-60">
                {c === "All"
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(c)).length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} p={p} large={p.flagship} />
        ))}
      </div>
    </section>
  );
}
