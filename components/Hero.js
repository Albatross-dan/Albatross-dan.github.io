import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download, ExternalLink, Sparkles } from 'lucide-react';
import { siteConfig } from '../lib/data';

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Mail, href: siteConfig.social.email, label: 'Email' },
];

// Floating background orbs
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-accent-500/10 dark:bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl" />
    </div>
  );
}

// Animated grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 bg-grid dark:opacity-50 opacity-30 pointer-events-none" aria-hidden="true" />
  );
}

// Avatar / Profile image placeholder
function Avatar() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
      className="relative"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 p-1 shadow-2xl shadow-primary-500/30 animate-float">
        <div className="w-full h-full rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          {/* Replace with actual image: <Image src="/avatar.jpg" alt="Dan Albatross" fill className="object-cover" /> */}
          <span className="text-5xl md:text-6xl select-none" role="img" aria-label="Developer avatar">
            👨‍💻
          </span>
        </div>
      </div>
      {/* Status badge */}
      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        Available
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <BackgroundOrbs />
      <GridBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <Sparkles size={14} className="text-primary-500" />
              Open to opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 font-mono"
            >
              {'< '}{siteConfig.title}{' />'}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed text-balance"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <button onClick={scrollToProjects} className="btn-primary">
                <ExternalLink size={18} />
                View Projects
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                <Mail size={18} />
                Get In Touch
              </button>
              <a href={siteConfig.resumeUrl} download className="btn-secondary">
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex gap-3 justify-center md:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:scale-110 hover:border-primary-300 dark:hover:border-primary-700"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* Location chip */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 text-sm text-gray-400 dark:text-gray-600"
            >
              📍 {siteConfig.location}
            </motion.p>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-primary-500 transition-colors group"
      >
        <span className="text-xs font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
