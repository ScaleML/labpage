import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Research Lab
            </h3>
            <p className="text-slate-300 mb-4">
              Advancing the frontiers of artificial intelligence and machine learning
              through innovative research and collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:lab@example.com"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-slate-300 hover:text-primary-400 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-slate-300 hover:text-primary-400 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-slate-300 hover:text-primary-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-primary-400 transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Research Lab</li>
              <li>University Name</li>
              <li>City, State 12345</li>
              <li className="mt-4">
                <a href="mailto:lab@example.com" className="hover:text-primary-400 transition-colors">
                  lab@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Research Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
