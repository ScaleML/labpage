import { getPeople, getContentBySlug, Person } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Mail, ExternalLink, Github, Linkedin, Twitter as X, GraduationCap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';

export async function generateStaticParams() {
  const people = getPeople();
  return people.map((person) => ({
    slug: person.slug,
  }));
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  const person = getContentBySlug<Person>('people', params.slug);

  if (!person) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 flex-shrink-0">
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-300">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{person.name}</h1>
              <p className="text-xl text-primary-600 font-semibold mb-4">{person.role}</p>
              <p className="text-slate-600 mb-6">{person.bio}</p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    Email
                  </a>
                )}
                {person.website && (
                  <a
                    href={person.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Website
                  </a>
                )}
                {person.scholar && (
                  <a
                    href={person.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <GraduationCap size={18} className="mr-2" />
                    Google Scholar
                  </a>
                )}
                {person.github && (
                  <a
                    href={`https://github.com/${person.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                )}
                {person.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${person.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </a>
                )}
                {person.twitter && (
                  <a
                    href={`https://x.com/${person.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <X size={18} className="mr-2" />
                    X (Twitter)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
          >
            {person.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
