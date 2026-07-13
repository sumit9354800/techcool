import Image from "next/image";
import { LucideIcon, ArrowRight } from "lucide-react";

import { ScaleIn } from "@/components/common/Motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <ScaleIn>
      <div
        className="
          group
          cursor-pointer
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white

          shadow-sm
          transition-all
          duration-500

          hover:-translate-y-3
          hover:border-blue-200
          hover:shadow-[0_30px_70px_rgba(37,99,235,0.12)]
        "
      >
        {/* Image */}

        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority={false}
            quality={90}
            sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out

              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-slate-900/30
              via-transparent
              to-transparent

              opacity-0
              transition-all
              duration-500

              group-hover:opacity-100
            "
          />
        </div>

        {/* Content */}

        <div className="flex h-[290px] flex-col p-7">
          {/* Icon */}

          <div
            className="
              mb-5
              inline-flex
              h-14
              w-14
              items-center
              justify-center

              self-start

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
                h-6
                w-6

                text-blue-600

                transition-colors
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
              leading-7
              text-slate-600

              transition-colors
              duration-300

              group-hover:text-slate-700
            "
          >
            {description}
          </p>

          {/* CTA */}

          <button
            className="
              mt-auto
              inline-flex
              items-center
              gap-2

              font-semibold
              text-blue-600

              transition-all
              duration-300

              group-hover:gap-3
              group-hover:text-blue-700
            "
          >
            Explore Service

            <ArrowRight
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-2
              "
            />
          </button>
        </div>
      </div>
    </ScaleIn>
  );
}