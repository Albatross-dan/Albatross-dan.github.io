import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { journeyMilestones } from '../lib/data';

export default function JourneyTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="journey" className="py-24 bg-[#060A07]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">09. Story</p>
          <h2 className="section-heading">My Journey</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Still in progress — learning, building, and improving one project at a time.
          </p>
        </motion.div>

        <div className="space-y-4">
          {journeyMilestones.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex items-start gap-4"
            >
              <div className="pt-1 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                {index !== journeyMilestones.length - 1 && (
                  <span className="w-px h-10 bg-[#1F2922] mt-1" />
                )}
              </div>
              <p className="text-[#D4D4D4] leading-relaxed">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
