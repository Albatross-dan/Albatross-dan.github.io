import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../lib/data';

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="testimonials" className="py-24 bg-[#060A07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">10. Testimonials</p>
          <h2 className="section-heading">What People Say</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Real testimonials will be added here as I complete more client and collaboration work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((entry, index) => (
            <motion.article
              key={`${entry.name}-${index}`}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card p-6"
            >
              <MessageSquareQuote size={20} className="text-primary-400 mb-3" />
              <p className="text-[#D4D4D4] leading-relaxed mb-4">{entry.text}</p>
              <div className="text-sm text-[#A3A3A3]">
                <span className="font-semibold text-[#F5F5F5]">{entry.name}</span>
                <span>{` • ${entry.role}`}</span>
                <span>{` • ${entry.company}`}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
