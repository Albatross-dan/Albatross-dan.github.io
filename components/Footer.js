import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { siteConfig } from '../lib/data';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
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
    <footer className="bg-[#060A07] border-t border-[#1F2922]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 font-bold text-[#F5F5F5] mb-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <Code2 size={16} className="text-[#050805]" />
              </div>
              {siteConfig.name}
            </a>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              {siteConfig.program} student at {siteConfig.university}.
              Building digital products from {siteConfig.location}.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-semibold text-[#D4D4D4] text-sm mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#A3A3A3] hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-[#D4D4D4] text-sm mb-4">
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#A3A3A3] hover:text-primary-400 hover:bg-[#0B100D] border border-[#1F2922] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href={siteConfig.social.email}
              className="text-sm text-primary-400 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1F2922] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#737373] flex items-center gap-1.5">
            Made with <Heart size={14} className="text-primary-400" fill="currentColor" /> by{' '}
            <span className="font-semibold text-[#A3A3A3]">
              {siteConfig.name}
            </span>
          </p>
          <p className="text-sm text-[#737373]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
