import {
  CalendarCheck2,
  ClipboardCheck,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Your Service",
    description:
      "Call us or submit your service request online with your AC service requirements.",
    icon: CalendarCheck2,
  },
  {
    number: "02",
    title: "Technician Visit",
    description:
      "Our technician visits your location to inspect the AC and understand the issue.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Service & Testing",
    description:
      "The required service is carried out and the AC is checked after the work is completed.",
    icon: Wrench,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Simple & Hassle-Free AC Service Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From booking your service to technician inspection and final
            testing, the process is simple and straightforward.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Book Your AC Service
          </a>
        </div>
      </div>
    </section>
  );
}