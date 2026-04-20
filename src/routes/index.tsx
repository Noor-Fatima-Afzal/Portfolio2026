import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Atom, Brain, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import NeuralBackground from "@/components/NeuralBackground";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noor Fatima — AI Engineer & Quantum ML Researcher" },
      {
        name: "description",
        content:
          "AI Engineer and Quantum ML researcher. Hybrid AI–Quantum frameworks, neural decoding and scalable ML systems for healthcare.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { v: "98.4%", l: "VQC accuracy on healthcare diagnostics" },
  { v: "+3.7%", l: "quantum advantage over classical baselines" },
  { v: "2", l: "peer-reviewed publications accepted" },
  { v: "Top 1%", l: "CGPA, Computer Engineering UET" },
];

function Index() {
  const flagship = projects.filter((p) => p.flagship);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" aria-hidden />
        <div className="absolute inset-0">
          <NeuralBackground />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Open to PhD positions · Research collaborations · 2026
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Noor <span className="text-gradient">Fatima</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-display">
              AI Engineer · Quantum Machine Learning Researcher
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Working at the intersection of <span className="text-foreground">AI</span>,{" "}
              <span className="text-foreground">Neuroscience</span> and{" "}
              <span className="text-foreground">Quantum Computing</span> — building hybrid systems
              that push past classical limits.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="/Noor_Fatima_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                <Mail className="h-4 w-4" /> Contact
              </Link>
            </div>
          </motion.div>

          {/* stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border rounded-xl overflow-hidden bg-card/60 backdrop-blur"
          >
            {stats.map((s) => (
              <div key={s.v} className="bg-card p-5">
                <div className="font-display text-2xl md:text-3xl font-semibold text-gradient">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              01 — About
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Research-led, production-grade.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Engineering researcher building <span className="text-foreground">hybrid AI–Quantum systems</span>{" "}
              for problems classical compute cannot scale to. My current focus is variational
              circuit design for NP-hard optimization, with applications in healthcare diagnostics
              and neural decoding.
            </p>
            <p>
              I've shipped end-to-end ML pipelines used by clinicians and researchers — from{" "}
              <span className="text-foreground">EEG-based emotion recognition</span> across 150+ subjects
              to <span className="text-foreground">U-Net segmentation</span> on 10k+ medical images. My
              quantum work at NCQC achieved <span className="text-foreground">98.4% accuracy</span> via
              a Variational Quantum Classifier, demonstrating measurable quantum advantage.
            </p>
            <p>
              Two papers accepted at <em>eNeuro</em> and <em>Brain-Apparatus Communication</em>.
              Incoming MITACS Globalink Research Intern at the University of Saskatchewan, where I'll
              be benchmarking hybrid quantum frameworks against VQE/QAOA baselines.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              {[
                { icon: Brain, label: "Neuroscience + AI" },
                { icon: Atom, label: "Quantum ML" },
                { icon: Cpu, label: "Scalable systems" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              02 — Selected Work
            </div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Flagship projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {flagship.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-primary"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
