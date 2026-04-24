import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../lib/data';

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Tools: '🛠️',
};

const categoryColors = {
  Frontend: 'from-primary-600 to-accent-500',
  Backend: 'from-emerald-600 to-teal-500',
  Database: 'from-slate-700 to-primary-500',
  Tools: 'from-accent-600 to-primary-500',
};

function SkillBar({ name, level, index, inView }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-primary-500 transition-colors">
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, skillList, colorClass }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="card p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-lg shadow-lg`}>
          {categoryIcons[category]}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{category}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {skillList.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono font-medium text-sm mb-2">
            04. Skills
          </p>
          <h2 className="section-heading">My Tech Stack</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory
              key={category}
              category={category}
              skillList={skillList}
              colorClass={categoryColors[category] || 'from-primary-600 to-accent-500'}
            />
          ))}
        </div>

        {/* Tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Also familiar with:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Socket.io', 'Jest', 'Webpack', 'Vite', 'AWS', 'Nginx',
              'JWT', 'OAuth', 'GitHub Actions', 'Prisma', 'Mongoose', 'Axios',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
