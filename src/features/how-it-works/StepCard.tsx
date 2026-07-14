import { LucideIcon } from "lucide-react";

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function StepCard({
  step,
  title,
  description,
  icon: Icon,
}: StepCardProps) {
  return (
    <div
      className="
        group
        relative

        flex
        h-full
        flex-col

        rounded-3xl
        border
        border-slate-200

        bg-white

        p-8
        text-center

        shadow-sm

        transition-all
        duration-500

        hover:-translate-y-3
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)]
      "
    >
      {/* Step Number */}

      <div
        className="
          absolute
          right-6
          top-6

          text-5xl
          font-bold

          text-slate-100

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:text-blue-100
        "
      >
        {step}
      </div>

      {/* Icon */}

      <div
        className="
          mx-auto
          mb-6

          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-blue-100

          text-blue-600

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-blue-600
          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3
        className="
          min-h-[64px]

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

          flex-1

          leading-7
          text-slate-600
        "
      >
        {description}
      </p>

      {/* Connector Line */}

      {step !== "04" && (
        <div
          className="
            absolute

            left-full
            top-20

            hidden
            xl:block

            h-[2px]
            w-8

            bg-gradient-to-r
            from-blue-200
            to-blue-400
          "
        />
      )}
    </div>
  );
}
