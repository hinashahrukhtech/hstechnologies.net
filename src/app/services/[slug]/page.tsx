import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICON_MAP } from "@/components/icons/service-icons";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};

  return {
    title: `${service.title} - Hina Shahrukh Technologies`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  const IconComponent = SERVICE_ICON_MAP[service.id];
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative gradient-dark overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }} />
          </div>

          <div className="relative z-10">
            <div className="py-6 px-[5%] lg:px-[8%]">
              <Header variant="hero-inline" />
            </div>

            <div className="px-[5%] lg:px-[8%] pt-8 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-sm font-light mb-8 sm:mb-10"
              >
                <ChevronLeft className="w-4 h-4" />
                All Services
              </Link>

              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 max-w-5xl">
                <div className="flex-shrink-0">
                  {IconComponent && (
                    <IconComponent className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-white/70" />
                  )}
                </div>

                <div className="flex-1">
                  <h1 className="font-slab text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-4 sm:mb-5">
                    <span className="font-semibold">{service.title}</span>
                  </h1>

                  <p className="font-slab text-lg sm:text-xl lg:text-2xl font-extralight text-white/60 mb-6 sm:mb-8">
                    {service.tagline}
                  </p>

                  <div className="w-12 h-[2px] bg-hs-red mb-6 sm:mb-8" />

                  <p className="text-[14px] sm:text-[15px] lg:text-base font-light text-white/75 leading-[1.8] max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-white dark:bg-[#111318]">
          <div className="px-[5%] lg:px-[8%] py-16 sm:py-20 lg:py-28">
            <div className="max-w-5xl">
              <h2 className="font-slab text-[22px] sm:text-[26px] lg:text-[30px] text-foreground mb-10 sm:mb-12 lg:mb-16">
                <span className="font-semibold">Key</span>{" "}
                <span className="font-extralight">Capabilities</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8">
                {service.capabilities.map((capability, i) => (
                  <div key={i} className="group flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-hs-light-gray dark:bg-white/5 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-black/40 dark:text-white/30 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[14px] sm:text-[15px] font-medium text-foreground leading-snug">
                        {capability}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extended Content */}
        <section className="bg-hs-light-gray dark:bg-[#0d0e12]">
          <div className="px-[5%] lg:px-[8%] py-16 sm:py-20 lg:py-28">
            <div className="max-w-5xl">
              <h2 className="font-slab text-[22px] sm:text-[26px] lg:text-[30px] text-foreground mb-8 sm:mb-10 lg:mb-14">
                <span className="font-semibold">How We</span>{" "}
                <span className="font-extralight">Deliver</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">
                {service.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-[1.85] text-black/60 dark:text-white/55"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="bg-white dark:bg-[#111318] border-t border-black/5 dark:border-white/5">
          <div className="px-[5%] lg:px-[8%] py-14 sm:py-16 lg:py-20">
            <h2 className="font-slab text-[18px] sm:text-[20px] lg:text-[22px] text-foreground mb-8 sm:mb-10">
              <span className="font-semibold">Other</span>{" "}
              <span className="font-extralight">Services</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {otherServices.map((s) => {
                const OtherIcon = SERVICE_ICON_MAP[s.id];
                return (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="group flex items-center gap-3 px-4 py-3.5 rounded-lg border border-black/5 dark:border-white/8 hover:border-black/15 dark:hover:border-white/15 hover:bg-hs-light-gray dark:hover:bg-white/[0.03] transition-all duration-200"
                  >
                    {OtherIcon && (
                      <OtherIcon className="w-6 h-6 flex-shrink-0 text-black/30 dark:text-white/25 group-hover:text-black/50 dark:group-hover:text-white/45 transition-colors" />
                    )}
                    <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors truncate">
                      {s.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-dark">
          <div className="px-[5%] lg:px-[8%] py-16 sm:py-20 lg:py-24 text-center">
            <h2 className="font-slab text-[22px] sm:text-[26px] lg:text-[30px] text-white mb-4 sm:mb-5">
              <span className="font-semibold">Ready to get</span>{" "}
              <span className="font-extralight">started?</span>
            </h2>
            <p className="text-sm sm:text-base font-light text-white/60 mb-8 sm:mb-10 max-w-lg mx-auto">
              Let&apos;s discuss how our {service.title.toLowerCase()} expertise can help transform your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-hs-red hover:bg-hs-deep-red text-white text-sm sm:text-base font-medium px-7 py-3 sm:px-8 sm:py-3.5 rounded-sm transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
