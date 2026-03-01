import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICON_MAP } from "@/components/icons/service-icons";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Services & Products - Hina Shahrukh Technologies",
  description:
    "From design and development to advisory and automation — explore our full range of technology services and digital solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-dark">
          <div className="py-6 px-[5%] lg:px-[8%]">
            <Header variant="hero-inline" />
          </div>

          <div className="px-[5%] lg:px-[8%] pt-8 sm:pt-14 lg:pt-20 pb-14 sm:pb-18 lg:pb-24 text-center">
            <h1 className="font-slab text-[30px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-5 sm:mb-6">
              <span className="font-semibold">Our Services</span>{" "}
              <span className="font-extralight">& Products</span>
            </h1>

            <div className="w-10 h-[2px] bg-white/30 mx-auto mb-5 sm:mb-6" />

            <p className="max-w-[640px] mx-auto text-[13px] sm:text-[14px] lg:text-[15px] font-light text-white/65 leading-[1.75]">
              We deliver end-to-end digital solutions — from initial concept through design,
              development, and deployment, to ongoing analytics and strategic advisory.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white dark:bg-[#111318]">
          <div className="px-[5%] lg:px-[8%] py-16 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {SERVICES.map((service) => {
                const IconComponent = SERVICE_ICON_MAP[service.id];
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="group relative flex flex-col p-6 sm:p-7 lg:p-8 rounded-lg border border-black/5 dark:border-white/8 hover:border-black/12 dark:hover:border-white/15 hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-5 sm:mb-6">
                      {IconComponent && (
                        <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-black/25 dark:text-white/20 group-hover:text-hs-red/60 transition-colors duration-300" />
                      )}
                      <ArrowRight className="w-4 h-4 text-black/15 dark:text-white/10 group-hover:text-hs-red group-hover:translate-x-0.5 transition-all duration-300 mt-1" />
                    </div>

                    <h2 className="font-slab text-lg sm:text-xl font-semibold text-foreground mb-2.5 group-hover:text-hs-red transition-colors duration-300">
                      {service.title}
                    </h2>

                    <div className="w-full h-[1px] bg-black/8 dark:bg-white/8 mb-3 group-hover:bg-hs-red/30 transition-colors duration-300" />

                    <p className="text-[13px] sm:text-[14px] font-light leading-[1.7] text-black/50 dark:text-white/45 flex-1">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
