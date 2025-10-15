'use client';

import { Project } from '@/lib/content';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass rounded-2xl overflow-hidden hover-lift"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-300">
              {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
            </span>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Date */}
        {project.date && (
          <p className="text-sm text-slate-500 mb-4">
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </p>
        )}

        <Link
          href={`/research/${project.slug}`}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors group"
        >
          Learn more
          <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
