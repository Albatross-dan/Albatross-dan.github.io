import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Zap, Target, Users } from 'lucide-react';
import { siteConfig, projects } from '../lib/data';

const values = [
  {
    icon: Zap,
    title: 'Builder Mindset',
    description: 'I like understanding how things work, then building practical solutions from scratch.',
  },
  {
    icon: Target,
    title: 'Problem to Product',
    description: 'I focus on solving real problems through usable and maintainable digital products.',
  },
  {
    icon: Heart,
    title: 'Continuous Learning',
    description: 'I am actively learning in class and through real projects every week.',
  },
  {
    icon: Users,
    title: 'Clear Collaboration',
    description: 'I keep communication simple, stay open to feedback, and iterate quickly.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-[#060A07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary-400 font-mono font-medium text-sm mb-2">
              01. About Me
            </p>
            <h2 className="section-heading">Who I Am</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Computer Science student, full-stack developer, and digital builder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-[#D4D4D4] text-lg leading-relaxed">
                Hey! I&apos;m <strong className="text-[#F5F5F5]">{siteConfig.name}</strong> — a 
                {siteConfig.program} student at {siteConfig.university} and a developer based in {siteConfig.location}.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                I&apos;m building real software products while continuing to improve how I design systems,
                write maintainable code, and ship features that people can actually use.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                Current focus areas include <strong className="text-primary-400">AEGIS</strong> and
                <strong className="text-primary-400"> TournaHub</strong>, where I&apos;m growing in product thinking,
                backend engineering, and full-stack delivery.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                I also help people and small teams get ideas online through websites, digital tools,
                and creative media support.
              </p>

              {/* Grounded highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '2021', label: 'Started Coding' },
                  { value: String(projects.length), label: 'Projects Listed' },
                  { value: siteConfig.availableForWork ? 'OPEN' : 'BUSY', label: 'Freelance Status' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-[#0B100D] border border-[#1F2922]"
                  >
                    <div className="text-2xl font-black text-[#F5F5F5]">{stat.value}</div>
                    <div className="text-xs text-[#737373] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Values cards */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="card p-5 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#111711] flex items-center justify-center mb-3 group-hover:bg-[#162017] transition-colors border border-[#1F2922]">
                    <Icon size={20} className="text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-[#F5F5F5] text-sm mb-1.5">
                    {title}
                  </h3>
                  <p className="text-[#A3A3A3] text-xs leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
