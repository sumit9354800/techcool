"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What AC services does MRTECHYCOOL provide?",
    answer:
      "MRTECHYCOOL provides AC repair, AC servicing, AC installation and AC gas refilling assistance.",
  },
  {
    question: "How can I book an AC service?",
    answer:
      "You can submit the service form on this page or contact MRTECHYCOOL directly by phone to request an AC service.",
  },
  {
    question: "Do you provide doorstep AC service?",
    answer:
      "Yes. MRTECHYCOOL provides home service assistance, subject to service-area availability.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "MRTECHYCOOL provides AC service assistance in Delhi. You can contact the team and share your location to confirm service availability.",
  },
  {
    question: "Do you provide AC installation?",
    answer:
      "Yes. AC installation is one of the services provided by MRTECHYCOOL.",
  },
  {
    question: "Do you provide AC gas refilling?",
    answer:
      "Yes. MRTECHYCOOL provides AC gas refilling assistance as part of its AC services.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Common Questions About AC Service
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Find answers to some common questions about our AC repair and
            service options.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4 lg:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-md"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-bold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Still have a question?
          </p>

          <a
            href="tel:+919528013976"
            className="mt-3 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Call MRTECHYCOOL
          </a>
        </div>
      </div>
    </section>
  );
}