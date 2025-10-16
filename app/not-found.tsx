'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-300 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">You might be interested in:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/research"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Research
            </Link>
            <Link
              href="/publications"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Publications
            </Link>
            <Link
              href="/people"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              People
            </Link>
            <Link
              href="/news"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
