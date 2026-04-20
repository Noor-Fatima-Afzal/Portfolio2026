import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Noor Fatima" },
      {
        name: "description",
        content:
          "Research and engineering experience: MITACS Canada, NCQC, KICS-UET, Datalabb, Dpoint Technologies and University of Cyprus.",
      },
      { property: "og:title", content: "Experience — Noor Fatima" },
      {
        property: "og:description",
        content:
          "International research and engineering experience across quantum computing, neuroscience and medical AI.",
      },
    ],
  }),
  component: ExperiencePage,
});

interface Item {
  role: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
  highlight?: boolean;
}

const experience: Item[] = [
  {
    role: "Research Intern (MITACS Globalink)",
    org: "University of Saskatchewan",
    location: "Saskatoon, Canada",
    date: "Jun 2026 — Sep 2026",
    highlight: true,
    bullets: [
      "Researching a hybrid AI–Quantum framework for efficient variational circuit design and ansatz optimization using PennyLane / Qiskit.",
      "Benchmarking hybrid approaches against VQE / QAOA baselines, collaborating with an international team toward publication-ready results.",
    ],
  },
  {
    role: "Research Intern",
    org: "National Center for Quantum Computing (NCQC)",
    location: "Lahore, Pakistan",
    date: "May 2025 — Jul 2025",
    highlight: true,
    bullets: [
      "Developed QAOA-based optimization algorithms for NP-hard feature selection in healthcare diagnostics, processing 2000+ patient samples.",
      "Implemented a Variational Quantum Classifier achieving 98.4% accuracy — +3.7% over classical baselines, demonstrating measurable quantum advantage.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Al-Khawarizmi Institute of Computer Science (KICS), UET",
    location: "Lahore, Pakistan",
    date: "Jun 2024 — Present",
    highlight: true,
    bullets: [
      "Built end-to-end ML pipelines for EEG-based emotion recognition across 3 datasets and 150+ subjects.",
      "Developed predictive models for Alzheimer's / MCI classification using 80+ patient EEGs and integrated computational neuroscience models for stress decoding.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Dpoint Technologies Ltd",
    location: "Cyprus",
    date: "Jul 2025 — Present",
    bullets: [
      "Researching predictive maintenance for industrial cranes — improving operational reliability and reducing downtime.",
      "Built ML models for anomaly detection and fault prediction from vibration / temperature / current sensor data, integrated into real-time dashboards.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Datalabb",
    location: "Lahore, Pakistan",
    date: "Mar 2024 — Jun 2024",
    highlight: true,
    bullets: [
      "Designed and optimized a U-Net segmentation framework for 10k+ medical images, achieving 90% mean Dice score.",
      "Fine-tuned domain-adapted LLMs for clinical text, improving reliability by 22% with production-ready deployments.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "University of Cyprus",
    location: "Nicosia, Cyprus",
    date: "Fall 2025 — Spring 2026",
    bullets: [
      "TA for Programming Fundamentals, Information Security, Software Engineering and Computer Graphics.",
      "Supported students through lab sessions, debugging clinics and applied problem-solving.",
    ],
  },
  {
    role: "Machine Learning Fellow",
    org: "Bytewise Limited",
    location: "Lahore, Pakistan",
    date: "Jun 2024 — Sep 2024",
    bullets: [
      "Selected among the top 9% of 2,300+ applicants; completed 8+ ML modeling and optimization projects.",
      "Automated preprocessing workflows, reducing runtime from 2 days to under 6 hours.",
    ],
  },
];

const publications = [
  {
    title:
      "TriNet-MTL: A Multi-Branch Deep Learning Framework for Biometric Identification and Cognitive State Inference from Auditory-Evoked EEG",
    authors: "N. Fatima, G. Nabi",
    venue: "eNeuro",
    status: "Accepted",
  },
  {
    title:
      "Multimodal EEG-Based Classification of Alzheimer's and MCI Using Olfactory Event-Related Potentials and Transformers",
    authors: "N. Fatima, G. Nabi",
    venue: "Brain-Apparatus Communication",
    status: "Accepted",
  },
];

const honors = [
  {
    title: "Excellence in Neuroscience Research",
    org: "KICS-UET Lahore",
    date: "Jun 2025",
    note: "AI/ML pipelines, signal processing and innovative computational methods.",
  },
  {
    title: "Chief Minister Punjab's Honhaar Scholarship",
    org: "Government of Punjab",
    date: "May 2025",
    note: "Top 1% CGPA in Computer Engineering at UET Lahore.",
  },
  {
    title: "Top 6 — Optimized AI Conference 2025",
    org: "Traversaal.ai",
    date: "Mar 2025",
    note: "Team TROJAN_AI ranked top 6 of 200+ global teams.",
  },
  {
    title: "CS50x Puzzle Day 2025",
    org: "Harvard & MIT (Cambridge)",
    date: "Apr 2025",
    note: "Recognized for problem-solving and analytical thinking.",
  },
];

const skills = {
  "AI / ML": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "GNNs",
    "Transformers",
    "Spiking NNs",
    "LoRA / QLoRA",
  ],
  "Quantum Computing": ["PennyLane", "Qiskit", "QAOA", "VQC", "VQE", "Bloch dynamics"],
  "Tools & Frameworks": ["NumPy", "Pandas", "MNE", "OpenCV", "LangChain", "FAISS", "CLIP"],
  "Systems & Deployment": ["Docker", "AWS", "Flask", "Streamlit", "React", "MySQL"],
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">
        Experience & Research
      </div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Built across <span className="text-gradient">3 continents</span>.
      </h1>

      {/* Timeline */}
      <div className="mt-12 relative">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-border" aria-hidden />
        <ol className="space-y-10">
          {experience.map((e) => (
            <li key={e.role + e.date} className="relative pl-10 md:pl-14">
              <span
                className={`absolute left-0 md:left-1 top-1 h-6 w-6 rounded-full border-2 grid place-items-center ${
                  e.highlight
                    ? "bg-primary border-primary shadow-glow"
                    : "bg-card border-border"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    e.highlight ? "bg-primary-foreground" : "bg-primary"
                  }`}
                />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                <span className="text-sm text-primary">{e.org}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {e.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {e.location}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* Skills */}
      <div className="mt-24">
        <div className="text-xs font-mono uppercase tracking-widest text-primary">Skills</div>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Technical stack</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-sm font-display font-semibold">{group}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mt-24">
        <div className="text-xs font-mono uppercase tracking-widest text-primary">Publications</div>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Peer-reviewed</h2>
        <div className="mt-8 space-y-4">
          {publications.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-base md:text-lg font-medium leading-snug">
                  {p.title}
                </h3>
                <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-0.5 rounded shrink-0">
                  {p.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
              <p className="mt-1 text-sm italic text-foreground/80">{p.venue}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Honors */}
      <div className="mt-24">
        <div className="text-xs font-mono uppercase tracking-widest text-primary">Honors</div>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Awards & recognition</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {honors.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display font-semibold">{h.title}</h3>
                <span className="text-xs font-mono text-muted-foreground">{h.date}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{h.org}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// re-export for the route component
ExperiencePage.displayName = "ExperiencePage";
export { ExperiencePage as ExperienceComponent };

// Tell tanstack which component to render
Route.update({ component: ExperiencePage });
