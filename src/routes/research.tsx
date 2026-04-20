import { createFileRoute } from "@tanstack/react-router";
import { Atom, Brain, Cpu, Network, Sparkles, Target } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Vision — Noor Fatima" },
      {
        name: "description",
        content:
          "Research vision: hybrid AI–Quantum systems for NP-hard optimization, real-world scientific computing and neuroscience-inspired learning.",
      },
      { property: "og:title", content: "Research Vision — Noor Fatima" },
      {
        property: "og:description",
        content:
          "Future research direction: bridging variational quantum algorithms, neural decoding and large-scale optimization.",
      },
    ],
  }),
  component: ResearchPage,
});

const pillars = [
  {
    icon: Atom,
    title: "Hybrid AI + Quantum Systems",
    body: "Designing variational architectures where classical neural networks parameterize quantum circuits — and vice versa — to extract advantage on problems where neither paradigm wins alone.",
  },
  {
    icon: Target,
    title: "NP-hard Optimization",
    body: "Bringing QAOA-class methods out of toy benchmarks and into real-world feature selection, scheduling and combinatorial healthcare problems with measurable improvements over classical baselines.",
  },
  {
    icon: Brain,
    title: "Neural Decoding at Scale",
    body: "Treating the brain as a high-dimensional signal source — building models that generalize across subjects, datasets and modalities for clinical-grade EEG / fMRI decoding.",
  },
  {
    icon: Network,
    title: "Energy-Efficient Inference",
    body: "Spiking neural networks, sparse attention and quantization to make state-of-the-art models deployable at the edge — from wearables to bedside monitors.",
  },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-28">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">
        Research Vision
      </div>
      <h1 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
        Bridging the <span className="text-gradient">classical</span> and the{" "}
        <span className="text-gradient">quantum</span>.
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
        My long-term goal is to build hybrid AI–Quantum systems that solve problems classical
        compute cannot scale to — and to do so with the engineering rigor required for real
        deployment. The next decade of breakthroughs will come from teams fluent in both
        statistical learning and quantum information.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
            <p.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-display text-xl font-semibold">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <section className="mt-24 rounded-3xl border border-border bg-card p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 radial-fade" aria-hidden />
        <div className="relative">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Current focus
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Through my upcoming MITACS Globalink internship at the University of Saskatchewan, I'll
            be researching efficient ansatz design for variational quantum algorithms — benchmarking
            hybrid frameworks against VQE and QAOA baselines. Combined with my work at NCQC on QAOA
            for healthcare diagnostics and at KICS on EEG decoding, the throughline is clear:{" "}
            <span className="text-foreground">
              algorithms that are both physically grounded and clinically useful.
            </span>
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Variational Circuit Design",
              "QAOA / VQE benchmarking",
              "Hybrid Quantum-Classical ML",
              "EEG Foundation Models",
              "PhD 2027",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-4">
        {[
          { icon: Cpu, label: "Compute", v: "PennyLane · Qiskit · PyTorch" },
          { icon: Brain, label: "Domains", v: "Neuroscience · Healthcare" },
          { icon: Atom, label: "Methods", v: "VQC · QAOA · GNNs · Transformers" },
        ].map(({ icon: Icon, label, v }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground tracking-widest">
              <Icon className="h-3.5 w-3.5 text-primary" />
              {label}
            </div>
            <div className="mt-2 font-display">{v}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
