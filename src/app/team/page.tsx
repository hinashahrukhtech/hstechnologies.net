import Image from "next/image";
import { Mail } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Hina Shahrukh Technologies",
  description:
    "Meet the leadership team behind Hina Shahrukh Technologies — a talented group driving innovation and digital solutions.",
};

const TEAM_MEMBERS = [
  {
    name: "Shahrukh Malik",
    role: "Chief Executive Officer",
    email: "shahrukh@hsco.pk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/member-1.jpg",
    initials: "SM",
  },
  {
    name: "Hina Shahrukh",
    role: "Chief Operating Officer",
    email: "hina@hsco.pk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/member-2.jpg",
    initials: "HS",
  },
  {
    name: "Ahmed Raza",
    role: "Head of Engineering",
    email: "ahmed.raza@hsco.pk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/member-3.jpg",
    initials: "AR",
  },
  {
    name: "Sara Qureshi",
    role: "Lead Designer",
    email: "sara.q@hsco.pk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/member-4.jpg",
    initials: "SQ",
  },
  {
    name: "Bilal Hassan",
    role: "Head of Marketing",
    email: "bilal.h@hsco.pk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/member-5.jpg",
    initials: "BH",
  },
  {
    name: "Fatima Noor",
    role: "Business Development Lead",
    email: "fatima.n@hsco.pk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/member-6.jpg",
    initials: "FN",
  },
] as const;

export default function TeamPage() {
  return (
    <>
      <div className="py-6 px-[6%] sm:px-[5%] lg:px-[8%] bg-white dark:bg-[#111318]">
        <Header variant="hero-inline" />
      </div>

      {/* Hero banner */}
      <section className="gradient-dark px-[6%] sm:px-[8%] lg:px-[12%] py-14 sm:py-18 lg:py-24">
        <h1 className="text-center lg:text-left mb-3">
          <span className="font-slab text-[32px] sm:text-[42px] lg:text-[60px] font-bold leading-[1.1] text-white">
            Our Leadership{" "}
          </span>
          <span className="font-slab text-[32px] sm:text-[42px] lg:text-[60px] font-extralight leading-[1.1] text-white/90">
            Team
          </span>
        </h1>
        <p className="text-[15px] sm:text-base lg:text-lg font-light text-white/60 text-center lg:text-left max-w-2xl">
          A passionate team of experts specializing in digital solutions,
          strategy, and innovation — building your tomorrow, today.
        </p>
      </section>

      {/* Team grid */}
      <main className="bg-hs-light-gray dark:bg-[#111318]">
        <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-14 sm:py-20 lg:py-28">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] mb-3">
              <span className="font-semibold text-black dark:text-white">
                Meet the{" "}
              </span>
              <span className="font-extralight text-black/80 dark:text-white/90">
                People
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-hs-red mx-auto mb-4" />
            <p className="text-[15px] sm:text-base text-black/45 dark:text-white/40 font-light max-w-xl mx-auto">
              The individuals driving our vision forward — each bringing unique
              expertise and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:gap-x-10 lg:gap-y-14">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </main>

      {/* CTA banner */}
      <section className="gradient-dark-reverse">
        <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-14 sm:py-18 lg:py-24 text-center">
          <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] text-white mb-4">
            <span className="font-semibold">Want to join </span>
            <span className="font-extralight">our team?</span>
          </h2>
          <p className="text-[15px] sm:text-base lg:text-lg font-light text-white/60 max-w-lg mx-auto mb-8">
            We&apos;re always looking for talented individuals who share our
            passion for technology and innovation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-hs-red hover:bg-hs-deep-red text-white text-[15px] font-medium rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

function TeamCard({
  member,
}: {
  member: (typeof TEAM_MEMBERS)[number];
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Card wrapper */}
      <div className="w-full max-w-[320px] bg-white dark:bg-white/[0.03] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-none overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-none">
        {/* Photo container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-white dark:bg-white/5">
          <ProfileImage
            src={member.image}
            alt={member.name}
            initials={member.initials}
          />

        </div>

        {/* Info */}
        <div className="px-5 py-5">
          <h3 className="font-sans text-lg sm:text-xl font-semibold text-black dark:text-white mb-1 group-hover:text-hs-red dark:group-hover:text-hs-red transition-colors">
            {member.name}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-black/40 dark:text-white/45 font-light tracking-widest uppercase">
            {member.role}
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.04] dark:bg-white/8 text-black/50 dark:text-white/50 hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white transition-all"
              aria-label={`${member.name} on LinkedIn`}
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.04] dark:bg-white/8 text-black/50 dark:text-white/50 hover:bg-hs-red hover:text-white dark:hover:bg-hs-red dark:hover:text-white transition-all"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileImage({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  return (
    <>
      {/* Initials fallback — always rendered behind the image */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#27252D] dark:to-[#43403E]">
        <span className="font-slab text-[48px] sm:text-[56px] font-extralight text-black/10 dark:text-white/30 select-none">
          {initials}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top relative z-[1]"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
      />
    </>
  );
}
