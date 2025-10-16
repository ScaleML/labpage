import Link from 'next/link';
import { Github, Twitter as X, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img
                src="/assets/scaleml-logo.svg"
                alt="ScaleML Lab"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-4">
              Advancing the frontiers of artificial intelligence and machine learning
              through innovative research and collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ScaleML"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <X size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="mailto:lab@example.com"
                className="p-2 bg-slate-700 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a> */}
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
                  People
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
              <li>ScaleML Lab</li>
              <li>University of Illinois Urbana-Champaign</li>
              <li>Urbana, IL 61801</li>
              {/* <li className="mt-4">
                <a href="mailto:lab@example.com" className="hover:text-primary-400 transition-colors">
                  scale-ml@illinois.edu
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} ScaleML Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
