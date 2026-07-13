import { ServiceCard } from "./ServiceCard";
import { services } from "./services";
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Complete Home Appliance Repair Solutions"
          description="Reliable doorstep repair services for ACs, LED TVs and home appliances with certified technicians and genuine spare parts."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
