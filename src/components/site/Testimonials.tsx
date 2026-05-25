import { motion } from "framer-motion";

const items = [
  {
    quote:
      "SkillyMe didn't teach me to use AI — it taught me to build with it. I shipped my first product in eight weeks and raised pre-seed two months later.",
    name: "Amara Okeke",
    role: "Founder, Lumen AI · Lagos",
  },
  {
    quote:
      "The community is the moat. I left my cohort with co-founders, investors and design partners I'd never have reached on my own.",
    name: "Tendai Moyo",
    role: "Co-founder, Stack Africa · Nairobi",
  },
  {
    quote:
      "Selective, intense, world-class. This is what serious African talent has been waiting for — finally a program built to a global bar.",
    name: "Kwame Mensah",
    role: "Engineer · Accra → Berlin",
  },
  {
    quote:
      "Founder Forge changed how I think about distribution, fundraising and team. The mentors are the kind you usually don't get access to.",
    name: "Zineb El Idrissi",
    role: "Founder, Marasy · Casablanca",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
            Success stories
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl text-balance">
            Real founders. Real outcomes.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group relative rounded-3xl border border-black/5 bg-white p-8 transition-all hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] sm:p-10"
            >
              <div className="font-display text-5xl leading-none text-[var(--cyan-accent)]">"</div>
              <blockquote className="mt-3 font-display text-xl leading-relaxed text-[var(--ink)] text-balance sm:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--ink)] to-[var(--ink-soft)] text-sm font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--ink)]">{t.name}</div>
                  <div className="text-xs text-[var(--ink-soft)]">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
