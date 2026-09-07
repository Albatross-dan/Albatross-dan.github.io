import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { services } from '../lib/data';

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const scrollToContact = (event) => {
    event.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#050805]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">04. Services</p>
          <h2 className="section-heading">What I Can Build For You</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Need something digital? I can help you design it, build it, and launch it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-4">{service.category}</h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-[#A3A3A3] flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <button onClick={scrollToContact} className="btn-primary">
            <ArrowRight size={18} />
            Request a Service
          </button>
        </motion.div>
      </div>
    </section>
  );
}
