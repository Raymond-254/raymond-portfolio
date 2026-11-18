const skills = [
  { name: "React", description: "Building interfaces with reusable components." },
  { name: "TypeScript", description: "Adding types to make application code more reliable." },
  { name: "Tailwind CSS", description: "Styling responsive layouts with utility classes." },
  { name: "Vite", description: "Running and building modern web applications." },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">What I use</p>
      <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Skills &amp; tools</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        Here are some of the technologies I use to build websites and applications.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {skills.map(({ name, description }) => (
          <li key={name} className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">{name}</h2>
            <p className="mt-2 leading-6 text-slate-300">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}