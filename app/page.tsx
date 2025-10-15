import Hero from '@/components/Hero';
import FeaturedResearch from '@/components/FeaturedResearch';
import LatestNews from '@/components/LatestNews';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedResearch />
      <LatestNews />
    </>
  );
}
