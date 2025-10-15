import { getNews } from '@/lib/content';
import NewsCard from '@/components/NewsCard';

export default function NewsPage() {
  const news = getNews();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Latest <span className="gradient-text">News</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with our recent achievements, publications, and announcements
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">No news articles yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
