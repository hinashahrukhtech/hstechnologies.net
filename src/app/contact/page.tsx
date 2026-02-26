"use client";

import { useActionState, useRef, useEffect } from "react";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFO } from "@/lib/constants";
import { sendMessage, type ContactFormState } from "./actions";

export default function ContactPage() {
  return (
    <>
      <div className="py-6 px-[6%] sm:px-[5%] lg:px-[8%] bg-white dark:bg-[#111318]">
        <Header variant="hero-inline" />
      </div>

      {/* Hero banner */}
      <section className="gradient-dark px-[6%] sm:px-[8%] lg:px-[12%] py-14 sm:py-18 lg:py-24">
        <h1 className="text-center lg:text-left mb-3">
          <span className="font-slab text-[32px] sm:text-[42px] lg:text-[60px] font-bold leading-[1.1] text-white">
            Contact{" "}
          </span>
          <span className="font-slab text-[32px] sm:text-[42px] lg:text-[60px] font-extralight leading-[1.1] text-white/90">
            Us
          </span>
        </h1>
        <p className="text-[15px] sm:text-base lg:text-lg font-light text-white/60 text-center lg:text-left max-w-2xl">
          Have a question or want to work with us? Leave us a message and we&apos;ll
          get back to you shortly.
        </p>
      </section>

      {/* Main content */}
      <main className="bg-white dark:bg-[#111318]">
        <div className="px-[6%] sm:px-[8%] lg:px-[12%] py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
            {/* Left column: form */}
            <div className="w-full lg:w-[55%]">
              <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[28px] mb-2">
                <span className="font-semibold text-black dark:text-white">Send us </span>
                <span className="font-extralight text-black dark:text-white/90">a message</span>
              </h2>
              <p className="text-[15px] sm:text-base text-black/50 dark:text-white/40 font-light mb-8">
                Fill out the form and our team will respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Right column: info + map */}
            <div className="w-full lg:w-[45%]">
              <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[28px] mb-2">
                <span className="font-semibold text-black dark:text-white">Get in </span>
                <span className="font-extralight text-black dark:text-white/90">touch</span>
              </h2>
              <p className="text-[15px] sm:text-base text-black/50 dark:text-white/40 font-light mb-8">
                Reach out through any of the channels below.
              </p>

              <div className="flex flex-col gap-5 mb-10">
                <ContactInfoItem
                  icon={<Phone className="w-[18px] h-[18px]" />}
                  label="Phone"
                  value={CONTACT_INFO.phone}
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                />
                <ContactInfoItem
                  icon={<Mail className="w-[18px] h-[18px]" />}
                  label="Email"
                  value={CONTACT_INFO.email}
                  href={`mailto:${CONTACT_INFO.email}`}
                />
                <ContactInfoItem
                  icon={<MapPin className="w-[18px] h-[18px]" />}
                  label="Address"
                  value={CONTACT_INFO.address}
                />
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
                <iframe
                  title="Office Location"
                  src="https://maps.google.com/maps?q=Al+Hameed+Plaza+G-11+Markaz+Islamabad+Pakistan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[280px] sm:h-[320px] lg:h-[300px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    sendMessage,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black/70 dark:text-white/70 font-light text-[13px] sm:text-sm">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="h-11 bg-hs-light-gray dark:bg-white/5 border-gray-200 dark:border-white/10 placeholder:text-black/30 dark:placeholder:text-white/25 text-[15px] focus-visible:border-hs-blue focus-visible:ring-hs-blue/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-black/70 dark:text-white/70 font-light text-[13px] sm:text-sm">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="h-11 bg-hs-light-gray dark:bg-white/5 border-gray-200 dark:border-white/10 placeholder:text-black/30 dark:placeholder:text-white/25 text-[15px] focus-visible:border-hs-blue focus-visible:ring-hs-blue/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-black/70 dark:text-white/70 font-light text-[13px] sm:text-sm">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What is this regarding?"
          required
          className="h-11 bg-hs-light-gray dark:bg-white/5 border-gray-200 dark:border-white/10 placeholder:text-black/30 dark:placeholder:text-white/25 text-[15px] focus-visible:border-hs-blue focus-visible:ring-hs-blue/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-black/70 dark:text-white/70 font-light text-[13px] sm:text-sm">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          required
          rows={10}
          className="min-h-[220px] bg-hs-light-gray dark:bg-white/5 border-gray-200 dark:border-white/10 placeholder:text-black/30 dark:placeholder:text-white/25 text-[15px] resize-none focus-visible:border-hs-blue focus-visible:ring-hs-blue/20"
        />
      </div>

      {/* Feedback message */}
      {state && (
        <div
          className={`text-sm font-light rounded-lg px-4 py-3 ${
            state.success
              ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40"
              : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/40"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2.5 px-7 py-3 bg-hs-red hover:bg-hs-deep-red text-white text-[15px] font-medium rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-hs-light-gray dark:bg-white/5 border border-gray-200 dark:border-white/10 text-hs-dark-start dark:text-white/80 flex-shrink-0 transition-colors group-hover:bg-hs-red group-hover:border-hs-red group-hover:text-white dark:group-hover:bg-hs-red dark:group-hover:text-white">
        {icon}
      </span>
      <div className="pt-0.5">
        <p className="text-[12px] sm:text-[13px] font-medium text-black/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-[15px] sm:text-base text-black/80 dark:text-white/75 font-light leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-90 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}
