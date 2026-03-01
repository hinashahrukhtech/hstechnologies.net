import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Calendar, Tag } from "lucide-react";
import { REPORTS } from "@/lib/reports";
import { MarkdownViewer } from "@/components/markdown-viewer";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return REPORTS.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = REPORTS.find((r) => r.slug === slug);
  if (!report) return {};

  return {
    title: `${report.title} - Hina Shahrukh Technologies`,
    description: report.summary,
  };
}

export default async function ReportViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = REPORTS.find((r) => r.slug === slug);
  if (!report) notFound();

  const currentIndex = REPORTS.findIndex((r) => r.slug === slug);
  const prevReport = currentIndex > 0 ? REPORTS[currentIndex - 1] : null;
  const nextReport =
    currentIndex < REPORTS.length - 1 ? REPORTS[currentIndex + 1] : null;

  return (
    <>
      <div className="py-6 px-[6%] sm:px-[5%] lg:px-[8%] bg-white dark:bg-[#111318]">
        <Header variant="hero-inline" />
      </div>

      {/* Hero */}
      <section className="relative gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="report-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#report-grid)" />
          </svg>
        </div>

        <div className="relative z-10 px-[6%] sm:px-[8%] lg:px-[12%] py-12 sm:py-16 lg:py-22">
          <Link
            href="/reports"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-[13px] sm:text-sm font-light mb-8 sm:mb-10"
          >
            <ChevronLeft className="w-4 h-4" />
            All Reports
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-hs-red">
                <Tag className="w-3 h-3" />
                {report.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] tracking-wide text-white/35">
                <Calendar className="w-3 h-3" />
                {report.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] tracking-wide text-white/35">
                <Clock className="w-3 h-3" />
                {report.readTime} read
              </span>
            </div>

            <h1 className="font-slab text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.1] text-white mb-5 sm:mb-6">
              {report.title}
            </h1>

            <div className="w-10 h-[2px] bg-hs-red mb-5 sm:mb-6" />

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.75] text-white/45 max-w-2xl">
              {report.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="bg-white dark:bg-[#111318]">
        <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-14 sm:py-18 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <MarkdownViewer content={report.content} />
          </div>
        </div>

        {/* Prev / Next Navigation */}
        {(prevReport || nextReport) && (
          <div className="px-[6%] sm:px-[8%] lg:px-[12%] pb-16 sm:pb-22 lg:pb-28">
            <div className="max-w-3xl mx-auto">
              <div className="h-px bg-black/[0.06] dark:bg-white/[0.06] mb-10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {prevReport ? (
                  <Link
                    href={`/reports/${prevReport.slug}`}
                    className="group flex flex-col gap-2 p-5 rounded-md border border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.12] dark:hover:border-white/[0.12] hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-all"
                  >
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-black/25 dark:text-white/20">
                      Previous
                    </span>
                    <span className="font-slab text-[15px] sm:text-[16px] font-semibold text-black dark:text-white group-hover:text-hs-red dark:group-hover:text-hs-red transition-colors leading-snug">
                      {prevReport.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextReport && (
                  <Link
                    href={`/reports/${nextReport.slug}`}
                    className="group flex flex-col gap-2 p-5 rounded-md border border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.12] dark:hover:border-white/[0.12] hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-all sm:text-right"
                  >
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-black/25 dark:text-white/20">
                      Next
                    </span>
                    <span className="font-slab text-[15px] sm:text-[16px] font-semibold text-black dark:text-white group-hover:text-hs-red dark:group-hover:text-hs-red transition-colors leading-snug">
                      {nextReport.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
