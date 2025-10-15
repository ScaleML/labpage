import { getPublications } from '@/lib/content';
import PublicationCard from '@/components/PublicationCard';

export default function PublicationsPage() {
  const publications = getPublications();

  // Group by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Publications</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our research contributions to the scientific community
          </p>
        </div>

        {/* Publications by Year */}
        {years.map((year) => (
          <div key={year} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-primary-200">
              {year}
            </h2>
            <div className="space-y-6">
              {publicationsByYear[year].map((pub) => (
                <PublicationCard key={pub.slug} publication={pub} />
              ))}
            </div>
          </div>
        ))}

        {publications.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">No publications yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
