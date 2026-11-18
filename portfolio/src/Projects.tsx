import { Card } from "./components/ui/card";

const projects = [
  {
    name: "Mavuno",
    category: "Agriculture · Decision support",
    description: "An agricultural market decision-support platform.",
    details:
      "A market decision-support platform focused on surfacing agricultural information to help with crop and selling decisions.",
    technologies: ["React", "TypeScript", "Supabase"],
    artwork: "analytics",
    isConcept: false,
  },
  {
    name: "MovieBox",
    category: "Movie discovery · Browsing",
    description: "A movie discovery and browsing app.",
    details:
      "A movie discovery and browsing experience for exploring titles and finding something new to watch.",
    technologies: ["React", "TypeScript", "TMDB"],
    artwork: "movies",
    isConcept: false,
  },
  {
    name: "Portfolio website",
    category: "Personal · Portfolio",
    description: "A home for my work, skills, and background.",
    details:
      "A responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. Its sections are part of one scrolling homepage.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    artwork: "portfolio",
    isConcept: false,
  },
  {
    name: "StudySpace",
    category: "Education · Study planning",
    description: "A concept for organizing study sessions and goals.",
    details:
      "A study-planning concept with a weekly schedule, focused work sessions, and a simple view of learning goals.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    artwork: "study",
    isConcept: true,
  },
  {
    name: "PesaTrack",
    category: "Personal finance · Tracking",
    description: "A concept for making everyday spending easier to follow.",
    details:
      "A personal-finance concept for recording expenses, grouping purchases, and reviewing spending at a glance.",
    technologies: ["React", "TypeScript", "Charts"],
    artwork: "finance",
    isConcept: true,
  },
  {
    name: "WeatherNow",
    category: "Weather · Forecasting",
    description: "A concept for a clear, glanceable weather dashboard.",
    details:
      "A weather-dashboard concept that brings current conditions and a short forecast into a simple interface.",
    technologies: ["React", "TypeScript", "Weather API"],
    artwork: "weather",
    isConcept: true,
  },
] as const;

type ArtworkKind = (typeof projects)[number]["artwork"];

function ProjectArtwork({ kind }: { kind: ArtworkKind }) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex h-48 items-center justify-center overflow-hidden border-b border-white/5 bg-grid-white/[0.035] sm:h-52 ${
        kind === "movies"
          ? "bg-gradient-to-br from-fuchsia-950/50 via-slate-900 to-indigo-950/60"
          : kind === "weather"
            ? "bg-gradient-to-br from-sky-950/60 via-slate-900 to-cyan-950/40"
            : "bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40"
      }`}
    >
      {kind === "analytics" && (
        <div className="w-[min(60%,18rem)] -rotate-6 rounded-lg border border-cyan-400/40 bg-slate-950/90 p-3 shadow-[12px_14px_0_rgba(8,145,178,0.12)] sm:p-4">
          <div className="space-y-2">
            <div className="h-1.5 rounded bg-slate-700" />
            <div className="h-1.5 w-4/5 rounded bg-slate-800" />
          </div>
          <div className="mt-5 flex h-12 items-end gap-2">
            {[38, 70, 52, 94, 84].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-500 to-cyan-400"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      )}
      {kind === "movies" && (
        <div className="flex max-w-full items-center gap-1.5 sm:gap-3">
          {["rounded-full", "rotate-45 rounded-sm", "rounded-full"].map((shape, index) => (
            <div
              key={index}
              className={`flex h-24 w-12 shrink-0 -rotate-3 flex-col items-center justify-center rounded-md border border-white/20 shadow-xl sm:h-28 sm:w-[4.5rem] ${
                index === 1 ? "rotate-3 bg-orange-400/30" : "bg-fuchsia-400/20"
              }`}
            >
              <span className={`h-9 w-9 border border-white/60 sm:h-12 sm:w-12 ${shape}`} />
              <span className="mt-3 h-1 w-8 bg-white/50 sm:mt-4 sm:w-10" />
              <span className="mt-1 h-1 w-7 bg-white/30 sm:w-8" />
            </div>
          ))}
        </div>
      )}
      {kind === "portfolio" && (
        <div className="w-[62%] rounded-lg border border-violet-400/40 bg-slate-950/85 p-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="h-1.5 w-20 rounded bg-slate-600" />
          </div>
          <div className="mt-5 h-2 w-3/4 rounded bg-slate-300/80" />
          <div className="mt-2 h-2 w-1/2 rounded bg-violet-400/80" />
          <div className="mt-5 h-1.5 w-full rounded bg-slate-800" />
          <div className="mt-2 h-1.5 w-4/5 rounded bg-slate-800" />
        </div>
      )}
      {kind === "study" && (
        <div className="grid w-[62%] grid-cols-3 gap-2 rounded-lg border border-cyan-400/30 bg-slate-950/85 p-3 shadow-xl">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
            <div key={day} className="rounded bg-slate-900 p-2">
              <span className="font-mono text-[8px] text-slate-500">{day}</span>
              <div className={`mt-2 h-5 rounded ${index % 2 ? "bg-violet-400/50" : "bg-cyan-400/40"}`} />
            </div>
          ))}
        </div>
      )}
      {kind === "finance" && (
        <div className="w-[60%] rounded-lg border border-emerald-400/30 bg-slate-950/85 p-4 shadow-xl">
          <div className="h-1.5 w-20 rounded bg-slate-700" />
          <div className="mt-4 flex h-16 items-end gap-2">
            {[52, 38, 78, 60, 94, 68].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald-600 to-teal-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      )}
      {kind === "weather" && (
        <div className="flex max-w-[calc(100%-2rem)] items-center gap-4 rounded-xl border border-sky-300/20 bg-slate-950/60 px-4 py-4 shadow-xl sm:gap-8 sm:px-8 sm:py-5">
          <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-amber-200 via-orange-400 to-orange-500 shadow-[0_0_35px_rgba(251,146,60,0.25)] sm:h-16 sm:w-16" />
          <div>
            <div className="h-2 w-20 rounded bg-slate-300/70" />
            <div className="mt-3 h-7 w-12 rounded bg-white/90 sm:w-14" />
            <div className="mt-2 h-1.5 w-20 rounded bg-slate-600 sm:w-24" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-violet-400">
              02 / Selected work
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Projects I’ve built.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            A collection of projects and concepts, each shaped around a clear idea.
            Open a card to learn more.
          </p>
        </div>

        <div className="grid min-w-0 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <details
              key={project.name}
              open
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1a1a20] text-white transition-colors hover:border-white/20"
            >
              <summary className="order-2 flex cursor-pointer list-none items-center justify-between border-t border-white/10 px-5 py-4 text-xs font-semibold text-slate-200 marker:hidden hover:text-white sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">View project details</span>
                <span className="hidden group-open:inline">Hide project details</span>
                <span
                  aria-hidden="true"
                  className="text-base transition-transform group-open:rotate-45"
                >
                  ↗
                </span>
              </summary>
              <Card className="order-1 h-full min-w-0 border-0 bg-transparent py-0 text-white ring-0">
                <ProjectArtwork kind={project.artwork} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-300">
                    {project.category}
                    {project.isConcept && (
                      <span className="ml-2 text-violet-300">· Concept</span>
                    )}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-slate-400">{project.description}</p>
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-slate-300"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}