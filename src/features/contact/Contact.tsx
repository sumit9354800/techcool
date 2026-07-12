import { Container } from "@/components/common/Container";
import { ContactForm } from "./ContactForm";
import { contactInfo } from "./contact.data";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Contact Us
          </h2>

          <p className="text-slate-600">
            Need AC or LED repair? Get in touch with us today.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5"
                >
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
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