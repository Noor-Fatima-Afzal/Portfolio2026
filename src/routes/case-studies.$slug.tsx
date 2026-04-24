import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Cpu,
  Database,
  ExternalLink,
  LineChart,
  Quote,
  Server,
  Sparkles,
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
      "An end-to-end EEG ML system that turns raw brain signals into ranked, reproducible model results — built by a small, cross-functional team.",
    domain: "Healthcare AI · EEG · Team Project",
    year: "2025",
    role: "Backend Developer — core system, ML pipeline integration, architecture",
    image: neuroai,
    stack: ["Python", "PyTorch", "MNE", "FastAPI", "ReactJS", "Docker", "AWS"],
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

/* ------------------------------ Small atoms ------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
      {children}
    </h2>
  );
}

function Divider() {
  return (
    <div className="my-20 md:my-28 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
      {children}
    </p>
  );
}

function PullQuote({ children, by }: { children: React.ReactNode; by?: string }) {
  return (
    <figure className="my-12 md:my-16 border-l-2 border-primary pl-6 md:pl-8">
      <Quote className="h-5 w-5 text-primary/70" />
      <blockquote className="mt-3 font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground">
        “{children}”
      </blockquote>
      {by && (
        <figcaption className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
          — {by}
        </figcaption>
      )}
    </figure>
  );
}

/* ------------------------------- Team data ------------------------------- */

type Member = {
  name: string;
  role: string;
  responsibility: string;
  gender: "f" | "m";
  initials: string;
};

const TEAM: Member[] = [
  {
    name: "Noor Fatima",
    role: "Backend Developer (Lead)",
    responsibility:
      "Core system, ML pipeline integration, architecture design, deployment.",
    gender: "f",
    initials: "NF",
  },
  {
    name: "Sonia Shahid",
    role: "Logo Designer",
    responsibility: "Branding and visual identity for the product.",
    gender: "f",
    initials: "SS",
  },
  {
    name: "Maneeha Noor",
    role: "Figma / UI Designer",
    responsibility: "UI/UX design, wireframes, and the researcher-facing interface.",
    gender: "f",
    initials: "MN",
  },
  {
    name: "Areeba Razzaq",
    role: "Frontend Developer",
    responsibility: "React implementation and integration with backend APIs.",
    gender: "f",
    initials: "AR",
  },
  {
    name: "Ghulam Nabi",
    role: "Data Module Engineer",
    responsibility:
      "Data pipeline, preprocessing, dataset handling, feature engineering.",
    gender: "m",
    initials: "GN",
  },
];

function TeamCard({ m }: { m: Member }) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-card hover:border-primary/40">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border font-display text-base font-semibold text-foreground">
            {m.initials}
          </div>
          <div
            aria-hidden
            className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-background ring-1 ring-border text-base"
            title={m.gender === "f" ? "Female" : "Male"}
          >
            {m.gender === "f" ? "👩" : "👨"}
          </div>
        </div>
        <div className="min-w-0">
          <div className="font-display text-base font-semibold tracking-tight">
            {m.name}
          </div>
          <div className="mt-0.5 text-xs font-mono uppercase tracking-wider text-primary">
            {m.role}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {m.responsibility}
      </p>
    </div>
  );
}

/* ------------------------- Visuals (SVG diagrams) ------------------------ */

function ArchitectureDiagram() {
  const Box = ({
    x,
    y,
    w,
    h,
    title,
    sub,
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    title: string;
    sub: string;
  }) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className="fill-card stroke-border"
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + 22}
        textAnchor="middle"
        className="fill-foreground"
        style={{ fontSize: 12, fontWeight: 600 }}
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + 40}
        textAnchor="middle"
        className="fill-muted-foreground"
        style={{ fontSize: 10 }}
      >
        {sub}
      </text>
    </g>
  );

  const arrow = (x1: number, y1: number, x2: number, y2: number) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-primary/60"
      strokeWidth={1.4}
      markerEnd="url(#ah)"
    />
  );

  return (
    <svg viewBox="0 0 760 360" className="w-full h-auto">
      <defs>
        <marker
          id="ah"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-primary/70" />
        </marker>
      </defs>

      {/* Row 1 — Data plane */}
      <Box x={20} y={30} w={150} h={60} title="EEG Data" sub="EDF · FIF · BIDS" />
      <Box x={210} y={30} w={170} h={60} title="Data Module" sub="Clean · Epoch · Features" />
      <Box x={420} y={30} w={170} h={60} title="Param Predictor" sub="Suggests hyperparams" />
      <Box x={620} y={30} w={120} h={60} title="Model Zoo" sub="PyTorch" />

      {arrow(170, 60, 210, 60)}
      {arrow(380, 60, 420, 60)}
      {arrow(590, 60, 620, 60)}

      {/* Row 2 — Backend / Compute */}
      <Box x={120} y={150} w={200} h={70} title="FastAPI Backend" sub="Jobs · Datasets · Runs" />
      <Box x={360} y={150} w={220} h={70} title="Worker Pool (Docker)" sub="Train · Eval · Log" />
      <Box x={620} y={150} w={120} h={70} title="Artifacts" sub="S3 · Metrics" />

      {arrow(220, 90, 220, 150)}
      {arrow(505, 90, 470, 150)}
      {arrow(320, 185, 360, 185)}
      {arrow(580, 185, 620, 185)}

      {/* Row 3 — Frontend */}
      <Box x={220} y={270} w={320} h={70} title="React Dashboard" sub="Upload · Monitor · Compare" />
      {arrow(220, 220, 320, 270)}
      {arrow(680, 220, 540, 270)}
    </svg>
  );
}

