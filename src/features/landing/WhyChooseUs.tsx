import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Professional Service",
    description:
      "Get AC service assistance focused on proper inspection, repair and reliable solutions.",
    icon: Wrench,
  },
  {
    title: "Doorstep Assistance",
    description:
      "Book your AC service and get assistance at your location in the Delhi service area.",
    icon: Clock3,
  },
  {
    title: "Service-Focused Support",
    description:
      "From AC repair to servicing, installation and gas refilling, get support for your AC needs.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted Local Service",
    description:
      "MRTECHYCOOL provides home service assistance for AC and other electronic service requirements.",
    icon: ShieldCheck,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            AC Service You Can Rely On
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We focus on professional service, convenient doorstep assistance
            and a simple booking experience for customers in Delhi.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]"
              >
                {/* Top hover line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600">
                  <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-blue-600 px-6 py-8 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Need AC Service in Delhi?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Book your AC service request today and get in touch with
            MRTECHYCOOL.
          </p>

          <a
            href="#booking"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-sm transition hover:bg-blue-50"
          >
            Book AC Service
          </a>
        </div>
      </div>
    </section>
  );
}