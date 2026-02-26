import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { OurMarkSection } from "@/components/sections/our-mark";
import { PartnersSection } from "@/components/sections/partners";
import { ServicesSection } from "@/components/sections/services";
import { CoreValuesSection } from "@/components/sections/core-values";
import { QuotesSection } from "@/components/sections/quotes";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <OurMarkSection />
        <PartnersSection />
        <ServicesSection />
        <CoreValuesSection />
        <QuotesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
