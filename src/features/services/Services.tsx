
import { Container } from "@/components/common/Container";
import { ServiceCard } from "./ServiceCard";
import { services } from "./services.data";

export function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Our Services
          </h2>

          <p className="text-slate-600">
            We provide professional AC and LED repair
            services with experienced technicians and
            doorstep support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}