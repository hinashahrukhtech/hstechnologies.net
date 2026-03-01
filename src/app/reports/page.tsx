import Link from "next/link";
import { ArrowUpRight, ArrowRight, FileText } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { REPORTS } from "@/lib/reports";
import type { Report } from "@/lib/reports";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports - Hina Shahrukh Technologies",
  description:
    "Explore research reports, whitepapers, and insights published by the Hina Shahrukh Technologies team across technology, innovation, and digital transformation.",
};

export default function ReportsPage() {
  const featured = REPORTS.filter((r) => r.featured);
  const archive = REPORTS.filter((r) => !r.featured);

  return (
    <>
      <div className="py-6 px-[6%] sm:px-[5%] lg:px-[8%] bg-white dark:bg-[#111318]">
        <Header variant="hero-inline" />
      </div>

      {/* ── Hero ── */}
      <section className="relative gradient-dark overflow-hidden">
        {/* Geometric texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 px-[6%] sm:px-[8%] lg:px-[12%] py-16 sm:py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-[11px] sm:text-[12px] font-medium tracking-[0.25em] uppercase text-white/40 mb-4 sm:mb-5">
                Research & Publications
              </p>
              <h1 className="mb-4 sm:mb-5">
                <span className="block font-slab text-[36px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.05] text-white">
                  Reports
                </span>
                <span className="block font-slab text-[36px] sm:text-[48px] lg:text-[64px] font-extralight leading-[1.05] text-white/85">
                  & Insights
                </span>
              </h1>
              <div className="w-10 h-[2px] bg-hs-red mb-5 sm:mb-6" />
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.75] text-white/50 max-w-lg">
                Whitepapers, analysis, and original research from our team —
                exploring the intersection of technology, business, and society.
              </p>
            </div>

            {/* Publication counter */}
            <div className="hidden lg:flex flex-col items-end text-right shrink-0 pb-1">
              <span className="font-slab text-[72px] font-bold leading-none text-white/[0.07]">
                {String(REPORTS.length).padStart(2, "0")}
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 mt-1">
                Publications
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white dark:bg-[#111318]">
        {/* ── Featured ── */}
        <section className="px-[6%] sm:px-[8%] lg:px-[12%] pt-16 sm:pt-22 lg:pt-32 pb-4 sm:pb-6 lg:pb-8">
          <p className="text-[11px] sm:text-[12px] font-medium tracking-[0.25em] uppercase text-black/30 dark:text-white/25 mb-10 sm:mb-14 lg:mb-16">
            Featured
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-12 xl:gap-0 xl:divide-x xl:divide-black/[0.06] xl:dark:divide-white/[0.06]">
            {featured.map((report, i) => (
              <FeaturedCard
                key={report.slug}
                report={report}
                index={i}
                isLast={i === featured.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="px-[6%] sm:px-[8%] lg:px-[12%]">
          <div className="h-px bg-black/[0.06] dark:bg-white/[0.06]" />
        </div>

        {/* ── Archive ── */}
        <section className="px-[6%] sm:px-[8%] lg:px-[12%] pt-14 sm:pt-18 lg:pt-24 pb-16 sm:pb-22 lg:pb-32">
          <div className="flex items-end justify-between mb-10 sm:mb-14 lg:mb-16">
            <div>
              <p className="text-[11px] sm:text-[12px] font-medium tracking-[0.25em] uppercase text-black/30 dark:text-white/25 mb-2">
                Archive
              </p>
              <h2 className="font-slab text-[22px] sm:text-[26px] lg:text-[30px] leading-tight">
                <span className="font-semibold text-black dark:text-white">All </span>
                <span className="font-extralight text-black/70 dark:text-white/80">Reports</span>
              </h2>
            </div>
            <span className="hidden sm:block text-[12px] tracking-[0.15em] uppercase text-black/25 dark:text-white/20">
              {archive.length} publications
            </span>
          </div>

          {/* Column headers */}
          <div className="hidden lg:grid grid-cols-[48px_1fr_140px_100px_100px] gap-x-6 pb-3 mb-1 border-b-2 border-black/[0.08] dark:border-white/[0.08]">
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">#</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">Title</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">Category</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20">Date</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/25 dark:text-white/20 text-right">View</span>
          </div>

          <div>
            {archive.map((report, i) => (
              <ArchiveRow
                key={report.slug}
                report={report}
                number={i + 1}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ── CTA ── */}
      <section className="gradient-dark-reverse">
        <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-16 sm:py-20 lg:py-28">
          <div className="max-w-xl mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="font-slab text-[22px] sm:text-[26px] lg:text-[32px] text-white mb-3">
                <span className="font-semibold">Research </span>
                <span className="font-extralight">Inquiries</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] font-light text-white/45 max-w-md">
                Our research team is available for commissioned studies,
                collaborative whitepapers, and speaking engagements.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-hs-red hover:bg-hs-deep-red text-white text-[14px] sm:text-[15px] font-medium rounded-md transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ─────────────────────────────── Featured Card ─────────────────────────────── */

const COVER_ACCENTS = [
  { from: "#27252D", to: "#43403E", stripe: "bg-hs-red" },
  { from: "#0c2340", to: "#1a3a5c", stripe: "bg-hs-blue" },
] as const;

function FeaturedCard({
  report,
  index,
  isLast,
}: {
  report: Report;
  index: number;
  isLast: boolean;
}) {
  const accent = COVER_ACCENTS[index % COVER_ACCENTS.length];

  return (
    <div
      className={`group ${
        !isLast
          ? "xl:pr-5 2xl:pr-7"
          : "xl:pl-5 2xl:pl-7"
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 lg:gap-8">
        {/* Report cover */}
        <Link
          href={`/reports/${report.slug}`}
          className="relative w-full sm:w-[200px] lg:w-[220px] shrink-0"
        >
          <div
            className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.12)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] dark:group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            style={{
              background: `linear-gradient(160deg, ${accent.from} 0%, ${accent.to} 100%)`,
            }}
          >
            {/* Subtle grid texture */}
            <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`covergrid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#covergrid-${index})`} />
              </svg>
            </div>

            {/* Accent stripe at top */}
            <div className={`h-[4px] ${accent.stripe}`} />

            {/* Cover content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-5 pt-6 pb-5">
              <div>
                <span className="block text-[9px] font-semibold tracking-[0.3em] uppercase text-white/40">
                  {report.category}
                </span>
              </div>

              <div>
                <div className="w-6 h-px bg-white/20 mb-3" />
                <span className="block text-[9px] tracking-[0.2em] uppercase text-white/30">
                  {report.date}
                </span>
                <span className="block text-[8px] tracking-[0.15em] uppercase text-white/20 mt-1">
                  HS Technologies
                </span>
              </div>
            </div>

            {/* Large ghosted number */}
            <span className="absolute -bottom-3 -right-1 font-slab text-[80px] sm:text-[72px] lg:text-[88px] font-bold leading-none text-white/[0.04] select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </Link>

        {/* Report details */}
        <div className="flex-1 min-w-0 py-1 sm:py-2">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-hs-red">
              {report.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" />
            <span className="text-[11px] sm:text-[12px] tracking-wide text-black/30 dark:text-white/25">
              {report.date}
            </span>
          </div>

          <h3 className="font-slab text-[19px] sm:text-[21px] lg:text-[24px] font-semibold leading-[1.2] text-black dark:text-white mb-3 sm:mb-4 group-hover:text-hs-red dark:group-hover:text-hs-red transition-colors duration-300">
            {report.title}
          </h3>

          <p className="text-[13px] sm:text-[14px] font-light leading-[1.8] text-black/45 dark:text-white/40 mb-6 sm:mb-8">
            {report.summary}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/reports/${report.slug}`}
              className="group/dl inline-flex items-center gap-2 text-[13px] font-medium text-black/70 dark:text-white/60 hover:text-hs-red dark:hover:text-hs-red transition-colors pr-2"
            >
              Read Report
              <FileText className="w-4 h-4" />
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/dl:opacity-100 group-hover/dl:translate-x-0 transition-all duration-200" />
            </Link>
            <span className="text-[11px] tracking-wide text-black/20 dark:text-white/15">
              {report.readTime} read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── Archive Row ─────────────────────────────── */

function ArchiveRow({
  report,
  number,
}: {
  report: Report;
  number: number;
}) {
  return (
    <div className="group border-b border-black/[0.05] dark:border-white/[0.05] last:border-b-0 transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.015]">
      {/* Desktop layout */}
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

      {/* Mobile / Tablet layout */}
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
