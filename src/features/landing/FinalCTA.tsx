import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-12 shadow-xl sm:px-10 sm:py-16 lg:px-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-700/40 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Need LED TV Repair in Delhi?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Contact MRTECHYCOOL for LED TV repair, Smart TV repair and
              LED panel repair assistance. We also provide other home
              services including CCTV and AC services.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+919528013976"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-blue-700/40 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Book LED TV Repair
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Small trust line */}
            <p className="mt-6 text-sm text-blue-100">
              Simple booking • LED TV repair assistance • Delhi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}