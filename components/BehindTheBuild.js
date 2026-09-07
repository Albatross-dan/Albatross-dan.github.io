import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { behindTheBuild } from '../lib/data';

export default function BehindTheBuild() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="behind-the-build" className="py-24 bg-[#050805]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">08. Real Life</p>
          <h2 className="section-heading">Behind the Build</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            The person and environment behind the code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {behindTheBuild.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative overflow-hidden border border-[#1F2922] ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes={index === 0 ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                className="object-cover"
              />
              <figcaption className="absolute left-3 bottom-3 px-2.5 py-1 rounded-full bg-[#050805]/75 backdrop-blur text-xs font-mono text-[#D4D4D4] border border-[#1F2922]">
                {item.note}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
