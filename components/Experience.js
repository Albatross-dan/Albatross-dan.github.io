import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code2, GraduationCap, Star } from 'lucide-react';
import { experience } from '../lib/data';

const typeConfig = {
  project: { icon: Star, color: 'bg-primary-100 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400', dot: 'bg-primary-500' },
  work: { icon: Briefcase, color: 'bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400', dot: 'bg-green-500' },
  education: { icon: GraduationCap, color: 'bg-accent-100 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400', dot: 'bg-accent-500' },
};

function TimelineItem({ item, index, isLast }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const config = typeConfig[item.type] || typeConfig.education;
  const Icon = config.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 pb-10"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 shadow-md ${config.color}`}>
          <Icon size={18} />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="card p-5 flex-1 hover:-translate-y-0.5 mb-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              {item.company}
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex-shrink-0 font-mono">
            {item.year}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono font-medium text-sm mb-2">
            05. Journey
          </p>
          <h2 className="section-heading">My Experience</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            The path that shaped me as a developer
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-4 justify-center mb-10 flex-wrap"
        >
          {Object.entries(typeConfig).map(([type, config]) => {
            const Icon = config.icon;
            return (
              <div key={type} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${config.color}`}>
                <Icon size={12} />
                <span className="capitalize">{type}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
