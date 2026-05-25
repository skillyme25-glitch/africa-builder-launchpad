export function Logo({ className = "", mark = true }: { className?: string; mark?: boolean }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      {mark && (
        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--ink)] text-white overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-br from-[var(--cyan-accent)]/40 to-[var(--red-accent)]/30 opacity-80" />
          <span className="relative font-display font-black text-[15px] tracking-tight">S</span>
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[var(--red-accent)]" />
        </span>
      )}
      <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--ink)]">
        SkillyMe<span className="text-[var(--cyan-accent)]">.</span>Africa
      </span>
    </a>
  );
}
