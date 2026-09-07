import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { currentlyLearning } from '../lib/data';

export default function CurrentlyLearning() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="currently-learning" className="py-24 bg-[#050805]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">07. Growth</p>
          <h2 className="section-heading">Currently Learning</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            I am continuously learning and testing ideas while building real projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentlyLearning.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card p-5"
            >
              <p className="text-xs font-mono text-primary-400 mb-2">IN PROGRESS</p>
              <p className="text-sm text-[#D4D4D4]">{topic}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
