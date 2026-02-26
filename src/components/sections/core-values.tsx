import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleAnimation } from "@/components/icons/circle-animation";

export function CoreValuesSection() {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/square-flowers.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ position: "absolute" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[4%] sm:px-[5%] lg:px-[7%] py-[5%] sm:py-[7%]">
        <div className="bg-white dark:bg-[#16181f] px-[5%] sm:px-[4%] lg:px-[6%] py-6 sm:py-8 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left text column */}
            <div className="w-full lg:w-1/2 py-4 sm:py-8 lg:py-20 pr-0 lg:pr-12">
              <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] mb-4 sm:mb-6 text-center lg:text-left text-foreground">
                <span className="font-semibold">Our Promise</span>{" "}
                <span className="font-extralight">To Core Values</span>
              </h2>

              <p className="text-[15px] sm:text-base lg:text-lg font-light leading-[1.7] text-black/77 dark:text-white/65 mb-3 sm:mb-4 text-center lg:text-left">
                We are not a typical software development company.
              </p>

              <p className="text-[15px] sm:text-base lg:text-lg font-light leading-[1.7] text-black/77 dark:text-white/65 mb-3 sm:mb-4 text-center lg:text-left">
                While we do sell digital products and provide website design &
                application development services, our main forte is addressing
                business and social problems. We add automation to the menial
                tasks of daily life so that we, as humans, can use our time for
                the more meaningful activities.
              </p>

              <p className="text-[15px] sm:text-base lg:text-lg font-light leading-[1.7] text-black/77 dark:text-white/65 mb-6 sm:mb-8 text-center lg:text-left">
                With <strong>simplicity</strong>,{" "}
                <strong>interoperability</strong> and{" "}
                <strong>convenience</strong> as our core values, we aim to
                deliver value to businesses and the individuals who form the
                society around us.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="outline"
                  asChild
                  className="border-[3px] border-black dark:border-white bg-transparent text-black dark:text-white rounded-[10px] px-8 sm:px-10 py-4 sm:py-5 text-[14px] sm:text-[15px] font-normal hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <a href="/values">Read more</a>
                </Button>
              </div>
            </div>

            {/* Right animation column */}
            <div className="w-full lg:w-1/2 flex items-center justify-center py-6 sm:py-8 lg:py-12">
              <CircleAnimation className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
