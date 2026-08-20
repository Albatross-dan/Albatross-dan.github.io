import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Zap, Target, Users } from 'lucide-react';
import { siteConfig } from '../lib/data';

const values = [
  {
    icon: Zap,
    title: 'Performance First',
    description: 'I build fast, optimized applications that deliver exceptional user experiences.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Breaking down complex challenges into elegant, maintainable solutions.',
  },
  {
    icon: Heart,
    title: 'Passionate Learner',
    description: 'Constantly exploring new technologies and sharpening my craft every day.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively, communicating clearly, and always delivering.',
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
              A self-driven developer building meaningful digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-[#D4D4D4] text-lg leading-relaxed">
                Hey! I&apos;m <strong className="text-[#F5F5F5]">{siteConfig.name}</strong> — a 
                full-stack developer based in {siteConfig.location} with a passion for building
                high-quality web applications that make a real impact.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                My journey into coding started in 2021 through online platforms like freeCodeCamp
                and The Odin Project. Since then, I&apos;ve been on a continuous learning path,
                working on personal projects, freelance work, and diving deep into modern
                JavaScript ecosystems.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                My flagship project, <strong className="text-primary-400">TournaHub</strong>,
                is a real-time tournament management platform showcasing my ability to architect
                and build full-stack applications from the ground up.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                I&apos;m currently looking for opportunities where I can contribute, grow, and
                continue building things that matter. Let&apos;s connect!
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '3+', label: 'Years Learning' },
                  { value: '10+', label: 'Projects Built' },
                  { value: '100%', label: 'Committed' },
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
