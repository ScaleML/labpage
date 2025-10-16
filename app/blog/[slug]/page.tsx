import { getBlogs, getContentBySlug, BlogPost } from '@/lib/content';
import { notFound, redirect } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getContentBySlug<BlogPost>('blogs', params.slug);

  if (!post) {
    notFound();
  }

  // If the post has an external URL, redirect to it
  if (post.externalUrl) {
    redirect(post.externalUrl);
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-accent-600 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-slate-50 to-primary-50 flex items-center justify-center">
            <img
              src={post.image || '/assets/scaleml-logo.svg'}
              alt={post.title}
              className={post.image ? 'w-full h-full object-cover' : 'w-1/2 h-1/2 object-contain'}
            />
          </div>

          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

          {/* Metadata */}
          <div className="flex items-center space-x-6 text-slate-600 mb-6">
            <div className="flex items-center">
              <Calendar size={20} className="mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            {post.author && (
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                {post.author}
              </div>
            )}
          </div>

          <p className="text-xl text-slate-600 italic">{post.excerpt}</p>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
