"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HSLogo } from "@/components/icons/logo";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Header({ variant = "default" }: { variant?: "default" | "hero-inline" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const isInline = variant === "hero-inline";

  const overlay = isOpen && mounted
    ? createPortal(
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={close}
            aria-hidden="true"
          />
          <nav className="absolute right-0 top-0 h-full w-[320px] max-w-[85vw] bg-white dark:bg-[#1a1c25] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-end p-6">
              <button
                onClick={close}
                className="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <div className="flex flex-col px-8 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-lg font-light font-slab text-gray-800 dark:text-gray-200 hover:text-[#BB0000] dark:hover:text-[#e04040] transition-colors border-b border-gray-100 dark:border-white/10"
                  onClick={close}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto px-8 pb-8">
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#BB0000] dark:hover:text-[#e04040] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#BB0000] dark:hover:text-[#e04040] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#BB0000] dark:hover:text-[#e04040] transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </nav>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <header
        className={
          isInline
            ? "flex items-center justify-between w-full"
            : "absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] lg:px-[8%] py-6"
        }
      >
        <Link href="/" aria-label="Home">
          <HSLogo className="w-[160px] sm:w-[200px] lg:w-[250px] h-auto" />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#D7D7D7] dark:bg-white/15 rounded-sm transition-colors hover:bg-[#c0c0c0] dark:hover:bg-white/25"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-black dark:text-white" />
        </button>
      </header>

      {overlay}
    </>
  );
}
