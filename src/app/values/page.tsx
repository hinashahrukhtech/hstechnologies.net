import type { Metadata } from "next";
import Image from "next/image";
import { Square, Circle, Heart, Play } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Values - Hina Shahrukh Technologies",
  description:
    "Building your tomorrow, today. Co-creating with organisations and society at large, our teams are dedicated towards solving world's problems.",
};

export default function ValuesPage() {
  return (
    <>
      <main>
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/square-flowers.jpg"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
          </div>

          <div className="relative z-10 py-6 px-[5%] lg:px-[8%]">
            <Header variant="hero-inline" />
          </div>

          <div className="relative z-10 text-center px-[5%] pt-6 sm:pt-12 lg:pt-20 pb-44 sm:pb-52 lg:pb-64">
            <h1 className="font-slab text-[30px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-[1.1] mb-5 sm:mb-6 drop-shadow-lg">
              Building your tomorrow, today.
            </h1>

            <div className="w-10 h-[2px] bg-white/80 mx-auto mb-5 sm:mb-6" />

            <p className="max-w-[640px] mx-auto text-[13px] sm:text-[14px] lg:text-[15px] font-light text-white/85 leading-[1.75] drop-shadow-sm">
              Co-creating with organisations and society at large, our teams are
              dedicated towards solving world&apos;s problem, from nations to the
              individual.
            </p>
          </div>
        </section>

        {/* ── Value Cards ── */}
        <section className="relative bg-white dark:bg-[#111318]">
          <div className="-mt-20 sm:-mt-24 lg:-mt-28 relative z-20 px-[5%] lg:px-[10%] pt-6 sm:pt-8 lg:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-[960px] mx-auto">
              <ValueCard
                icon={
                  <Square
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-[52px] lg:h-[52px]"
                    strokeWidth={1.6}
                  />
                }
                title="Simplicity"
                color="text-hs-blue"
                borderColor="border-hs-blue"
                description="Simple is smart. With less actions, easier interfaces and clear workflows, we build complex systems by breaking them down into simple bits."
              />
              <ValueCard
                icon={
                  <Circle
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-[52px] lg:h-[52px]"
                    strokeWidth={1.6}
                  />
                }
                title="Interoperability"
                color="text-hs-green"
                borderColor="border-hs-green"
                description="Information and efforts often go wasted when not aggregated. We prioritize establishing connections to develop connected value add."
              />
              <ValueCard
                icon={
                  <Heart
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-[52px] lg:h-[52px]"
                    strokeWidth={1.6}
                  />
                }
                title="Convenience"
                color="text-hs-red"
                borderColor="border-hs-red"
                description="At the heart of it all is the user. We keep our focus towards their needs, exploring possibilities and delivering ease in daily life."
              />
            </div>
          </div>

          {/* ── Our Story ── */}
          <div className="px-[5%] lg:px-[10%] pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-18 lg:pb-24">
            <div className="max-w-[960px] mx-auto">
              <h2 className="font-slab text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-center text-foreground mb-8 sm:mb-10 lg:mb-14">
                Our Story
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-[1.85] text-black/65 dark:text-white/60 text-center md:text-left">
                  Founded with a singular vision to bridge the gap between
                  technology and everyday life, Hina Shahrukh Technologies was
                  born out of a passion for making the complex simple. What
                  started as a small team of dedicated engineers and designers
                  has grown into a multi-continental operation, serving clients
                  from startups to enterprises across five continents. Our
                  foundation rests on the belief that meaningful innovation comes
                  from understanding the people it serves.
                </p>
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-[1.85] text-black/65 dark:text-white/60 text-center md:text-left">
                  Our journey has been defined by a relentless pursuit of
                  innovation grounded in human-centric values. From automating
                  business workflows to building platforms that connect
                  communities, every project we undertake is guided by our core
                  belief: technology should serve people, not the other way
                  around. Today, we continue to push boundaries, co-creating
                  solutions alongside organisations and individuals alike,
                  driven by the conviction that a better tomorrow is built
                  through thoughtful action today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Video Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#27252D] via-[#3a3642] to-[#43403E] dark:from-[#0d0e12] dark:via-[#161822] dark:to-[#1a1c25]">
          {/* Curved top transition from white */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1440 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-[50px] sm:h-[70px] lg:h-[100px]"
            >
              <path
                d="M0 0H1440V40C1440 40 1200 100 720 100C240 100 0 40 0 40V0Z"
                className="fill-white dark:fill-[#111318]"
              />
            </svg>
          </div>

          <div className="relative z-10 px-[5%] lg:px-[12%] pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36">
            <div className="max-w-[780px] mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 lg:p-4 rounded-xl shadow-2xl border border-white/10">
                <div className="relative aspect-video bg-black/80 rounded-lg flex items-center justify-center group cursor-pointer">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <Play
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white/80 ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant wave bottom transition */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1440 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-[60px] sm:h-[80px] lg:h-[120px]"
            >
              <path
                d="M0 140H1440V80C1380 30 1200 0 960 10C720 20 540 70 360 80C180 90 60 60 0 40V140Z"
                className="fill-white dark:fill-[#111318]"
              />
              <path
                d="M0 140H1440V100C1350 60 1150 30 900 45C650 60 450 90 250 95C100 98 30 85 0 70V140Z"
                className="fill-white/40 dark:fill-[#111318]/40"
              />
            </svg>
          </div>
        </section>

        {/* Spacer to ensure footer separation */}
        <div className="h-4 sm:h-6 bg-white dark:bg-[#111318]" />
      </main>
      <Footer />
    </>
  );
}

function ValueCard({
  icon,
  title,
  color,
  borderColor,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  borderColor: string;
  description: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-[#1a1c25] rounded-xl shadow-lg shadow-black/8 dark:shadow-black/30 border-t-[3px] ${borderColor} px-5 sm:px-6 lg:px-7 py-7 sm:py-8 lg:py-9 text-center transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className={`${color} mb-4 sm:mb-5 flex justify-center`}>{icon}</div>
      <h3
        className={`${color} font-slab text-[17px] sm:text-[19px] lg:text-[21px] font-bold mb-3 sm:mb-4`}
      >
        {title}
      </h3>
      <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-light leading-[1.75] text-black/55 dark:text-white/50">
        {description}
      </p>
    </div>
  );
}
