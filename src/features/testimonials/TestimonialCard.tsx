import { Quote, Star } from "lucide-react";

import { ScaleIn } from "@/components/common/Motion";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
}

export function TestimonialCard({
  name,
  location,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <ScaleIn>
      <article
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
        {/* Top Accent */}

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

        {/* Rating + Quote */}

        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star
                key={index}
                className="
                  h-5
                  w-5

                  fill-yellow-400
                  text-yellow-400

                  transition-transform
                  duration-300

                  group-hover:scale-110
                "
              />
            ))}
          </div>

          <Quote
            className="
              h-10
              w-10

              text-blue-100

              transition-all
              duration-300

              group-hover:rotate-12
              group-hover:scale-125
              group-hover:text-blue-500
            "
          />
        </div>

        {/* Review */}

        <p
          className="
            leading-8
            text-slate-600

            transition-colors
            duration-300

            group-hover:text-slate-700
          "
        >
          “{review}”
        </p>

        {/* User */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-4

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          {/* Avatar */}

          <div
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-blue-500
              to-blue-700

              text-xl
              font-bold
              text-white

              shadow-md

              transition-all
              duration-300

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            {name.charAt(0)}
          </div>

          {/* Name */}

          <div>
            <h4
              className="
                font-bold
                text-slate-900

                transition-colors
                duration-300

                group-hover:text-blue-600
              "
            >
              {name}
            </h4>

            <p className="text-sm text-slate-500">
              {location}
            </p>
          </div>
        </div>
      </article>
    </ScaleIn>
  );
}