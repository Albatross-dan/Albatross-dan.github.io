import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { siteConfig } from '../lib/data';

function RepoCard({ repo, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const languageColors = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3572a5',
    HTML: '#e44b23',
    CSS: '#563d7c',
    default: '#8b5cf6',
  };

  const langColor = languageColors[repo.language] || languageColors.default;

  return (
    <motion.a
      ref={ref}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card p-5 block group hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-primary-500 flex-shrink-0" />
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
            {repo.name}
          </h3>
        </div>
        <ExternalLink size={14} className="text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: langColor }}
            />
            <span>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Star size={12} />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork size={12} />
          <span>{repo.forks_count}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6&type=public`
        );
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        // Filter out forks and sort by stars
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(filtered);
      } catch (err) {
        setError('Unable to load repositories right now.');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono font-medium text-sm mb-2">
            06. Open Source
          </p>
          <h2 className="section-heading">GitHub Activity</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            My latest public repositories and open source contributions
          </p>
        </motion.div>

        {/* GitHub stats card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <a
            href={`https://github.com/${siteConfig.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="card p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <Github size={32} className="text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  @{siteConfig.githubUsername}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  View full profile, contribution graph, and all repositories
                </p>
              </div>
              <ExternalLink size={20} className="text-gray-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
            </div>
          </a>
        </motion.div>

        {/* Repos grid */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="loader" aria-label="Loading repositories" />
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <Github size={40} className="mx-auto mb-4 opacity-50" />
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={18} />
            See All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
