import { getPublications } from '@/lib/content';
import PublicationsClient from './PublicationsClient';

export default function PublicationsPage() {
  const publications = getPublications();

  return <PublicationsClient publications={publications} />;
}
