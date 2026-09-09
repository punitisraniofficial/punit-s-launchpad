// ─────────────────────────────────────────────────────────────
// Edit everything about the site from this one file.
// ─────────────────────────────────────────────────────────────
import projectWeb from "@/assets/project-web.jpg";
import projectSystem from "@/assets/project-system.jpg";

export const profile = {
  name: "Punit Israni",
  tagline: "B.Tech Student • Developer • Builder",
  intro:
    "I'm a B.Tech student from Jaipur, exploring software development, technology, AI, and digital experiences while learning by building real projects.",
  location: "Jaipur, India",
  email: "punitisrani16@gmail.com",
  phone: "6350073966",
  linkedin: "https://www.linkedin.com/in/punit-israni-5548a725",
  github: "https://github.com/punitisraniofficial",
  website: "https://punitisrani.online",
  resume: "/resume.pdf",
};

export const story = [
  "I started my B.Tech recently, and most of what I know so far came from curiosity rather than a syllabus. I like opening things up — a program, a tool, a website — and figuring out why it behaves the way it does.",
  "My way of learning is simple: read a bit, then build something small and break it. C and programming fundamentals are where I spend most of my practice time right now, along with HTML, CSS and JavaScript for the web side of things.",
  "I'm especially interested in how AI tools are changing the way people build, and in digital experiences that feel good to use — the small details of layout, motion and clarity.",
  "The goal for the next couple of years is straightforward: get genuinely good at problem solving and DSA, ship more projects, and work with people who build serious software.",
];

export const beyondCoding = [
  { title: "Tech Teardowns", text: "Reading about phones, chips and operating systems for fun." },
  { title: "Design Details", text: "Collecting interfaces and layouts I find well made." },
  { title: "Event Organising", text: "Helping run college and community events." },
  { title: "Fitness", text: "Keeping a routine — it keeps the study hours honest." },
];

export const skillGroups = [
  {
    category: "Programming",
    items: [
      { name: "C", level: "Building With" },
      { name: "C++", level: "Learning" },
      { name: "Programming Fundamentals", level: "Building With" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: "Building With" },
      { name: "CSS", level: "Building With" },
      { name: "JavaScript", level: "Learning" },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Git", level: "Familiar" },
      { name: "GitHub", level: "Familiar" },
      { name: "VS Code", level: "Building With" },
    ],
  },
  {
    category: "Technology & Productivity",
    items: [
      { name: "AI Tools", level: "Building With" },
      { name: "Digital Productivity Tools", level: "Familiar" },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "Data Structures & Algorithms", level: "Learning" },
      { name: "Problem Solving", level: "Learning" },
    ],
  },
] as const;

export const projects = [
  {
    title: "Interactive Birthday Web Experience",
    image: projectWeb,
    description:
      "A mobile-first interactive web experience with multiple visual sections, custom storytelling and animated navigation. Built to practise responsive layout and interaction detail.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/punitisraniofficial",
    demo: "",
  },
  {
    title: "ARM64 System Emulation & Mobile OS Virtualization",
    image: projectSystem,
    description:
      "A personal research project exploring emulation concepts: boot flow, device I/O modelling, sandboxing and basic profiling/debug tooling. Private repository, available on request.",
    tech: ["C", "Systems", "Virtualization", "Debugging"],
    github: "",
    demo: "",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering (Core)",
    school: "JECRC University, Jaipur",
    period: "2025 – 2030",
    notes: [
      "Relevant coursework: C Programming, Programming Fundamentals, DSA Fundamentals",
      "Active in college events and team activities",
    ],
  },
  {
    degree: "Class XII",
    school: "Emnanudl Mission Sr Sec School",
    period: "2024",
    notes: ["Scored 70%"],
  },
  {
    degree: "Class X",
    school: "Bhagwan Das Pareek Dream Sr Sec School",
    period: "2022",
    notes: ["Scored 90%"],
  },
];

export const certificates = [
  {
    title: "RSCIT",
    org: "Rajasthan Knowledge Corporation Ltd.",
    date: "",
    score: "97%",
    link: "",
    image: "",
  },
  {
    title: "NYC Event Manager",
    org: "Nehru Yuva Kendra",
    date: "2026",
    score: "",
    link: "",
    image: "",
  },
];
