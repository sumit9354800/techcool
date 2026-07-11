
import { Container } from "@/components/common/Container";
import { HeroButtons } from "./HeroButtons";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 py-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              🚀 Same-Day Home Service
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
                Professional
                <span className="text-blue-600"> AC & LED </span>
                Repair Services
              </h1>

              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Fast, reliable and affordable repair services for ACs and LED TVs.
                We provide doorstep service with experienced technicians.
              </p>
            </div>

            <HeroButtons />

            {/* Trust Points */}
            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <div>✅ Doorstep Service</div>
              <div>✅ Certified Technicians</div>
              <div>✅ Affordable Pricing</div>
            </div>
          </div>

          {/* Right Content */}
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}