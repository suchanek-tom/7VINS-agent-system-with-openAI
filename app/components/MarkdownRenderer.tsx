'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactNode } from 'react';

interface MarkdownRendererProps {
  content: string;
}

interface CodeProps {
  className?: string;
  children?: ReactNode;
  node?: {
    tagName?: string;
  };
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold text-[#cdd6f4] mt-4 mb-2">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold text-[#cdd6f4] mt-3 mb-2">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-bold text-[#cdd6f4] mt-3 mb-1">{children}</h3>
        ),
        p: ({ children }) => <p className="text-[#cdd6f4] mb-2 leading-relaxed">{children}</p>,
        code: ({ className, children, node }: CodeProps) => {
          const inline = !node?.tagName?.includes('pre');
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';

          if (inline) {
            return (
              <code className="bg-[#313244] text-[#a6e3a1] px-1.5 py-0.5 rounded font-mono text-sm">
                {children}
              </code>
            );
          }

          return (
            <div className="my-2 rounded-lg overflow-hidden border border-[#45475a]">
              <div className="bg-[#313244] px-4 py-2 text-xs text-[#6c7086] font-mono">
                {language || 'code'}
              </div>
              <pre className="bg-[#1e1e2e] p-4 overflow-x-auto">
                <code className="text-[#cdd6f4] font-mono text-sm">{children}</code>
              </pre>
            </div>
          );
        },
        ul: ({ children }) => (
          <ul className="list-disc list-inside text-[#cdd6f4] mb-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside text-[#cdd6f4] mb-2">{children}</ol>
        ),
        li: ({ children }) => <li className="mb-1 ml-2">{children}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#89b4fa] underline hover:text-[#a6d0ff]"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#45475a] bg-[#313244] px-4 py-2 text-[#bac2de] italic my-2">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <table className="w-full border-collapse my-2 border border-[#45475a]">{children}</table>
        ),
        th: ({ children }) => (
          <th className="border border-[#45475a] bg-[#313244] text-[#cdd6f4] p-2 text-left font-bold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-[#45475a] bg-[#1e1e2e] text-[#cdd6f4] p-2">{children}</td>
        ),
        hr: () => <hr className="border-t border-[#45475a] my-4" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
