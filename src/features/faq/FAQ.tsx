import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScaleIn } from "@/components/common/Motion";

import { faqs } from "./faq.data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most commonly asked questions about our AC, LED TV and home appliance repair services."
        />

        <ScaleIn className="mt-16">
          <div className="mx-auto max-w-4xl">
            <Accordion
              className="space-y-5"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white

                    px-6

                    shadow-sm

                    transition-all
                    duration-300

                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >
                  <AccordionTrigger
                    className="
                      py-6

                      text-left
                      text-lg
                      font-semibold
                      text-slate-900

                      hover:no-underline
                    "
                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      pb-6
                      leading-8
                      text-slate-600
                    "
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}