import { Container } from "@/components/common/Container";
import { GalleryCard } from "./GalleryCard";
import { galleryImages } from "./gallery.data";

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Recent Work</h2>

          <p className="text-slate-600">
            A glimpse of our recent AC and LED repair services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <GalleryCard key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}
