import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICON_MAP } from "@/components/icons/service-icons";

export function ServicesSection() {
  return (
    <section className="gradient-dark">
      <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-12 sm:py-16 lg:py-20">
        <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] text-white mb-6 sm:mb-8 text-center lg:text-left">
          <span className="font-semibold">Our Services</span>{" "}
          <span className="font-extralight">& Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8 sm:gap-y-10 lg:gap-y-[30px]">
          {SERVICES.map((service) => {
            const IconComponent = SERVICE_ICON_MAP[service.id];
            return (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={
                  IconComponent ? (
                    <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white/80" />
                  ) : null
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  id,
  title,
  description,
  icon,
}: {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={`/services/${id}`}
      className="group block px-2 sm:px-3 lg:px-0 lg:pr-[50px] text-center lg:text-left"
    >
      <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
          {icon}
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-3">
        <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-semibold text-white group-hover:text-white/80 transition-colors">
          {title}
        </h3>
        <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/60 translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
      </div>
      <div className="w-full h-[2px] bg-hs-divider mb-3 sm:mb-4" />
      <p className="text-white font-light text-sm lg:text-base leading-[1.7]">
        {description}
      </p>
    </Link>
  );
}
