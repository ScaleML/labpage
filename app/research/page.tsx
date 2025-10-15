import { getProjects } from '@/lib/content';
import ResearchClient from './ResearchClient';

export default function ResearchPage() {
  const projects = getProjects();

  return <ResearchClient projects={projects} />;
}
