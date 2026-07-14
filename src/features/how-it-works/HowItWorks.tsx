import { Container } from "@/components/common/Container";
import { StepCard } from "./StepCard";
import { steps } from "./steps.data";
import { FadeUp } from "@/components/common/Motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24">
      <Container>
        <FadeUp>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span
              className="
      inline-block
      rounded-full
      bg-blue-100
      px-4
      py-2
      text-sm
      font-semibold
      text-blue-700
    "
            >
              How It Works
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Fast & Hassle-Free Repair Process
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              From booking your service to professional repair and final
              testing, we make the entire process simple, transparent and
              convenient.
            </p>
          </div>
        </FadeUp>
        <div className="items-stretch grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <FadeUp key={step.step} delay={0.15 * index}>
              <StepCard {...step} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
