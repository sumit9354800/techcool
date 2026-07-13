interface FloatingBadgeProps {
  text: string;
  className?: string;
}

export function FloatingBadge({ text, className = "" }: FloatingBadgeProps) {
  return (
    <div
      className={`
        absolute
        z-10
        rounded-2xl
        border
        border-white/60
        bg-white/85
        backdrop-blur-md
        px-4
        py-3

        shadow-[0_18px_40px_rgba(15,23,42,0.12)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)]

        ${className}
      `}
    >
      <p className="whitespace-nowrap text-sm font-semibold text-slate-800">
        {text}
      </p>
    </div>
  );
}
