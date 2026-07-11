type GalleryCardProps = {
  title: string;
};

export function GalleryCard({ title }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="flex aspect-[4/3] items-center justify-center bg-slate-100 text-slate-400 transition-colors group-hover:bg-slate-200">
        Image Placeholder
      </div>

      <div className="p-5">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
}