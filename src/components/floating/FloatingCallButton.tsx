import Link from "next/link";
import { Phone } from "lucide-react";

import { BUSINESS } from "@/config/business";

export function FloatingCallButton() {
  return (
    <Link
      href={`tel:${BUSINESS.phone}`}
      aria-label="Call Now"
      className="
group
        flex
        h-16
        w-16
        items-center
        justify-center

        rounded-full

        bg-blue-600
        text-white

        shadow-xl

        transition-all
        duration-300

        hover:scale-110
        hover:bg-blue-700
        hover:shadow-2xl

        focus:outline-none
        focus:ring-4
        focus:ring-blue-300
      "
    >
      {/* Pulse Ring */}

      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-blue-500
          opacity-30
          animate-ping
        "
      />

      <Phone className="relative h-7 w-7" />

      {/* Tooltip */}

      <span
        className="
          absolute
          right-20

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
          hidden
          md:block
        "
      >
        Call Now
      </span>
    </Link>
  );
}
