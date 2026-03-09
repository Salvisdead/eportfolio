export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;  // URL or /public path (e.g., "/projects/scrim-tracker.jpg")
  code: string;   // GitHub repo
  live?: string;  // demo link (optional)
};

export const projects: Project[] = [
  {
    title: "React + Firebase Auth System (Protected Routes + Roles)",
    description:
      "A structured authentication system built with React (Vite) + Firebase. Includes email/password & Google login, Firestore-backed user profiles, role-based routing, admin-only UI, and secure Firestore rules preventing self-promotion.",
    tech: ["React", "Firebase Auth", "Firestore", "Security Rules", "Vite"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
    code: "https://github.com/Salvisdead/react-firebase-auth-starter",
    live: "https://your-demo-link.example.com",
  },
  {
    title: "Realtime Chat + Presence",
    description:
      "A realtime team chat app built with React (Vite) and Firebase. Includes auth, rooms, realtime messages, pagination, online presence, and a simple typing indicator.",
    tech: ["React", "Vite", "Firebase Auth", "Firestore", "Security Rules"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    code: "https://github.com/Salvisdead/realtime-chat-presence",
    live: "https://your-starter-demo.example.com",
  },
  {
    title: "Valorant Scrim Tracker (Lite)",
    description:
      "A React + Firebase dashboard for tracking Valorant scrim results, players, and team performance. Includes authentication, Firestore CRUD, filters, and lightweight analytics for a practical coaching workflow.",
    tech: ["React", "Vite", "Firebase Auth", "Firestore", "JavaScript", "CSS"],
    image:
      "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1400&auto=format&fit=crop",
    code: "https://github.com/Salvisdead/valorant-scrim-tracker-lite",
  },
];
