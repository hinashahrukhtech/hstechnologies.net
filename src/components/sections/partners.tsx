import {
  Chapter1Logo,
  FDHLogo,
  NICLogo,
  PepsiLogo,
  BurningBrownieLogo,
  RodeKorsLogo,
} from "@/components/icons/partner-logos";

export function PartnersSection() {
  return (
    <section className="bg-white dark:bg-[#111318] py-10 sm:py-12 lg:py-16">
      <div className="px-[5%] lg:px-[8%] lg:pl-[12%]">
        <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] mb-8 sm:mb-10 text-center lg:text-left text-foreground">
          <span className="font-semibold">Our Partners</span>{" "}
          <span className="font-extralight">& Clients</span>
        </h2>

        <div className="grid grid-cols-3 gap-y-6 gap-x-4 items-center justify-items-center sm:flex sm:items-center sm:justify-between sm:gap-6 lg:gap-8 sm:flex-wrap lg:flex-nowrap">
          <Chapter1Logo className="h-[50px] sm:h-[65px] lg:h-[80px] w-auto flex-shrink-0" />
          <FDHLogo className="h-[50px] sm:h-[65px] lg:h-[80px] w-auto flex-shrink-0" />
          <NICLogo className="h-[50px] sm:h-[65px] lg:h-[80px] w-auto flex-shrink-0" />
          <PepsiLogo className="h-[50px] sm:h-[65px] lg:h-[80px] w-auto flex-shrink-0" />
          <BurningBrownieLogo className="h-[50px] sm:h-[65px] lg:h-[80px] w-auto flex-shrink-0" />
          <RodeKorsLogo className="h-[50px] sm:h-[65px] lg:h-[80px] w-auto flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
