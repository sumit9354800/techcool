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
    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl">
      <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100">
        {step}
      </div>

      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        <Icon size={30} />
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}