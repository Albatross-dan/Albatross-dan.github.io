import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { currentlyBuilding } from '../lib/data';

function StatusPill({ status }) {
  const live = status.toLowerCase().includes('live');
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${live ? 'bg-[#0B100D] text-[#BBF7D0] border-[#1F2922]' : 'bg-[#0B100D] text-[#D4D4D4] border-[#1F2922]'}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-[#4ade80]' : 'bg-primary-400'} animate-pulse`} />
      {status}
    </span>
  );
}

export default function CurrentlyBuilding() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="currently-building" className="py-24 bg-[#050805]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">03A. Building Now</p>
          <h2 className="section-heading">Currently Building</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Real products in active development — not concept projects.
          </p>
        </motion.div>

        <div className="space-y-8">
          {currentlyBuilding.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[220px] md:min-h-[300px] bg-[#0B100D]">
                  <Image
                    src={project.image}
                    alt={`${project.name} current development preview`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-xs font-mono text-primary-400 mb-1">{`<BUILDING />`}</p>
                      <h3 className="text-2xl font-bold text-[#F5F5F5]">{project.name}</h3>
                    </div>
                    <StatusPill status={project.status} />
                  </div>

                  <p className="text-[#D4D4D4] leading-relaxed">{project.description}</p>

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-1">Problem</p>
                    <p className="text-sm text-[#A3A3A3]">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-1">My Role</p>
                    <p className="text-sm text-[#A3A3A3]">{project.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#0B100D] border border-[#1F2922] text-[#A3A3A3]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.projectUrl && (
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 text-sm">
                        <ExternalLink size={16} />
                        Project Link
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 text-sm">
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
