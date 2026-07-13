interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className="
        inline-flex
        rounded-full
        border
        border-blue-200
        bg-blue-50
        px-5
        py-2
        text-sm
        font-semibold
        text-blue-600
      "
      >
        {badge}
      </span>

      <h2
        className="
        mt-6
        text-4xl
        font-black
        leading-tight
        tracking-tight
        text-slate-900
        sm:text-5xl
      "
      >
        {title}
      </h2>

      <p
        className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-slate-600
      "
      >
        {description}
      </p>
    </div>
  );
}