import { getPeople, getPublications, getNews, getProjects } from '@/lib/content';
import StatsClient from './StatsClient';

export default function Stats() {
  const people = getPeople();
  const currentMembers = people.filter(p => !p.alumni);
  const researchersCount = currentMembers.length;

  const publications = getPublications();
  const publicationsCount = publications.length;

  const news = getNews();
  const newsCount = news.length;

  const projects = getProjects();
  const projectsCount = projects.length;

  return (
    <StatsClient
      researchersCount={researchersCount}
      publicationsCount={publicationsCount}
      newsCount={newsCount}
      projectsCount={projectsCount}
    />
  );
}
