export default function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-[radial-gradient(ellipse_at_78%_48%,rgba(91,33,182,0.16),transparent_42%)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-12">
        <div className="relative z-[1]">

          <h1 className="mt-8 text-6xl font-bold leading-[0.96] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl">
            Hi, I’m
            <br />
            Raymond
            <br />
            <span className="text-violet-400">Kundu.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I’m a software developer and Computer Science student interested in
            building digital experiences that solve real problems.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Currently focused on full-stack development with React, TypeScript,
            Node.js, and Supabase.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Explore my projects
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#about"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-white/5"
            >
              About me
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/60"
          />
          <span
            aria-hidden="true"
            className="absolute left-[8%] top-[36%] z-[1] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_4px_rgba(103,232,249,0.35)]"
          />
          <div className="relative h-[min(72vw,30rem)] w-[min(72vw,23rem)] overflow-hidden rounded-t-[48%] rounded-b-2xl border border-slate-700/80 bg-slate-900 shadow-[0_24px_100px_rgba(76,29,149,0.25)]">
            <img
              src="/Raymond.jpg"
              alt="Raymond Kundu"
              className="h-full w-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-violet-950/10" />
          </div>
          <div className="absolute bottom-12 right-0 rounded-xl border border-slate-700 bg-slate-950/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-2">
            <p className="text-xs font-semibold text-white">Full-stack developer</p>
            <p className="mt-1 font-mono text-[10px] text-slate-400">
              React · TypeScript · Node.js
            </p>
          </div>
          <p className="absolute bottom-0 left-0 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
            01 — Building with purpose
          </p>
        </div>
      </div>
    </section>
  );
}