import { getNews, getContentBySlug, NewsPost } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const news = getNews();
  return news.map((post) => ({
    slug: post.slug,
  }));
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = getContentBySlug<NewsPost>('news', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center text-primary-600 hover:text-accent-600 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to News
        </Link>

        {/* Header */}
        <div className="mb-8">
          {post.image && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

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
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
