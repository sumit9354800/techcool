import {
  ArrowRight,
  MonitorSmartphone,
  PanelTop,
  Tv,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "LED TV Repair",
    description:
      "Professional LED TV repair assistance for display problems, sound issues, power problems and other common TV faults.",
    icon: Tv,
  },
  {
    title: "Smart TV Repair",
    description:
      "Expert Smart TV repair assistance for software issues, connectivity problems, display faults and motherboard-related issues.",
    icon: MonitorSmartphone,
  },
  {
    title: "LED Panel Repair",
    description:
      "Professional LED panel repair and replacement assistance for display-related problems.",
    icon: PanelTop,
  },
  {
    title: "TV Installation & Service",
    description:
      "Reliable TV installation and service assistance with proper setup and performance checks.",
    icon: Wrench,
  },
];

export function LEDServices() {
  return (
    <section
      id="led-services"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            Our LED TV Services
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Professional LED TV Repair Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From LED TV repair and Smart TV troubleshooting to panel-related
            issues and installation, MRTECHYCOOL provides professional TV
            service assistance in Delhi.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]"
              >
                {/* Top Hover Line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600">
                  <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3 group-hover:text-blue-700"
                >
                  Book Service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}