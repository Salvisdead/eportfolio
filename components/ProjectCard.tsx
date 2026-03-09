"use client";

import type { Project } from "../data/projects";

/** Map tech labels to a small emoji. Feel free to tweak. */
function techIcon(t: string) {
  const map: Record<string, string> = {
    React: "⚛️",
    "Firebase": "🔥",
    "Firebase Auth": "🔥",
    Firestore: "🗂️",
    "Security Rules": "🛡️",
    "Cloud Functions": "⚙️",
    Sheets: "📊",
    Vite: "⚡",
    Emulators: "🧪",
  };
  return map[t] ?? "•";
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-sm">
      {/* Title & blurb */}
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.description}</p>

      {/* Tech – emoji + text, NO boxes */}
      <ul className="token-row">
        {p.tech.map((t) => (
          <li key={t} className="token">
            <span aria-hidden>{techIcon(t)}</span>
            {t}
          </li>
        ))}
      </ul>

      {/* Code link – tidy underline, no blue focus box */}
      <div className="mt-2">
        <a
          href={p.code}
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet font-medium"
          aria-label={`Open source code for ${p.title}`}
        >
          Github
        </a>
      </div>
    </article>
  );
}
