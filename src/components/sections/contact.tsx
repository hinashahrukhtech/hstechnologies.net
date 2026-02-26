import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="white" />
      <path
        d="M6.6 10.8a12.1 12.1 0 0 0 5.3 5.3l1.8-1.8a.8.8 0 0 1 .8-.2 9 9 0 0 0 2.8.5.8.8 0 0 1 .7.7v2.8a.8.8 0 0 1-.7.7A13.4 13.4 0 0 1 4.2 5.7a.8.8 0 0 1 .7-.7h2.8a.8.8 0 0 1 .8.7 9 9 0 0 0 .4 2.8.8.8 0 0 1-.2.8L6.6 10.8z"
        fill="#27252D"
      />
    </svg>
  );
}

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="white" />
      <rect x="4" y="6" width="16" height="12" rx="1.5" stroke="#27252D" strokeWidth="1.5" fill="none" />
      <path d="M4 7.5l8 5.5 8-5.5" stroke="#27252D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="white" />
      <path
        d="M12 3C8.7 3 6 5.5 6 8.6 6 13 12 21 12 21s6-8 6-12.4C18 5.5 15.3 3 12 3z"
        fill="#27252D"
      />
      <circle cx="12" cy="8.5" r="2.5" fill="white" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="w-full mt-[3px]">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Image — hidden on small mobile */}
        <div className="hidden sm:block w-full lg:w-1/4 relative min-h-[160px] sm:min-h-[200px] lg:min-h-[400px]">
          <Image
            src="/images/network-digital.png"
            alt="Digital network visualization"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </div>

        {/* Center Contact Info */}
        <div className="w-full lg:w-1/2 gradient-dark-reverse flex flex-col items-center justify-center px-6 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-[120px] mx-0 lg:mx-[3px]">
          <h2 className="font-slab text-[22px] sm:text-[24px] lg:text-[30px] font-semibold text-white capitalize text-center mb-2 sm:mb-3">
            Contact Us
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/[0.89] text-center mb-8 sm:mb-10 font-light">
            Leave us a note and we will get back to you
          </p>

          <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-md">
            <ContactItem
              icon={<PhoneIcon className="w-5 h-5" />}
              text={CONTACT_INFO.phone}
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
            />
            <ContactItem
              icon={<EmailIcon className="w-5 h-5" />}
              text={CONTACT_INFO.email}
              href={`mailto:${CONTACT_INFO.email}`}
            />
            <ContactItem
              icon={<LocationIcon className="w-5 h-5" />}
              text={CONTACT_INFO.address}
            />
          </div>
        </div>

        {/* Right Image — hidden on small mobile */}
        <div className="hidden sm:block w-full lg:w-1/4 relative min-h-[160px] sm:min-h-[200px] lg:min-h-[400px]">
          <Image
            src="/images/red-chart.jpg"
            alt="Financial data visualization"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="text-white mt-0.5 flex-shrink-0">{icon}</span>
      <span className="text-white/85 text-[15px] sm:text-base lg:text-lg font-thin" style={{ lineHeight: "1.6" }}>
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}
