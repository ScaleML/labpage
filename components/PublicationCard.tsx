'use client';

import { Publication } from '@/lib/content';
import { FileText, ExternalLink, BookOpen, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const [copied, setCopied] = useState(false);

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
          <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
            {publication.title}
          </h3>

          <p className="text-slate-600 mb-2">
            {publication.authors.join(', ')}
          </p>

          <p className="text-primary-600 font-semibold mb-3">
            {publication.venue}, {publication.year}
          </p>

          {publication.abstract && (
            <p className="text-slate-600 mb-4 text-sm line-clamp-2">
              {publication.abstract}
            </p>
          )}

          {/* Highlights */}
          {publication.highlights && publication.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {publication.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full font-semibold"
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
                  className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
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
                className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
              >
                <ExternalLink size={16} className="mr-2" />
                DOI
              </a>
            )}

            {publication.bibtex && (
              <button
                onClick={handleCopyBibtex}
                className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
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