function PipelineFlow() {
  const steps = [
    { t: "Upload", d: "Researcher uploads EEG dataset" },
    { t: "Preprocess", d: "MNE filtering, ICA, epoching" },
    { t: "Predict params", d: "Auto hyperparameter suggestion" },
    { t: "Train", d: "PyTorch on Docker workers" },
    { t: "Compare", d: "Leaderboard + reports" },
  ];
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((s, i) => (
        <div
          key={s.t}
          className="relative rounded-xl border border-border bg-card/60 p-4"
        >
          <div className="text-[11px] font-mono uppercase tracking-wider text-primary">
            Step {i + 1}
          </div>
          <div className="mt-1 text-sm font-semibold">{s.t}</div>
          <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.d}</div>
        </div>
      ))}
    </div>
  );
}

/* --------------------------- Case study page --------------------------- */

function NeuroAICaseStudy({ study }: { study: CaseStudy }) {
  return (
    <article className="pb-24">
      {/* Top bar */}
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All case studies
        </Link>
      </div>

      {/* HERO */}
      <header className="mx-auto max-w-6xl px-6 pt-10 md:pt-16">
        <Eyebrow>Case Study · {study.year}</Eyebrow>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
          {study.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {study.tagline}
        </p>

        {/* Meta strip */}
        <div className="mt-10 grid gap-6 md:grid-cols-4 border-y border-border py-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              My role
            </div>
            <div className="mt-1.5 text-sm font-medium">Backend Developer</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Team
            </div>
            <div className="mt-1.5 text-sm font-medium">5 — design, frontend, data, backend</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Domain
            </div>
            <div className="mt-1.5 text-sm font-medium">{study.domain}</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Stack
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {study.stack.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
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
      </header>

      {/* HERO IMAGE — full bleed */}
      <figure className="mt-14 md:mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={study.image}
              alt="NeuroAI Platform — EEG ML system overview"
              className="w-full h-auto"
            />
          </div>
          <div className="mx-auto max-w-6xl">
            <Caption>Fig. 01 — NeuroAI: an EEG-first ML platform built by a five-person team.</Caption>
          </div>
        </div>
      </figure>

      <Divider />

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-6">
        <Eyebrow>01 · Intro</Eyebrow>
        <SectionTitle>An EEG ML platform, made for researchers.</SectionTitle>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          NeuroAI helps researchers go from raw EEG recordings to ranked, reproducible
          model results in a single workflow. Upload data, let the system preprocess it,
          and compare models side-by-side — without rewriting pipelines.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          It was built as a team project. The system, ML integration, and architecture
          were my responsibility; design, frontend, and data engineering were owned by
          teammates I worked with closely.
        </p>
      </section>

      <Divider />

      {/* CONTEXT & GOAL */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          <div>
            <Eyebrow>02 · Context</Eyebrow>
            <SectionTitle>Why this project existed.</SectionTitle>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              EEG research workflows are slow. Each new experiment usually means
              re-implementing preprocessing, re-tuning hyperparameters, and waiting
              days for benchmarks to finish.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              We wanted a single system where researchers could upload data, run a
              standardized pipeline, and compare models — quickly and reproducibly.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { t: "Manual pipelines", d: "Pre-processing rebuilt for every project." },
              { t: "Slow iteration", d: "Benchmarks took 2–3 days per experiment." },
              { t: "Hard to reproduce", d: "Results varied across machines and people." },
              { t: "Not researcher-friendly", d: "Heavy infra knowledge was required." },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-xl border border-border bg-card/60 p-4"
              >
                <div className="text-sm font-semibold">{p.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
        </div>

        <PullQuote by="Project goal">
          Take EEG benchmarking from days of manual work to minutes of automated runs —
          without hiding the science from the researcher.
        </PullQuote>
      </section>

      <Divider />

      {/* TEAM */}
      <section className="mx-auto max-w-6xl px-6">
        <Eyebrow>03 · Team & Roles</Eyebrow>
        <SectionTitle>Built collaboratively.</SectionTitle>
        <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
          A small, focused team. Each role mattered — branding, interface, data, and
          backend all came together to make NeuroAI feel like a single product.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </div>
        <Caption>Fig. 02 — Team structure: design, frontend, data, and backend.</Caption>
      </section>

      <Divider />

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6">
        <Eyebrow>04 · Process</Eyebrow>
        <SectionTitle>From problem to product.</SectionTitle>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              n: "Phase 01",
              t: "Understanding the problem",
              d: "We mapped the researcher’s journey — from messy EEG files to a final report — and listed every step that wasted time.",
            },
            {
              n: "Phase 02",
              t: "System design",
              d: "I sketched a modular architecture: data, ML, backend, and frontend as independent layers connected by clear contracts.",
            },
            {
              n: "Phase 03",
              t: "Implementation",
              d: "Backend, data pipeline, and frontend were built in parallel against shared API schemas to avoid blocking each other.",
            },
            {
              n: "Phase 04",
              t: "Integration & feedback",
              d: "We connected modules, ran end-to-end tests with real EEG data, and iterated on UI based on researcher feedback.",
            },
          ].map((p) => (
            <div
              key={p.t}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-primary">
                {p.n}
              </div>
              <div className="mt-2 font-display text-xl font-semibold tracking-tight">
                {p.t}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* SOLUTION + ARCHITECTURE */}
      <section className="mx-auto max-w-6xl px-6">
        <Eyebrow>05 · Solution</Eyebrow>
        <SectionTitle>One pipeline, four collaborating modules.</SectionTitle>
        <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">
          NeuroAI is composed of a data module, an ML pipeline, a backend control plane,
          and a frontend dashboard. Each module is owned independently but speaks a
          shared, typed contract.
        </p>

        <figure className="mt-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background p-6 md:p-10">
          <ArchitectureDiagram />
        </figure>
        <Caption>Fig. 03 — System architecture across data, backend, compute, and UI.</Caption>

        <div className="mt-12">
          <PipelineFlow />
          <Caption>Fig. 04 — End-to-end pipeline a researcher experiences.</Caption>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { icon: Database, t: "Data module", d: "Ingestion, cleaning, features." },
            { icon: Server, t: "Backend", d: "FastAPI control plane + jobs." },
            { icon: Cpu, t: "ML pipeline", d: "PyTorch trainers, shared metrics." },
            { icon: LineChart, t: "Frontend", d: "React dashboard for researchers." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-border bg-card/60 p-5"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-4.5 w-4.5" />
              </div>
              <div className="mt-3 text-sm font-semibold">{c.t}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* MY CONTRIBUTIONS */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16 items-start">
          <div>
            <Eyebrow>06 · My Contribution</Eyebrow>
            <SectionTitle>Backend & system integration.</SectionTitle>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              I owned the backend, the ML pipeline integration, and the overall
              architecture — the parts that make the rest of the system run.
            </p>
            <PullQuote>
              The backend isn’t just APIs — it’s the contract that lets design, data, and
              frontend move in parallel.
            </PullQuote>
          </div>

          <div className="grid gap-3">
            {[
              {
                icon: Server,
                t: "FastAPI control plane",
                d: "Designed endpoints for datasets, jobs, and runs with typed schemas shared with the frontend.",
              },
              {
                icon: Workflow,
                t: "ML pipeline integration",
                d: "Wrapped the data module and PyTorch trainers behind a single job API so the UI never touches raw ML code.",
              },
              {
                icon: Sparkles,
                t: "Parameter prediction layer",
                d: "Integrated a hyperparameter suggestion step that removes most of the manual tuning loop.",
              },
              {
                icon: Brain,
                t: "Architecture & deployment",
                d: "Containerized services with Docker and deployed on AWS so workers scale horizontally for parallel runs.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-border bg-card/60 p-5 flex items-start gap-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {c.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CHALLENGES */}
      <section className="mx-auto max-w-6xl px-6">
        <Eyebrow>07 · Challenges</Eyebrow>
        <SectionTitle>Where it got hard.</SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Noisy EEG signals",
              d: "Artifacts (blinks, muscle, line noise) varied per recording. We standardized preprocessing so models saw comparable inputs.",
            },
            {
              t: "Module integration",
              d: "Four modules built in parallel had to fit together. Shared schemas and contract tests kept everyone unblocked.",
            },
            {
              t: "Speed vs scale",
              d: "Single-node speed was easy; horizontal scale was the real win. We chose containerized workers for parallel sweeps.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <div className="text-sm font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* OUTCOME */}
      <section className="mx-auto max-w-6xl px-6">
        <Eyebrow>08 · Outcome</Eyebrow>
        <SectionTitle>Days of work, compressed into minutes.</SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { v: "2–3 days → minutes", k: "Benchmark cycle" },
            { v: "5+", k: "Researchers using it" },
            { v: "Eliminated", k: "Manual tuning steps" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-background p-6"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                {m.k}
              </div>
              <div className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {m.v}
              </div>
            </div>
          ))}
        </div>

        <PullQuote by="Outcome">
          Researchers stopped fighting the pipeline and started running experiments.
          That was the real win.
        </PullQuote>
      </section>

      <Divider />

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 text-center">
        <Eyebrow>Next</Eyebrow>
        <SectionTitle>Want to build something like this?</SectionTitle>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          I work on the backend and ML side of products — pipelines, APIs, and the glue
          that makes a team’s work feel like one system.
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
        </div>
      </section>
    </article>
  );
}
