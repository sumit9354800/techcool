

import { testimonials } from "./testimonials";

import { TestimonialCard } from "./TestimonialCard";
import { SectionHeading } from '../../components/common/SectionHeading';
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
        description="Trusted by customers across Delhi for professional LED TV repair, CCTV installation and reliable AC services."
        />

        <div
          className="
        mt-16
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
