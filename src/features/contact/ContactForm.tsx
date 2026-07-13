import { Button } from "@/components/ui/button";
import { ScaleIn } from "@/components/common/Motion";

import { SERVICES } from "@/constants/services";

export function ContactForm() {
  return (
    <ScaleIn>
      <div
        className="
          rounded-3xl
          border
          border-slate-200

          bg-white

          p-8

          shadow-sm

          transition-all
          duration-300

          hover:shadow-xl
        "
      >
        <h3 className="mb-2 text-3xl font-bold text-slate-900">
          Schedule Service
        </h3>

        <p className="mb-8 text-slate-600">
          Fill out the form and we&apos;ll contact you shortly.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              rounded-xl
              border
              border-slate-300

              px-4
              py-3

              transition-all
              duration-300

              outline-none

              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="
              w-full
              rounded-xl
              border
              border-slate-300

              px-4
              py-3

              transition-all
              duration-300

              outline-none

              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <select
            className="
              w-full
              rounded-xl
              border
              border-slate-300

              px-4
              py-3

              transition-all
              duration-300

              outline-none

              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          >
            {SERVICES.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>

          <textarea
            rows={5}
            placeholder="Describe your issue..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300

              px-4
              py-3

              transition-all
              duration-300

              outline-none

              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <Button
            size="lg"
            className="
              w-full
              rounded-xl

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >
            Schedule Service
          </Button>
        </form>
      </div>
    </ScaleIn>
  );
}