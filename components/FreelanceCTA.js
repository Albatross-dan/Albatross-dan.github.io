import { Mail, MessageCircle, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '../lib/data';

export default function FreelanceCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const scrollToContact = (event) => {
    event.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="start-project" className="py-20 bg-[#050805]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-10 text-center"
        >
          <p className="text-xs font-mono text-primary-400 mb-3">AVAILABLE • FREELANCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-3">Have an idea? Let&apos;s build it.</h2>
          <p className="text-[#A3A3A3] max-w-2xl mx-auto mb-6">
            If you need a website, product prototype, or digital design help, I&apos;m open to discussing your project.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={scrollToContact} className="btn-primary">
              <Rocket size={18} />
              Start a Project
            </button>
            <a href={siteConfig.social.email} className="btn-secondary">
              <Mail size={18} />
              Email Me
            </a>
            {siteConfig.social.whatsapp && (
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MessageCircle size={18} />
                WhatsApp Me
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
