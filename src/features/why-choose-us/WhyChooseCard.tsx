import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function WhyChooseCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
        <Icon size={28} />
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