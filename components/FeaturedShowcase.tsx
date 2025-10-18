'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/lib/content';

interface FeaturedShowcaseProps {
  projects: Project[];
}

export default function FeaturedShowcase({ projects }: FeaturedShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Research</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our latest breakthroughs in AI research
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Media Section */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
                  {currentProject.video ? (
                    <div className="aspect-video w-full bg-black">
                      <video
                        src={currentProject.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : currentProject.image ? (
                    <div className="aspect-video w-full bg-white flex items-center justify-center p-8">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                      <img
                        src="/assets/scaleml-logo.svg"
                        alt={currentProject.title}
                        className="w-1/2 h-1/2 object-contain opacity-50"
                      />
                    </div>
                  )}

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"></div>
                </div>

                {/* Floating Highlights */}
                {currentProject.highlights && currentProject.highlights.length > 0 && (
                  <div className="absolute -top-4 -right-4 flex flex-col gap-2">
                    {currentProject.highlights.slice(0, 2).map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="px-4 py-2 bg-accent-500 text-white text-sm font-bold rounded-full shadow-lg"
                      >
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="text-white space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                    Project {currentIndex + 1} of {projects.length}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Tags */}
                  {currentProject.tags && currentProject.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={`/research/${currentProject.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Explore Project
                    <ChevronRight className="ml-2" size={20} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {projects.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white border border-white/20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white border border-white/20"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators & Controls */}
        {projects.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-accent-500'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white border border-white/20"
              aria-label={isAutoPlay ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
