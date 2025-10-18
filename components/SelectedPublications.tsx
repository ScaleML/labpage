import Link from 'next/link';
import PublicationCard from '@/components/PublicationCard';
import { getPublications } from '@/lib/content';

export default function SelectedPublications() {
  const featuredPublications = getPublications()
    .filter((publication) => publication.featured)
    .slice(0, 3);

  if (featuredPublications.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Recent highlights from our research community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPublications.map((publication) => (
            <PublicationCard
              key={publication.slug}
              publication={publication}
              authorLimit={2}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/publications"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}
