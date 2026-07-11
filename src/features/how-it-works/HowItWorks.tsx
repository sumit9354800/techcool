import { Container } from "@/components/common/Container";
import { StepCard } from "./StepCard";
import { steps } from "./steps.data";

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            How It Works
          </h2>

          <p className="text-slate-600">
            Getting your AC or LED repaired is simple and hassle-free.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}