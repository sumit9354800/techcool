import {
  CheckCircle2,
  MapPin,
} from "lucide-react";

const areas = [
  "Dwarka",
  "Palam",
  "Delhi",
];

export function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            <MapPin className="h-4 w-4" />
            Service Area
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            AC Service in Delhi
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            MRTECHYCOOL provides AC repair, servicing, installation and
            gas refilling assistance across its Delhi service area.
          </p>
        </div>

        {/* Areas */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3 lg:mt-16">
          {areas.map((area) => (
            <div
              key={area}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                <MapPin className="h-5 w-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-slate-900">
                  {area}
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />

                  <span className="text-xs text-slate-500">
                    Service Area
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center sm:p-8">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Not sure if we cover your location?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Contact MRTECHYCOOL and share your location with our team.
          </p>

          <a
            href="tel:+919528013976"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Call for Service
          </a>
        </div>
      </div>
    </section>
  );
}