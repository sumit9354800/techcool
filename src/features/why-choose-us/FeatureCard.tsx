import { LucideIcon } from "lucide-react";

import { ScaleIn } from "@/components/common/Motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <ScaleIn>
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8

          shadow-sm

          transition-all
          duration-500

          hover:-translate-y-3
          hover:border-blue-200
          hover:shadow-[0_30px_70px_rgba(37,99,235,0.12)]
        "
      >
        {/* Top Gradient */}

        <div
          className="
            absolute
            left-0
            top-0
            h-1
            w-0

            bg-blue-600

            transition-all
            duration-500

            group-hover:w-full
          "
        />

        {/* Icon */}

        <div
          className="
            mb-6

            inline-flex
            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            bg-blue-50

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:rotate-6
            group-hover:bg-blue-600
          "
        >
          <Icon
            className="
              h-8
              w-8

              text-blue-600

              transition-all
              duration-300

              group-hover:text-white
            "
          />
        </div>

        {/* Title */}

        <h3
          className="
            text-2xl
            font-bold
            text-slate-900

            transition-colors
            duration-300

            group-hover:text-blue-600
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4

            leading-8
            text-slate-600

            transition-colors
            duration-300

            group-hover:text-slate-700
          "
        >
          {description}
        </p>
      </div>
    </ScaleIn>
  );
}