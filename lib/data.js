// ============================================================
// PORTFOLIO CONTENT CONFIGURATION
// Edit this file to customize all content in the portfolio
// ============================================================

export const siteConfig = {
  name: 'Dan Albatross',
  title: 'Full Stack Developer',
  tagline: 'Building elegant solutions to complex problems',
  description:
    'Full Stack Developer passionate about crafting high-performance web applications with clean,app development, maintainable code.',
  email: 'ogudadaniel11221@gmail.com',
  location: 'Kenya ',
  availableForWork: true,
  siteUrl: 'https://albatrossdan.dev',
  resumeUrl: '/resume.pdf', // Place your resume.pdf in /public
  profileImage: '/images/profile-photo.jpg', // Place your profile image at /public/images/profile-photo.jpg
  defaultProjectImage: '/images/project-placeholder.svg',
  githubUsername: 'Albatross-dan',

  // Social links
  social: {
    github: 'https://github.com/Albatross-dan',
    linkedin: 'https://linkedin.com/in/albatrossdan',
    twitter: 'https://twitter.com/albatrossdan',
    email: 'mailto:ogudadaniel11221@gmail.com',
  },
};

// ============================================================
// PROJECTS DATA
// ============================================================
export const projects = [
  {
    id: 1,
    title: 'TournaHub',
    description:
      'A comprehensive tournament management platform that enables organizers to create, manage, and run tournaments seamlessly. Features real-time bracket generation, player registration, and live score updates.',
    longDescription:
      'TournaHub is a full-stack tournament management web application built to streamline the organization of competitive events. It supports multiple tournament formats (single elimination, double elimination, round-robin), real-time updates using WebSockets, and a clean dashboard for organizers and participants.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/Albatross-dan/TournaHub',
    demo: '',
    featured: true,
    image: '/images/project-placeholder.svg', // Replace with a project preview in /public/images
    category: 'Full Stack',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    description:
      'This very portfolio website — built with Next.js, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, GitHub API integration, and a responsive design.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Albatross-dan/Albatross-dan.github.io',
    demo: 'https://albatrossdan.dev',
    featured: false,
    image: '/images/project-placeholder.svg',
    category: 'Frontend',
    status: 'Live',
  },
];

// ============================================================
// SKILLS DATA
// ============================================================
export const skills = {
  Frontend: [
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'JavaScript', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Framer Motion', level: 75 },
  ],
  Backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 80 },
    { name: 'Python', level: 65 },
    { name: 'REST APIs', level: 85 },
    { name: 'GraphQL', level: 60 },
  ],
  Database: [
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'MySQL', level: 70 },
    { name: 'Redis', level: 55 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 60 },
    { name: 'VS Code', level: 95 },
    { name: 'Linux/Unix', level: 70 },
    { name: 'Vercel', level: 85 },
    { name: 'Figma', level: 65 },
  ],
};

// ============================================================
// EXPERIENCE / JOURNEY DATA
// ============================================================
export const experience = [
  {
    year: '2024',
    title: 'Full Stack Developer — TournaHub',
    company: 'Personal Project',
    description:
      'Architected and built TournaHub from scratch — a real-time tournament management platform featuring dynamic bracket systems, WebSocket-powered live updates, and a comprehensive organizer dashboard.',
    type: 'project',
  },
  {
    year: '2023',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    description:
      'Delivered responsive websites and web apps for local businesses. Focused on performance optimization, SEO, and modern UI/UX practices.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Advanced JavaScript & React',
    company: 'Self-directed Learning',
    description:
      'Deep-dived into React ecosystem, hooks, state management, and modern JavaScript (ES2022+). Built multiple full-stack projects to solidify skills.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Backend Development with Node.js',
    company: 'Self-directed Learning',
    description:
      'Mastered server-side development with Express.js, RESTful API design, database integration with MongoDB and PostgreSQL.',
    type: 'education',
  },
  {
    year: '2021',
    title: 'Started Coding Journey',
    company: 'Online Platforms',
    description:
      'Began learning web development through freeCodeCamp, The Odin Project, and YouTube. Built first HTML/CSS/JS projects and fell in love with programming.',
    type: 'education',
  },
];

// ============================================================
// TESTIMONIALS (PLACEHOLDER)
// ============================================================
export const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Tech Lead',
    company: 'StartupXYZ',
    text: 'Dan delivered an exceptional product on time. His attention to detail and problem-solving skills are top-notch.',
    avatar: null,
  },
  {
    name: 'Sarah Williams',
    role: 'Project Manager',
    company: 'CreativeAgency',
    text: 'Working with Dan was a pleasure. He brought creative solutions and maintained clear communication throughout.',
    avatar: null,
  },
];
