// app/page.tsx
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

/** >>> CHANGE THIS EMAIL ONLY <<< */
const EMAIL = "salvatorespecmc@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Portfolio inquiry — React + Firebase"
)}&body=${encodeURIComponent(
  "Hey Salvatore,\n\nI saw your portfolio and wanted to chat about a project.\n\n— "
)}`;

const skills = [
  { icon: "⚛️", label: "React" },
  { icon: "🔥", label: "Firebase Auth" },
  { icon: "🗂️", label: "Firestore" },
  { icon: "🛡️", label: "Security Rules" },
  { icon: "⚙️", label: "Cloud Functions" },
  { icon: "🟨", label: "JavaScript" },
  { icon: "🟧", label: "HTML" },
  { icon: "🟦", label: "CSS" },
  { icon: "🔧", label: "Git" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      {/* Hero */}
      <section className="text-center">
        <p className="text-xs tracking-widest text-slate-500">PORTFOLIO</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
          <span className="gradient-text">Salvatore — React + Firebase Developer</span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-700">
          I ship fast, secure web apps with <strong>React</strong> on a
          <strong> Firebase</strong> backend—Auth, Firestore, Security Rules, and Cloud Functions.
          Below are a few things I’ve built.
        </p>

        {/* Skills: emoji + text (NO boxes) */}
        <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-700/90">
          {skills.map((s) => (
            <li key={s.label} className="token">
              <span aria-hidden>{s.icon}</span>
              {s.label}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={MAILTO}
            className="no-underline inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                       text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-sm transition hover:brightness-110
                       focus:outline-none"
          >
            ✉️ Contact
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="no-underline inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                       text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition focus:outline-none"
          >
            📄 Resume (PDF)
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <span className="text-sm text-slate-500">{projects.length} selected</span>
        </div>

        <div className="mt-6 space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          I’m a self-taught developer who ships small, fast web apps with React on Firebase. I focus on clean UX and secure backends with Auth, Firestore, Cloud Functions, and solid Security Rules. I move quickly, write straightforward code, and document decisions so they’re easy to maintain. Outside uni, I coach Valorant and build analytics tools, so I care about reliability, clear metrics, and practical design.
        </p>
      </section>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Salvatore
      </footer>
    </main>
  );
}
