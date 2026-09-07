import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { featuredWork } from '../lib/data';

export default function FeaturedWork() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="featured-work" className="py-24 bg-[#060A07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">03B. Visual Proof</p>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A closer look at what I actually built and learned while building it.
          </p>
        </motion.div>

        <div className="space-y-10">
          {featuredWork.map((work, index) => (
            <motion.article
              key={work.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card overflow-hidden"
            >
              <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[420px] bg-[#0B100D]">
                <Image
                  src={work.image}
                  alt={`${work.name} featured screenshot`}
                  fill
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono text-primary-400 mb-1">{`<PROJECT />`}</p>
                    <h3 className="text-2xl font-bold text-[#F5F5F5]">{work.name}</h3>
                  </div>

                  <p className="text-[#D4D4D4]">{work.description}</p>

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-1">Problem</p>
                    <p className="text-sm text-[#A3A3A3]">{work.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-1">What I Built</p>
                    <p className="text-sm text-[#A3A3A3]">{work.built}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-1">My Role</p>
                    <p className="text-sm text-[#A3A3A3]">{work.role}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-1">What I Learned</p>
                    <p className="text-sm text-[#A3A3A3]">{work.learning}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5] mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#0B100D] border border-[#1F2922] text-[#A3A3A3]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {work.demo && (
                      <a href={work.demo} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 text-sm">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {work.github && (
                      <a href={work.github} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 text-sm">
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
