import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "@/config/business";

const message = encodeURIComponent(
  `Hello ${BUSINESS.companyName},

I would like to book a service.

━━━━━━━━━━━━━━━━━━
Service Required:
• LED TV Repair
• Smart TV Repair
• LED Panel Repair
• CCTV Installation
• AC Repair
• AC Installation
━━━━━━━━━━━━━━━━━━

Name:
Phone:
Location:
Problem:

Please contact me.

Thank you!`,
);

export function FloatingWhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${BUSINESS.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group

        flex
        h-16
        w-16

        items-center
        justify-center

        rounded-full

       bg-[#25D366]
        text-white

        shadow-xl

        transition-all
        duration-300

        hover:scale-110
        hover:bg-[#20ba5a]
        hover:shadow-2xl

        focus:outline-none
        focus:ring-4
        focus:ring-green-300
      "
    >
      <FaWhatsapp className="h-8 w-8" />

      {/* Tooltip */}

      <span
        className="
          absolute
          right-20

          hidden
          whitespace-nowrap

          rounded-lg
          bg-slate-900

          px-3
          py-2

          text-sm
          font-medium
          text-white

          opacity-0

          transition-all
          duration-300

          group-hover:opacity-100

          md:block
        "
      >
        WhatsApp
      </span>
    </Link>
  );
}
