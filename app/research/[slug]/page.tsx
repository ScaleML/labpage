import { getProjects, getContentBySlug, Project } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css';
import { Calendar } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

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
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-white dark:bg-slate-900 flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src="/assets/scaleml-logo.svg"
                alt={project.title}
                className="w-1/2 h-1/2 object-contain"
              />
            )}
          </div>

          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            {project.date && (
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <Calendar size={20} className="mr-2" />
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </div>
            )}
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 bg-accent-100 text-accent-700 dark:bg-accent-500/20 dark:text-accent-200 font-semibold rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200 font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-xl text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 prose prose-lg max-w-none dark:prose-invert dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-code:text-primary-200 dark:prose-pre:bg-slate-900 dark:prose-pre:text-slate-200 dark:prose-a:text-primary-300">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
            components={{
              code: CodeBlock as any,
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
