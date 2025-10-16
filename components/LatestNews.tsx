import { getNews } from '@/lib/content';
import LatestNewsClient from './LatestNewsClient';

export default function LatestNews() {
  const allNews = getNews();
  const latestNews = allNews.slice(0, 3);

  return <LatestNewsClient news={latestNews} />;
}
