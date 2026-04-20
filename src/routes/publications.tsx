import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Brain, FileText } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Noor Fatima" },
      {
        name: "description",
        content:
          "Peer-reviewed publications in applied AI and deep learning, focused on EEG-based brain signal analysis and real-world healthcare problems.",
      },
      { property: "og:title", content: "Publications — Noor Fatima" },
      {
        property: "og:description",
        content:
          "Two peer-reviewed publications applying deep learning to real-world EEG and clinical signal-analysis problems.",
      },
    ],
  }),
  component: PublicationsPage,
});

interface Pub {
  title: string;
  authors: string;
  venue: string;
  status: string;
  relevance: string;
  tags: string[];
  icon: typeof Brain;
}

const publications: Pub[] = [
  {
    title:
      "TriNet-MTL: A Multi-Branch Deep Learning Framework for Biometric Identification and Cognitive State Inference from Auditory-Evoked EEG",
    authors: "N. Fatima, G. Nabi",
    venue: "eNeuro",
    status: "Accepted",
    relevance:
      "A multi-branch deep learning architecture solving two real-world problems at once — secure biometric ID and cognitive-state inference — directly from raw EEG signals.",
    tags: ["Deep Learning", "Multi-Task Learning", "EEG", "Biometrics"],
    icon: Brain,
  },
  {
    title:
      "Multimodal EEG-Based Classification of Alzheimer's and MCI Using Olfactory Event-Related Potentials and Transformers",
    authors: "N. Fatima, G. Nabi",
    venue: "Brain-Apparatus Communication",
    status: "Accepted",
    relevance:
      "Transformer-based pipeline for early Alzheimer's and MCI screening from multimodal EEG — applying modern sequence models to a high-impact healthcare problem.",
    tags: ["Transformers", "Multimodal", "Healthcare AI", "EEG"],
    icon: FileText,
  },
];

function PublicationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">
        Publications
      </div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
        Research that <span className="text-gradient">ships</span>.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
        Published research in applied AI and deep learning, focusing on real-world problems such as
        EEG-based brain signal analysis.
      </p>

      <div className="mt-12 space-y-5">
        {publications.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-colors overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded shrink-0">
                  {p.status} · {p.venue}
                </span>
              </div>

              <h2 className="mt-5 font-display text-lg md:text-xl font-semibold leading-snug">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
              <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{p.relevance}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8 flex items-start gap-4">
        <span className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
          <BookOpen className="h-5 w-5" />
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          These publications back the engineering work with{" "}
          <span className="text-foreground">strong AI/ML fundamentals</span> and depth in complex,
          real-world domains like healthcare and neuroscience — the same rigor I bring to shipping
          production ML systems.
        </p>
      </div>
    </div>
  );
}

export default PublicationsPage;
