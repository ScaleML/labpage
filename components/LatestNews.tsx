'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LatestNews() {
  const news = [
    {
      date: '2024-03-15',
      title: 'Our Paper Accepted at NeurIPS 2024',
      excerpt: 'Breakthrough research on neural architecture search published at the leading AI conference.',
    },
    {
      date: '2024-03-10',
      title: 'New NSF Grant Awarded',
      excerpt: 'Received $2M funding for advancing explainable AI in healthcare applications.',
    },
    {
      date: '2024-03-05',
      title: 'PhD Student Wins Best Paper Award',
      excerpt: 'Congratulations to our team for receiving the best paper award at ICML.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">News</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay updated with our recent achievements and announcements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover-lift"
            >
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <Calendar size={16} className="mr-2" />
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 mb-4">{item.excerpt}</p>
              <Link
                href="/news"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-accent-600 transition-colors group"
              >
                Read more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-primary-300 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 hover:shadow-xl transition-all duration-300"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
