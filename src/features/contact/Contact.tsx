import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScaleIn } from "@/components/common/Motion";

import { ContactForm } from "./ContactForm";
import { contactInfo } from "./contact.data";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-slate-50/40 to-white py-24"
    >
      <Container>
        <SectionHeading
          badge="Contact"
          title="Book Your Repair Service Today"
          description="Need LED TV repair, CCTV installation or AC service? Contact our experienced team today and book a professional doorstep service."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}

          <div className="space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <ScaleIn key={item.title}>
                  <div
                    className="
                      group
                      flex
                      min-w-0
                      items-start
                      gap-4

                      rounded-3xl
                      border
                      border-slate-200

                      bg-white
                      p-6

                      shadow-sm

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-xl
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        shrink-0
                        rounded-2xl
                        bg-blue-50
                        p-4

                        transition-all
                        duration-300

                        group-hover:bg-blue-600
                      "
                    >
                      <Icon
                        className="
                          h-6
                          w-6

                          text-blue-600

                          transition-colors
                          duration-300

                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* Text */}

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          break-all
                          leading-7
                          text-slate-600
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </ScaleIn>
              );
            })}
          </div>

          {/* Right */}

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}