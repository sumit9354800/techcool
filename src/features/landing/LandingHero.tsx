import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Wrench,
  Snowflake,
  Cctv,
} from "lucide-react";

import { ContactForm } from "@/features/contact/ContactForm";
import { BUSINESS } from "@/config/business";

export function LandingHero() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-slate-50"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Left Content */}
        <div className="space-y-7">
          {/* Main Business Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <BadgeCheck className="h-4 w-4" />
            LED TV Repair & Home Services in Delhi NCR
          </div>

          {/* Main Heading */}
          <div className="space-y-5">
            <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Professional
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                LED TV Repair
              </span>
              & Home Services in Delhi
            </h1>

            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Get professional LED TV repair, Smart TV repair, LED panel
              repair and other home services from MRTECHYCOOL. We also provide
              CCTV installation, AC repair and AC installation assistance
              across Delhi.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Wrench,
                title: "LED TV Repair",
              },
              {
                icon: ShieldCheck,
                title: "Smart & Panel Repair",
              },
              {
                icon: Cctv,
                title: "CCTV Installation",
              },
              {
                icon: Snowflake,
                title: "AC Repair & Installation",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now
            </Link>

            <Link
              href={`https://wa.me/${
                BUSINESS.whatsapp
              }?text=${encodeURIComponent(
                "Hello MRTECHYCOOL, I need LED TV repair or home service in Delhi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-7 py-4 font-semibold text-blue-700 transition hover:border-blue-500 hover:bg-blue-50"
            >
              WhatsApp Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            Service availability and final charges depend on the service,
            location and inspection.
          </p>
        </div>

        {/* Right Form */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-sky-100/40 blur-xl" />

          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}