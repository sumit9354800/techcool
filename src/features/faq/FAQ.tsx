import { Container } from "@/components/common/Container";

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
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600">
            Find answers to the most commonly asked questions.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}