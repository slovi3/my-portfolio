export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: "Live" | "In Progress" | "Case Study";
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    name: "BulkTrack",
    description:
      "Discipline and fitness tracking web app focused on habits, workouts, and progress.",
    stack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    status: "Live",
    liveUrl: "https://bulktrack.vercel.app/",
    githubUrl: "https://github.com/slovi3/bulktrack",
    accent: "rgba(234, 179, 8, 0.15)", // amber glow
  },
  {
    name: "Pomodoro Timer",
    description:
      "Productivity timer app with a clean interface for focused work sessions.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    liveUrl: "https://slovi3.github.io/pomodoro-timer/",
    githubUrl: "https://github.com/slovi3/pomodoro-timer",
    accent: "rgba(59, 130, 246, 0.15)", // blue glow
  },
  {
    name: "Habit Tracker",
    description:
      "Simple habit tracking app for building consistency and tracking daily progress.",
    stack: ["React", "CSS", "JavaScript"],
    status: "Live",
    liveUrl: "https://slovi3.github.io/habit-tracker/",
    githubUrl: "https://github.com/slovi3/habit-tracker",
    accent: "rgba(34, 197, 94, 0.15)", // green glow
  },
  {
    name: "Password Generator",
    description:
      "Vanilla JavaScript password generator with strength meter and clean modern UI.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    liveUrl: "https://slovi3.github.io/password-generator/",
    githubUrl: "https://github.com/slovi3/password-generator",
    accent: "rgba(236, 72, 153, 0.15)", // pink glow
  },
  {
    name: "Movie Search App",
    description:
      "Movie browsing and search experience with a clean modern interface.",
    stack: ["React", "API", "CSS"],
    status: "Live",
    liveUrl: "https://slovi3.github.io/movie-search-app/",
    githubUrl: "https://github.com/slovi3/movie-search-app",
    accent: "rgba(168, 85, 247, 0.15)", // purple glow
  },
];
