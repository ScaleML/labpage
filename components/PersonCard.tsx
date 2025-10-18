'use client';

import { Person } from '@/lib/content';
import { Mail, ExternalLink, Github, Linkedin, Twitter as X, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  // Use bio if available, otherwise use first part of content
  const displayBio = person.bio || person.content.split('\n')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden hover-lift group"
    >
      {/* Image */}
      <div className="flex justify-center pt-3 pb-2">
        {person.image ? (
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
            <span className="text-2xl font-bold text-primary-300">
              {person.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <div className="mb-1">
          <h3 className="text-sm font-bold group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors line-clamp-1 text-slate-800 dark:text-slate-100">
            {person.name}
          </h3>
          <p className="text-primary-600 dark:text-primary-300 text-xs">{person.role}</p>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-xs mb-1.5 line-clamp-2">{displayBio}</p>

        {/* Social Links */}
        <div className="flex items-center space-x-1 mb-1.5">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="p-1 bg-slate-100 dark:bg-slate-800 rounded hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
              title="Email"
            >
              <Mail size={12} className="text-slate-600 dark:text-primary-200" />
            </a>
          )}
          {person.website && (
            <a
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-slate-100 dark:bg-slate-800 rounded hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
              title="Website"
            >
              <ExternalLink size={12} className="text-slate-600 dark:text-primary-200" />
            </a>
          )}
          {person.scholar && (
            <a
              href={person.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-slate-100 dark:bg-slate-800 rounded hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
              title="Google Scholar"
            >
              <GraduationCap size={12} className="text-slate-600 dark:text-primary-200" />
            </a>
          )}
          {person.github && (
            <a
              href={`https://github.com/${person.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-slate-100 dark:bg-slate-800 rounded hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
              title="GitHub"
            >
              <Github size={12} className="text-slate-600 dark:text-primary-200" />
            </a>
          )}
          {person.linkedin && (
            <a
              href={`https://linkedin.com/in/${person.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-slate-100 dark:bg-slate-800 rounded hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={12} className="text-slate-600 dark:text-primary-200" />
            </a>
          )}
          {person.twitter && (
            <a
              href={`https://x.com/${person.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-slate-100 dark:bg-slate-800 rounded hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
              title="X (Twitter)"
            >
              <X size={12} className="text-slate-600 dark:text-primary-200" />
            </a>
          )}
        </div>

        {/* View Profile Link */}
        <Link
          href={`/people/${person.slug}`}
          className="inline-flex items-center text-xs text-primary-600 dark:text-primary-300 font-semibold hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
        >
          Profile
          <ExternalLink className="ml-0.5 text-primary-600 dark:text-primary-300" size={10} />
        </Link>
      </div>
    </motion.div>
  );
}
