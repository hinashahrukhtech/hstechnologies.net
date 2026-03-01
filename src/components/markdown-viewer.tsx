"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-slab text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-black dark:text-white leading-[1.15] mt-10 mb-6 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-slab text-[22px] sm:text-[26px] lg:text-[30px] font-semibold text-black dark:text-white leading-[1.2] mt-12 mb-5 pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-slab text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-black dark:text-white leading-[1.25] mt-9 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-slab text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-black/90 dark:text-white/90 leading-[1.3] mt-7 mb-3">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.85] text-black/65 dark:text-white/55 mb-5">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-black/80 dark:text-white/75">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-black/55 dark:text-white/45">{children}</em>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-hs-red hover:text-hs-deep-red dark:text-hs-red dark:hover:text-red-400 underline underline-offset-2 decoration-hs-red/30 hover:decoration-hs-red/60 transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="relative my-7 pl-5 sm:pl-6 border-l-[3px] border-hs-red/40 bg-black/[0.02] dark:bg-white/[0.02] py-4 pr-5 rounded-r-md [&>p]:mb-0 [&>p]:text-[14px] [&>p]:sm:text-[15px] [&>p]:italic [&>p]:text-black/55 [&>p]:dark:text-white/50">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="my-5 ml-1 space-y-2.5">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 ml-1 space-y-2.5 list-none counter-reset-[list-counter]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="relative pl-6 text-[14px] sm:text-[15px] font-light leading-[1.8] text-black/60 dark:text-white/50 before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-hs-red/40">
      {children}
    </li>
  ),
  hr: () => (
    <hr className="my-10 border-none h-px bg-black/[0.08] dark:bg-white/[0.08]" />
  ),
  table: ({ children }) => (
    <div className="my-7 overflow-x-auto rounded-md border border-black/[0.06] dark:border-white/[0.06]">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/[0.08] dark:border-white/[0.08]">
      {children}
    </thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-black/[0.04] dark:border-white/[0.04] last:border-b-0">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase text-black/50 dark:text-white/40 whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[13px] sm:text-[14px] font-light text-black/60 dark:text-white/50 whitespace-nowrap">
      {children}
    </td>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block text-[12px] sm:text-[13px] leading-[1.7] font-mono text-black/70 dark:text-white/65">
          {children}
        </code>
      );
    }
    return (
      <code className="px-1.5 py-0.5 text-[13px] font-mono bg-black/[0.05] dark:bg-white/[0.08] text-hs-red dark:text-red-400 rounded-[3px]">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-7 p-5 sm:p-6 bg-[#1e1e2e] dark:bg-[#0c0c14] rounded-md overflow-x-auto border border-black/[0.06] dark:border-white/[0.06] [&_code]:text-white/80 [&_code]:dark:text-white/75">
      {children}
    </pre>
  ),
};

export function MarkdownViewer({ content }: { content: string }) {
  return (
    <article className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
