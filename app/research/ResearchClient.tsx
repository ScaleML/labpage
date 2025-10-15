'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';
import { Filter } from 'lucide-react';

interface ResearchClientProps {
  projects: Project[];
}

export default function ResearchClient({ projects }: ResearchClientProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    // Extract all unique tags
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags?.forEach(tag => tags.add(tag));
    });
    setAllTags(['All', ...Array.from(tags).sort()]);
  }, [projects]);

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tags?.includes(selectedTag)));
    }
  }, [selectedTag, projects]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Research <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our cutting-edge research projects pushing the boundaries of AI
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <Filter className="mr-2 text-slate-600" size={20} />
            <span className="text-lg font-semibold text-slate-700">Filter by Topic</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
