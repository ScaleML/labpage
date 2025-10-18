import Hero from '@/components/Hero';
import FeaturedShowcase from '@/components/FeaturedShowcase';
import SelectedPublications from '@/components/SelectedPublications';
import LatestNews from '@/components/LatestNews';
import Stats from '@/components/Stats';
import { getProjects } from '@/lib/content';

export default function Home() {
  const allProjects = getProjects();
  const featuredProjects = allProjects.filter(p => p.featured);

  return (
    <>
      <Hero />
      <Stats />
      {featuredProjects.length > 0 && <FeaturedShowcase projects={featuredProjects} />}
      <SelectedPublications />
      <LatestNews />
    </>
  );
}
