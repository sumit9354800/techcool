import { ServiceCard } from "./ServiceCard";
import { services } from "./services.data";
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Professional LED TV, CCTV & AC Services"
          description="Professional LED TV repair, CCTV installation and AC services delivered by experienced technicians with genuine spare parts and transparent pricing."
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
