import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { workProcess } from '../lib/data';

export default function HowIWork() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="how-i-work" className="py-24 bg-[#060A07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">05. Process</p>
          <h2 className="section-heading">How I Work</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A simple, collaborative process from idea to delivery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {workProcess.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card p-5"
            >
              <p className="text-xs font-mono text-primary-400 mb-2">{String(index + 1).padStart(2, '0')}</p>
              <p className="text-sm text-[#D4D4D4] leading-relaxed">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
