import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { siteConfig } from '../lib/data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Mail, href: siteConfig.social.email, label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              {siteConfig.name}
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {siteConfig.title} based in {siteConfig.location}.
              Building the web, one commit at a time.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 border border-gray-200 dark:border-gray-700 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href={siteConfig.social.email}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
            Made with <Heart size={14} className="text-red-400" fill="currentColor" /> by{' '}
            <span className="font-semibold text-gray-600 dark:text-gray-400">
              {siteConfig.name}
            </span>
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
