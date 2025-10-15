import { getProjects, getContentBySlug, Project } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getContentBySlug<Project>('projects', params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          {project.image && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
                {project.date && (
                  <div className="flex items-center text-lg">
                    <Calendar size={20} className="mr-2" />
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {!project.image && (
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
              {project.date && (
                <div className="flex items-center text-slate-600">
                  <Calendar size={20} className="mr-2" />
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-xl text-slate-600">{project.description}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 prose prose-lg max-w-none">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
