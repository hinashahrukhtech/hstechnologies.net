"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import type { Report } from "@/lib/reports";

export function ReportsArchive({
  reports,
  categories,
}: {
  reports: Report[];
  categories: string[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active
    ? reports.filter((r) => r.category === active)
    : reports;

  return (
    <>
      {/* Filter bar */}
      <div className="flex items-center gap-1 sm:gap-1.5 mb-10 sm:mb-14 lg:mb-16 overflow-x-auto scrollbar-none -mx-1 px-1 pb-1">
        <button
          onClick={() => setActive(null)}
          className={`shrink-0 text-[11px] sm:text-[12px] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm transition-colors duration-200 ${
            active === null
              ? "text-hs-red bg-hs-red/[0.06] dark:bg-hs-red/[0.08]"
              : "text-black/35 dark:text-white/25 hover:text-black/60 dark:hover:text-white/50"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(active === cat ? null : cat)}
            className={`shrink-0 text-[11px] sm:text-[12px] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm transition-colors duration-200 ${
              active === cat
                ? "text-hs-red bg-hs-red/[0.06] dark:bg-hs-red/[0.08]"
                : "text-black/35 dark:text-white/25 hover:text-black/60 dark:hover:text-white/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Column headers */}
      <div className="hidden lg:grid grid-cols-[48px_1fr_140px_100px_100px] gap-x-6 pb-3 mb-1 border-b-2 border-black/[0.08] dark:border-white/[0.08]">
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">
          #
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">
          Title
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">
          Category
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">
          Date
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20 text-right">
          View
        </span>
      </div>

      {/* Rows */}
      <div>
        {filtered.map((report, i) => (
          <ArchiveRow key={report.slug} report={report} number={i + 1} />
        ))}

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-[13px] font-light text-black/30 dark:text-white/20">
              No reports in this category yet.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

function ArchiveRow({
  report,
  number,
}: {
  report: Report;
  number: number;
}) {
  return (
    <div className="group border-b border-black/[0.05] dark:border-white/[0.05] last:border-b-0 transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.015]">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-[48px_1fr_140px_100px_100px] gap-x-6 items-center py-5">
        <span className="font-slab text-[15px] font-semibold text-black/15 dark:text-white/10 tabular-nums">
          {String(number).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <Link href={`/reports/${report.slug}`}>
            <h3 className="font-slab text-[16px] font-semibold text-black dark:text-white group-hover:text-hs-red dark:group-hover:text-hs-red transition-colors truncate">
              {report.title}
            </h3>
          </Link>
          <p className="text-[12px] font-light text-black/35 dark:text-white/25 mt-0.5 truncate">
            {report.summary}
          </p>
        </div>

        <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-black/40 dark:text-white/30">
          {report.category}
        </span>

        <span className="text-[12px] text-black/35 dark:text-white/25">
          {report.date}
        </span>

        <div className="flex justify-end pr-2">
          <Link
            href={`/reports/${report.slug}`}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-black/40 dark:text-white/30 hover:text-hs-red dark:hover:text-hs-red transition-colors"
            aria-label={`Read ${report.title}`}
          >
            Read
            <FileText className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden py-5 sm:py-6">
        <div className="flex items-start gap-4">
          <span className="font-slab text-[14px] font-semibold text-black/12 dark:text-white/8 tabular-nums pt-0.5 shrink-0">
            {String(number).padStart(2, "0")}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-black/35 dark:text-white/25">
                {report.category}
              </span>
              <span className="text-[11px] text-black/25 dark:text-white/18">
                {report.date}
              </span>
            </div>

            <Link href={`/reports/${report.slug}`}>
              <h3 className="font-slab text-[15px] sm:text-[16px] font-semibold text-black dark:text-white group-hover:text-hs-red dark:group-hover:text-hs-red transition-colors leading-snug mb-1.5">
                {report.title}
              </h3>
            </Link>

            <p className="text-[12px] sm:text-[13px] font-light text-black/35 dark:text-white/25 line-clamp-2 leading-relaxed">
              {report.summary}
            </p>
          </div>

          <Link
            href={`/reports/${report.slug}`}
            className="shrink-0 flex items-center justify-center w-9 h-9 mr-1 rounded-md text-black/30 dark:text-white/20 hover:text-hs-red hover:bg-hs-red/5 dark:hover:text-hs-red dark:hover:bg-hs-red/10 transition-colors mt-0.5"
            aria-label={`Read ${report.title}`}
          >
            <FileText className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
