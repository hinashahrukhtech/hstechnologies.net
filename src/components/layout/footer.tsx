import { Suspense } from "react";
import Link from "next/link";
import { HSLogoMark } from "@/components/icons/logo";
import { CopyrightYear } from "./copyright-year";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#111318] py-8 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <HSLogoMark className="w-[110px] sm:w-[140px] h-auto" />

        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 text-center font-light" suppressHydrationWarning>
          Copyright &copy; <Suspense><CopyrightYear /></Suspense> Hina Shahrukh Technologies
          (Pvt.) Ltd.
        </p>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <Link
            href="/legal"
            className="font-semibold text-black dark:text-white hover:text-[#BB0000] dark:hover:text-[#e04040] transition-colors"
          >
            Legal
          </Link>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <Link
            href="/privacy"
            className="font-semibold text-black dark:text-white hover:text-[#BB0000] dark:hover:text-[#e04040] transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
