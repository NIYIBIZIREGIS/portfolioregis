export const personalInfo = {
  name: " Regis Developer",
  title: "Full Stack Developer",
  subtitle: "Building scalable web applications with modern technologies",
  bio: "I'm a passionate full stack developer with 5+ years of experience crafting elegant solutions to complex problems. I love working at the intersection of design and engineering — building products that are both beautiful and performant.",
  location: "Rwanda Huye",
  email: "regis@example.com",
  github: "https://github.com/regisdeveloper",
  linkedin: "https://linkedin.com/regisdeveloper",
  twitter: "https://twitter.com/regisdeveloper",
  resume: "#",
  avatar: "RD.png",
};

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "DevOps & Tools", items: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "Bash"] },
];

export const techStack = [
  { name: "React", level: 95, color: "#61DAFB" },
  { name: "TypeScript", level: 90, color: "#3178C6" },
  { name: "Node.js", level: 88, color: "#339933" },
  { name: "PostgreSQL", level: 82, color: "#336791" },
  { name: "Docker", level: 78, color: "#2496ED" },
  { name: "Next.js", level: 85, color: "#000000" },
  { name: "Python", level: 80, color: "#3776AB" },
  { name: "AWS", level: 70, color: "#FF9900" },
];

export const projects = [
  {
    id: 1,
    title: "TaskFlow — Project Management SaaS",
    description:
      "A full-featured project management platform with real-time collaboration, Kanban boards, time tracking, and team analytics. Built for teams of 10 to 500+ people.",
    longDescription:
      "TaskFlow handles real-time syncing via WebSockets, role-based access control, file attachments, comment threads, and integrations with Slack and GitHub. The dashboard features recharts-powered analytics for team velocity and burn-down charts.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Redis", "Tailwind CSS"],
    github: "https://github.com/alexjohnson/taskflow",
    live: "https://taskflow-demo.vercel.app",
    featured: true,
    image: "🗂️",
    category: "SaaS",
  },
  {
    id: 2,
    title: "CodeReview AI — Developer Tool",
    description:
      "An AI-powered code review assistant that integrates with GitHub PRs. Automatically detects bugs, security issues, and style violations with LLM-generated suggestions.",
    longDescription:
      "Uses OpenAI's GPT-4 to analyze diffs, suggest improvements, and explain complex code. Features a VS Code extension, GitHub App, and a web dashboard.",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL", "GitHub API"],
    github: "https://github.com/alexjohnson/codereview-ai",
    live: "https://codereview-ai.vercel.app",
    featured: true,
    image: "🤖",
    category: "AI Tool",
  },
  {
    id: 3,
    title: "SwiftCart — E-commerce Platform",
    description:
      "A modern e-commerce platform with inventory management, payment processing via Stripe, real-time order tracking, and a merchant dashboard.",
    longDescription:
      "Complete with product catalog, search & filters, shopping cart, Stripe checkout, order management, and admin panel. Deployed on AWS with auto-scaling.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redis"],
    github: "https://github.com/alexjohnson/swiftcart",
    live: "https://swiftcart-demo.vercel.app",
    featured: true,
    image: "🛒",
    category: "E-commerce",
  },
  {
    id: 4,
    title: "DevMetrics — CLI & Dashboard",
    description:
      "A developer productivity tracker with a beautiful CLI tool and web dashboard. Tracks coding time, languages used, and project statistics.",
    tech: ["Go", "React", "SQLite", "Chart.js", "REST API"],
    github: "https://github.com/alexjohnson/devmetrics",
    live: "",
    featured: false,
    image: "📊",
    category: "Developer Tool",
  },
  {
    id: 5,
    title: "SecureVault — Password Manager",
    description:
      "An end-to-end encrypted password manager with browser extension, mobile app, and secure sharing features.",
    tech: ["React", "React Native", "Node.js", "AES-256", "PostgreSQL"],
    github: "https://github.com/alexjohnson/securevault",
    live: "",
    featured: false,
    image: "🔐",
    category: "Security",
  },
  {
    id: 6,
    title: "Weathify — Weather PWA",
    description:
      "A beautiful progressive web app for weather forecasting with offline support, push notifications, and animated visualizations.",
    tech: ["React", "PWA", "OpenWeather API", "Framer Motion", "IndexedDB"],
    github: "https://github.com/alexjohnson/weathify",
    live: "https://weathify.vercel.app",
    featured: false,
    image: "🌤️",
    category: "PWA",
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    location: "San Francisco, CA",
    description:
      "Lead development of microservices architecture serving 2M+ users. Reduced API latency by 40% through caching optimizations and query refactoring. Mentored a team of 4 junior developers.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    highlights: [
      "Led migration from monolith to microservices",
      "Reduced infrastructure costs by 30%",
      "Implemented CI/CD pipeline with zero-downtime deploys",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 – 2022",
    location: "Remote",
    description:
      "Built the core product from scratch — a B2B analytics platform. Owned full product development cycle from requirements to deployment. Grew revenue from $0 to $500k ARR.",
    tech: ["Next.js", "TypeScript", "Python", "MongoDB", "Stripe", "Vercel"],
    highlights: [
      "Built real-time dashboard with 50+ data visualizations",
      "Integrated 10+ third-party APIs",
      "Achieved 99.9% uptime SLA",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2019 – 2020",
    location: "New York, NY",
    description:
      "Developed custom web applications and e-commerce solutions for Fortune 500 clients. Specialized in performance optimization and accessibility.",
    tech: ["React", "JavaScript", "GraphQL", "Shopify", "SASS"],
    highlights: [
      "Improved Lighthouse scores from 50 to 98",
      "Delivered 15+ client projects on time",
      "Built reusable component library used across 8 projects",
    ],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "WebDev Studio",
    period: "2018 – 2019",
    location: "Austin, TX",
    description:
      "Started my professional journey building WordPress themes and transitioning into React. Contributed to client websites and internal tooling.",
    tech: ["JavaScript", "React", "WordPress", "PHP", "MySQL"],
    highlights: [
      "Transitioned 3 WordPress sites to React",
      "Built internal CMS used by 20+ team members",
    ],
  },
];

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of California, Berkeley",
    period: "2014 – 2018",
    description: "Specialization in Software Engineering and Distributed Systems. Dean's List for 3 semesters.",
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "20+" },
  { label: "GitHub Stars", value: "2.1k" },
];
