import Image from "next/image";
import { ArrowDown, Square, Circle, Heart } from "lucide-react";
import { Header } from "@/components/layout/header";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row overflow-hidden bg-white dark:bg-[#111318]">
      {/* Left content column — 60% on desktop */}
      <div className="relative z-10 w-full lg:w-[60%] flex flex-col min-h-0 lg:min-h-screen">
        <div className="flex-1 flex flex-col justify-between py-6 lg:py-8 px-[6%] sm:px-[5%] lg:pl-[18%] lg:pr-[5%]">
          {/* Top: Logo / Header */}
          <Header variant="hero-inline" />

          {/* Center: Main content group */}
          <div className="py-4 sm:py-6">
            <h1 className="mb-4 sm:mb-5 text-center lg:text-left">
              <span className="block font-slab text-[32px] sm:text-[42px] lg:text-[72px] font-bold leading-[1.05] text-black dark:text-white">
                Human-centric
              </span>
              <span className="block font-slab text-[32px] sm:text-[42px] lg:text-[72px] font-extralight leading-[1.05] text-black dark:text-white/90">
                Digital Solutions
              </span>
            </h1>

            <p className="text-[15px] sm:text-[16px] lg:text-[19px] font-light leading-[1.7] text-black/60 dark:text-white/50 mb-6 sm:mb-8 text-center lg:text-left max-w-[880px]">
              We want to solve the world&apos;s problems through technology. By
              merging cross-industry expertise, we aim to bring the cutting edge
              to the masses.
            </p>

            {/* Vision section */}
            <div className="mb-6 sm:mb-10">
              <h2 className="text-center font-sans text-[16px] sm:text-[18px] lg:text-[22px] font-bold text-black dark:text-white mb-5 sm:mb-8">
                Our vision is
              </h2>

              <div className="flex items-start justify-evenly w-full">
                <VisionPillar
                  icon={<Square className="w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] lg:w-[52px] lg:h-[52px]" strokeWidth={1.8} />}
                  label="Simple"
                  color="text-hs-blue"
                />
                <VisionPillar
                  icon={<Circle className="w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] lg:w-[52px] lg:h-[52px]" strokeWidth={1.8} />}
                  label="Interoperable"
                  color="text-hs-green"
                />
                <VisionPillar
                  icon={<Heart className="w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] lg:w-[52px] lg:h-[52px]" strokeWidth={1.8} />}
                  label="Convenient"
                  color="text-hs-red"
                />
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 sm:mt-12 lg:mt-25 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-white group-hover:bg-[#BB0000] dark:group-hover:bg-[#BB0000] transition-colors">
                  <ArrowDown className="w-5 h-5 text-white dark:text-black dark:group-hover:text-white" />
                </span>
                <span className="text-[13px] sm:text-[15px] font-medium text-black dark:text-white group-hover:text-[#BB0000] transition-colors">
                  Contact Us
                </span>
              </a>
            </div>
          </div>

          {/* Bottom spacer to balance the vertical centering */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Right image column */}
      <div className="relative w-full lg:w-[40%] min-h-[200px] sm:min-h-[300px] lg:min-h-0 flex-shrink-0">
        <Image
          src="/images/flowers-hero.png"
          alt="Vibrant succulents"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}

function VisionPillar({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={color}>{icon}</div>
      <span className={`text-[14px] sm:text-[16px] lg:text-[22px] font-bold ${color}`}>
        {label}
      </span>
    </div>
  );
}
