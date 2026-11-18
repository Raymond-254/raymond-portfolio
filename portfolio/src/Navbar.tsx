const links = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#contact", label: "Contact" },
  { to: "#projects", label: "Projects" },
  { to: "#skills", label: "Skills" },
  { to: "#education", label: "Education" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-950 px-6 py-4 text-white"
    >
      <a href="#home" className="text-lg font-semibold">
        Raymond
      </a>
      <ul className="flex flex-wrap gap-1">
        {links.map(({ to, label }) => (
          <li key={to}>
            <a
              href={to}
              className="block rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}