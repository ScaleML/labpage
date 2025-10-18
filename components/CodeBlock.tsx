'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
  [key: string]: any;
}

export default function CodeBlock({ children, className, inline, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from className (format: language-xxx)
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';

  // Get the code content
  const code = String(children).replace(/\n$/, '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Inline code - no copy button
  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  // Block code - with copy button
  return (
    <div className="relative group my-4 not-prose border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-900">
      {/* Language label and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm border-b border-slate-300 dark:border-slate-700">
        <span className="font-mono font-semibold">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors duration-200 border border-slate-300 dark:border-slate-700"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-600 dark:text-green-400" />
              <span className="text-green-600 dark:text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-slate-700 dark:text-slate-200">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="!mt-0 !rounded-none overflow-x-auto !bg-white dark:!bg-slate-900 !p-4">
        <code className={`${className ?? ''} dark:!text-slate-200`} {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
}
