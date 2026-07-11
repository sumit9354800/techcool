import {
  CalendarCheck2,
  House,
  Wrench,
  CreditCard,
} from "lucide-react";

export const steps = [
  {
    step: "01",
    title: "Book Service",
    description:
      "Call us or fill out the booking form to schedule your service.",
    icon: CalendarCheck2,
  },
  {
    step: "02",
    title: "Technician Visit",
    description:
      "Our technician visits your location at the scheduled time.",
    icon: House,
  },
  {
    step: "03",
    title: "Repair & Inspection",
    description:
      "We inspect the issue, repair it, and test everything properly.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Payment & Support",
    description:
      "Pay after service completion and get post-service support.",
    icon: CreditCard,
  },
];