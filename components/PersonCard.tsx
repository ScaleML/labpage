'use client';

import { Person } from '@/lib/content';
import { Mail, ExternalLink, Github, Linkedin, Twitter as X } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden hover-lift group"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-primary-300">
              {person.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
          {person.name}
        </h3>
        <p className="text-primary-600 font-semibold mb-3">{person.role}</p>
        <p className="text-slate-600 mb-4 line-clamp-3">{person.bio}</p>

        {/* Social Links */}
        <div className="flex items-center space-x-3 mb-4">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="p-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          )}
          {person.website && (
            <a
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
              title="Website"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {person.github && (
            <a
              href={`https://github.com/${person.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {person.linkedin && (
            <a
              href={`https://linkedin.com/in/${person.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
          {person.twitter && (
            <a
              href={`https://x.com/${person.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
              title="X (Twitter)"
            >
              <X size={18} />
            </a>
          )}
        </div>

        {/* View Profile Link */}
        <Link
          href={`/people/${person.slug}`}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors"
        >
          View Profile
          <ExternalLink className="ml-2" size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
