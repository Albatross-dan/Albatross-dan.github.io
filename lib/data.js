// ============================================================
// PORTFOLIO CONTENT CONFIGURATION
// Edit this file to customize all content in the portfolio
// ============================================================

export const siteConfig = {
  name: 'Danny Albatross',
  title: 'Full Stack Developer',
  tagline: 'Digital Builder',
  description:
    'Computer Science student at Kibabii University building real web products, learning systems deeply, and helping people bring digital ideas online.',
  email: 'ogudadaniel11221@gmail.com',
  location: 'Kenya',
  availableForWork: true,
  siteUrl: 'https://albatrossdan.dev',
  resumeUrl: '/resume.pdf', // Place your resume.pdf in /public
  profileImage: '/images/personal/profile/danny-profile.jpg',
  defaultProjectImage: '/images/project-placeholder.svg',
  githubUsername: 'Albatross-dan',
  university: 'Kibabii University',
  program: 'Computer Science',
  branding: {
    identity: 'Web • Design • Digital',
    terminalStatus: 'BUILDING',
  },

  // Social links
  social: {
    github: 'https://github.com/Albatross-dan',
    linkedin: 'https://linkedin.com/in/albatrossdan',
    twitter: 'https://twitter.com/albatrossdan',
    email: 'mailto:ogudadaniel11221@gmail.com',
    whatsapp: '',
  },
};

// ============================================================
// PROJECTS DATA
// ============================================================
export const projects = [
  {
    id: 0,
    title: 'AEGIS',
    description:
      'A product-focused build in active development, focused on solving real workflow problems through practical software.',
    longDescription:
      'AEGIS is one of my current core builds. I am using it to sharpen product thinking, architecture decisions, and full-stack execution while iterating based on real use cases.',
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: '',
    demo: '',
    featured: true,
    image: '/images/personal/projects/aegis-hero.png',
    category: 'Full Stack',
    status: 'In Development',
  },
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
    image: '/images/personal/projects/tournahub-hero.png',
    category: 'Full Stack',
    status: 'In Development',
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    description:
      'This very portfolio website — built with Next.js, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, GitHub API integration, and a responsive design.',
    longDescription:
      'This is my personal developer portfolio — a fully responsive, data-driven website built with Next.js (Pages Router), React, Tailwind CSS, and Framer Motion. It showcases my skills, projects, and experience in a clean and modern UI. Key features include a dark/light mode toggle, scroll-triggered animations, a filterable projects section, an interactive skills breakdown, a journey/experience timeline, and a contact form powered by Formspree. All portfolio content is centralized in a single config file (lib/data.js), making it easy to update without touching any component code. Deployed and live on GitHub Pages.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Albatross-dan/Albatross-dan.github.io',
    demo: 'https://albatrossdan.dev',
    featured: false,
    image: '/images/personal/projects/portfolio-showcase.png',
    category: 'Frontend',
    status: 'Live',
  },
];

export const currentlyBuilding = [
  {
    name: 'AEGIS',
    description: 'Actively developing and iterating on product direction and architecture.',
    problem: 'Many teams and individuals need practical digital workflows that are simple and reliable.',
    status: 'In Development',
    role: 'Product Builder • Full-Stack Developer',
    techStack: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: '',
    githubUrl: '',
    image: '/images/personal/projects/aegis-wide.png',
  },
  {
    name: 'TournaHub',
    description: 'Tournament management platform with real-time competition flow and organizer tooling.',
    problem: 'Tournament organizers often rely on scattered tools that make events hard to run.',
    status: 'In Development',
    role: 'Full-Stack Developer',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    projectUrl: '',
    githubUrl: 'https://github.com/Albatross-dan/TournaHub',
    image: '/images/personal/projects/tournahub-wide.png',
  },
];

export const featuredWork = [
  {
    name: 'TournaHub',
    image: '/images/personal/projects/tournahub-featured.png',
    description: 'A real-time tournament platform from planning to live match updates.',
    problem: 'Event organizers need one place to register players, generate brackets, and track results live.',
    built: 'Built organizer dashboards, tournament flow logic, and live score updates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    learning: 'Learned how to design real-time features and manage changing product requirements.',
    demo: '',
    github: 'https://github.com/Albatross-dan/TournaHub',
  },
  {
    name: 'AEGIS',
    image: '/images/personal/projects/aegis-featured.png',
    description: 'A product build focused on practical workflows and real software usage.',
    problem: 'Users need focused digital tools that solve concrete process problems without complexity.',
    built: 'Designing and implementing a modular full-stack foundation for continuous iteration.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    role: 'Product Builder • Full-Stack Developer',
    learning: 'Learning architecture tradeoffs, feature scoping, and delivery discipline.',
    demo: '',
    github: '',
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
  Deployment: [
    { name: 'Vercel', level: 85 },
    { name: 'GitHub Pages', level: 85 },
    { name: 'Docker', level: 60 },
  ],
  'Development Tools': [
    { name: 'Git & GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Linux/Unix', level: 70 },
  ],
  'AI / Productivity': [
    { name: 'ChatGPT', level: 75 },
    { name: 'GitHub Copilot', level: 80 },
    { name: 'Notion', level: 70 },
  ],
  Design: [
    { name: 'Figma', level: 65 },
    { name: 'Canva', level: 75 },
  ],
};

export const currentlyLearning = [
  'Advanced web development patterns',
  'System architecture fundamentals',
  'Backend engineering with Node.js',
  'Database design and optimization',
  'AI-assisted development workflows',
  'Cloud deployment fundamentals',
];

export const services = [
  {
    category: 'Web Development',
    items: [
      'Personal websites',
      'Portfolio websites',
      'Landing pages',
      'Small business websites',
      'Web applications',
    ],
  },
  {
    category: 'Creative / Design',
    items: ['Posters', 'Graphics', 'Photo editing', 'Social media designs'],
  },
  {
    category: 'Video / Media',
    items: ['Video editing', 'Short-form content', 'Promotional videos'],
  },
  {
    category: 'Student Digital Services',
    items: ['CV design', 'Portfolio creation', 'Professional documents', 'Original study/revision resources'],
  },
  {
    category: 'Digital Solutions',
    items: ['Custom web solutions', 'Simple systems', 'Automation', 'Other digital services'],
  },
];

export const workProcess = [
  'Tell me what you need',
  'We discuss the idea',
  'I build/design it',
  'You review it',
  'I deliver',
];

export const behindTheBuild = [
  {
    src: '/images/personal/workspace/danny-coding.jpg',
    alt: 'Danny coding at his workspace',
    note: 'Workspace session',
  },
  {
    src: '/images/personal/workspace/laptop-setup.jpg',
    alt: 'Laptop setup with project work in progress',
    note: 'Daily build environment',
  },
  {
    src: '/images/personal/workspace/vscode-build.jpg',
    alt: 'VS Code screen while developing a project',
    note: 'Code in progress',
  },
  {
    src: '/images/personal/workspace/kibabii-campus.jpg',
    alt: 'Kibabii University environment',
    note: 'University context',
  },
];

export const journeyMilestones = [
  'Started exploring technology',
  'Learning web development',
  'Joined Kibabii University — Computer Science',
  'Building real projects',
  'AEGIS',
  'Tournahub',
  'Freelancing',
  'NOW — Building • Learning • Exploring',
];

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
    name: 'Future Client',
    role: 'Role',
    company: 'Company',
    text: 'Your testimonial will appear here once we complete a project together.',
    avatar: null,
    placeholder: true,
  },
];
