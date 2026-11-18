export default function About() {
    // Data for the tags at the bottom
    const interests = [
        "Web development",
        "Technology & AI",
        "Football",
        "Open source",
    ];

    return (
        <section id="about" className="scroll-mt-24 bg-slate-950 py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Main Grid Layout: 1 column on mobile, 12 columns on desktop */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

                    {/* LEFT COLUMN: Heading */}
                    <div className="md:col-span-5">
                        <p className="text-xs font-mono font-semibold uppercase tracking-widest text-purple-400">
                            01 / ABOUT ME
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            A little about <br className="hidden sm:block" />
                            who I am.
                        </h2>
                        {/* The small purple underline */}
                        <div className="mt-6 h-[2px] w-12 bg-purple-400"></div>
                    </div>

                    {/* RIGHT COLUMN: Content */}
                    <div className="md:col-span-7">
                        <p className="text-lg leading-relaxed text-slate-300">
                            I’m studying Computer Science at Laikipia University and building a foundation in software development through hands-on projects. I’m interested in useful, well-considered digital experiences and the technology that makes them work.
                        </p>

                        {/* Info Cards */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Currently
                                </p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    Computer Science student
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Learning by building
                                </p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    Full-stack web products
                                </p>
                            </div>
                        </div>

                        {/* Interest Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {interests.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-300"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}