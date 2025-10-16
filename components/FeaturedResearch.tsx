import { getProjects } from '@/lib/content';
import FeaturedResearchClient from './FeaturedResearchClient';

export default function FeaturedResearch() {
  const allProjects = getProjects();
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);

  return <FeaturedResearchClient projects={featuredProjects} />;
}
