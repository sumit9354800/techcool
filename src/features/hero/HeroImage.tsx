import Image from "next/image";

import { FloatingBadge } from "./FloatingBadge";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center py-6 lg:py-0">
      {/* Background Glow */}

      <div
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-70

          sm:h-[420px]
          sm:w-[420px]

          lg:h-[560px]
          lg:w-[560px]

          animate-pulse
        "
      />

      {/* Image */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white

          shadow-[0_25px_70px_rgba(15,23,42,0.14)]

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-[0_35px_90px_rgba(15,23,42,0.20)]
        "
      >
        <Image
          src="/hero-technician.png"
          alt="Professional AC Technician"
          width={650}
          height={700}
          priority
          className="
            h-auto
            w-full
            max-w-[620px]
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />
      </div>

      <FloatingBadge
        text="⭐ Same-Day Service"
        className="-top-6 left-0"
      />

      <FloatingBadge
        text="✔ Certified Technician"
        className="bottom-12 -left-8"
      />

      <FloatingBadge
        text="🛠 24×7 Support"
        className="right-0 top-24"
      />
    </div>
  );
}