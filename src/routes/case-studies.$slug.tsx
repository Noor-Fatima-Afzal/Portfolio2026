import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  Lightbulb,
  Rocket,
  ShieldAlert,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import neuroai from "@/assets/proj-neuroai.jpg";

type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  domain: string;
  year: string;
  role: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
};

const STUDIES: Record<string, CaseStudy> = {
  "neuroai-platform": {
    slug: "neuroai-platform",
    title: "NeuroAI Platform",
    tagline:
      "Scalable EEG ML platform reducing model benchmarking time from days to minutes.",
    domain: "Healthcare AI · MLOps · Neural Signal Processing",
    year: "2025",
    role: "ML Engineer & System Designer",
    image: neuroai,
    stack: ["Python", "PyTorch", "MNE", "ReactJS", "FastAPI", "Docker", "AWS"],
  },
};

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = STUDIES[params.slug];
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    if (!s) return { meta: [{ title: "Case Study | Noor Fatima" }] };
    return {
      meta: [
        { title: `${s.title} — Case Study | Noor Fatima` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.title} — Case Study | Noor Fatima` },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.image },
        { name: "twitter:image", content: s.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl">Case study not found</h1>
      <Link to="/case-studies" className="mt-4 inline-block text-primary">
        ← Back to case studies
      </Link>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  return <NeuroAICaseStudy study={study} />;
}

/* ------------------------------- UI Helpers ------------------------------- */

function SectionHeader({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-primary">
          {eyebrow}
        </div>
        <h2 className="mt-1 font-display text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

/* --------------------------- NeuroAI Case Study -------------------------- */

function NeuroAICaseStudy({ study }: { study: CaseStudy }) {
  return (
    <article className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <Link
        to="/case-studies"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All case studies
      </Link>

      {/* HERO */}
      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="rounded-md border border-primary/30 bg-primary/5 px-2 py-0.5 text-primary">
            Case Study
          </span>
          <span>{study.domain}</span>
          <span className="opacity-50">·</span>
          <span>{study.year}</span>
          <span className="opacity-50">·</span>
          <span>{study.role}</span>
        </div>

        <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {study.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {study.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {study.stack.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {study.github && (
            <a
              href={study.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-secondary"
            >
              <GithubIcon className="h-4 w-4" /> View source
            </a>
          )}
          {study.demo && (
            <a
              href={study.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-secondary"
          >
            Discuss this work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Headline metrics */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { k: "Benchmark cycle", v: "2–3 days → minutes", sub: "~99% wall-clock reduction" },
            { k: "Researchers onboarded", v: "5+", sub: "Production usage" },
            { k: "Manual tuning steps", v: "Eliminated", sub: "Automated parameter prediction" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-background p-5"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                {m.k}
              </div>
              <div className="mt-2 font-display text-2xl font-semibold tracking-tight">
                {m.v}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Hero visual */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-card">
          <img src={study.image} alt={study.title} className="w-full h-auto" />
        </div>
      </header>

      {/* TOC */}
      <nav className="mt-12 rounded-xl border border-border bg-card/40 p-4">
        <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
          On this page
        </div>
        <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {[
            ["problem", "Problem"],
            ["goals", "Goals & requirements"],
            ["solution", "Solution overview"],
            ["architecture", "Architecture"],
            ["deep-dive", "Technical deep dive"],
            ["innovations", "Key innovations"],
            ["challenges", "Challenges & trade-offs"],
            ["results", "Results & impact"],
            ["future", "Future improvements"],
          ].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                → {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* PROBLEM */}
      <section id="problem" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="01 · Context" title="The problem" icon={ShieldAlert} />
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card>
            <div className="text-sm font-semibold">Manual, brittle workflows</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              EEG research pipelines were stitched together in notebooks — preprocessing,
              feature extraction, and model training were re-implemented per project.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">2–3 days per benchmark</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A single comparative experiment across architectures and hyperparameters
              consumed days of researcher time, blocking iteration.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Reproducibility gap</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Without standardized pipelines, results were hard to reproduce across
              datasets, machines, and team members — eroding trust in findings.
            </p>
          </Card>
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
          In neuroscience and clinical AI, slow iteration directly slows discovery. Every day
          spent re-wiring a pipeline is a day not spent validating a hypothesis. The platform
          had to remove the friction without hiding the science.
        </p>
      </section>

      {/* GOALS */}
      <section id="goals" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="02 · North Star" title="Goals & requirements" icon={Target} />
        <ul className="mt-6 grid md:grid-cols-2 gap-3">
          {[
            "Automate end-to-end EEG model benchmarking across architectures.",
            "Cut experiment turnaround from days to minutes.",
            "Make pipelines reproducible across datasets, machines, and users.",
            "Expose a researcher-friendly UI — no infra knowledge required.",
            "Scale horizontally on commodity cloud (AWS) with containerized workers.",
            "Standardize artifacts: configs, metrics, models, and reports.",
          ].map((g) => (
            <li
              key={g}
              className="flex items-start gap-3 rounded-lg border border-border bg-card/40 p-4 text-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-foreground/90">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="03 · Approach" title="Solution overview" icon={Lightbulb} />
        <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
          NeuroAI is a modular pipeline platform: raw EEG flows through standardized
          ingestion, MNE-based preprocessing, an automated parameter predictor, and a
          PyTorch training/evaluation engine. Researchers interact via a React dashboard
          that orchestrates jobs and surfaces metrics, plots, and ranked model leaderboards.
        </p>
        <div className="mt-6 grid md:grid-cols-5 gap-3">
          {[
            { icon: Database, t: "Ingestion", d: "EDF / FIF / BIDS uploads, validated and versioned." },
            { icon: Workflow, t: "Preprocessing", d: "Filtering, ICA, epoching via MNE." },
            { icon: Sparkles, t: "Param predictor", d: "Suggests hyperparameters from data stats." },
            { icon: Cpu, t: "Train & eval", d: "PyTorch trainers with shared metrics." },
            { icon: LineChart, t: "Dashboard", d: "Job status, leaderboards, artifacts." },
          ].map((c) => (
            <Card key={c.t} className="text-center">
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-4.5 w-4.5" />
              </div>
              <div className="mt-3 text-sm font-semibold">{c.t}</div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="04 · System design" title="Architecture" icon={Layers} />
        <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-card via-card/60 to-background p-6 md:p-8">
          <ArchitectureDiagram />
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card>
            <div className="text-sm font-semibold">Control plane</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              FastAPI service exposes job, dataset, and experiment APIs. The React dashboard
              consumes them, while a job queue dispatches work to containerized workers.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Data plane</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              EEG recordings live in S3-backed object storage; preprocessed epochs and
              trained checkpoints are written back as immutable, content-addressed artifacts.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Compute plane</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Docker images bundle MNE + PyTorch with pinned versions. Workers scale
              horizontally on AWS, allowing parallel sweeps across architectures.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Observability</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Every run emits structured metrics, configs, and seeds. Reproducibility is a
              first-class artifact, not a side-effect.
            </p>
          </Card>
        </div>
      </section>

      {/* DEEP DIVE */}
      <section id="deep-dive" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="05 · Engineering" title="Technical deep dive" icon={Cpu} />
        <div className="mt-6 space-y-4">
          {[
            {
              icon: Brain,
              t: "Handling messy EEG signals",
              d: "EEG is dominated by artifacts: eye blinks, muscle tension, line noise, electrode drift. The pipeline standardizes channel layouts, applies bandpass + notch filtering, and runs ICA-based artifact rejection so downstream models see comparable inputs across recordings.",
            },
            {
              icon: Workflow,
              t: "MNE for signal processing",
              d: "MNE drives preprocessing because it’s the de-facto standard in the neuroscience community. Wrapping it in declarative configs lets researchers describe what they want (filter band, epoch length, baseline) without re-implementing primitives.",
            },
            {
              icon: Cpu,
              t: "Model pipeline in PyTorch",
              d: "Models implement a small interface (forward, training_step, eval_step). A shared trainer handles AMP, gradient clipping, early stopping, and metric logging — so adding a new architecture is one file, not one project.",
            },
            {
              icon: Sparkles,
              t: "Parameter prediction",
              d: "A meta-model inspects dataset statistics — sampling rate, channel count, class balance, signal energy — and suggests a starting hyperparameter set (learning rate, batch size, window length). This collapses the manual sweep step that used to dominate wall-clock time.",
            },
            {
              icon: GitBranch,
              t: "Frontend ↔ backend contract",
              d: "The React dashboard talks to FastAPI over a typed schema. Long-running jobs are tracked via a status endpoint; artifacts (plots, leaderboards, exported models) are linked from the run page so researchers stay in one place.",
            },
            {
              icon: Rocket,
              t: "Docker + AWS for scale",
              d: "Pinned Docker images guarantee reproducibility. On AWS, workers scale out to run sweeps in parallel; a single researcher can launch what used to be a week of experiments and have ranked results in minutes.",
            },
          ].map((row) => (
            <Card key={row.t} className="md:flex md:items-start md:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <row.icon className="h-4.5 w-4.5" />
              </div>
              <div className="mt-3 md:mt-0">
                <div className="text-sm font-semibold">{row.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{row.d}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* INNOVATIONS */}
      <section id="innovations" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="06 · What’s novel" title="Key innovations" icon={Sparkles} />
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              t: "Automated parameter prediction",
              d: "Removes the most time-consuming manual step in EEG benchmarking by suggesting strong starting hyperparameters from data characteristics.",
            },
            {
              t: "End-to-end pipeline integration",
              d: "Ingestion, preprocessing, training, and reporting share one config and one artifact store — no glue code between stages.",
            },
            {
              t: "Near real-time benchmarking",
              d: "Parallel containerized workers turn multi-day comparative studies into minute-scale runs.",
            },
            {
              t: "Researcher-first UX",
              d: "A dashboard, not a terminal: upload data, pick a study, get a leaderboard. Adopted by 5+ researchers without onboarding overhead.",
            },
          ].map((c) => (
            <Card key={c.t}>
              <div className="text-sm font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section id="challenges" className="mt-16 scroll-mt-24">
        <SectionHeader
          eyebrow="07 · Honest engineering"
          title="Challenges & trade-offs"
          icon={Gauge}
        />
        <div className="mt-6 space-y-4">
          {[
            {
              t: "Noisy, heterogeneous EEG data",
              d: "Different montages, sampling rates, and recording conditions break naive pipelines. We pay an upfront standardization cost to get consistent downstream behavior.",
            },
            {
              t: "Generalization across datasets",
              d: "A model that wins on one dataset can collapse on another. The platform encourages cross-dataset evaluation as a default, even though it’s slower than single-dataset benchmarks.",
            },
            {
              t: "Accuracy vs speed",
              d: "The parameter predictor optimizes for fast, strong baselines — not absolute SOTA. Researchers can opt into deeper sweeps when warranted; the default biases toward iteration speed.",
            },
            {
              t: "Deployment & scaling",
              d: "Cold-start cost on AWS workers was non-trivial. Warm worker pools and image layer caching brought job startup into the seconds-range without leaving cost on the table.",
            },
          ].map((row) => (
            <Card key={row.t}>
              <div className="text-sm font-semibold">{row.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{row.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="08 · Outcome" title="Results & impact" icon={LineChart} />
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "2–3 days → mins", k: "Benchmark cycle" },
            { v: "5+", k: "Researchers in production" },
            { v: "1 config", k: "From raw EEG to report" },
            { v: "Reproducible", k: "Runs by default" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-background p-5"
            >
              <div className="font-display text-2xl font-semibold tracking-tight">{m.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.k}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
          The most meaningful signal wasn’t a metric — it was behavior change. Researchers
          began running comparative studies they previously avoided because the cost dropped
          below the friction threshold. Iteration speed compounded into better science.
        </p>
      </section>

      {/* FUTURE */}
      <section id="future" className="mt-16 scroll-mt-24">
        <SectionHeader eyebrow="09 · What’s next" title="Future improvements" icon={Rocket} />
        <ul className="mt-6 grid md:grid-cols-2 gap-3">
          {[
            "Onboard additional public EEG datasets and montages.",
            "Improve cross-subject and cross-dataset generalization.",
            "Real-time EEG streaming for live inference scenarios.",
            "Deeper UI affordances: comparison views, annotation, sharing.",
            "Active learning loops to prioritize informative experiments.",
            "Cost-aware scheduling for sweeps on spot capacity.",
          ].map((g) => (
            <li
              key={g}
              className="flex items-start gap-3 rounded-lg border border-border bg-card/40 p-4 text-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-foreground/90">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-background p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-primary">
              Want to go deeper?
            </div>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Let’s talk about the engineering behind it.
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Happy to walk through architecture decisions, trade-offs, or how this could
              translate to your stack.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {study.github && (
              <a
                href={study.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-4 py-2 text-sm hover:bg-secondary"
              >
                <GithubIcon className="h-4 w-4" /> Source
              </a>
            )}
            {study.demo && (
              <a
                href={study.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-4 py-2 text-sm hover:bg-secondary"
              >
                <ExternalLink className="h-4 w-4" /> Live demo
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

/* ---------------- Inline architecture diagram (no images) ---------------- */

function ArchitectureDiagram() {
  const stages = [
    { t: "EEG Sources", s: "EDF · FIF · BIDS", icon: Database },
    { t: "Ingestion", s: "Validate · version", icon: Workflow },
    { t: "Preprocess", s: "MNE · ICA · filters", icon: Brain },
    { t: "Param Predictor", s: "Suggests HPs", icon: Sparkles },
    { t: "Train / Eval", s: "PyTorch workers", icon: Cpu },
    { t: "Dashboard", s: "React · leaderboards", icon: LineChart },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {stages.map((s, i) => (
          <div key={s.t} className="relative">
            <div className="rounded-xl border border-border bg-background/60 p-3 text-center h-full">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-2 text-xs font-semibold">{s.t}</div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">{s.s}</div>
            </div>
            {i < stages.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 text-primary/60">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-3">
        {[
          { t: "S3 artifact store", s: "Datasets · checkpoints · reports" },
          { t: "Job queue", s: "FastAPI control plane → Docker workers" },
          { t: "AWS autoscaling", s: "Parallel sweeps, warm pools" },
        ].map((b) => (
          <div
            key={b.t}
            className="rounded-lg border border-dashed border-border/70 bg-background/40 p-3 text-xs"
          >
            <div className="font-semibold">{b.t}</div>
            <div className="text-muted-foreground">{b.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
