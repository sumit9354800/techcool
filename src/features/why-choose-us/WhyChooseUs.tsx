import { Container } from "@/components/common/Container";


import { FeatureCard } from "./FeatureCard";
import { features } from "./features";
import { SectionHeading } from "@/components/common/SectionHeading";

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white via-slate-50/40 to-white py-24"
    >
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Why Customers Trust MRTECHYCOOL"
          description="Specialized LED TV repair, CCTV installation and AC services with experienced technicians, genuine spare parts and transparent pricing."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}