import { Container } from "@/components/common/Container";
import { HeroButtons } from "./HeroButtons";
import { HeroImage } from "./HeroImage";
import { BadgeCheck, CheckCircle2 } from "lucide-react";
import { FadeLeft, FadeRight } from "@/components/common/Motion";

export function Hero() {
  return (
    <section id="/" className="relative overflow-hidden">
      <Container>
        <div
          className="
                    grid
                    items-center
                    gap-14

                    py-12
                    md:py-16
                    lg:py-20

                    lg:grid-cols-2
                    lg:min-h-[calc(90vh-80px)]
                  "
        >
          {/* Left Content */}
          <FadeLeft>
            <div className="space-y-7 lg:space-y-8">
              {/* Badge */}
              <div
                className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-blue-200
                      bg-gradient-to-r
                      from-blue-50
                      to-white
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-blue-700
                      shadow-sm
                      "
              >
                <BadgeCheck className="h-4 w-4" />
                LED TV Repair Specialists
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1
                  className="
                            max-w-xl
                            text-4xl
                            font-black
                            leading-[1.05]
                            tracking-[-0.03em]
                            text-slate-900
                            sm:text-5xl
                            lg:text-6xl
                            xl:text-7xl
                          "
                >
                  Professional
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    LED TV Repair
                  </span>
                  <br />
                  Services
                </h1>

                <p
                  className="
                          max-w-xl
                          text-base
                          leading-8
                          text-slate-600
                          sm:text-lg
                        "
                >
                  Professional doorstep LED TV repair services with same-day support, experienced technicians, genuine spare parts and affordable pricing. We also provide CCTV installation and AC repair services.
                </p>
              </div>
              <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <div className="text-2xl">⭐</div>

                <div>
                  <p className="font-semibold text-slate-900">4.9 / 5 Rating</p>

                  <p className="text-sm text-slate-500">
                   Trusted by hundreds of happy customers
                  </p>
                </div>
              </div>
              <HeroButtons />

              {/* Trust Points */}
              <div
                className="
                        grid
                        gap-3
                        text-sm
                        text-slate-700
                        sm:grid-cols-2
                        lg:grid-cols-3
                      "
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  LED TV Specialists
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  CCTV Installation
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Same-Day Service
                </div>
              </div>
            </div>
          </FadeLeft>
          {/* Right Content */}
          <FadeRight delay={0.2}>
            <HeroImage />
          </FadeRight>
        </div>
      </Container>
    </section>
  );
}
