import { Logo } from "./Logo";
import { Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

const cols = [
  {
    title: "Programs",
    links: ["Founder Forge", "AI Programs", "Startup Bootcamps", "Innovation Challenges"],
  },
  {
    title: "Company",
    links: ["About", "Mission", "Impact", "Press"],
  },
  {
    title: "Connect",
    links: ["Community", "Partner with us", "Mentors", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-[var(--ink-soft)]">
              Africa's premium AI, innovation and founder ecosystem — training, accelerating and
              connecting the builders shaping our future.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex max-w-sm items-center gap-2 rounded-xl border border-black/10 bg-white p-1.5 focus-within:border-black/30"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-3 py-2 text-sm placeholder:text-[var(--ink-soft)]/60 focus:outline-none"
              />
              <button className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--ink)] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--ink-soft)]">
                Subscribe <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
            <div className="mt-7 flex items-center gap-2">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-[var(--ink-soft)] transition-colors hover:border-black/20 hover:text-[var(--ink)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]/70">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-black/5 pt-8 text-xs text-[var(--ink-soft)] sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} SkillyMe Africa. Built for the continent.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[var(--ink)]">Privacy</a>
            <a href="#" className="hover:text-[var(--ink)]">Terms</a>
            <a href="#" className="hover:text-[var(--ink)]">Code of conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
