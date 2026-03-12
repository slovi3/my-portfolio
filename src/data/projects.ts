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
    stack: ["React", "Next.js", "Tailwind CSS"],
    status: "In Progress",
    liveUrl: "https://example-bulktrack.com",
    githubUrl: "https://github.com/fkaanzeytin/bulktrack",
    accent: "rgba(234, 179, 8, 0.15)", // amber glow
  },
  {
    name: "Pomodoro Timer",
    description:
      "Productivity timer app with a clean interface for focused work sessions.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    liveUrl: "https://example-pomodoro.com",
    githubUrl: "https://github.com/fkaanzeytin/pomodoro-timer",
    accent: "rgba(59, 130, 246, 0.15)", // blue glow
  },
  {
    name: "Habit Tracker",
    description:
      "Simple habit tracking app for building consistency.",
    stack: ["React", "CSS", "JavaScript"],
    status: "Live",
    liveUrl: "https://example-habittracker.com",
    githubUrl: "https://github.com/fkaanzeytin/habit-tracker",
    accent: "rgba(34, 197, 94, 0.15)", // green glow
  },
  {
    name: "Password Generator",
    description:
      "Vanilla JavaScript password generator with strength meter.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    liveUrl: "https://example-password.com",
    githubUrl: "https://github.com/fkaanzeytin/password-generator",
    accent: "rgba(236, 72, 153, 0.15)", // pink glow
  },
  {
    name: "Movie Search App",
    description:
      "Movie browsing/search experience with a clean UI.",
    stack: ["React", "API", "CSS"],
    status: "Live",
    liveUrl: "https://example-moviesearch.com",
    githubUrl: "https://github.com/fkaanzeytin/movie-search-app",
    accent: "rgba(168, 85, 247, 0.15)", // purple glow
  },
];
