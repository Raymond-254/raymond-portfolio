import type { FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const contactEmail = "raywamalwa22@gmail.com";
const socialProfiles = [
  {
    name: "GitHub",
    href: "https://github.com/Raymond-254",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/raymond-kundu-19254b349",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/254707355181",
  },
];

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/5 bg-slate-950 px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-violet-400">
            06 / Get in touch
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Let’s work together.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Have a project in mind, an opportunity to discuss, or just want to say
            hello? Send me a message.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <Mail size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">Contact details</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Prefer to email directly? I’d be glad to hear from you.
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex w-fit max-w-full items-center gap-2 break-all text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
            >
              {contactEmail}
              <ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialProfiles.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-400/5 hover:text-white"
                >
                  {name === "GitHub" ? (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.95 2.14 3.42 1.52.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                  ) : name === "LinkedIn" ? (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.21 0Z" />
                    </svg>
                  ) : (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.32.22 11.88c0 2.1.55 4.14 1.59 5.95L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.89-11.88a11.82 11.82 0 0 0-3.48-8.42ZM12.1 21.76a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.52-5.24C2.2 6.43 6.64 2 12.1 2a9.85 9.85 0 0 1 7.01 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.81.38s-1.06 1.04-1.06 2.52 1.09 2.92 1.24 3.12c.15.2 2.14 3.27 5.19 4.59.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
                    </svg>
                  )}
                  {name}
                  <ArrowUpRight size={14} aria-hidden="true" className="text-slate-500" />
                </a>
              ))}
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-200">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
                className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full resize-y rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                <Mail size={16} aria-hidden="true" />
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
