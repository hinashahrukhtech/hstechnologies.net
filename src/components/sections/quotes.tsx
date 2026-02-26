import Image from "next/image";

export function QuotesSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        {/* CEO Quote - Left */}
        <div className="w-full lg:w-1/3 gradient-dark flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-20 py-10 sm:py-16 lg:py-[120px]">
          <QuoteBlock
            text="Sitting at the bleeding edge of technology, we provide solutions to your problems,"
            highlight="building your tomorrow, today."
            author="Shahrukh Malik, CEO"
          />
        </div>

        {/* Center Image */}
        <div className="w-full lg:w-1/3 relative min-h-[180px] sm:min-h-[250px] lg:min-h-0 mx-0 lg:mx-[3px]">
          <Image
            src="/images/architecture-blocks.png"
            alt="Modern architectural structure"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="lg:h-[50px]" />
        </div>

        {/* COO Quote - Right */}
        <div className="w-full lg:w-1/3 gradient-dark flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-20 py-10 sm:py-16 lg:py-[120px]">
          <QuoteBlock
            text="By leveraging technology, we help execute your vision and achieve your goals through"
            highlight="innovation and creativity."
            author="Hina Shahrukh, COO"
          />
        </div>
      </div>
    </section>
  );
}

function QuoteBlock({
  text,
  highlight,
  author,
}: {
  text: string;
  highlight: string;
  author: string;
}) {
  return (
    <blockquote>
      {/* Red opening quote mark */}
      <span
        className="block font-slab text-[60px] sm:text-[80px] lg:text-[100px] leading-none text-hs-deep-red mb-0 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote body text */}
      <p className="font-lato text-lg sm:text-xl lg:text-[27px] font-bold leading-snug text-white/80 -mt-4 sm:-mt-6 lg:-mt-8">
        {text}
      </p>

      {/* Red highlighted tagline */}
      <p
        className="font-slab text-lg sm:text-xl lg:text-[27px] font-bold leading-snug text-hs-deep-red mt-2 sm:mt-3"
        style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.3)" }}
      >
        {highlight}
      </p>

      {/* Attribution */}
      <cite className="block mt-5 sm:mt-8 not-italic text-white text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] font-thin pl-[18px]">
        {author}
      </cite>
    </blockquote>
  );
}
