import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../lib/data';

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Deployment: '🚀',
  'Development Tools': '🛠️',
  'AI / Productivity': '🤖',
  Design: '🧩',
};

const categoryColors = {
  Frontend: 'bg-[#111711]',
  Backend: 'bg-[#111711]',
  Database: 'bg-[#111711]',
  Deployment: 'bg-[#111711]',
  'Development Tools': 'bg-[#111711]',
  'AI / Productivity': 'bg-[#111711]',
  Design: 'bg-[#111711]',
};

function SkillBar({ name, level, index, inView }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#D4D4D4]">{name}</span>
        <span className="text-xs font-mono text-[#737373] group-hover:text-primary-400 transition-colors">
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-primary-500"
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
        <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center text-lg shadow-lg border border-[#1F2922]`}>
          {categoryIcons[category]}
        </div>
        <h3 className="font-bold text-[#F5F5F5] text-lg">{category}</h3>
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
    <section id="skills" className="py-24 bg-[#060A07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">
            04. Skills
          </p>
          <h2 className="section-heading">My Tech Stack</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory
              key={category}
              category={category}
              skillList={skillList}
              colorClass={categoryColors[category] || 'bg-[#111711]'}
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
          <p className="text-sm text-[#737373] mb-2">Tools I actually use and continue improving with real projects.</p>
        </motion.div>
      </div>
    </section>
  );
}
