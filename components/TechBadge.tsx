type Tone =
  | "violet" | "amber" | "sky" | "rose" | "slate"
  | "emerald" | "indigo" | "orange";

const toneClass: Record<Tone, string> = {
  violet:  "bg-violet-50  text-violet-700  ring-violet-200",
  amber:   "bg-amber-50   text-amber-700   ring-amber-200",
  sky:     "bg-sky-50     text-sky-700     ring-sky-200",
  rose:    "bg-rose-50    text-rose-700    ring-rose-200",
  slate:   "bg-slate-100  text-slate-800   ring-slate-300",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  indigo:  "bg-indigo-50  text-indigo-700  ring-indigo-200",
  orange:  "bg-orange-50  text-orange-700  ring-orange-200",
};

export default function TechBadge({
  label,
  icon = "🔹",
  tone = "slate",
}: {
  label: string;
  icon?: string;
  tone?: Tone;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ring-1",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.4)_inset]",
        toneClass[tone],
      ].join(" ")}
    >
      <span className="text-sm leading-none">{icon}</span>
      {label}
    </span>
  );
}
