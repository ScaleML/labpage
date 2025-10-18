'use client';

import { Publication } from '@/lib/content';
import { FileText, ExternalLink, BookOpen, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface PublicationCardProps {
  publication: Publication;
  authorLimit?: number;
}

export default function PublicationCard({ publication, authorLimit = 3 }: PublicationCardProps) {
  const [copied, setCopied] = useState(false);

  const formatAuthors = (authors: string[]) => {
    if (!authors || authors.length === 0) {
      return '';
    }
    if (authors.length <= authorLimit) {
      return authors.join(', ');
    }
    return `${authors.slice(0, authorLimit).join(', ')} et al.`;
  };

  const handleCopyBibtex = () => {
    if (publication.bibtex) {
      navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 hover-lift"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
          <FileText className="text-white" size={24} />
        </div>

        {/* Content */}
        <div className="flex-1">
          {publication.featured && (
            <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">
              Featured
            </span>
          )}

          <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
            {publication.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 mb-2">
            {formatAuthors(publication.authors)}
          </p>

          <p className="text-primary-600 dark:text-primary-300 font-semibold mb-3">
            {publication.venue}, {publication.year}
          </p>

          {publication.abstract && (
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-2">
              {publication.abstract}
            </p>
          )}

          {/* Highlights */}
          {publication.highlights && publication.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {publication.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 bg-accent-100 text-accent-700 dark:bg-accent-500/20 dark:text-accent-200 text-sm rounded-full font-semibold"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Tags */}
          {publication.tags && publication.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {publication.pdf && (
              <a
                href={publication.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                <BookOpen size={16} className="mr-2" />
                PDF
              </a>
            )}

            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                <ExternalLink size={16} className="mr-2" />
                DOI
              </a>
            )}

            {publication.bibtex && (
              <button
                onClick={handleCopyBibtex}
                className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check size={16} className="mr-2 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" />
                    BibTeX
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
