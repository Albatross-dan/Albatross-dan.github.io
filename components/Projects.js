import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects, siteConfig } from '../lib/data';

const PROJECTS_PER_PAGE = 6;

const techColors = {
  'React': 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300',
  'Next.js': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'Node.js': 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300',
  'Express': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'MongoDB': 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300',
  'Socket.io': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300',
  'TypeScript': 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300',
  'Python': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300',
  'PostgreSQL': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300',
  'Framer Motion': 'bg-accent-100 text-accent-700 dark:bg-accent-950/50 dark:text-accent-300',
  'default': 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
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
          ? 'md:col-span-2 border-primary-200 dark:border-primary-800/50'
          : ''
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold shadow-lg">
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Preview area */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${
          project.featured
            ? 'from-primary-50 to-accent-50/50 dark:from-primary-950/30 dark:to-accent-950/30 h-52 md:h-64'
            : 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 h-44'
        }`}
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
          className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/30 backdrop-blur-[1px] flex items-center justify-center gap-3"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
              className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
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
              className="px-4 py-2 bg-primary-600 text-white rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
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
            <span className="text-xs font-mono text-primary-600 dark:text-primary-400 mb-1 block">
              {project.category}
            </span>
            <h3 className={`font-bold text-gray-900 dark:text-white ${project.featured ? 'text-2xl' : 'text-lg'}`}>
              {project.title}
            </h3>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
              project.status === 'Live'
                ? 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300'
                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
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
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
              className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
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
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono font-medium text-sm mb-2">
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
                  ? 'bg-primary-700 text-white shadow-lg shadow-primary-900/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
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
          <p className="text-gray-500 dark:text-gray-400 mb-4">
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
