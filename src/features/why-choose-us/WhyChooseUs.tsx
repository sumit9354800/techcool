import { Container } from "@/components/common/Container";
import { WhyChooseCard } from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose.data";

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Why Choose MRTECHYCOOL?
          </h2>

          <p className="text-slate-600">
            We provide fast, reliable, and professional repair
            services with complete customer satisfaction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item) => (
            <WhyChooseCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}