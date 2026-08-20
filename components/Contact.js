import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../lib/data';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: siteConfig.social.github, color: 'hover:text-primary-400' },
  { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin, color: 'hover:text-primary-400' },
  { icon: Twitter, label: 'Twitter', href: siteConfig.social.twitter, color: 'hover:text-primary-400' },
  { icon: Mail, label: 'Email', href: siteConfig.social.email, color: 'hover:text-primary-400' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitting(true);

    // Using Formspree — configure NEXT_PUBLIC_FORMSPREE_ID in your .env.local
    // to prevent endpoint abuse. Falls back to opening the mail client.
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    try {
      if (!formspreeId) throw new Error('No Formspree ID configured');
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      // Fallback: open email client
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-mono font-medium text-sm mb-2">
            07. Contact
          </p>
          <h2 className="section-heading">Let&apos;s Work Together</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
                Get In Touch
              </h3>
              <p className="text-[#A3A3A3] leading-relaxed">
                Whether you have a project, a job opportunity, or just want to say hi —
                my inbox is always open. I&apos;ll get back to you as soon as possible!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href={siteConfig.social.email}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#1F2922] hover:border-primary-700 hover:bg-[#0B100D] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111711] flex items-center justify-center group-hover:bg-[#162017] transition-colors border border-[#1F2922]">
                  <Mail size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-[#737373]">Email</p>
                  <p className="font-medium text-[#D4D4D4] text-sm">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1F2922]">
                <div className="w-10 h-10 rounded-lg bg-[#111711] flex items-center justify-center border border-[#1F2922]">
                  <MapPin size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-[#737373]">Location</p>
                  <p className="font-medium text-[#D4D4D4] text-sm">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium text-[#737373] mb-4">
                Find me on:
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border border-[#1F2922] text-[#A3A3A3] hover:scale-110 hover:border-primary-700 transition-all duration-200 ${color}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="card p-8 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#111711] flex items-center justify-center border border-[#1F2922]">
                  <MessageSquare size={28} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F5]">
                  Message Sent! 🎉
                </h3>
                <p className="text-[#A3A3A3]">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#D4D4D4] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#1F2922] bg-[#060A07] text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#D4D4D4] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#1F2922] bg-[#060A07] text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#D4D4D4] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Dan, I'd love to discuss..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#1F2922] bg-[#060A07] text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-colors text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
