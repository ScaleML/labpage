import { getBlogs } from '@/lib/content';
import { Calendar, User, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights from our research team
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-primary-50 flex items-center justify-center">
                <img
                  src={post.image || '/assets/scaleml-logo.svg'}
                  alt={post.title}
                  className={`${post.image ? 'w-full h-full object-cover group-hover:scale-110' : 'w-2/3 h-2/3 object-contain'} transition-transform duration-500`}
                />
                {post.externalUrl && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-600 flex items-center">
                    <ExternalLink size={14} className="mr-1" />
                    External
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Metadata */}
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  {post.author && (
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Read More Link */}
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors"
                  >
                    Read on External Site
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors"
                  >
                    Read More
                    <ExternalLink className="ml-2" size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
