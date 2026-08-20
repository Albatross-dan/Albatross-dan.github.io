import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects, siteConfig } from '../lib/data';

const PROJECTS_PER_PAGE = 6;

const techColors = {
  'React': 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]',
  'Next.js': 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]',
  'Node.js': 'bg-[#0B100D] text-[#BBF7D0] border border-[#1F2922]',
  'Express': 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]',
  'MongoDB': 'bg-[#0B100D] text-[#BBF7D0] border border-[#1F2922]',
  'Socket.io': 'bg-[#0B100D] text-[#A3A3A3] border border-[#1F2922]',
  'Tailwind CSS': 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]',
  'TypeScript': 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]',
  'Python': 'bg-[#0B100D] text-[#A3A3A3] border border-[#1F2922]',
  'PostgreSQL': 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]',
  'Framer Motion': 'bg-[#0B100D] text-[#BBF7D0] border border-[#1F2922]',
  'default': 'bg-[#0B100D] text-[#A3A3A3] border border-[#1F2922]',
};

function TechBadge({ tech }) {
  const colorClass = techColors[tech] || techColors['default'];
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {tech}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [cardRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card group relative overflow-hidden ${
        project.featured
          ? 'md:col-span-2 border-[#1F2922]'
          : ''
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-[#0B100D] text-[#F5F5F5] border border-[#1F2922] text-xs font-semibold shadow-lg">
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Preview area */}
      <div
        className={`relative overflow-hidden ${project.featured ? 'bg-[#0B100D] h-52 md:h-64' : 'bg-[#0B100D] h-44'}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes={project.featured ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className={`${
                project.featured ? 'text-8xl' : 'text-6xl'
              }`}
            >
              {project.featured ? '🏆' : '💻'}
            </motion.div>
          </div>
        )}

        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex items-center justify-center gap-3"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
              className="px-4 py-2 bg-[#0B100D] text-[#F5F5F5] border border-[#1F2922] rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="px-4 py-2 bg-primary-600 text-[#050805] rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-xs font-mono text-primary-400 mb-1 block">
              {project.category}
            </span>
            <h3 className={`font-bold text-[#F5F5F5] ${project.featured ? 'text-2xl' : 'text-lg'}`}>
              {project.title}
            </h3>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
              project.status === 'Live'
                ? 'bg-[#0B100D] text-[#BBF7D0] border border-[#1F2922]'
                : 'bg-[#0B100D] text-[#D4D4D4] border border-[#1F2922]'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4">
          {project.featured ? project.longDescription : project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-500 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);
  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filtered.length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  return (
    <section id="projects" className="py-24 bg-[#060A07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">
            03. Projects
          </p>
          <h2 className="section-heading">What I&apos;ve Built</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills and passion for building
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 justify-center mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-[#050805] shadow-lg shadow-black/20'
                  : 'bg-[#0B100D] text-[#A3A3A3] border border-[#1F2922] hover:bg-[#111711]'
              }`}
            >
              {cat} <span className="ml-1 opacity-70">({cat === 'All' ? projects.length : projects.filter((project) => project.category === cat).length})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {hasMoreProjects && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PROJECTS_PER_PAGE)}
              className="btn-secondary"
            >
              Show More Projects
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#A3A3A3] mb-4">
            {filtered.length === projects.length
              ? 'Every project in the portfolio is shown here, with GitHub available for additional repository context.'
              : `Showing ${filtered.length} ${activeCategory.toLowerCase()} project${filtered.length === 1 ? '' : 's'}.`}
          </p>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
