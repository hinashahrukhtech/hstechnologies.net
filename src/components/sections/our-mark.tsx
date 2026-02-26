import { WorldMap } from "@/components/icons/world-map";
import { Button } from "@/components/ui/button";

export function OurMarkSection() {
  return (
    <section className="bg-hs-light-gray dark:bg-[#151720] py-8 sm:py-12 lg:py-[50px]">
      <div className="py-6 sm:py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-0">
          {/* Left text column */}
          <div className="w-full lg:w-1/2 px-[6%] sm:px-[5%] lg:pl-[12%] lg:pr-[50px]">
            <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] mb-4 sm:mb-6 text-center lg:text-left text-foreground">
              <span className="font-semibold">Our Mark</span>{" "}
              <span className="font-extralight">On The World</span>
            </h2>

            <p className="text-[15px] sm:text-base font-light leading-[1.7] text-black dark:text-white/80 mb-3 sm:mb-4 text-center lg:text-left">
              Spread across 5 continents, our clients have enhanced their
              business processes, oversight and productivity while gaining
              visibility, growth and ease of mind.
            </p>

            <p className="text-[15px] sm:text-base font-light leading-[1.7] text-black dark:text-white/80 mb-6 sm:mb-8 text-center lg:text-left">
              We aim to keep expanding our network and explore new horizons
              through <strong>innovation</strong>,{" "}
              <strong>accountability</strong> and <strong>growth</strong>,
              enabled by our group of companies.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                variant="outline"
                asChild
                className="border-[3px] border-black dark:border-white bg-transparent text-black dark:text-white rounded-[10px] px-8 sm:px-10 py-4 sm:py-5 text-[14px] sm:text-[15px] font-normal hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                <a
                  href="https://hinashahrukh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Right map column */}
          <div className="w-full lg:w-1/2 px-[6%] sm:px-[5%] lg:pr-[12%] lg:pl-0 flex justify-center">
            <WorldMap className="w-full max-w-[650px] sm:max-w-[800px] lg:max-w-[900px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
